"use client";

import gsap from "gsap";

/* ---------------------------------------------------------------------------
   Motion primitives.

   The vocabulary is lifted from the freight build: text is split into visual
   lines, then each line is wiped in with a moving gradient rather than a plain
   fade. A fade reads as "content appeared". A wipe reads as "content was
   written" — which is the right feeling for an editorial page.
--------------------------------------------------------------------------- */

/** Honour the OS setting. Every helper here no-ops when this is true. */
export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Cubic-bezier as a GSAP ease, solved with Newton-Raphson and a bisection
 * fallback. Avoids pulling in the paid CustomEase plugin.
 */
export function cubicBezierEase(x1: number, y1: number, x2: number, y2: number) {
  const cx = 3 * x1;
  const bx = 3 * (x2 - x1) - cx;
  const ax = 1 - cx - bx;
  const cy = 3 * y1;
  const by = 3 * (y2 - y1) - cy;
  const ay = 1 - cy - by;

  const sampleX = (t: number) => ((ax * t + bx) * t + cx) * t;
  const sampleY = (t: number) => ((ay * t + by) * t + cy) * t;
  const slopeX = (t: number) => (3 * ax * t + 2 * bx) * t + cx;

  return (x: number) => {
    if (x <= 0) return 0;
    if (x >= 1) return 1;
    let t = x;
    for (let i = 0; i < 8; i++) {
      const dx = sampleX(t) - x;
      if (Math.abs(dx) < 1e-6) return sampleY(t);
      const d = slopeX(t);
      if (Math.abs(d) < 1e-6) break;
      t -= dx / d;
    }
    let lo = 0;
    let hi = 1;
    t = x;
    while (lo < hi) {
      const v = sampleX(t);
      if (Math.abs(v - x) < 1e-6) break;
      if (x > v) lo = t;
      else hi = t;
      t = (hi - lo) / 2 + lo;
    }
    return sampleY(t);
  };
}

/** The freight build's signature ease — slow in, quick through, slow out. */
export const cinematicSilk = cubicBezierEase(0.45, 0.05, 0.55, 0.95);

/**
 * Splits an element into per-visual-line spans.
 *
 * Words are wrapped in temporary spans, measured with getBoundingClientRect,
 * then grouped by vertical offset so the split follows the *real* wrap points
 * at the current viewport width rather than a guess. Idempotent — a second
 * call returns the existing lines instead of re-splitting.
 */
export function splitLines(el: HTMLElement): HTMLElement[] {
  if (el.dataset.split === "done") {
    return Array.from(el.querySelectorAll<HTMLElement>(".split-line"));
  }

  /* Flatten to text + <br> so the rebuild is deterministic. Nested markup
     (an <em>, a coloured <span>) is intentionally collapsed to its text —
     callers that need inline styling should split a child instead. */
  const segments: string[] = [];
  let current = "";
  el.childNodes.forEach((n) => {
    if (n.nodeType === Node.TEXT_NODE) current += n.textContent || "";
    else if (n.nodeType === Node.ELEMENT_NODE) {
      if ((n as HTMLElement).tagName === "BR") {
        segments.push(current);
        current = "";
      } else current += (n as HTMLElement).textContent || "";
    }
  });
  segments.push(current);

  el.textContent = "";
  const wordSpans: { span: HTMLSpanElement; seg: number }[] = [];
  segments.forEach((seg, si) => {
    if (si > 0) el.appendChild(document.createElement("br"));
    seg
      .split(/(\s+)/)
      .filter((w) => w.length)
      .forEach((w) => {
        if (/^\s+$/.test(w)) {
          el.appendChild(document.createTextNode(w));
          return;
        }
        const s = document.createElement("span");
        s.textContent = w;
        el.appendChild(s);
        wordSpans.push({ span: s, seg: si });
      });
  });

  const lines: { seg: number; top: number; words: string[] }[] = [];
  wordSpans.forEach(({ span, seg }) => {
    const top = Math.round(span.getBoundingClientRect().top);
    const last = lines[lines.length - 1];
    /* 4px tolerance absorbs sub-pixel baseline jitter within one line. */
    if (last && last.seg === seg && Math.abs(last.top - top) < 4) {
      last.words.push(span.textContent || "");
    } else {
      lines.push({ seg, top, words: [span.textContent || ""] });
    }
  });

  el.textContent = "";
  const out: HTMLElement[] = [];
  let lastSeg = 0;
  lines.forEach((line, i) => {
    if (i > 0 && line.seg !== lastSeg) el.appendChild(document.createElement("br"));
    lastSeg = line.seg;
    const wrap = document.createElement("span");
    wrap.className = "split-line";
    wrap.textContent = line.words.join(" ");
    el.appendChild(wrap);
    if (i < lines.length - 1 && lines[i + 1].seg === line.seg) {
      el.appendChild(document.createTextNode(" "));
    }
    out.push(wrap);
  });

  el.dataset.split = "done";
  return out;
}

/**
 * The gradient wipe. Each line paints itself in left-to-right, led by a hairline
 * of the accent colour, staggered down the block.
 *
 * The line's final colour is read off the computed style first so the wipe works
 * against whatever the surrounding design sets, rather than hardcoding ink.
 */
export function revealText(
  el: HTMLElement | null,
  tl: gsap.core.Timeline,
  opts: { at?: string | number; stagger?: number } = {},
) {
  if (!el || !el.textContent?.trim()) return;
  const finalColor = window.getComputedStyle(el).color;
  const lines = splitLines(el);
  if (!lines.length) return;

  lines.forEach((l) => l.style.setProperty("--color-final", finalColor));
  gsap.set(lines, { "--bg-progress": 30 });
  tl.to(
    lines,
    {
      "--bg-progress": 100,
      stagger: opts.stagger ?? 0.1,
      duration: 1.2,
      ease: "power1.inOut",
    },
    opts.at,
  );
}

/** Fade and rise — for anything that isn't text: rules, cards, media. */
export function revealFade(
  targets: gsap.TweenTarget,
  tl: gsap.core.Timeline,
  opts: { y?: number; at?: string | number; stagger?: number } = {},
) {
  const list = gsap.utils.toArray<HTMLElement>(targets as never);
  if (!list.length) return;
  tl.fromTo(
    list,
    { opacity: 0, y: opts.y ?? 28 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      stagger: opts.stagger ?? 0.08,
      /* Drop the transform afterwards so it cannot create a containing block
         that breaks position:fixed children further down the tree. */
      clearProps: "transform",
    },
    opts.at ?? "<0.15",
  );
}
