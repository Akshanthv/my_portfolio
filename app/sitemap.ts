import type { MetadataRoute } from "next";
import { SITE_URL } from "@/constants/site";

/* Served at /sitemap.xml. Single-page site, so there is exactly one URL —
   the in-page anchors (#work, #approach) are not separate documents and must
   not be listed, or Google treats them as duplicates of the homepage. */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
