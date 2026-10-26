"use client";

import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "Who is eligible to join as Talent on Gigs4Grads?",
      a: "Current undergraduate students, graduate students, and recent university graduates residing in the United States with valid U.S. work authorization are eligible. All talent completes identity verification prior to submitting their first gig bid.",
      stagger: "stagger-1",
    },
    {
      q: "How does the escrow payment system protect both sides?",
      a: "When a company selects a candidate for a gig, the agreed compensation is authorized and locked into escrow immediately. Talent knows the money is guaranteed, and companies have reassurance that funds only release once the venue report and check-out are verified.",
      stagger: "stagger-2",
    },
    {
      q: "How does GPS and QR check-in work at venues?",
      a: "The mobile app confirms attendance via a 200-meter GPS geofence around the event venue or by scanning the manager's check-in QR code. The app never tracks location in the background; verification occurs only upon arrival and departure.",
      stagger: "stagger-3",
    },
    {
      q: "What are the Talent Reputation Tiers and their benefits?",
      a: "Talent progresses across Entry (20% fee), Verified (17% fee), and Pro (15% fee) tiers. Advancing requires completed gigs with high ratings, on-time check-ins, and verified reliability. Pro tier members receive priority matching for premium assignments.",
      stagger: "stagger-4",
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="text-center reveal-on-scroll">
          <span className="section-eyebrow">Clear Answers</span>
          <h2 className="section-title">Frequently asked questions</h2>
          <p className="section-desc">
            Everything you need to know about eligibility, payments, and platform security.
          </p>
        </div>

        <div className="faq-grid">
          {faqs.map((faq, index) => {
            const isActive = openIndex === index;
            return (
              <div
                key={index}
                className={`faq-item reveal-on-scroll ${faq.stagger} ${isActive ? "active" : ""}`}
              >
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => handleToggle(index)}
                  aria-expanded={isActive}
                >
                  <span>{faq.q}</span>
                  <svg
                    className="faq-chevron"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    style={{
                      transform: isActive ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.3s ease",
                    }}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                {isActive && <div className="faq-answer">{faq.a}</div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
