import { PRODUCTS, SOCIALS, STACK } from "@/constants";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/constants/site";

/* ---------------------------------------------------------------------------
   Structured data. This is the part Google actually reads to decide *what*
   the page is about rather than just which words are on it — a Person tied to
   two named products, each with its own URL. It is what lets a search for
   "Akshanth V" or "DineOnTap" resolve to an entity instead of a blue link.

   Everything is derived from the same constants the page renders from, so the
   markup can never drift out of sync with the visible copy — which is exactly
   what Google penalises structured data for.
--------------------------------------------------------------------------- */

const PERSON_ID = `${SITE_URL}/#person`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const byLabel = (label: string) => SOCIALS.find((s) => s.label === label)?.value;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": PERSON_ID,
      name: SITE_NAME,
      alternateName: "Akshanth",
      url: SITE_URL,
      jobTitle: "Founder & software engineer",
      description: SITE_DESCRIPTION,
      email: byLabel("Email"),
      /* Phone is deliberately not published here. It is on the page for a
         human to read, but putting it in the graph makes it trivially
         machine-scrapable. */
      knowsAbout: STACK.flatMap((g) => g.items),
      /* sameAs is the strongest identity signal there is — it is how Google
         merges this page with the LinkedIn and GitHub profiles of the same
         person instead of treating all three as strangers. */
      sameAs: SOCIALS.filter((s) => s.href.startsWith("http")).map((s) => s.href),
      owns: PRODUCTS.map((p) => ({ "@id": `${p.url}/#product` })),
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      inLanguage: "en",
      publisher: { "@id": PERSON_ID },
    },
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: SITE_NAME,
      isPartOf: { "@id": WEBSITE_ID },
      about: { "@id": PERSON_ID },
      mainEntity: { "@id": PERSON_ID },
      inLanguage: "en",
    },
    ...PRODUCTS.map((p) => ({
      "@type": "SoftwareApplication",
      "@id": `${p.url}/#product`,
      name: p.name,
      url: p.url,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description: p.tagline,
      author: { "@id": PERSON_ID },
      creator: { "@id": PERSON_ID },
    })),
  ],
};

const JsonLd = () => (
  <script
    type="application/ld+json"
    /* Next has no first-class JSON-LD element; this is the documented pattern.
       The payload is built from local constants, never user input. */
    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
  />
);

export default JsonLd;
