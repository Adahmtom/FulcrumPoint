'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// ── Investment Focus ─────────────────────────────────────────────────────────
const investmentFocusGroups = [
  {
    group: 'How We Invest',
    links: [
      { label: 'Value Creation',          href: '/investment-focus/value-creation' },
      { label: 'Operational Opportunity', href: '/investment-focus/approach'        },
    ],
  },
  {
    group: 'Where We Invest',
    links: [
      {
        label: 'Building Systems',
        sub: [
          { label: 'HVAC & Cooling System', href: '/investment-focus/hvac'        },
          { label: 'Electrical',            href: '/investment-focus/electrical'   },
          { label: 'Plumbing',              href: '/investment-focus/plumbing'     },
        ],
      },
      {
        label: 'Commercial Construction',
        sub: [
          { label: 'Structural',            href: '/investment-focus/structural'   },
          { label: 'Architectural',         href: '/investment-focus/architectural'},
          { label: 'Civil',                 href: '/investment-focus/civil'        },
          { label: 'Low Voltage / Systems', href: '/investment-focus/low-voltage'  },
        ],
      },
      { label: 'Industrial Trades', href: '/investment-focus/industrial' },
    ],
  },
] as const;

// ── About ────────────────────────────────────────────────────────────────────
const aboutGroups = [
  {
    group: 'Our Firm',
    links: [
      { label: 'Who We Are',              href: '/about'         },
      { label: 'Vision & Mission',        href: '/about/mission' },
      { label: 'Our Investment Strategy', href: '/about/strategy'},
    ],
  },
] as const;

type SubLink   = { readonly label: string; readonly href: string };
type FlatLink  = { readonly label: string; readonly href: string };
type NestedLink = { readonly label: string; readonly sub: readonly SubLink[] };
type DropdownLink = FlatLink | NestedLink;

function isNested(l: DropdownLink): l is NestedLink { return 'sub' in l; }


