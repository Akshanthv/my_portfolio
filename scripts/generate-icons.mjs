import zlib from "node:zlib";
import fs from "node:fs";

/* ---------------------------------------------------------------------------
   Single source of truth for every icon file. The mark below is copied
   verbatim from app/components/Logo.tsx — same coordinates, same 2.4 stroke,
   same butt caps (each path there is one segment with no strokeLinecap, so
   every end is a flat perpendicular cut). Nothing here reshapes it: the only
   transform is a uniform scale + centre into the badge, so the tab icon and
   the header logo are the same drawing at different sizes.

   This script writes app/icon.svg too, so the vector and the rasters cannot
   drift apart.
--------------------------------------------------------------------------- */
const BADGE = [0x2f, 0x4a, 0x3c];   // moss
const MARK  = [0xfc, 0xfb, 0xf9];   // paper
const RX = 7;                        // badge corner radius, in the 32 box
const FIT = 0.74;                    // share of the badge the mark's ink spans

/* verbatim from Logo.tsx */
const LOGO_SW = 2.4;
const LOGO = [
  [13,   4.6, 13,   27.4], // shared vertical: A's right leg + K's stem
  [ 3.2, 27.4, 13,   4.6], // A: left diagonal
  [ 7.9, 17,  13,   17  ], // A: crossbar, continuing through the stem
  [13,   17,  23.6,  4.6], // K: upper arm
  [13,   17,  23.6, 27.4], // K: lower leg
];

/* --- exact ink bounds of a butt-capped stroke ---------------------------
   A butt cap is a flat cut perpendicular to the segment, so each stroked
   segment is a rectangle whose corners are endpoint +/- halfwidth * normal.
   Measuring rather than guessing is what keeps the mark optically centred. */
const hw = LOGO_SW / 2;
let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
for (const [x1, y1, x2, y2] of LOGO) {
  const L = Math.hypot(x2 - x1, y2 - y1);
  const nx = (-(y2 - y1) / L) * hw, ny = ((x2 - x1) / L) * hw;
  for (const [px, py] of [[x1, y1], [x2, y2]]) {
    for (const s of [1, -1]) {
      minX = Math.min(minX, px + s * nx); maxX = Math.max(maxX, px + s * nx);
      minY = Math.min(minY, py + s * ny); maxY = Math.max(maxY, py + s * ny);
    }
  }
}
const inkW = maxX - minX, inkH = maxY - minY;
const scale = (32 * FIT) / Math.max(inkW, inkH);
const ox = (32 - inkW * scale) / 2 - minX * scale;
const oy = (32 - inkH * scale) / 2 - minY * scale;

const SW = LOGO_SW * scale;
const SEG = LOGO.map(([x1, y1, x2, y2]) => [
  x1 * scale + ox, y1 * scale + oy, x2 * scale + ox, y2 * scale + oy,
]);
const r = (n) => Math.round(n * 1000) / 1000;

/* --- coverage tests ------------------------------------------------------ */
// Butt cap: only the span between the endpoints counts, so t is rejected
// outside [0,1] rather than clamped into it (clamping is what rounds the end).
const inStroke = (px, py, [x1, y1, x2, y2]) => {
  const dx = x2 - x1, dy = y2 - y1, L = dx * dx + dy * dy;
  const t = ((px - x1) * dx + (py - y1) * dy) / L;
  if (t < 0 || t > 1) return false;
  return Math.hypot(px - (x1 + t * dx), py - (y1 + t * dy)) <= SW / 2;
};
const inMark = (x, y) => SEG.some((s) => inStroke(x, y, s));

const inBadge = (x, y, square) => {
  if (square) return true;
  const cx = Math.min(Math.max(x, RX), 32 - RX);
  const cy = Math.min(Math.max(y, RX), 32 - RX);
  if (x >= RX && x <= 32 - RX) return y >= 0 && y <= 32;
  if (y >= RX && y <= 32 - RX) return x >= 0 && x <= 32;
  return Math.hypot(x - cx, y - cy) <= RX;
};

/* --- rasterise with 6x6 supersampling ------------------------------------ */
function raster(N, square) {
  const SS = 6, buf = Buffer.alloc(N * N * 4);
  for (let py = 0; py < N; py++) {
    for (let px = 0; px < N; px++) {
      let rr = 0, gg = 0, bb = 0, aa = 0;
      for (let sy = 0; sy < SS; sy++) {
        for (let sx = 0; sx < SS; sx++) {
          const x = ((px + (sx + 0.5) / SS) / N) * 32;
          const y = ((py + (sy + 0.5) / SS) / N) * 32;
          if (!inBadge(x, y, square)) continue;
          const c = inMark(x, y) ? MARK : BADGE;
          rr += c[0]; gg += c[1]; bb += c[2]; aa += 255;
        }
      }
      const n = SS * SS, i = (py * N + px) * 4;
      if (aa > 0) {
        const cov = aa / 255;
        buf[i] = Math.round(rr / cov);
        buf[i + 1] = Math.round(gg / cov);
        buf[i + 2] = Math.round(bb / cov);
      }
      buf[i + 3] = Math.round(aa / n);
    }
  }
  return buf;
}

