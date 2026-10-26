"use client";

import { useEffect } from "react";

export function useScrollReveal() {
  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const revealElements = document.querySelectorAll(".reveal-on-scroll");

    if (prefersReducedMotion) {
      revealElements.forEach((el) => el.classList.add("is-revealed"));
      return;
    }

    if (!("IntersectionObserver" in window)) {
      revealElements.forEach((el) => el.classList.add("is-revealed"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            entry.target.setAttribute("data-revealed", "true");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    revealElements.forEach((el) => {
      if (el.getAttribute("data-revealed") === "true") {
        el.classList.add("is-revealed");
      }
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);
}
