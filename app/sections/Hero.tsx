import Storefront from "../components/Storefront";

/**
 * Portfolio-first hero: the person leads, the products are the evidence.
 *
 * The heading is three sibling spans rather than one string with inline markup
 * — splitLines() flattens nested elements to text, so the italic accent line
 * has to be its own wipe target to keep its styling.
 */
const Hero = () => (
  <section
    id="top"
    data-motion-section
    className="shell flex min-h-[88svh] flex-col justify-center pb-20 pt-[140px] sm:pb-28 sm:pt-[178px]"
  >
    <p data-wipe className="eyebrow">
      Akshanth V — engineer &amp; founder
    </p>

    <h1 className="mt-7 max-w-[17ch] text-h1">
      <span data-wipe className="block">
        I build the software
      </span>
      <span data-wipe className="block italic text-moss">
        small businesses
      </span>
      <span data-wipe className="block">
        actually run on.
      </span>
    </h1>

    <p data-wipe className="mt-8 max-w-prose text-lead text-ink-soft">
      Two products in production. Each runs many businesses from a single
      codebase — DineOnTap for restaurants, Drapeinn for boutiques — and every
      customer gets a storefront that looks like theirs, not like a template.
    </p>

    {/* The claim above, demonstrated rather than asserted. */}
    <Storefront />
  </section>
);

export default Hero;
