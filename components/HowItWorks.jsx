export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      heading: "Verify & Onboard",
      desc: "Talent completes eligibility checks, profile bio, and video assessment. Companies verify their corporate entity (KYB) and fund their gig escrow.",
      tag: "Automated Checks",
      stagger: "stagger-1",
    },
    {
      number: 2,
      heading: "Match & Brief",
      desc: "Talent browses high-fit gigs and submits bids. Companies review candidate profiles, select their top talent, and assign gig briefing materials.",
      tag: "Readiness Quiz",
      stagger: "stagger-2",
    },
    {
      number: 3,
      heading: "Execute & Payout",
      desc: "Talent checks in via GPS or QR scan on-site. Once the assignment finishes, talent submits their completion report and escrow funds release promptly.",
      tag: "Instant Escrow Release",
      stagger: "stagger-3",
    },
  ];

  return (
    <section className="how-section" id="how-it-works">
      <div className="container">
        <div className="text-center reveal-on-scroll">
          <span className="section-eyebrow">Simplicity at Scale</span>
          <h2 className="section-title">How the marketplace operates</h2>
          <p className="section-desc">
            From initial verification to final payout release, every milestone is structured for absolute clarity.
          </p>
        </div>

        <div className="how-steps-grid">
          {steps.map((step) => (
            <div key={step.number} className={`how-step-card reveal-on-scroll ${step.stagger}`}>
              <div className="step-number-badge">{step.number}</div>
              <h3 className="step-heading">{step.heading}</h3>
              <p className="step-desc">{step.desc}</p>
              <span className="step-tag">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {step.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
