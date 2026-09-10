import { PRODUCTS, TENANTS } from "@/constants";

const Work = () => (
  <section id="work" data-motion-section className="scroll-mt-28 bg-paper-2 py-20 sm:py-28">
    <div className="shell">
      <div className="reveal flex items-baseline justify-between border-b border-rule pb-5">
        <h2 data-wipe className="text-h2">Work</h2>
        <p className="eyebrow">Two products, live</p>
      </div>

      {PRODUCTS.map((p) => {
        const tenants = TENANTS.filter((t) => p.tenantIds.includes(t.id));

        return (
          <article
            key={p.name}
            className="reveal grid gap-x-10 gap-y-8 border-b border-rule py-14 md:grid-cols-12 md:py-16"
          >
            {/* Identity column */}
            <header className="md:col-span-4">
              <h3 className="font-display text-[2rem] leading-none tracking-tight">
                {p.name}
              </h3>
              <p className="mt-3 max-w-[24ch] text-micro text-muted">{p.tagline}</p>
              <p className="mt-6 font-mono text-label uppercase text-muted">
                {p.stack.join(" / ")}
              </p>
            </header>

            {/* Substance column */}
            <div className="md:col-span-8">
              <p className="max-w-prose text-lead text-ink-soft">{p.problem}</p>

              <ul className="mt-8 border-t border-rule">
                {p.built.map((line) => (
                  <li
                    key={line}
                    className="flex gap-4 border-b border-rule py-3 text-micro text-ink-soft"
                  >
                    <span aria-hidden className="select-none text-moss">
                      —
                    </span>
                    <span className="max-w-prose">{line}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
                {tenants.map((t) => (
                  <span key={t.id} className="flex items-center gap-2">
                    <span
                      aria-hidden
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: t.accent }}
                    />
                    <span className="font-mono text-label text-muted">{t.subdomain}</span>
                  </span>
                ))}
              </div>

              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 inline-flex items-baseline gap-2"
              >
                <span className="link-underline text-micro">Visit {p.name}</span>
                <span
                  aria-hidden
                  className="text-micro text-muted transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
            </div>
          </article>
        );
      })}
    </div>
  </section>
);

export default Work;
