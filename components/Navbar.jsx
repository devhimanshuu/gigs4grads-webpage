"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useToast } from "@/context/ToastContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { showToast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      setScrolled(winScroll > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (e, targetId) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className={`nav ${scrolled ? "scrolled" : ""}`} id="main-nav">
        <div className="container">
          <Link href="/" className="nav-brand" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <img
              src="/assets/logo_icon.png"
              alt="Gigs4Grads Logo"
              className="nav-brand-icon"
              width="40"
              height="40"
            />
            <div className="nav-brand-text">
              Gigs<span>4</span>Grads
            </div>
            <span className="nav-badge">v2.0 Pro</span>
          </Link>

          <ul className="nav-links">
            <li>
              <a href="#features" className="nav-link" onClick={(e) => handleNavClick(e, "#features")}>
                Features
              </a>
            </li>
            <li>
              <a href="#how-it-works" className="nav-link" onClick={(e) => handleNavClick(e, "#how-it-works")}>
                How It Works
              </a>
            </li>
            <li>
              <a href="#for-talent" className="nav-link" onClick={(e) => handleNavClick(e, "#for-talent")}>
                For Talent
              </a>
            </li>
            <li>
              <a href="#for-companies" className="nav-link" onClick={(e) => handleNavClick(e, "#for-companies")}>
                For Companies
              </a>
            </li>
            <li>
              <a href="#faq" className="nav-link" onClick={(e) => handleNavClick(e, "#faq")}>
                FAQ
              </a>
            </li>
          </ul>

          <div className="nav-actions">
            <button
              type="button"
              className="btn btn-ghost"
              onClick={() => showToast("🔑 Log-in modal opened (Demo mode)")}
            >
              Log In
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => showToast("🚀 Welcome to Gigs4Grads onboarding!")}
            >
              Get Started
            </button>
            <button
              type="button"
              className="mobile-menu-toggle"
              aria-label="Toggle Navigation Menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                display: "none",
                background: "none",
                border: "none",
                padding: "8px",
                cursor: "pointer",
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {mobileMenuOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div
            className="mobile-nav-drawer"
            style={{
              padding: "16px 24px 24px",
              background: "rgba(255, 255, 255, 0.98)",
              borderBottom: "1px solid var(--border)",
              boxShadow: "var(--shadow-lg)",
            }}
          >
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "16px" }}>
              <li>
                <a href="#features" className="nav-link" onClick={(e) => handleNavClick(e, "#features")}>
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="nav-link" onClick={(e) => handleNavClick(e, "#how-it-works")}>
                  How It Works
                </a>
              </li>
              <li>
                <a href="#for-talent" className="nav-link" onClick={(e) => handleNavClick(e, "#for-talent")}>
                  For Talent
                </a>
              </li>
              <li>
                <a href="#for-companies" className="nav-link" onClick={(e) => handleNavClick(e, "#for-companies")}>
                  For Companies
                </a>
              </li>
              <li>
                <a href="#faq" className="nav-link" onClick={(e) => handleNavClick(e, "#faq")}>
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}
