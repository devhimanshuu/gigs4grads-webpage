"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import TwoSided from "@/components/TwoSided";
import ShowcaseDark from "@/components/ShowcaseDark";
import Differentiators from "@/components/Differentiators";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  useScrollReveal();

  return (
    <>
      {/* Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Ambient Glow Backgrounds (contained to prevent mobile horizontal blowout) */}
      <div className="ambient-glows-container" aria-hidden="true">
        <div className="ambient-glow-1" />
        <div className="ambient-glow-2" />
      </div>

      {/* Navigation Bar */}
      <Navbar />

      <main>
        {/* Section 2: Hero */}
        <Hero />

        {/* Section 3: Trust Strip Marquee */}
        <TrustStrip />

        {/* Section 4: Key Features */}
        <Features />

        {/* Section 5: How It Works */}
        <HowItWorks />

        {/* Section 6: Two-Sided Marketplace Value Proposition */}
        <TwoSided />

        {/* Section 7: Enterprise Operations Console Showcase */}
        <ShowcaseDark />

        {/* Section 8: Differentiators */}
        <Differentiators />

        {/* Section 9: FAQ Accordion */}
        <FAQ />

        {/* Section 10: Final CTA */}
        <FinalCTA />
      </main>

      {/* Section 11: Footer */}
      <Footer />
    </>
  );
}
