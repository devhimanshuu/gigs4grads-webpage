"use client";

function SpotlightCard({ icon, iconBg, iconColor, title, text, desc, staggerClass }) {
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div
      className={`spotlight-card reveal-on-scroll ${staggerClass}`}
      onMouseMove={handleMouseMove}
    >
      <div className="feature-icon-wrapper" style={{ background: iconBg, color: iconColor }}>
        {icon}
      </div>
      <h3 className="feature-title">{title}</h3>
      <p className={`feature-text ${desc ? "feature-desc" : ""}`}>{text}</p>
    </div>
  );
}

export default function Features() {
  const featuresData = [
    {
      title: "Verified KYB & ID Checks",
      text: "Zero anonymous actors. Companies submit verified legal registration and EIN. Talent completes biometric ID checks before entering bidding.",
      iconBg: "var(--mint)",
      iconColor: "var(--green)",
      staggerClass: "stagger-1",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
      ),
    },
    {
      title: "Dynamic Fit Scoring",
      text: "A 5-factor weighted algorithm evaluates skills (30%), venue distance (20%), availability (20%), experience (15%), and reputation tier (15%).",
      desc: true,
      iconBg: "var(--blue-soft)",
      iconColor: "var(--navy)",
      staggerClass: "stagger-2",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ),
    },
    {
      title: "Geofenced GPS Check-In",
      text: "Eliminate no-shows. Attendance tracking uses 200m geofence radii and unique venue QR codes for timestamped check-in and check-out confirmation.",
      iconBg: "var(--lavender-soft)",
      iconColor: "var(--lavender)",
      staggerClass: "stagger-3",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
        </svg>
      ),
    },
    {
      title: "Automated Escrow Security",
      text: "Gig payments are authorized and escrowed in advance. Funds release automatically upon completed report submission and employer review.",
      iconBg: "var(--amber-soft)",
      iconColor: "var(--amber-dark)",
      staggerClass: "stagger-1",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
          <line x1="1" y1="10" x2="23" y2="10" />
        </svg>
      ),
    },
    {
      title: "Briefings & Readiness Quizzes",
      text: "Ensure talent is prepared before arriving. Companies attach talking points and interactive quizzes that talent must pass before being marked Ready.",
      iconBg: "var(--mint)",
      iconColor: "var(--green)",
      staggerClass: "stagger-2",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
        </svg>
      ),
    },
    {
      title: "Portable Reputation Tiers",
      text: "Early career graduates advance from Entry → Verified → Pro tiers. Higher tier talent enjoys lower platform fees and priority access to premium gigs.",
      iconBg: "var(--blue-soft)",
      iconColor: "var(--navy)",
      staggerClass: "stagger-3",
      icon: (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        </svg>
      ),
    },
  ];

  return (
    <section className="features-section" id="features">
      <div className="container">
        <div className="features-header text-center reveal-on-scroll">
          <span className="section-eyebrow">Enterprise-Grade Infrastructure</span>
          <h2 className="section-title">Engineered for trust, safety, and rapid execution</h2>
          <p className="section-desc">
            Gigs4Grads removes the friction from hiring and freelancing with integrated KYB checks, geofencing, escrow,
            and structured readiness.
          </p>
        </div>

        <div className="features-grid">
          {featuresData.map((f, idx) => (
            <SpotlightCard key={idx} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}
