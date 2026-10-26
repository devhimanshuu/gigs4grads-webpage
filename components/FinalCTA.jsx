"use client";

import { useToast } from "@/context/ToastContext";

export default function FinalCTA() {
  const { showToast } = useToast();

  return (
    <section className="final-cta">
      <div className="container reveal-on-scroll">
        <span className="section-eyebrow" style={{ color: "var(--green-dark)" }}>
          Your Next Opportunity Starts Here
        </span>
        <h2 className="section-title">Ready to launch your career or scale your field presence?</h2>
        <p className="section-desc">
          Join thousands of verified students, graduates, and U.S. companies using Gigs4Grads today.
        </p>

        <div className="final-cta-buttons">
          <button
            type="button"
            className="btn btn-primary btn-lg"
            onClick={() => showToast("🎓 Opening Talent Sign-up...")}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
            Get Started as Talent
          </button>
          <button
            type="button"
            className="btn btn-navy btn-lg"
            onClick={() => showToast("🏢 Opening Company KYB Portal...")}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
              <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
              <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
            </svg>
            Post Your First Gig
          </button>
        </div>
      </div>
    </section>
  );
}