export default function Navbar() {
  const [scrolled,        setScrolled]        = useState(false);
  const [mobileOpen,      setMobileOpen]      = useState(false);
  const [mobileExpanded,  setMobileExpanded]  = useState<string | null>(null);
  const [mobileSub,       setMobileSub]       = useState<string | null>(null);
  const [activeSubGroup,  setActiveSubGroup]  = useState<string | null>(null);

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

  // Resolve the right-panel sub-links for the active group (null = no panel)
  const activeSubLinks = activeSubGroup
    ? (investmentFocusGroups
        .flatMap(g => g.links as readonly DropdownLink[])
        .find((l): l is NestedLink => isNested(l) && l.label === activeSubGroup)
      )?.sub ?? []
    : [];

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-inner">

          {/* ── Logo in bordered box ─────────────────────────────── */}
          <Link href="/" className="nav-logo-box" onClick={() => setMobileOpen(false)}>
            <Image src="/logo.svg" alt="FulcrumPoint Holdings" width={160} height={32} priority />
          </Link>

          {/* ── Desktop center links ─────────────────────────────── */}
          <ul className="nav-links">

            {/* ── Investment Focus — mega dropdown ── */}
            <li className="nav-item" onMouseLeave={() => setActiveSubGroup(null)}>
              <button className="nav-link">
                Investment Focus <span className="nav-arrow" />
              </button>

              <div className="nav-dropdown nav-dropdown--mega">
                {/* Left column: nav groups */}
                <div className="mega-left">
                  {investmentFocusGroups.map(({ group, links }) => (
                    <div key={group} className="dropdown-group">
                      <div className="dropdown-group-label">{group}</div>
                      {(links as readonly DropdownLink[]).map(link =>
                        isNested(link) ? (
                          /* Nested trigger — hover updates right panel */
                          <button
                            key={link.label}
                            className={`dropdown-link dropdown-link--trigger${activeSubGroup === link.label ? ' is-active' : ''}`}
                            onMouseEnter={() => setActiveSubGroup(link.label)}
                          >
                            {link.label}
                            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true" className="sub-chevron">
                              <path d="M3 1.5l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </button>
                        ) : (
                          <Link
                            key={(link as FlatLink).href}
                            href={(link as FlatLink).href}
                            className="dropdown-link"
                            onMouseEnter={() => setActiveSubGroup(null)}
                          >
                            {link.label}
                          </Link>
                        )
                      )}
                    </div>
                  ))}
                </div>

                {/* Right column: only visible when a nested item is hovered */}
                {activeSubGroup && activeSubLinks.length > 0 && (
                  <div className="mega-right">
                    <div className="mega-right-eyebrow">Where We Invest</div>
                    <div className="mega-right-title">{activeSubGroup}</div>
                    <div className="mega-right-links">
                      {activeSubLinks.map(s => (
                        <Link key={s.href} href={s.href} className="dropdown-link">{s.label}</Link>
                      ))}
                    </div>
                  </div>
                )}
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
                About <span className="nav-arrow" />
              </button>
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
          </ul>

          {/* ── Desktop right utilities ──────────────────────────── */}
          <div className="nav-utils">
            <Link href="/contact" className="nav-util">Contact</Link>
            {/* TODO: replace href with Google Form URL when provided */}
            <Link href="/submit" className="nav-util cta">Submit A Deal</Link>
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

        {/* Investment Focus */}
        <button className="mobile-link mobile-link--toggle" onClick={() => toggleMobile('invest')}>
          Investment Focus
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ transform: mobileExpanded === 'invest' ? 'rotate(180deg)' : 'none', transition:'transform 0.2s', flexShrink:0 }}>
            <path d="M3 6L8 11L13 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>
        {mobileExpanded === 'invest' && (
          <div className="mobile-sub">
            {investmentFocusGroups.map(({ group, links }) => (
              <div key={group}>
                <div className="mobile-sub-label">{group}</div>
                {(links as readonly DropdownLink[]).map(link =>
                  isNested(link) ? (
                    <div key={link.label}>
                      <button className="mobile-sub-link mobile-sub-link--toggle"
                        onClick={() => setMobileSub(prev => prev === link.label ? null : link.label)}>
                        {link.label}
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" style={{ transform: mobileSub === link.label ? 'rotate(90deg)' : 'none', transition:'transform 0.2s', flexShrink:0 }}>
                          <path d="M3.5 1.5l5 5-5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                        </svg>
                      </button>
                      {mobileSub === link.label && (
                        <div className="mobile-sub-nested">
                          {link.sub.map(s => (
                            <Link key={s.href} href={s.href} className="mobile-sub-link mobile-sub-link--child"
                              onClick={() => setMobileOpen(false)}>{s.label}</Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link key={(link as FlatLink).href} href={(link as FlatLink).href}
                      className="mobile-sub-link" onClick={() => setMobileOpen(false)}>
                      {link.label}
                    </Link>
                  )
                )}
              </div>
            ))}
          </div>
        )}

        <Link href="/portfolio" className="mobile-link" onClick={() => setMobileOpen(false)}>Portfolio</Link>
        <Link href="/team"      className="mobile-link" onClick={() => setMobileOpen(false)}>Team</Link>

        {/* About */}
        <button className="mobile-link mobile-link--toggle" onClick={() => toggleMobile('about')}>
          About
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ transform: mobileExpanded === 'about' ? 'rotate(180deg)' : 'none', transition:'transform 0.2s', flexShrink:0 }}>
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

        <div style={{ marginTop:32, display:'flex', flexDirection:'column', gap:12 }}>
          <Link href="/contact" className="btn-outline" style={{ justifyContent:'center' }} onClick={() => setMobileOpen(false)}>Contact</Link>
          <Link href="/submit"  className="btn-primary" style={{ justifyContent:'center', background:'var(--orange)' }} onClick={() => setMobileOpen(false)}>Submit A Deal</Link>
        </div>
      </div>
    </>
  );
}
