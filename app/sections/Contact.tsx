import { SOCIALS } from "@/constants";

const Contact = () => (
  <section id="contact" className="scroll-mt-28 py-20 sm:py-28">
    <div className="shell">
      <div className="reveal flex items-baseline justify-between border-b border-rule pb-5">
        <h2 className="text-h2">Contact</h2>
        <p className="eyebrow">Open to build</p>
      </div>

      <p className="reveal mt-10 max-w-[20ch] text-h1 leading-[1.05]">
        Got something
        <span className="italic text-moss"> worth building</span>?
      </p>

      <ul className="reveal mt-12 border-t border-rule">
        {SOCIALS.map((s) => (
          <li key={s.label}>
            <a
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex items-baseline justify-between gap-6 border-b border-rule py-5"
            >
              <span className="eyebrow">{s.label}</span>
              <span className="flex items-baseline gap-3 text-micro text-ink">
                {s.value}
                <span
                  aria-hidden
                  className="text-muted transition-transform duration-300 group-hover:translate-x-1"
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

export default Contact;
