export const NAV_LINKS = [
  { name: "Work", href: "#work" },
  { name: "Approach", href: "#approach" },
  { name: "Stack", href: "#stack" },
  { name: "Contact", href: "#contact" },
];

/* ---------------------------------------------------------------------------
   Reference storefronts shipped with each platform. These are the demo tenants
   in the repos — real themes and real feature flags, not real customers.
--------------------------------------------------------------------------- */
export interface Tenant {
  id: string;
  name: string;
  subdomain: string;
  platform: "Drapeinn" | "DineOnTap";
  blurb: string;
  category: string;
  typeface: string;
  bg: string;
  fg: string;
  accent: string;
  serif: boolean;
  features: { name: string; on: boolean }[];
}

export const TENANTS: Tenant[] = [
  {
    id: "aurelia",
    name: "AURÉLIA",
    subdomain: "aurelia.drapeinn.com",
    platform: "Drapeinn",
    blurb: "Luxe occasion wear — ivory, black and gold.",
    category: "Occasion wear",
    typeface: "Serif display",
    bg: "#0E0E0E",
    fg: "#F3EFE7",
    accent: "#B8963E",
    serif: true,
    features: [
      { name: "Look book", on: true },
      { name: "Configurator", on: false },
      { name: "Made to order", on: false },
    ],
  },
  {
    id: "norde",
    name: "NORDÉ",
    subdomain: "norde.drapeinn.com",
    platform: "Drapeinn",
    blurb: "Scandinavian minimal — knitwear in a quiet palette.",
    category: "Everyday",
    typeface: "Grotesque",
    bg: "#FBFBFA",
    fg: "#22251F",
    accent: "#7C8B7A",
    serif: false,
    features: [
      { name: "Look book", on: true },
      { name: "Configurator", on: false },
      { name: "Made to order", on: false },
    ],
  },
  {
    id: "atelier",
    name: "ATELIER RAAS",
    subdomain: "atelier.drapeinn.com",
    platform: "Drapeinn",
    blurb: "Warm craft — the only tenant with the 2D configurator switched on.",
    category: "Made to order",
    typeface: "Serif, warm",
    bg: "#F6EFE6",
    fg: "#2A1D14",
    accent: "#B4633A",
    serif: true,
    features: [
      { name: "Look book", on: true },
      { name: "Configurator", on: true },
      { name: "Made to order", on: true },
    ],
  },
  {
    id: "amaybistro",
    name: "Amay Bistro",
    subdomain: "amaybistro.dineontap.com",
    platform: "DineOnTap",
    blurb: "Branding, theme and full menu from a single JSON config.",
    category: "Bistro",
    typeface: "Serif display",
    bg: "#16120E",
    fg: "#F5EDE2",
    accent: "#C98B3E",
    serif: true,
    features: [
      { name: "QR menu", on: true },
      { name: "Table ordering", on: true },
      { name: "Aggregator sync", on: false },
    ],
  },
  {
    id: "biryanihouse",
    name: "Biryani House",
    subdomain: "biryanihouse.dineontap.com",
    platform: "DineOnTap",
    blurb: "High-volume menu kept in step with aggregator listings.",
    category: "Casual dining",
    typeface: "Grotesque",
    bg: "#FDF6EC",
    fg: "#2B1508",
    accent: "#9A3412",
    serif: false,
    features: [
      { name: "QR menu", on: true },
      { name: "Table ordering", on: false },
      { name: "Aggregator sync", on: true },
    ],
  },
];

/* ------------------------------- Products -------------------------------- */
export interface Product {
  name: string;
  tagline: string;
  url: string;
  problem: string;
  built: string[];
  stack: string[];
  tenantIds: string[];
}

export const PRODUCTS: Product[] = [
  {
    name: "DineOnTap",
    tagline: "Ordering infrastructure for restaurants",
    url: "https://dineontap.com",
    problem:
      "Independent restaurants pay per-order commissions to aggregators for what is really a menu and a payment link. DineOnTap gives each outlet its own branded ordering surface on its own subdomain, and keeps the margin with the kitchen.",
    built: [
      "Tenant resolution by subdomain, so every outlet is isolated by default",
      "The entire storefront — branding, theme, menu, QR rendering — driven by one JSON config with no code changes",
      "GST-compliant billing, and a bridge that keeps aggregator listings in sync",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind", "PWA"],
    tenantIds: ["amaybistro", "biryanihouse"],
  },
  {
    name: "Drapeinn",
    tagline: "Multi-tenant commerce for clothing boutiques",
    url: "https://drapeinn.com",
    problem:
      "A boutique wants a store that looks like theirs, not like a template marketplace. Drapeinn runs many storefronts from one codebase — each with its own theme, its own domain, and its own feature set switched on per tenant.",
    built: [
      "Per-tenant theming down to typeface and palette, resolved from the subdomain",
      "Feature flags per tenant — the made-to-order configurator exists for one boutique and 404s for the rest",
      "Razorpay payments, shipping, and Supabase auth scoped per store",
    ],
    stack: ["Next.js", "Supabase", "Razorpay", "TypeScript"],
    tenantIds: ["aurelia", "norde", "atelier"],
  },
];

/* ------------------------------ Other work ------------------------------- */
export const OTHER_WORK = [
  {
    name: "EveSync",
    text: "Event posting, invitations and reminders.",
    stack: "React · Spring Boot · MySQL",
    link: "https://github.com/Akshanthv/evesync",
  },
  {
    name: "Phishing URL Detection",
    text: "Classifies URLs as legitimate or malicious to flag threats early.",
    stack: "Python · ML",
    link: "https://github.com/Akshanthv/phishing_url_detection",
  },
];

/* -------------------------------- Stack ---------------------------------- */
export const STACK = [
  { group: "Build with", items: ["TypeScript", "Next.js", "React", "Tailwind"] },
  { group: "Services", items: ["Java", "Spring Boot", "Python", "Django", "REST"] },
  { group: "Data", items: ["MySQL", "PostgreSQL", "Supabase", "SQL"] },
  { group: "Ship on", items: ["Vercel", "AWS", "Netlify", "Git"] },
];

/* ------------------------------- Contact --------------------------------- */
export const SOCIALS = [
  { label: "Email", value: "akshanthv@gmail.com", href: "mailto:akshanthv@gmail.com" },
  { label: "LinkedIn", value: "/in/akshanthv", href: "https://www.linkedin.com/in/akshanthv/" },
  { label: "GitHub", value: "@Akshanthv", href: "https://github.com/Akshanthv" },
  { label: "Phone", value: "+91 79933 17790", href: "tel:+917993317790" },
];
