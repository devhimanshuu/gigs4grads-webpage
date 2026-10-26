export default function TrustStrip() {
  const industries = [
    {
      label: "Event Representation",
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ),
      style: {},
    },
    {
      label: "Booth Support & Trade Shows",
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <rect x="2" y="7" width="20" height="14" rx="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      ),
      style: { background: "var(--blue-soft)", color: "var(--navy)" },
    },
    {
      label: "Client Visits & VIP Tours",
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      style: { background: "var(--amber-soft)", color: "var(--amber-dark)" },
    },
    {
      label: "Field Marketing Campaigns",
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <line x1="22" y1="2" x2="11" y2="13" />
          <polygon points="22 2 15 22 11 13 2 9 22 2" />
        </svg>
      ),
      style: { background: "var(--lavender-soft)", color: "var(--lavender)" },
    },
    {
      label: "Brand Activations",
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
      style: {},
    },
    {
      label: "Sales & Product Demonstrations",
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M23 6l-9.5 9.5-5-5L1 18" />
        </svg>
      ),
      style: { background: "var(--blue-soft)", color: "var(--navy)" },
    },
  ];

  return (
    <section className="trust-strip">
      <div className="trust-strip-header">
        <span>Verified In-Person Gigs Across Premier U.S. Industries</span>
      </div>
      <div className="marquee-wrapper">
        <div className="marquee-track">
          {/* Primary Sequence */}
          {industries.map((item, idx) => (
            <div className="marquee-item" key={`item-1-${idx}`}>
              <div className="marquee-icon-box" style={item.style}>
                {item.icon}
              </div>
              <span className="marquee-label">{item.label}</span>
            </div>
          ))}

          {/* Duplicated track for seamless infinite marquee */}
          {industries.map((item, idx) => (
            <div className="marquee-item" key={`item-2-${idx}`}>
              <div className="marquee-icon-box" style={item.style}>
                {item.icon}
              </div>
              <span className="marquee-label">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
