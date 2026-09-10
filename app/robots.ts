import type { MetadataRoute } from "next";
import { SITE_URL } from "@/constants/site";

/* Served at /robots.txt. Everything is crawlable — the site is one public
   page — and the sitemap line is what Search Console picks up on its own. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
