"use client";

import { useState, useEffect, useRef } from "react";
import { useToast } from "@/context/ToastContext";

export default function Hero() {
  const { showToast } = useToast();
  const [mockTab, setMockTab] = useState("talent");
  const [filterCat, setFilterCat] = useState("all");
  const [isBookmarked, setIsBookmarked] = useState(false);
  const tiltRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!tiltRef.current || window.innerWidth <= 1080) return;
      const xCenter = window.innerWidth / 2;
      const yCenter = window.innerHeight / 2;
      const xOffset = (e.clientX - xCenter) / xCenter;
      const yOffset = (e.clientY - yCenter) / yCenter;
      const tiltX = -yOffset * 10;
      const tiltY = xOffset * 10;
      tiltRef.current.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleTabChange = (tab) => {
    setMockTab(tab);
    if (tab === "talent") {
      showToast("📱 Switched to Talent Feed preview");
    } else {
      showToast("🏢 Switched to Employer Console preview");
    }
  };

  const handleFilterChange = (cat, label) => {
    setFilterCat(cat);
    showToast(`Filtered: ${label}`);
  };

  const handleBookmarkToggle = () => {
    const nextSaved = !isBookmarked;
    setIsBookmarked(nextSaved);
    if (nextSaved) {
      showToast("⭐ Saved to your bookmarked gigs!");
    } else {
      showToast("Removed from saved gigs");
    }
  };

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content reveal-on-scroll">
          <div className="hero-eyebrow">
            <div className="live-pulse-dot" />
            U.S. In-Person Professional Experience Marketplace
          </div>

          <h1 className="hero-title">
            Real experience.
            <br />
            <span className="text-gradient-green">Local opportunity.</span>
          </h1>

          <p className="hero-desc">
            Gigs4Grads connects verified U.S. companies with vetted students and early-career graduates for short-term,
            white-collar assignments. Get paid, build your reputation, and gain authentic career credentials.
          </p>

          <div className="hero-actions">
            <button
              type="button"
              className="btn btn-primary btn-lg"
              onClick={() => showToast("🔍 Finding gigs near Austin, TX...")}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
              Find Paid Gigs
            </button>
            <button
              type="button"
              className="btn btn-outline btn-lg"
              onClick={() => showToast("🏢 Starting Company KYB verification...")}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
                <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
                <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
              </svg>
              Post a Gig
            </button>
          </div>

          <div className="hero-stats">
            <div className="hero-stat-item">
              <span className="hero-stat-value">12+</span>
              <span className="hero-stat-label">Gig Categories</span>
            </div>
            <div className="hero-stat-item">
              <span className="hero-stat-value">50</span>
              <span className="hero-stat-label">U.S. States Covered</span>
            </div>
            <div className="hero-stat-item">
              <span className="hero-stat-value">100%</span>
              <span className="hero-stat-label">Escrow Guaranteed</span>
            </div>
          </div>
        </div>

        {/* Hero Visual with Interactive 3D Perspective Phone */}
        <div className="hero-visual reveal-on-scroll stagger-2">
          <div className="mockup-tilt-wrapper" id="mockup-tilt" ref={tiltRef}>
            {/* Floating Badges with gentle floating animations */}
            <div className="floating-glass-card float-card-1">
              <div className="float-icon-box" style={{ background: "var(--mint)" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <div>
                <div className="float-title">Verified Buyer</div>
                <div className="float-sub">KYB &amp; Tax Vetted</div>
              </div>
            </div>

            <div className="floating-glass-card float-card-2">
              <div className="float-icon-box" style={{ background: "var(--lavender-soft)" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--lavender)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                  <polyline points="17 6 23 6 23 12" />
                </svg>
              </div>
              <div>
                <div className="float-title">Reputation Tier</div>
                <div className="float-sub">Score: 98/100 · Pro</div>
              </div>
            </div>

            <div className="floating-glass-card float-card-3">
              <div className="float-icon-box" style={{ background: "var(--amber-soft)" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--amber-dark)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <div>
                <div className="float-title">Instant Escrow</div>
                <div className="float-sub">Auto-released on completion</div>
              </div>
            </div>

            {/* Realistic Phone Interface */}
            <div className="phone-mockup">
              <div className="phone-island" />
              <div className="phone-screen">
                <div className="phone-status-bar">
                  <span>9:41</span>
                  <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--navy)" strokeWidth="2.2">
                      <path d="M5 12.55a11 11 0 0 1 14.08 0" />
                      <path d="M1.42 9a16 16 0 0 1 21.16 0" />
                      <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
                      <circle cx="12" cy="20" r="1" />
                    </svg>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--navy)" strokeWidth="2.2">
                      <rect x="1" y="6" width="18" height="12" rx="2" ry="2" />
                      <line x1="23" y1="13" x2="23" y2="11" />
                    </svg>
                  </div>
                </div>

                {/* Switcher Tab */}
                <div className="mock-view-switcher">
                  <button
                    type="button"
                    className={`mock-switch-tab ${mockTab === "talent" ? "active" : ""}`}
                    onClick={() => handleTabChange("talent")}
                  >
                    Talent Feed
                  </button>
                  <button
                    type="button"
                    className={`mock-switch-tab ${mockTab === "company" ? "active" : ""}`}
                    onClick={() => handleTabChange("company")}
                  >
                    Company View
                  </button>
                </div>

                {/* Talent Feed Content */}
                {mockTab === "talent" && (
                  <div id="mock-talent-content">
                    <div className="mock-header">
                      <div className="mock-eyebrow">Explore Available Gigs</div>
                      <div className="mock-title">Find gigs</div>
                      <div className="mock-subtitle">Work with trusted companies in cities you love.</div>
                    </div>

                    <div
                      className="mock-search-box"
                      style={{ cursor: "pointer" }}
                      onClick={() => showToast("🔎 Focusing interactive search...")}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--slate-light)" strokeWidth="2">
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                      </svg>
                      <span>Search tech, events, marketing...</span>
                    </div>

                    {/* Interactive Category Filter Chips */}
                    <div className="mock-filter-chips">
                      <button
                        type="button"
                        className={`mock-chip-btn ${filterCat === "all" ? "active" : ""}`}
                        onClick={() => handleFilterChange("all", "All")}
                      >
                        All
                      </button>
                      <button
                        type="button"
                        className={`mock-chip-btn ${filterCat === "event" ? "active" : ""}`}
                        onClick={() => handleFilterChange("event", "Event Rep")}
                      >
                        Event Rep
                      </button>
                      <button
                        type="button"
                        className={`mock-chip-btn ${filterCat === "booth" ? "active" : ""}`}
                        onClick={() => handleFilterChange("booth", "Booth Support")}
                      >
                        Booth Support
                      </button>
                      <button
                        type="button"
                        className={`mock-chip-btn ${filterCat === "field" ? "active" : ""}`}
                        onClick={() => handleFilterChange("field", "Field Marketing")}
                      >
                        Field Marketing
                      </button>
                    </div>

                    {/* Interactive Card 1: Event Rep */}
                    {(filterCat === "all" || filterCat === "event") && (
                      <div className="mock-gig-card" id="card-event">
                        <div className="mock-gig-badges">
                          <div style={{ display: "flex", gap: "6px" }}>
                            <span className="mock-pill mock-pill-green">
                              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                <polyline points="22 4 12 14.01 9 11.01" />
                              </svg>
                              Verified Buyer
                            </span>
                            <span className="mock-pill mock-pill-slate">Event Representation</span>
                          </div>
                          <button
                            type="button"
                            className={`mock-bookmark-btn ${isBookmarked ? "saved" : ""}`}
                            onClick={handleBookmarkToggle}
                            title="Save Gig"
                          >
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill={isBookmarked ? "var(--green)" : "none"}
                              stroke={isBookmarked ? "var(--green)" : "currentColor"}
                              strokeWidth="2.2"
                            >
                              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                            </svg>
                          </button>
                        </div>

                        <div className="mock-gig-body">
                          <div className="mock-gig-icon">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                          </div>
                          <div className="mock-gig-info">
                            <div className="mock-gig-title">Tech Innovation Summit Rep</div>
                            <div className="mock-gig-company">Apex Cloud Systems</div>
                          </div>
                        </div>

                        <div className="mock-gig-meta">
                          <div className="mock-gig-meta-item">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                              <circle cx="12" cy="10" r="3" />
                            </svg>
                            Austin, TX
                          </div>
                          <span>•</span>
                          <div className="mock-gig-meta-item">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                              <line x1="16" y1="2" x2="16" y2="6" />
                              <line x1="8" y1="2" x2="8" y2="6" />
                              <line x1="3" y1="10" x2="21" y2="10" />
                            </svg>
                            Nov 14 – Nov 16
                          </div>
                        </div>

                        <div className="mock-gig-pay-bar">
                          <div>
                            <div className="mock-pay-type">Fixed Pay</div>
                            <div className="mock-pay-amount">$450 / event</div>
                          </div>
                          <span className="mock-pill mock-pill-green">Fit Score: 96%</span>
                        </div>

                        <div className="mock-gig-actions">
                          <button
                            type="button"
                            className="mock-action-btn mock-action-save"
                            onClick={() => showToast("ℹ️ Gig details opened")}
                          >
                            Details
                          </button>
                          <button
                            type="button"
                            className="mock-action-btn mock-action-apply"
                            onClick={() => showToast("🎉 Quick Applied to Apex Cloud Systems!")}
                          >
                            Quick Apply
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Secondary compact card: Booth Support */}
                    {(filterCat === "all" || filterCat === "booth") && (
                      <div
                        className="mock-gig-card"
                        id="card-booth"
                        style={{ marginTop: "10px", cursor: "pointer" }}
                        onClick={() => showToast("📋 Opening SaaS Booth Specialist details...")}
                      >
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <div>
                            <div style={{ fontSize: "13px", fontWeight: "700", color: "var(--navy)" }}>
                              SaaS Booth Specialist
                            </div>
                            <div style={{ fontSize: "11px", color: "var(--slate)" }}>Dallas, TX · $300 / day</div>
                          </div>
                          <span className="mock-pill mock-pill-green">Verified</span>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Company Portal View Content */}
                {mockTab === "company" && (
                  <div id="mock-company-content">
                    <div className="mock-header">
                      <div className="mock-eyebrow">Employer Portal</div>
                      <div className="mock-title">Dashboard</div>
                      <div className="mock-subtitle">Manage active listings and incoming bids.</div>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginBottom: "12px" }}>
                      <div
                        style={{
                          background: "var(--mint)",
                          padding: "10px",
                          borderRadius: "10px",
                          border: "1px solid var(--mint-border)",
                        }}
                      >
                        <div style={{ fontSize: "18px", fontWeight: "800", color: "var(--navy)" }}>4 Active</div>
                        <div style={{ fontSize: "10.5px", color: "var(--green-dark)" }}>Gigs Posted</div>
                      </div>
                      <div
                        style={{
                          background: "var(--blue-soft)",
                          padding: "10px",
                          borderRadius: "10px",
                          border: "1px solid var(--blue-border)",
                        }}
                      >
                        <div style={{ fontSize: "18px", fontWeight: "800", color: "var(--navy)" }}>18 Bids</div>
                        <div style={{ fontSize: "10.5px", color: "var(--navy)" }}>Vetted Talent</div>
                      </div>
                    </div>

                    <div
                      style={{
                        background: "var(--white)",
                        border: "1px solid var(--border)",
                        borderRadius: "12px",
                        padding: "12px",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "11px",
                          fontWeight: "700",
                          textTransform: "uppercase",
                          color: "var(--slate-light)",
                          marginBottom: "8px",
                        }}
                      >
                        Recent Candidate
                      </div>
                      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                        <div
                          style={{
                            width: "36px",
                            height: "36px",
                            borderRadius: "50%",
                            background: "var(--lavender-soft)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "var(--lavender)",
                            fontWeight: "700",
                          }}
                        >
                          JD
                        </div>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: "13px", fontWeight: "700", color: "var(--navy)" }}>
                            Jordan Davis
                          </div>
                          <div style={{ fontSize: "11px", color: "var(--slate)" }}>UT Austin · 4.9 ★ Rating</div>
                        </div>
                        <span className="mock-pill mock-pill-green">Selected</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
