"use client";

import { TENANTS } from "@/constants";
import { useTenant } from "../components/TenantProvider";

const Approach = () => {
  const { tenant: t, index, select, pause } = useTenant();

  const stats = [
    { n: "2", label: "live platforms" },
    { n: String(TENANTS.length), label: "reference themes" },
    { n: "0", label: "forks" },
  ];

  return (
    <section id="approach" className="scroll-mt-28 py-20 sm:py-28">
      <div className="shell">
        <div className="reveal flex items-baseline justify-between border-b border-rule pb-5">
          <h2 className="text-h2">Approach</h2>
          <p className="eyebrow">Reference storefronts</p>
        </div>

        <p className="reveal mt-8 max-w-prose text-lead text-ink-soft">
          Each platform ships with reference storefronts. A tenant resolves from
          its subdomain, then pulls its own palette, typeface and feature set —
          same deploy, same database, entirely different shop.
        </p>

        <div
          role="group"
          aria-label="Reference storefronts"
          className="no-bar fade-edge reveal -mx-6 mt-9 flex gap-2 overflow-x-auto px-6 pb-1 sm:mx-0 sm:px-0"
        >
          {TENANTS.map((tenant, i) => (
            <button
              key={tenant.id}
              aria-pressed={i === index}
              onClick={() => select(i)}
              className={`flex min-h-[44px] shrink-0 items-center border px-4 font-mono text-label transition-colors duration-300 ${
                i === index
                  ? "border-ink bg-ink text-paper"
                  : "border-rule text-muted hover:border-ink hover:text-ink"
              }`}
            >
              {tenant.subdomain}
            </button>
          ))}
        </div>

        <div
          className="reveal mt-6 border border-rule"
          onMouseEnter={pause}
          onFocusCapture={pause}
        >
          <div className="flex items-center gap-3 border-b border-rule bg-paper-2 px-4 py-2.5">
            <span aria-hidden className="flex gap-1.5">
              <i className="block h-2 w-2 rounded-full bg-rule" />
              <i className="block h-2 w-2 rounded-full bg-rule" />
              <i className="block h-2 w-2 rounded-full bg-rule" />
            </span>
            <span className="truncate font-mono text-label text-muted">
              https://{t.subdomain}
            </span>
          </div>

          <div
            className="px-6 py-12 transition-colors duration-700 sm:px-12 sm:py-16"
            style={{ backgroundColor: t.bg, color: t.fg }}
          >
            <p className="font-mono text-label uppercase" style={{ color: t.accent }}>
              {t.category} · powered by {t.platform}
            </p>

            <p
              className={`mt-5 text-[clamp(2.2rem,5.5vw,3.6rem)] leading-[1.03] tracking-tight ${
                t.serif ? "font-display" : "font-sans font-medium"
              }`}
            >
              {t.name}
            </p>

            <p className="mt-4 max-w-prose text-micro" style={{ opacity: 0.85 }}>
              {t.blurb}
            </p>

            {/* The tenant's actual resolved config: type, palette, feature flags. */}
            <dl
              className="mt-10 grid gap-x-8 gap-y-8 border-t pt-8 sm:grid-cols-3"
              style={{ borderColor: `${t.accent}40` }}
            >
              <div>
                <dt className="font-mono text-label uppercase" style={{ opacity: 0.6 }}>
                  Typeface
                </dt>
                <dd className="mt-3 text-micro">{t.typeface}</dd>
              </div>

              <div>
                <dt className="font-mono text-label uppercase" style={{ opacity: 0.6 }}>
                  Palette
                </dt>
                <dd className="mt-3 flex gap-2">
                  {[t.bg, t.fg, t.accent].map((c) => (
                    <span
                      key={c}
                      title={c}
                      className="h-6 w-6 border transition-colors duration-700"
                      style={{ backgroundColor: c, borderColor: `${t.fg}33` }}
                    />
                  ))}
                </dd>
              </div>

              <div>
                <dt className="font-mono text-label uppercase" style={{ opacity: 0.6 }}>
                  Modules
                </dt>
                <dd className="mt-3 space-y-1.5">
                  {t.features.map((f) => (
                    <span key={f.name} className="flex items-center gap-2 text-micro">
                      <span
                        aria-hidden
                        className="inline-block h-1.5 w-1.5 rounded-full"
                        style={{
                          backgroundColor: f.on ? t.accent : "transparent",
                          boxShadow: f.on ? "none" : `inset 0 0 0 1px ${t.fg}55`,
                        }}
                      />
                      <span style={{ opacity: f.on ? 1 : 0.45 }}>{f.name}</span>
                      <span className="sr-only">{f.on ? "enabled" : "disabled"}</span>
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <dl className="reveal mt-14 grid grid-cols-3 gap-4 border-t border-rule pt-10 sm:gap-6">
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="block font-display text-stat">{s.n}</span>
                <span className="mt-2 block font-mono text-label uppercase text-muted">
                  {s.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Approach;
