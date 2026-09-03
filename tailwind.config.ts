import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./constants/**/*.{js,ts}"],
  theme: {
    extend: {
      colors: {
        paper: "#FCFBF9",
        "paper-2": "#F4F2EE",
        "paper-3": "#EDEAE3",
        ink: "#191713",
        "ink-soft": "#332F29",
        muted: "#5A554B", // 7.16:1 on paper — was #6B665C at 5.52:1
        rule: "#DCD8CF",
        moss: "#2F4A3C",
        "moss-soft": "#4A6B58",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      /* Every step raised. Nothing on the page renders below 12px now, and
         body-weight text sits at 15–17px instead of 13px. */
      fontSize: {
        label: ["0.75rem", { lineHeight: "1.35", letterSpacing: "0.1em" }],
        micro: ["0.9375rem", { lineHeight: "1.6" }],
        base: ["1rem", { lineHeight: "1.7" }],
        lead: ["clamp(1.0625rem,0.98rem + 0.4vw,1.25rem)", { lineHeight: "1.6" }],
        h3: ["clamp(1.375rem,1.25rem + 0.6vw,1.75rem)", { lineHeight: "1.25", letterSpacing: "-0.015em" }],
        h2: ["clamp(2rem,1.6rem + 1.8vw,2.9rem)", { lineHeight: "1.12", letterSpacing: "-0.022em" }],
        h1: ["clamp(2.9rem,2rem + 4.4vw,5.2rem)", { lineHeight: "1.02", letterSpacing: "-0.03em" }],
        stat: ["clamp(2.6rem,1.8rem + 4vw,4.75rem)", { lineHeight: "0.95", letterSpacing: "-0.035em" }],
      },
      maxWidth: { shell: "72rem", prose: "40rem" },
      transitionTimingFunction: { out: "cubic-bezier(0.22,1,0.36,1)" },
      keyframes: {
        drift: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: { drift: "drift 42s linear infinite" },
    },
  },
  plugins: [],
};
export default config;
