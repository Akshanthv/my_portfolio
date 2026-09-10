"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { TENANTS } from "@/constants";
import { useTenant } from "./TenantProvider";
import { prefersReducedMotion } from "../lib/motion";

/**
 * The signature piece: one frame, re-themed live through every demo tenant.
 *
 * The hero claims "one codebase, a different storefront for every customer".
 * Rather than illustrate that with stock art, this renders it — the same DOM
 * re-skinned down to typeface, palette and which features exist, driven by the
 * same TENANTS data the Work section lists.
 *
 * Division of labour: palette transitions are CSS (cheap, interruptible, and
 * they need to run on many nodes at once), while the content choreography is
 * GSAP (needs stagger and sequencing CSS cannot express).
 */
const Storefront = () => {
  const { tenant, index, select } = useTenant();

  const bodyRef = useRef<HTMLDivElement>(null);
  const urlRef = useRef<HTMLSpanElement>(null);
  const firstRun = useRef(true);

  /* The URL bar is owned entirely by this effect — it is rendered childless so
     React never fights the character-by-character write below. */
  useEffect(() => {
    const el = urlRef.current;
    if (!el) return;
    const text = tenant.subdomain;

    if (prefersReducedMotion() || firstRun.current) {
      el.textContent = text;
      return;
    }

    let i = 0;
    el.textContent = "";
    const id = window.setInterval(() => {
      i += 1;
      el.textContent = text.slice(0, i);
      if (i >= text.length) window.clearInterval(id);
    }, 26);
    return () => window.clearInterval(id);
  }, [tenant.subdomain]);

  /* Content choreography on each tenant change. */
  useEffect(() => {
    const scope = bodyRef.current;
    if (!scope) return;

    if (firstRun.current) {
      firstRun.current = false;
      return;
    }
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.fromTo(
        "[data-sf-line]",
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", stagger: 0.07 },
      );
      tl.fromTo(
        "[data-sf-tile]",
        { opacity: 0, scaleY: 0.6, transformOrigin: "bottom" },
        { opacity: 1, scaleY: 1, duration: 0.55, ease: "power3.out", stagger: 0.05 },
        "<0.1",
      );
      tl.fromTo(
        "[data-sf-flag]",
        { opacity: 0, x: -8 },
        { opacity: 1, x: 0, duration: 0.45, ease: "power2.out", stagger: 0.05 },
        "<0.15",
      );
    }, scope);

    return () => ctx.revert();
  }, [index]);

  const onFrame = tenant.serif ? "font-display" : "font-sans";

  return (
    <div className="reveal mt-14 sm:mt-16">
      {/* ---------------------------- the frame ---------------------------- */}
      <div className="overflow-hidden rounded-xl border border-rule shadow-[0_1px_2px_rgba(25,23,19,0.04),0_12px_36px_-12px_rgba(25,23,19,0.18)]">
        {/* Browser chrome. Deliberately understated — it is a frame, not the point. */}
        <div className="flex items-center gap-3 border-b border-rule bg-paper-2 px-4 py-3">
          <span aria-hidden className="flex gap-1.5">
            {["#DCD8CF", "#DCD8CF", "#DCD8CF"].map((c, i) => (
              <span
                key={i}
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: c }}
              />
            ))}
          </span>
          <span className="flex-1 truncate rounded-md bg-paper px-3 py-1.5 font-mono text-label text-muted">
            <span
              aria-hidden
              className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full align-middle transition-colors duration-700"
              style={{ backgroundColor: tenant.accent }}
            />
            {/* Childless by design — see the URL effect above. */}
            <span ref={urlRef} />
          </span>
          <span className="hidden font-mono text-label uppercase text-muted sm:block">
            {tenant.platform}
          </span>
        </div>

        {/* --------------------- the storefront itself --------------------- */}
        <div
          ref={bodyRef}
          className={`${onFrame} px-6 py-8 transition-colors duration-700 ease-out sm:px-10 sm:py-10`}
          style={{ backgroundColor: tenant.bg, color: tenant.fg }}
        >
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
            <p
              data-sf-line
              className="text-[clamp(1.75rem,1.2rem+2.4vw,2.75rem)] leading-none tracking-tight"
            >
              {tenant.name}
            </p>
            <p
              data-sf-line
              className="font-mono text-label uppercase opacity-60"
            >
              {tenant.category}
            </p>
          </div>

          <div
            data-sf-line
            className="mt-5 h-px w-full transition-colors duration-700"
            style={{ backgroundColor: tenant.fg, opacity: 0.14 }}
          />

          <p data-sf-line className="mt-5 max-w-[42ch] text-micro opacity-75">
            {tenant.blurb}
          </p>

          {/* The catalogue. Drapeinn tenants render a product grid, DineOnTap
              tenants render a menu — same component, same data shape, different
              surface. That difference IS the pitch, so it is worth the branch. */}
          {tenant.platform === "DineOnTap" ? (
            <ul className="mt-7 space-y-3">
              {[0, 1, 2, 3].map((i) => (
                <li key={i} data-sf-tile className="flex items-center gap-4">
                  <span
                    className="h-9 w-9 shrink-0 rounded transition-colors duration-700"
                    style={{ backgroundColor: tenant.accent, opacity: 0.85 }}
                  />
                  <span className="flex-1">
                    <span
                      className="block h-2 rounded-sm"
                      style={{
                        backgroundColor: tenant.fg,
                        opacity: 0.28,
                        width: ["58%", "44%", "66%", "38%"][i],
                      }}
                    />
                    <span
                      className="mt-1.5 block h-1.5 rounded-sm"
                      style={{
                        backgroundColor: tenant.fg,
                        opacity: 0.14,
                        width: ["34%", "26%", "30%", "22%"][i],
                      }}
                    />
                  </span>
                  <span
                    className="h-2 w-10 shrink-0 rounded-sm transition-colors duration-700"
                    style={{ backgroundColor: tenant.accent, opacity: 0.7 }}
                  />
                </li>
              ))}
            </ul>
          ) : (
            <div className="mt-7 grid grid-cols-4 gap-3 sm:gap-4">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} data-sf-tile>
                  <div
                    className="aspect-[3/4] rounded-md transition-colors duration-700"
                    style={{
                      backgroundColor: tenant.accent,
                      /* Stepped opacity reads as four products, not one block. */
                      opacity: [0.9, 0.66, 0.45, 0.28][i],
                    }}
                  />
                  <span
                    className="mt-2.5 block h-1.5 rounded-sm"
                    style={{
                      backgroundColor: tenant.fg,
                      opacity: 0.26,
                      width: ["72%", "58%", "66%", "50%"][i],
                    }}
                  />
                  <span
                    className="mt-1.5 block h-1.5 w-8 rounded-sm"
                    style={{ backgroundColor: tenant.fg, opacity: 0.13 }}
                  />
                </div>
              ))}
            </div>
          )}

          {/* Feature flags — the clearest expression of per-tenant config:
              the same build, with different capabilities switched on. */}
          <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2">
            {tenant.features.map((f) => (
              <li
                key={f.name}
                data-sf-flag
                className="flex items-center gap-2 font-mono text-label uppercase"
                style={{ opacity: f.on ? 0.9 : 0.35 }}
              >
                <span
                  aria-hidden
                  className="inline-block h-1.5 w-1.5 rounded-full transition-colors duration-700"
                  style={{
                    backgroundColor: f.on ? tenant.accent : "currentColor",
                  }}
                />
                {f.name}
                <span className="sr-only">{f.on ? " enabled" : " disabled"}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ------------------------- tenant selector ------------------------- */}
      <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
        <p className="font-mono text-label uppercase text-muted">
          {TENANTS.length} storefronts, one codebase
        </p>
        <ul className="flex flex-wrap gap-1.5">
          {TENANTS.map((t, i) => (
            <li key={t.id}>
              <button
                type="button"
                onClick={() => select(i)}
                aria-label={`Show ${t.name}`}
                aria-current={i === index || undefined}
                className="group flex h-6 w-6 items-center justify-center rounded-full"
              >
                <span
                  className="h-2 w-2 rounded-full transition-all duration-300 group-hover:scale-125"
                  style={{
                    backgroundColor: i === index ? t.accent : "#DCD8CF",
                    transform: i === index ? "scale(1.25)" : undefined,
                  }}
                />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Storefront;
