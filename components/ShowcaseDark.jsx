"use client";

import { useToast } from "@/context/ToastContext";

export default function ShowcaseDark() {
  const { showToast } = useToast();

  return (
    <section className="showcase-dark-section">
      <div className="container">
        <div className="reveal-on-scroll">
          <span className="section-eyebrow" style={{ color: "var(--logo-green)" }}>
            Total Operational Visibility
          </span>
          <h2 className="section-title">An enterprise command center built for multi-city campaigns</h2>
          <p className="section-desc">
            Review bids, monitor active venue check-ins, manage briefing quizzes, and inspect completion reports without
            jumping across disparate apps.
          </p>

          <ul className="dark-features-list">
            <li>
              <div className="dark-feature-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <span>Interactive multi-city coverage map with live status</span>
            </li>
            <li>
              <div className="dark-feature-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <span>Deep candidate evaluation: intro video, fit score &amp; tier badges</span>
            </li>
            <li>
              <div className="dark-feature-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                  <line x1="1" y1="10" x2="23" y2="10" />
                </svg>
              </div>
              <span>Instant escrow release with itemized expense approvals</span>
            </li>
          </ul>
        </div>

        {/* High-Fidelity Company Dashboard Mockup */}
        <div className="reveal-on-scroll stagger-2">
          <div className="dashboard-preview-card">
            <div className="dash-topbar">
              <div>
                <div className="dash-welcome-text">Good afternoon, Acme Enterprise</div>
                <div className="dash-main-title">Operations Console</div>
              </div>
              <span className="mock-pill mock-pill-green">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                KYB Verified
              </span>
            </div>

            <div className="dash-metrics-grid">
              <div className="dash-stat-tile mint-accent">
                <div className="dash-stat-val">6</div>
                <div className="dash-stat-lbl">Active Gigs</div>
              </div>
              <div className="dash-stat-tile blue-accent">
                <div className="dash-stat-val">24</div>
                <div className="dash-stat-lbl">Talent Bids</div>
              </div>
              <div className="dash-stat-tile lavender-accent">
                <div className="dash-stat-val">$14.2k</div>
                <div className="dash-stat-lbl">Escrow Locked</div>
              </div>
            </div>

            <div className="dash-table-card">
              <div className="dash-table-header">
                <span>Active Venue Assignments</span>
                <span
                  style={{ color: "var(--green)", fontSize: "12px", cursor: "pointer" }}
                  onClick={() => showToast("📑 Showing all 12 posted gigs")}
                >
                  View All (12) →
                </span>
              </div>

              <div
                className="dash-row-item"
                style={{ cursor: "pointer" }}
                onClick={() => showToast("📍 Fintech Expo Demo: 3 of 3 spots active")}
              >
                <div>
                  <div className="dash-row-title">Fintech Expo Product Demo</div>
                  <div className="dash-row-sub">San Francisco, CA · 3 of 3 Spots Filled</div>
                </div>
                <span className="mock-pill mock-pill-green">In Progress</span>
              </div>

              <div
                className="dash-row-item"
                style={{ cursor: "pointer" }}
                onClick={() => showToast("👥 Reviewing 8 candidate bids for Healthcare Symposium")}
              >
                <div>
                  <div className="dash-row-title">Healthcare Symposium Brand Rep</div>
                  <div className="dash-row-sub">Chicago, IL · Nov 20–22</div>
                </div>
                <span className="mock-pill mock-pill-slate">Reviewing Bids</span>
              </div>

              <div
                className="dash-row-item"
                style={{ cursor: "pointer" }}
                onClick={() => showToast("⚡ Automotive VIP Preview: 1 spot remaining")}
              >
                <div>
                  <div className="dash-row-title">Automotive VIP Preview Lead</div>
                  <div className="dash-row-sub">Miami, FL · 1 Spot Available</div>
                </div>
                <span className="mock-pill mock-pill-slate">Open</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
