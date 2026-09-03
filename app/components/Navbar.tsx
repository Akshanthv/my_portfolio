"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import { NAV_LINKS } from "@/constants";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [lifted, setLifted] = useState(false);

  useEffect(() => {
    const onScroll = () => setLifted(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock the page behind the sheet, and let Escape dismiss it.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        lifted || open
          ? "border-b border-rule bg-paper/85 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="shell flex h-[76px] items-center justify-between sm:h-[92px]">
        <a href="#top" className="flex items-center gap-3.5" aria-label="Akshanth V — home">
          <Logo size={38} className="text-ink" />
          <span className="font-display text-[1.3rem] tracking-tight sm:text-[1.5rem]">
            Akshanth V
          </span>
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.name}>
              <a href={l.href} className="link-underline text-base text-ink-soft hover:text-ink">
                {l.name}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="relative z-50 -mr-2 flex h-11 w-11 flex-col items-center justify-center gap-[5px] md:hidden"
        >
          <span
            className={`block h-px w-6 bg-ink transition-transform duration-300 ${
              open ? "translate-y-[3px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-ink transition-transform duration-300 ${
              open ? "-translate-y-[3px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/*
        Mobile sheet.
        - h-[100dvh] tracks the *visible* viewport, so the panel isn't sized to
          include the browser's collapsing address bar.
        - overflow-y-auto + min-h-full keeps links reachable in landscape,
          where four 38px items plus padding exceed the screen.
        - invisible (not just opacity-0) takes the links out of the tab order
          while the sheet is closed.
        - Top padding clears the fixed bar; safe-area insets clear the notch.
      */}
      <div
        id="mobile-menu"
        aria-hidden={!open}
        className={`fixed inset-x-0 top-0 z-40 h-[100dvh] overflow-y-auto overscroll-contain bg-paper transition-[opacity,visibility] duration-300 md:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="shell flex min-h-full flex-col justify-center pb-[max(2rem,env(safe-area-inset-bottom))] pt-[calc(76px+env(safe-area-inset-top))]">
          <ul className="flex flex-col">
            {NAV_LINKS.map((l) => (
              <li key={l.name} className="border-b border-rule last:border-b-0">
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  tabIndex={open ? 0 : -1}
                  className="flex min-h-[64px] items-center font-display text-[clamp(2rem,9vw,2.6rem)] tracking-tight"
                >
                  {l.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
