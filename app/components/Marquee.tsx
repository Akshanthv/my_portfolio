import { TENANTS } from "@/constants";

/**
 * Every live storefront, drifting past. Pure CSS translate on a doubled list,
 * so the loop is seamless and no JS is involved.
 */
const Marquee = () => {
  const run = [...TENANTS, ...TENANTS];

  return (
    <section
      aria-label="Live storefronts"
      className="overflow-hidden border-y border-ink/15 bg-ink py-5"
    >
      <div className="no-bar flex w-max animate-drift items-center gap-7 will-change-transform sm:gap-10">
        {run.map((t, i) => (
          <span key={`${t.id}-${i}`} className="flex shrink-0 items-center gap-3">
            <span
              aria-hidden
              className="h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: t.accent }}
            />
            <span className="font-mono text-label uppercase text-paper/70">
              {t.subdomain}
            </span>
            <span aria-hidden className="text-paper/25">
              /
            </span>
          </span>
        ))}
      </div>
    </section>
  );
};

export default Marquee;
