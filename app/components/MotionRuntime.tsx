"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { prefersReducedMotion, revealFade, revealText } from "../lib/motion";

/**
 * Boots smooth scroll and drives every scroll-linked reveal on the page.
 *
 * Mounted once from the layout so the sections themselves stay server
 * components — the same arrangement the old IntersectionObserver Reveal used,
 * just with a much richer motion vocabulary behind it.
 *
 * Markup contract:
 *   [data-wipe]   text that paints itself in line by line. MUST be static,
 *                 server-rendered text — splitLines() rewrites the element's
 *                 children, so React re-rendering that text would clobber the
 *                 split spans (or vice versa). Anything driven by state uses
 *                 .reveal or its own tween instead.
 *   .reveal       anything else — fades and rises
 *   [data-motion-section]  the scroll trigger boundary for a group
 */
const MotionRuntime = () => {
  useEffect(() => {
    const root = document.documentElement;

    /* Reduced motion: show everything immediately, boot nothing. Note this is
       read once — someone toggling the OS setting mid-visit gets the mode they
       loaded with, which is the standard trade-off. */
    if (prefersReducedMotion()) {
      root.classList.add("motion-off");
      return;
    }

    /* Tells the stylesheet that JS owns these elements now, so the CSS
       transition on .reveal stands down and GSAP is the only thing animating
       them. Without this the two compete and produce a visible double-step. */
    root.classList.add("motion-js");

    gsap.registerPlugin(ScrollTrigger);

    /* ------------------------------ smooth scroll ------------------------ */
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.6,
    });

    lenis.on("scroll", ScrollTrigger.update);
    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    /* Lenis drives its own rAF timing; GSAP's lag smoothing would fight it. */
    gsap.ticker.lagSmoothing(0);

    /* In-page anchors must go through Lenis, or the browser's native jump
       races the smooth-scroll instance and the page lands in the wrong place. */
    const onAnchorClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement)?.closest?.('a[href^="#"]');
      if (!link) return;
      const id = link.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target as HTMLElement, { offset: -12 });
      /* Keep the URL bar honest without triggering a native jump. */
      history.pushState(null, "", id);
    };
    document.addEventListener("click", onAnchorClick);

    /* ------------------------------ reveals ------------------------------ */
    const ctx = gsap.context(() => {
      document
        .querySelectorAll<HTMLElement>("[data-motion-section]")
        .forEach((section) => {
          ScrollTrigger.create({
            trigger: section,
            start: "top 78%",
            once: true,
            onEnter: () => {
              const tl = gsap.timeline();
              section
                .querySelectorAll<HTMLElement>("[data-wipe]")
                .forEach((el, i) => revealText(el, tl, { at: i === 0 ? 0 : "<0.18" }));
              revealFade(section.querySelectorAll<HTMLElement>(".reveal"), tl);
            },
          });
        });
    });

    /* Fonts land after first paint and change where lines wrap, which would
       leave the split spans measured against the fallback face. */
    const refresh = () => ScrollTrigger.refresh();
    document.fonts?.ready.then(refresh).catch(() => {});

    return () => {
      document.removeEventListener("click", onAnchorClick);
      gsap.ticker.remove(raf);
      lenis.destroy();
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
      root.classList.remove("motion-js");
    };
  }, []);

  return null;
};

export default MotionRuntime;
