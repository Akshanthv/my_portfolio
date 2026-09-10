import { STACK, OTHER_WORK } from "@/constants";

const Stack = () => (
  <section id="stack" data-motion-section className="scroll-mt-28 bg-paper-2 py-20 sm:py-28">
    <div className="shell">
      <div className="reveal flex items-baseline justify-between border-b border-rule pb-5">
        <h2 data-wipe className="text-h2">Stack</h2>
        <p className="eyebrow">What I reach for</p>
      </div>

      <dl className="reveal mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {STACK.map((group) => (
          <div key={group.group}>
            <dt className="eyebrow border-b border-rule pb-3">{group.group}</dt>
            <dd>
              <ul className="mt-4 space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-micro text-ink-soft">
                    {item}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>

      {/* Earlier work — deliberately quieter than the products above. */}
      <h3 className="eyebrow reveal mt-20 border-b border-rule pb-3">Earlier work</h3>
      <ul className="reveal">
        {OTHER_WORK.map((w) => (
          <li key={w.name}>
            <a
              href={w.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid gap-x-6 gap-y-1 border-b border-rule py-5 sm:grid-cols-12 sm:items-baseline"
            >
              <span className="text-micro text-ink sm:col-span-3">{w.name}</span>
              <span className="text-micro text-muted sm:col-span-6">{w.text}</span>
              <span className="font-mono text-label text-muted sm:col-span-3 sm:text-right">
                {w.stack}
                <span
                  aria-hidden
                  className="ml-3 inline-block transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Stack;
