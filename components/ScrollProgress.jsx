"use client";

import { useEffect, useRef } from "react";

export default function ScrollProgress() {
  const barRef = useRef(null);

  useEffect(() => {
    // Feature detection: check if browser natively supports scroll-driven animation
    const hasNativeSupport =
      typeof CSS !== "undefined" &&
      CSS.supports &&
      CSS.supports("(animation-timeline: scroll()) and (animation-range: 0% 100%)");

    if (!hasNativeSupport) {
      const handleScroll = () => {
        if (!barRef.current) return;
        const scrollable =
          document.documentElement.scrollHeight - window.innerHeight;
        if (scrollable <= 0) return;
        const scrolled = window.scrollY;
        const progressPercentage = Math.min(100, Math.max(0, (scrolled / scrollable) * 100));
        barRef.current.style.width = `${progressPercentage}%`;
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      handleScroll();

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return <div id="scroll-progress" ref={barRef} aria-hidden="true" />;
}
