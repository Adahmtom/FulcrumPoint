'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const INVESTOR_FORM = 'https://docs.google.com/forms/d/e/1FAIpQLSdZMfgkjkbdoN6393uE_28EP_i-w_lPgRpLfLhYYwt80PkKXA/viewform?usp=header';
const SELLER_FORM   = 'https://docs.google.com/forms/d/e/1FAIpQLSd0Xtk8oq0N4Q0u4ZCpROnY3tIGiuhZV_t9pi87fbpJmP2_3Q/viewform?usp=header';

// ── About dropdown ────────────────────────────────────────────────────────────
const aboutGroups = [
  {
    group: 'Our Firm',
    links: [
      { label: 'Who We Are',       href: '/about'         },
      { label: 'Team',             href: '/team'          },
      { label: 'Mission & Vision', href: '/about/mission' },
    ],
  },
] as const;

export default function Navbar() {
  const [scrolled,        setScrolled]        = useState(false);
  const [mobileOpen,      setMobileOpen]      = useState(false);
  const [mobileExpanded,  setMobileExpanded]  = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const toggleMobile = (key: string) =>
    setMobileExpanded(prev => (prev === key ? null : key));

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-inner">

          {/* ── Logo ─────────────────────────────────────────────── */}
          <Link href="/" className="nav-logo-box" onClick={() => setMobileOpen(false)}>
            <Image src="/logo.svg" alt="FulcrumPoint Holdings" width={328} height={78} priority className="nav-logo-img" />
          </Link>

          {/* ── Desktop center links ─────────────────────────────── */}
          <ul className="nav-links">

            {/* About dropdown */}
            <li className="nav-item">
              <Link href="/about" className="nav-link">
                About <span className="nav-arrow" />
              </Link>
              <div className="nav-dropdown">
                {aboutGroups.map(({ group, links }) => (
                  <div key={group} className="dropdown-group">
                    <div className="dropdown-group-label">{group}</div>
                    {links.map(l => (
                      <Link key={l.href} href={l.href} className="dropdown-link">{l.label}</Link>
                    ))}
                  </div>
                ))}
              </div>
            </li>

            {/* Our Investment Strategy */}
            <li className="nav-item">
              <Link href="/about/strategy" className="nav-link">Our Investment Strategy</Link>
            </li>

            {/* For Business Owners */}
            <li className="nav-item">
              <Link href="/for-business-owners" className="nav-link">For Business Owners</Link>
            </li>

          </ul>

          {/* ── Desktop right utilities ──────────────────────────── */}
          <div className="nav-utils">
            <a href={INVESTOR_FORM} target="_blank" rel="noopener noreferrer" className="nav-util">Investor Contact Form</a>
            <a href={SELLER_FORM} target="_blank" rel="noopener noreferrer" className="nav-util cta">Seller Intake Form</a>
          </div>

          {/* ── Hamburger ────────────────────────────────────────── */}
          <button
            className={`nav-hamburger${mobileOpen ? ' open' : ''}`}
            onClick={() => setMobileOpen(v => !v)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* ── Mobile menu ──────────────────────────────────────────── */}
      <div className={`mobile-menu${mobileOpen ? ' open' : ''}`}>

        {/* About */}
        <button className="mobile-link mobile-link--toggle" onClick={() => toggleMobile('about')}>
          About
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ transform: mobileExpanded === 'about' ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s', flexShrink: 0 }}>
            <path d="M3 6L8 11L13 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>
        {mobileExpanded === 'about' && (
          <div className="mobile-sub">
            {aboutGroups.map(({ group, links }) => (
              <div key={group}>
                <div className="mobile-sub-label">{group}</div>
                {links.map(l => (
                  <Link key={l.href} href={l.href} className="mobile-sub-link"
                    onClick={() => setMobileOpen(false)}>{l.label}</Link>
                ))}
              </div>
            ))}
          </div>
        )}

        <Link href="/about/strategy"      className="mobile-link" onClick={() => setMobileOpen(false)}>Our Investment Strategy</Link>
        <Link href="/for-business-owners" className="mobile-link" onClick={() => setMobileOpen(false)}>For Business Owners</Link>

        <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 12 }}>
          <a href={INVESTOR_FORM} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ justifyContent: 'center' }} onClick={() => setMobileOpen(false)}>Investor Contact Form</a>
          <a href={SELLER_FORM} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ justifyContent: 'center', background: 'var(--orange)' }} onClick={() => setMobileOpen(false)}>Seller Intake Form</a>
        </div>
      </div>
    </>
  );
}
