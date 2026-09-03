import type { Metadata, Viewport } from "next";
import { Fraunces, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";

const display = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const body = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

/* viewportFit "cover" is what makes env(safe-area-inset-*) resolve to real
   values on notched phones — without it the mobile sheet ignores the insets. */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Akshanth V — Multi-tenant platforms",
  description:
    "I build multi-tenant SaaS platforms. DineOnTap gives restaurants their own ordering surface; Drapeinn runs many boutique storefronts from one codebase.",
  openGraph: {
    title: "Akshanth V — Multi-tenant platforms",
    description:
      "Two products, many storefronts, one codebase each. DineOnTap and Drapeinn.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="bg-paper text-ink antialiased">
        <a
          href="#work"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to work
        </a>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Reveal />
      </body>
    </html>
  );
}
