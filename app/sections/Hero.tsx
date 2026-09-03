"use client";

import { PRODUCTS } from "@/constants";
import { useTenant } from "../components/TenantProvider";

const STEP = 90;

const Hero = () => {
  const { tenant } = useTenant();

  return (
    <section id="top" className="shell pb-20 pt-[140px] sm:pb-28 sm:pt-[178px]">
      <p className="eyebrow reveal" style={{ transitionDelay: `${STEP * 0}ms` }}>
        Akshanth V — Founder &amp; engineer
      </p>

      <h1
        className="reveal mt-7 max-w-[16ch] text-h1"
        style={{ transitionDelay: `${STEP * 1}ms` }}
      >
        One codebase.
        <br />
        <span
          className="italic transition-colors duration-[900ms] ease-out"
          style={{ color: tenant.accent }}
        >
          Every storefront
        </span>{" "}
        its own.
      </h1>

      <p
        className="reveal mt-8 max-w-prose text-lead text-ink-soft"
        style={{ transitionDelay: `${STEP * 2}ms` }}
      >
        I build multi-tenant platforms for the businesses around me — restaurants
        that want their own ordering surface instead of a commission, boutiques
        that want a store that looks like theirs. Both are live.
      </p>

      {/* Live indicator — the hero is tinted by whichever storefront is on air. */}
      <p
        className="reveal mt-9 flex items-center gap-2.5 font-mono text-label uppercase text-muted"
        style={{ transitionDelay: `${STEP * 3}ms` }}
      >
        <span
          aria-hidden
          className="inline-block h-2 w-2 rounded-full transition-colors duration-[900ms]"
          style={{ backgroundColor: tenant.accent }}
        />
        <span aria-live="polite">Now rendering {tenant.subdomain}</span>
      </p>

      <div
        className="reveal mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-rule pt-6"
        style={{ transitionDelay: `${STEP * 4}ms` }}
      >
        {PRODUCTS.map((p) => (
          <a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-baseline gap-2"
          >
            <span className="font-mono text-micro text-ink transition-colors group-hover:text-moss">
              {p.url.replace("https://", "")}
            </span>
            <span
              aria-hidden
              className="text-micro text-muted transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Hero;
