/* ---------------------------------------------------------------------------
   Single source of truth for anything that has to agree across the canonical
   tag, the sitemap, robots.txt, the OG image and the JSON-LD graph. Changing
   the domain here changes it everywhere — nothing else hardcodes a URL.
--------------------------------------------------------------------------- */
export const SITE_URL = "https://www.akshanthv.in";

export const SITE_NAME = "Akshanth V";

export const SITE_TITLE = "Akshanth V — Engineer & founder";

export const SITE_DESCRIPTION =
  "Akshanth V builds the software small businesses run on. Two multi-tenant products in production: DineOnTap for restaurants, Drapeinn for boutiques \u2014 each running many storefronts from one codebase.";

/* Terms someone would actually type. Keywords are not a ranking signal on
   their own — these exist so the OG/meta layer stays consistent with the
   copy Google reads in the page body. */
export const SITE_KEYWORDS = [
  "Akshanth V",
  "Akshanth",
  "multi-tenant SaaS",
  "multi-tenant platform engineer",
  "DineOnTap",
  "Drapeinn",
  "restaurant ordering system India",
  "Next.js developer India",
  "full stack engineer India",
];

/* ---------------------------------------------------------------------------
   Identity-only profiles. SOCIALS drives what the Contact section renders;
   these appear nowhere on the page and exist purely to widen the JSON-LD
   sameAs graph, which is how Google merges these accounts into one entity.
--------------------------------------------------------------------------- */
export const SAME_AS_PROFILES = ["https://x.com/Akshanth_v"];

export const TWITTER_HANDLE = "@Akshanth_v";
