"use client";

import Link from "next/link";
import { useToast } from "@/context/ToastContext";

export default function Footer() {
  const { showToast } = useToast();

  const handleSmoothScroll = (e, hash) => {
    e.preventDefault();
    const el = document.querySelector(hash);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              <img
                src="/assets/logo_icon.png"
                alt="Gigs4Grads"
                style={{ width: "32px", height: "32px" }}
              />
              <div className="footer-brand-title">
                Gigs<span>4</span>Grads
              </div>
            </div>
            <p className="footer-about-text">
              Connecting verified U.S. companies with vetted students and graduates for high-trust, in-person white-collar
              assignments.
            </p>
            <div className="footer-socials">
              <a
                href="#"
                className="footer-social-btn"
                aria-label="LinkedIn"
                onClick={(e) => {
                  e.preventDefault();
                  showToast("LinkedIn page (Demo)");
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="#"
                className="footer-social-btn"
                aria-label="Twitter"
                onClick={(e) => {
                  e.preventDefault();
                  showToast("Twitter page (Demo)");
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a
                href="#"
                className="footer-social-btn"
                aria-label="Instagram"
                onClick={(e) => {
                  e.preventDefault();
                  showToast("Instagram page (Demo)");
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <div className="footer-col-heading">Platform</div>
            <ul className="footer-links-list">
              <li className="footer-link-item">
                <a href="#features" onClick={(e) => handleSmoothScroll(e, "#features")}>
                  Find Opportunities
                </a>
              </li>
              <li className="footer-link-item">
                <a href="#for-companies" onClick={(e) => handleSmoothScroll(e, "#for-companies")}>
                  Post an Assignment
                </a>
              </li>
              <li className="footer-link-item">
                <a href="#how-it-works" onClick={(e) => handleSmoothScroll(e, "#how-it-works")}>
                  How It Works
                </a>
              </li>
              <li className="footer-link-item">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    showToast("📊 Commission rates: Entry (20%), Verified (17%), Pro (15%)");
                  }}
                >
                  Commission Rates
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="footer-col-heading">Company</div>
            <ul className="footer-links-list">
              <li className="footer-link-item">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    showToast("About Gigs4Grads: Real Experience, Local Opportunity");
                  }}
                >
                  About Us
                </a>
              </li>
              <li className="footer-link-item">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    showToast("🚀 We're hiring engineers, designers, and campus leads!");
                  }}
                >
                  Careers
                </a>
              </li>
              <li className="footer-link-item">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    showToast("Press kit available on request");
                  }}
                >
                  Press &amp; Media
                </a>
              </li>
              <li className="footer-link-item">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    showToast("Contact support: support@gigs4grads.com");
                  }}
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="footer-col-heading">Trust &amp; Legal</div>
            <ul className="footer-links-list">
              <li className="footer-link-item">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    showToast("KYB verification processed via Stripe Identity");
                  }}
                >
                  Security &amp; KYB
                </a>
              </li>
              <li className="footer-link-item">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    showToast("Escrow is FDIC-insured through banking partners");
                  }}
                >
                  Escrow Protections
                </a>
              </li>
              <li className="footer-link-item">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    showToast("Privacy policy updated for 2026");
                  }}
                >
                  Privacy Policy
                </a>
              </li>
              <li className="footer-link-item">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    showToast("Terms of service applicable to U.S. gigs");
                  }}
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <span>&copy; 2026 Gigs4Grads, Inc. All rights reserved.</span>
          <div className="footer-legal-links">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                showToast("Privacy policy");
              }}
            >
              Privacy
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                showToast("Terms of service");
              }}
            >
              Terms
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                showToast("Security safeguards");
              }}
            >
              Security
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                showToast("All marketplace systems operational (100% uptime)");
              }}
            >
              App Status
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
