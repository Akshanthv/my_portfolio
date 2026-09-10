import { ImageResponse } from "next/og";
import { SITE_NAME } from "@/constants/site";

/* Generated at build time into a real 1200x630 PNG. Without an OG image the
   link renders as a bare grey card everywhere it is shared, and Google shows
   nothing next to the result — with max-image-preview:large set below, this
   is the image it uses. */
export const alt = "Akshanth V — I build the software small businesses run on";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#FCFBF9",
          color: "#191713",
          padding: "76px 84px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#5A554B",
          }}
        >
          {SITE_NAME} — Founder &amp; engineer
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 76,
            lineHeight: 1.04,
            letterSpacing: "-0.03em",
          }}
        >
          <span>I build the software</span>
          <span style={{ color: "#2F4A3C", fontStyle: "italic" }}>small businesses</span>
          <span>actually run on.</span>
        </div>

        <div
          style={{
            display: "flex",
            gap: 40,
            borderTop: "2px solid #DCD8CF",
            paddingTop: 30,
            fontSize: 30,
            color: "#332F29",
          }}
        >
          <span>DineOnTap</span>
          <span style={{ color: "#DCD8CF" }}>/</span>
          <span>Drapeinn</span>
        </div>
      </div>
    ),
    size,
  );
}
