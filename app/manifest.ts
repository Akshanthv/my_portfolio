import type { MetadataRoute } from "next";
import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE } from "@/constants/site";

/* Served at /manifest.webmanifest. Without it, "Add to Home Screen" on Android
   invents a name from the <title> and screenshots the page for an icon; with
   it, the saved shortcut gets the real monogram and the real name. */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_TITLE,
    short_name: SITE_NAME,
    description: SITE_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#FCFBF9",
    theme_color: "#FCFBF9",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
