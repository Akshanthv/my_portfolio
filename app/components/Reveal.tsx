"use client";

import { useEffect } from "react";

/**
 * Adds .is-in to every .reveal element as it enters the viewport.
 * Mounted once in the layout so sections stay server components.
 */
const Reveal = () => {
  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>(".reveal");

    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      nodes.forEach((n) => n.classList.add("is-in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 }
    );

    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  return null;
};

export default Reveal;
