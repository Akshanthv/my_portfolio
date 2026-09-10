# akshanthv.in

Personal site for Akshanth V. One page, built around two multi-tenant
platforms — [DineOnTap](https://dineontap.com) (ordering infrastructure for
restaurants) and [Drapeinn](https://drapeinn.com) (multi-tenant commerce for
boutiques).

Live at **https://www.akshanthv.in**.

## Stack

Next.js 14 (App Router) · TypeScript · Tailwind · Fraunces + IBM Plex
Sans/Mono via `next/font`. No client-side data fetching — every route
prerenders to static output at build time.

## Layout

```
app/
  layout.tsx            root metadata (canonical, OG, robots directives)
  page.tsx              composes the sections
  sections/             Hero, Work, Approach, Stack, Contact
  components/           Navbar, Footer, Marquee, Logo, Reveal,
                        TenantProvider, JsonLd
  robots.ts             -> /robots.txt
  sitemap.ts            -> /sitemap.xml
  opengraph-image.tsx   -> generated 1200x630 share card
constants/
  index.ts              tenants, products, stack, socials — all page copy
  site.ts               canonical domain, description, sameAs profiles
```

`TenantProvider` cycles the demo storefronts from `constants/index.ts` and
tints the hero with whichever tenant is on air. It is the only component that
*holds* that state — `Hero` and `Approach` are client components that read it
via `useTenant`, while `Work`, `Stack`, `Contact` and `Marquee` stay server
components and are passed through as children.

## Local development

```bash
npm install
npm run build && npx next start   # production build, port 3000
```

Note: `npm run dev` is wired to `sst bind next dev` and expects AWS/SST
credentials, left over from an earlier deployment target. The site now ships
on Vercel, so `next dev` directly is usually what you want.

## Deployment

Vercel, connected to GitHub. **Pushing to `main` deploys to production** —
takes roughly 40 seconds. There is no manual step.

The `deploy` script in `package.json` (`sst deploy`) is stale and does not
reflect how the site actually ships.

## SEO

Everything below derives from `SITE_URL` in `constants/site.ts`. Change the
domain there and the canonical tag, sitemap, robots.txt, OG image URL and
JSON-LD `@id`s all follow — nothing else hardcodes a URL.

| Surface | Source |
| --- | --- |
| `/robots.txt` | `app/robots.ts` |
| `/sitemap.xml` | `app/sitemap.ts` — one URL; in-page anchors are excluded so Google does not read them as duplicates |
| `<link rel="canonical">` | `app/layout.tsx` |
| Open Graph / Twitter | `app/layout.tsx` + `app/opengraph-image.tsx` |
| JSON-LD | `app/components/JsonLd.tsx` |

**The canonical host is `www`.** The apex 308-redirects to `www` on Vercel, so
pointing the canonical at the apex would aim it at a redirect rather than the
document that serves 200.

The JSON-LD is a `@graph` of `Person` + `WebSite` + `ProfilePage` plus a
`SoftwareApplication` per product, all built from the same constants the page
renders from — so the structured data cannot drift from the visible copy,
which is what Google penalises it for.

Two deliberate choices in that graph:

- **`telephone` is omitted.** The number is on the page for a human to read;
  publishing it as structured data makes it trivially scrapable.
- **`SAME_AS_PROFILES` is separate from `SOCIALS`.** `SOCIALS` drives what the
  Contact section renders. `SAME_AS_PROFILES` only widens the `sameAs` array,
  for profiles that should be identity signals without appearing on the page.

`sameAs` is the main lever for ranking on the name "Akshanth V" — it is how
Google merges this site with the LinkedIn, GitHub and X accounts instead of
treating them as four strangers. **That signal is much stronger when each of
those profiles links back to `https://www.akshanthv.in`.**

### Search Console

Verification is via a **DNS TXT record** on the apex (Domain property), which
covers apex + www + http + https in one and survives redeploys. DNS is at
GoDaddy; the apex A-records to Vercel and `www` CNAMEs back to the apex.

`app/layout.tsx` also carries an unused HTML-meta fallback: set
`NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` in the Vercel env and the tag renders;
leave it unset and the tag is omitted entirely.