/* --- minimal PNG encoder ------------------------------------------------- */
const CRC = (() => {
  const t = new Int32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c;
  }
  return (b) => { let c = -1; for (const x of b) c = t[(c ^ x) & 0xff] ^ (c >>> 8); return (c ^ -1) >>> 0; };
})();
const chunk = (type, data) => {
  const len = Buffer.alloc(4); len.writeUInt32BE(data.length);
  const body = Buffer.concat([Buffer.from(type, "latin1"), data]);
  const crc = Buffer.alloc(4); crc.writeUInt32BE(CRC(body));
  return Buffer.concat([len, body, crc]);
};
function png(N, square) {
  const rgba = raster(N, square);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(N, 0); ihdr.writeUInt32BE(N, 4);
  ihdr[8] = 8; ihdr[9] = 6;
  const rows = Buffer.alloc(N * (N * 4 + 1));
  for (let y = 0; y < N; y++) {
    rows[y * (N * 4 + 1)] = 0;
    rgba.copy(rows, y * (N * 4 + 1) + 1, y * N * 4, (y + 1) * N * 4);
  }
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk("IHDR", ihdr),
    chunk("IDAT", zlib.deflateSync(rows, { level: 9 })),
    chunk("IEND", Buffer.alloc(0)),
  ]);
}

/* --- ICO container (PNG-compressed entries) ------------------------------ */
function ico(sizes) {
  const imgs = sizes.map((s) => png(s));
  const head = Buffer.alloc(6);
  head.writeUInt16LE(1, 2); head.writeUInt16LE(sizes.length, 4);
  let offset = 6 + 16 * sizes.length;
  const dir = sizes.map((s, i) => {
    const e = Buffer.alloc(16);
    e[0] = s >= 256 ? 0 : s; e[1] = s >= 256 ? 0 : s;
    e.writeUInt16LE(1, 4); e.writeUInt16LE(32, 6);
    e.writeUInt32LE(imgs[i].length, 8); e.writeUInt32LE(offset, 12);
    offset += imgs[i].length;
    return e;
  });
  return Buffer.concat([head, ...dir, ...imgs]);
}

/* --- the SVG, from the same numbers -------------------------------------- */
const paths = [
  `M${r(SEG[0][0])} ${r(SEG[0][1])}V${r(SEG[0][3])}`,
  `M${r(SEG[1][0])} ${r(SEG[1][1])}L${r(SEG[1][2])} ${r(SEG[1][3])}`,
  `M${r(SEG[2][0])} ${r(SEG[2][1])}H${r(SEG[2][2])}`,
  `M${r(SEG[3][0])} ${r(SEG[3][1])}L${r(SEG[3][2])} ${r(SEG[3][3])}`,
  `M${r(SEG[4][0])} ${r(SEG[4][1])}L${r(SEG[4][2])} ${r(SEG[4][3])}`,
];
const svg = `<!--
  Tab icon. Modern browsers prefer this over favicon.ico, so it is the one
  that actually renders in the tab — and being vector it stays sharp at every
  density.

  The mark is the AK monogram from app/components/Logo.tsx, unaltered: same
  coordinates, same stroke ratio, same butt caps. It is only uniformly scaled
  and centred onto a solid moss badge, because at 16px a hairline mark on a
  transparent ground disappears into the tab strip and a filled badge does not.

  GENERATED — do not hand-edit. This file and its PNG siblings (favicon.ico,
  apple-icon.png, public/icon-*.png) all come out of one script from the
  coordinates in Logo.tsx; editing one by hand makes them disagree.
-->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
  <rect width="32" height="32" rx="${RX}" fill="#2F4A3C"/>
  <g stroke="#FCFBF9" stroke-width="${r(SW)}" fill="none">
${paths.map((d) => `    <path d="${d}"/>`).join("\n")}
  </g>
</svg>
`;

/* Run with `npm run icons` after changing the mark in Logo.tsx. */
const root = new URL("..", import.meta.url).pathname;
const write = (rel, buf) => {
  fs.writeFileSync(root + rel, buf);
  console.log(`  ${rel}  ${buf.length}b`);
};
write("app/icon.svg", Buffer.from(svg));
write("app/favicon.ico", ico([16, 32, 48]));
write("app/apple-icon.png", png(180, true)); // full-bleed: iOS masks it itself
write("public/icon-192.png", png(192));
write("public/icon-512.png", png(512));
console.log(`ink ${r(inkW)}x${r(inkH)}  scale ${r(scale)}  stroke ${r(SW)}  (stroke:size ratio ${r(LOGO_SW / Math.max(inkW, inkH))} in Logo.tsx, ${r(SW / (32 * FIT))} here)`);
