'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const investmentFocusLinks = {
  'How We Invest': [
    { label: 'Value Creation', href: '/investment-focus/value-creation' },
    { label: 'Operational Approach', href: '/investment-focus/approach' },
  ],
  'Where We Invest': [
    { label: 'HVAC & Cooling Systems', href: '/investment-focus/hvac' },
    { label: 'Electrical', href: '/investment-focus/electrical' },
    { label: 'Plumbing', href: '/investment-focus/plumbing' },
    { label: 'Commercial Construction', href: '/investment-focus/construction' },
    { label: 'Industrial Trades', href: '/investment-focus/industrial' },
  ],
};

const aboutLinks = {
  'Our Firm': [
    { label: 'Who We Are', href: '/about' },
    { label: 'News & Insights', href: '/insights' },
  ],
  'Our People': [
    { label: 'Leadership Team', href: '/team' },
    { label: 'Careers', href: '/careers' },
  ],
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // lock body scroll when mobile menu open
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
          {/* Logo */}
          <Link href="/" className="nav-logo" onClick={() => setMobileOpen(false)}>
            <Image src="/logo.svg" alt="FulcrumPoint Holdings" width={200} height={40} priority />
          </Link>

          {/* Desktop center links */}
          <ul className="nav-links">
            {/* Investment Focus */}
            <li className="nav-item">
              <button className="nav-link">
                Investment Focus
                <span className="nav-arrow" />
              </button>
              <div className="nav-dropdown">
                {Object.entries(investmentFocusLinks).map(([group, links]) => (
                  <div key={group} className="dropdown-group">
                    <div className="dropdown-group-label">{group}</div>
                    {links.map(l => (
                      <Link key={l.href} href={l.href} className="dropdown-link">{l.label}</Link>
                    ))}
                  </div>
                ))}
              </div>
            </li>

            {/* Portfolio */}
            <li className="nav-item">
              <Link href="/portfolio" className="nav-link">Portfolio</Link>
            </li>

            {/* Team */}
            <li className="nav-item">
              <Link href="/team" className="nav-link">Team</Link>
            </li>

            {/* About */}
            <li className="nav-item">
              <button className="nav-link">
                About
                <span className="nav-arrow" />
              </button>
              <div className="nav-dropdown">
                {Object.entries(aboutLinks).map(([group, links]) => (
                  <div key={group} className="dropdown-group">
                    <div className="dropdown-group-label">{group}</div>
                    {links.map(l => (
                      <Link key={l.href} href={l.href} className="dropdown-link">{l.label}</Link>
                    ))}
                  </div>
                ))}
              </div>
            </li>
          </ul>

          {/* Desktop utilities */}
          <div className="nav-utils">
            <Link href="/contact" className="nav-util">Contact</Link>
            <Link href="/investor-login" className="nav-util cta">
              Investor Login
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className={`nav-hamburger${mobileOpen ? ' open' : ''}`}
            onClick={() => setMobileOpen(v => !v)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-menu${mobileOpen ? ' open' : ''}`}>
        {/* Investment Focus */}
        <button
          className="mobile-link"
          style={{ display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%', background:'none', border:'none', cursor:'pointer', fontFamily:'inherit', textAlign:'left' }}
          onClick={() => toggleMobile('invest')}
        >
          Investment Focus
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ transform: mobileExpanded === 'invest' ? 'rotate(180deg)' : 'none', transition:'transform 0.2s', flexShrink:0 }}>
            <path d="M3 6L8 11L13 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>
        {mobileExpanded === 'invest' && (
          <div className="mobile-sub">
            {Object.entries(investmentFocusLinks).map(([group, links]) => (
              <div key={group}>
                <div className="mobile-sub-label">{group}</div>
                {links.map(l => (
                  <Link key={l.href} href={l.href} className="mobile-sub-link" onClick={() => setMobileOpen(false)}>{l.label}</Link>
                ))}
              </div>
            ))}
          </div>
        )}

        <Link href="/portfolio" className="mobile-link" onClick={() => setMobileOpen(false)}>Portfolio</Link>
        <Link href="/team" className="mobile-link" onClick={() => setMobileOpen(false)}>Team</Link>

        <button
          className="mobile-link"
          style={{ display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%', background:'none', border:'none', cursor:'pointer', fontFamily:'inherit', textAlign:'left' }}
          onClick={() => toggleMobile('about')}
        >
          About
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ transform: mobileExpanded === 'about' ? 'rotate(180deg)' : 'none', transition:'transform 0.2s', flexShrink:0 }}>
            <path d="M3 6L8 11L13 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>
        {mobileExpanded === 'about' && (
          <div className="mobile-sub">
            {Object.entries(aboutLinks).map(([group, links]) => (
              <div key={group}>
                <div className="mobile-sub-label">{group}</div>
                {links.map(l => (
                  <Link key={l.href} href={l.href} className="mobile-sub-link" onClick={() => setMobileOpen(false)}>{l.label}</Link>
                ))}
              </div>
            ))}
          </div>
        )}

        <div style={{ marginTop: 32, display:'flex', flexDirection:'column', gap:12 }}>
          <Link href="/contact" className="btn-outline" style={{ justifyContent:'center' }} onClick={() => setMobileOpen(false)}>Contact</Link>
          <Link href="/investor-login" className="btn-primary" style={{ justifyContent:'center', background:'var(--orange)' }} onClick={() => setMobileOpen(false)}>Investor Login</Link>
        </div>
      </div>
    </>
  );
}
