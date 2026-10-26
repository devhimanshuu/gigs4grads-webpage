"use client";

import { useToast } from "@/context/ToastContext";

export default function TwoSided() {
  const { showToast } = useToast();

  return (
    <section className="two-sided-section" id="for-talent">
      <div className="container">
        <div className="text-center reveal-on-scroll">
          <span className="section-eyebrow">A Unified Marketplace</span>
          <h2 className="section-title">Designed for career builders &amp; growth leaders</h2>
          <p className="section-desc">
            Whether you are an ambitious graduate or a company scaling presence in 20 cities, Gigs4Grads meets your high
            standards.
          </p>
        </div>

        <div className="two-sided-grid">
          {/* Talent Card */}
          <div className="audience-card talent reveal-on-scroll stagger-1">
            <div className="audience-badge talent">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2v-5" />
              </svg>
              For Students &amp; Grads
            </div>
            <h3 className="audience-title">Turn local gigs into a standout resume</h3>
            <p className="audience-desc">
              Escape unpaid coffee-run internships. Work with vetted corporate buyers on high-impact events and sales
              activations that pay competitively.
            </p>

            <ul className="audience-benefits-list">
              <li>
                <div className="benefit-check-icon green">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span>
                  <strong>Guaranteed Escrow:</strong> You always get paid on time for verified assignments.
                </span>
              </li>
              <li>
                <div className="benefit-check-icon green">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span>
                  <strong>Reputation Score:</strong> Every positive review increases your visibility and earning tier.
                </span>
              </li>
              <li>
                <div className="benefit-check-icon green">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span>
                  <strong>White-Collar Work:</strong> Marketing, trade shows, client demos—no food delivery or errands.
                </span>
              </li>
            </ul>

            <button
              type="button"
              className="btn btn-primary btn-lg"
              onClick={() => showToast("🎓 Welcome to Talent Onboarding!")}
            >
              Create Talent Profile
            </button>
          </div>

          {/* Company Card */}
          <div className="audience-card company reveal-on-scroll stagger-2" id="for-companies">
            <div className="audience-badge company">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
                <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
                <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
              </svg>
              For Enterprise &amp; Brands
            </div>
            <h3 className="audience-title">Deploy reliable brand reps in any U.S. market</h3>
            <p className="audience-desc">
              Stop managing chaotic temporary agency staff. Hire vetted, university-educated talent ready with your
              training materials in hand.
            </p>

            <ul className="audience-benefits-list">
              <li>
                <div className="benefit-check-icon navy">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span>
                  <strong>National Coverage:</strong> Run concurrent programs across 50 states with live tracking.
                </span>
              </li>
              <li>
                <div className="benefit-check-icon navy">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span>
                  <strong>Candidate Readiness:</strong> Require video self-introductions and custom briefing quizzes.
                </span>
              </li>
              <li>
                <div className="benefit-check-icon navy">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span>
                  <strong>Complete Compliance:</strong> KYB verified, centralized invoicing, and dispute mitigation.
                </span>
              </li>
            </ul>

            <button
              type="button"
              className="btn btn-navy btn-lg"
              onClick={() => showToast("💼 Starting Company Registration...")}
            >
              Register Your Company
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
