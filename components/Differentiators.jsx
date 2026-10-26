export default function Differentiators() {
  const diffItems = [
    {
      title: "Two-Way Verification",
      desc: "Talent verifies student/grad status & ID. Companies pass legal KYB. No pseudonyms or fake postings.",
      bg: "var(--mint)",
      color: "var(--green)",
      stagger: "stagger-1",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
    {
      title: "White-Collar Only",
      desc: "Assignments focus on corporate events, software demos, and field marketing that enrich your resume.",
      bg: "var(--blue-soft)",
      color: "var(--navy)",
      stagger: "stagger-2",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2v-5" />
        </svg>
      ),
    },
    {
      title: "Permanent Track Record",
      desc: "Your ratings, completed assignments, and badges stay on your Gigs4Grads profile as verifiable proof of work.",
      bg: "var(--lavender-soft)",
      color: "var(--lavender)",
      stagger: "stagger-3",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        </svg>
      ),
    },
    {
      title: "Prompt Escrow Releases",
      desc: "No chasing 60-day invoices. When your venue checkout and brief report are in, funds release automatically.",
      bg: "var(--amber-soft)",
      color: "var(--amber-dark)",
      stagger: "stagger-4",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
    },
  ];

  return (
    <section className="diff-section">
      <div className="container">
        <div className="text-center reveal-on-scroll">
          <span className="section-eyebrow">The Gigs4Grads Standard</span>
          <h2 className="section-title">Built fundamentally different</h2>
          <p className="section-desc">
            We aren't a generic gig-economy app for food delivery. We are purpose-built for white-collar talent building
            careers.
          </p>
        </div>

        <div className="diff-grid">
          {diffItems.map((item, idx) => (
            <div key={idx} className={`diff-card reveal-on-scroll ${item.stagger}`}>
              <div className="diff-icon-circle" style={{ background: item.bg, color: item.color }}>
                {item.icon}
              </div>
              <h3 className="diff-title">{item.title}</h3>
              <p className="diff-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
