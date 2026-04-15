'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';

/* ─── Marquee band ─── */
function MarqueeBand() {
  const items = ['HVAC & Cooling', 'Electrical', 'Plumbing', 'Commercial Construction', 'Industrial Trades'];
  const repeated = [...items, ...items, ...items];
  return (
    <div className="marquee-band" aria-hidden="true">
      <div className="marquee-track">
        {repeated.map((item, i) => (
          <span key={i} className="marquee-item">
            <span className="marquee-dot" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── Mission / Thesis band ─── */
export function MissionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  // One ref per shape for individual split/converge
  const tri1Ref = useRef<SVGGElement>(null); // blue triangle  → flies up
  const sq2Ref  = useRef<SVGGElement>(null); // left square    → flies left
  const sq3Ref  = useRef<SVGGElement>(null); // right square   → flies right
  const sq1Ref  = useRef<SVGGElement>(null); // bottom square  → flies down
  const tri2Ref = useRef<SVGGElement>(null); // orange tri     → flies down-right

  // Split offsets in SVG units (direction each shape travels when "apart")
  const SPLITS = {
    tri1: { x:   0, y: -130 },
    sq2:  { x: -130, y:   0 },
    sq3:  { x:  130, y:   0 },
    sq1:  { x:   0, y:  130 },
    tri2: { x:  100, y:  100 },
  } as const;

  useEffect(() => {
    let rafId: number;
    const onScroll = () => {
      rafId = requestAnimationFrame(() => {
        if (!sectionRef.current) return;
        const rect = sectionRef.current.getBoundingClientRect();
        const vh   = window.innerHeight;

        // progress: 0 = section entering viewport bottom, 1 = section exiting viewport top
        const totalTravel = rect.height + vh;
        const progress = Math.max(0, Math.min(1, (vh - rect.top) / totalTravel));

        // Assembly factor: split → together (0.15–0.45) → together → split (0.55–0.85)
        let factor: number;
        if (progress < 0.15)      factor = 0;
        else if (progress < 0.45) factor = (progress - 0.15) / 0.30;
        else if (progress < 0.55) factor = 1;
        else if (progress < 0.85) factor = 1 - (progress - 0.55) / 0.30;
        else                      factor = 0;

        // Ease in-out
        const e = factor < 0.5
          ? 2 * factor * factor
          : 1 - Math.pow(-2 * factor + 2, 2) / 2;

        const apply = (ref: React.RefObject<SVGGElement | null>, ox: number, oy: number) => {
          if (!ref.current) return;
          ref.current.setAttribute('transform', `translate(${ox * (1 - e)},${oy * (1 - e)})`);
        };

        apply(tri1Ref, SPLITS.tri1.x, SPLITS.tri1.y);
        apply(sq2Ref,  SPLITS.sq2.x,  SPLITS.sq2.y);
        apply(sq3Ref,  SPLITS.sq3.x,  SPLITS.sq3.y);
        apply(sq1Ref,  SPLITS.sq1.x,  SPLITS.sq1.y);
        apply(tri2Ref, SPLITS.tri2.x, SPLITS.tri2.y);
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(rafId); };
  }, []);

  return (
    <section className="mission-section" ref={sectionRef}>
      {/* Decorative geometric cluster — split/converge on scroll */}
      <div className="mission-geo" aria-hidden="true">
        <svg className="mission-geo-svg" viewBox="-156 -150 495 570"
          xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">

          {/* tri1 — brand light blue */}
          <g ref={tri1Ref}>
            <path d="M 0 0 L 0 182 L 182 182 L 0 0 Z"
              transform="matrix(1,0,0,1,0,-140.382)" fill="#7aa2ce" />
          </g>
          {/* sq2 — slate at 50% opacity (muted depth) */}
          <g ref={sq2Ref}>
            <rect width="182" height="182"
              transform="matrix(1,0,0,1,-146.2714,5.8893)" fill="#4E546B" opacity="0.55" />
          </g>
          {/* sq3 — dark navy (hero triangle color) */}
          <g ref={sq3Ref}>
            <rect width="182" height="182"
              transform="matrix(1,0,0,1,146.2714,5.8893)" fill="#0d2756" />
          </g>
          {/* sq1 — slate (core brand color) */}
          <g ref={sq1Ref}>
            <rect width="182" height="182"
              transform="matrix(1,0,0,1,0,152.1607)" fill="#4E546B" />
          </g>
          {/* tri2 — brand orange */}
          <g ref={tri2Ref}>
            <path d="M 0 0 L 0 90 L 90 90 L 0 0 Z"
              transform="matrix(1,0,0,1,164.332,314.8853)" fill="#EC8647" />
          </g>
        </svg>
      </div>

      <div className="mission-inner">
        <div className="mission-left">
          <div className="eyebrow mission-eyebrow anim-up">Our Thesis</div>
          <h2 className="mission-headline anim-up delay-1">
            Skilled trades are the<br />
            backbone of America.<br />
            <em>We build them to last.</em>
          </h2>
          <p className="mission-body">
            FulcrumPoint Holdings is an operator-led private equity firm focused exclusively on skilled
            trade businesses across the Sun Belt and Southeast. We acquire profitable, owner-operated
            companies and apply hands-on operational expertise to accelerate growth, build management
            depth, and create exceptional exit outcomes.
          </p>
          <p className="mission-body" style={{ marginTop: '20px' }}>
            We are not financial engineers. We are operators who have built and run companies in the
            industries where we invest—bringing pattern recognition, industry relationships, and
            execution capability that generalist firms cannot replicate.
          </p>
          <Link href="/investment-focus" className="mission-link">
            Our investment approach
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── Criteria / Stats section ─── */
export function CriteriaSection() {
  const stats = [
    { val: '$1M–$10M', label: 'EBITDA Target Range' },
    { val: '$5M–$50M', label: 'Revenue Sweet Spot' },
    { val: '2–5×', label: 'Target MOIC' },
    { val: '5–7 yr', label: 'Hold Period' },
  ];
  const criteria = [
    { icon: '◆', title: 'Recurring Revenue', body: 'Service contracts, maintenance agreements, and repeat residential or commercial relationships.' },
    { icon: '◆', title: 'Operator-Owned', body: 'Founder or family-operated businesses with deep customer loyalty and untapped scalability.' },
    { icon: '◆', title: 'Essential Services', body: 'Non-discretionary trades that remain in demand regardless of economic cycles.' },
    { icon: '◆', title: 'Geographic Density', body: 'Concentrated service territories in high-growth Sun Belt and Southeast markets.' },
  ];
  return (
    <section className="criteria-section">
      <div className="criteria-inner">
        <div className="criteria-header">
          <div className="eyebrow">Investment Criteria</div>
          <h2 className="criteria-headline">What we look for</h2>
        </div>

        <div className="criteria-stats-row">
          {stats.map((s) => (
            <div key={s.label} className="criteria-stat">
              <div className="criteria-stat-val">{s.val}</div>
              <div className="criteria-stat-lbl">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="criteria-grid">
          {criteria.map((c) => (
            <div key={c.title} className="criteria-card">
              <div className="criteria-card-icon">{c.icon}</div>
              <h3 className="criteria-card-title">{c.title}</h3>
              <p className="criteria-card-body">{c.body}</p>
            </div>
          ))}
        </div>

        <div className="criteria-cta">
          <Link href="/submit" className="btn-primary">
            Submit a Deal
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <Link href="/investment-focus/criteria" className="btn-outline">View Full Criteria</Link>
        </div>
      </div>
    </section>
  );
}

/* ─── Sector cards ─── */
export function SectorsSection() {
  const sectors = [
    {
      slug: 'hvac',
      label: 'HVAC & Cooling',
      desc: 'Residential and commercial HVAC installation, service, and replacement with strong recurring maintenance revenue.',
      stat: '$22B+',
      statLbl: 'Market size',
      color: '#EC8647',
    },
    {
      slug: 'electrical',
      label: 'Electrical',
      desc: 'Licensed electrical contractors serving residential, commercial, and industrial customers across growing metros.',
      stat: '$220B+',
      statLbl: 'Market size',
      color: '#4E546B',
    },
    {
      slug: 'plumbing',
      label: 'Plumbing',
      desc: 'Plumbing service, repair, and installation businesses with high repeat-customer rates and essential service positioning.',
      stat: '$130B+',
      statLbl: 'Market size',
      color: '#b8bdd0',
    },
    {
      slug: 'construction',
      label: 'Commercial Construction',
      desc: 'Specialty subcontractors and general contractors focused on light commercial and industrial build-out.',
      stat: '$1.8T+',
      statLbl: 'Industry output',
      color: '#EC8647',
    },
    {
      slug: 'industrial',
      label: 'Industrial Trades',
      desc: 'Industrial maintenance, repair, and operations (MRO) service providers supporting manufacturing and logistics facilities.',
      stat: '$480B+',
      statLbl: 'MRO market',
      color: '#4E546B',
    },
  ];
  return (
    <section className="sectors-section">
      <div className="sectors-inner">
        <div className="sectors-header">
          <div className="eyebrow">Where We Invest</div>
          <h2 className="sectors-headline">Five sectors.<br />One operational playbook.</h2>
          <Link href="/investment-focus" className="sectors-all-link">
            View all sectors
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
        <div className="sectors-grid">
          {sectors.map((s, i) => (
            <Link key={s.slug} href={`/investment-focus/${s.slug}`} className="sector-card" style={{ '--accent': s.color } as React.CSSProperties}>
              <div className="sector-card-top">
                <span className="sector-num">0{i + 1}</span>
                <span className="sector-stat">
                  <span className="sector-stat-val">{s.stat}</span>
                  <span className="sector-stat-lbl">{s.statLbl}</span>
                </span>
              </div>
              <h3 className="sector-card-title">{s.label}</h3>
              <p className="sector-card-desc">{s.desc}</p>
              <div className="sector-card-arrow">
                <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Value Creation ─── */
export function ValueSection() {
  const pillars = [
    { num: '01', title: 'Revenue Growth', body: 'Systematic customer acquisition, geographic expansion, and service line extension built on proven playbooks.' },
    { num: '02', title: 'Operational Excellence', body: 'KPI-driven management systems, technology adoption, and process standardization that build scalable infrastructure.' },
    { num: '03', title: 'Talent & Culture', body: 'Operator-to-operator recruiting, leadership development, and retention programs that attract top field and management talent.' },
    { num: '04', title: 'M&A Integration', body: 'Disciplined bolt-on acquisition identification, diligence, and 100-day integration that accelerates platform value.' },
  ];
  return (
    <section className="value-section">
      <div className="value-inner">
        <div className="value-left">
          <div className="eyebrow" style={{ color: 'rgba(255,255,255,0.5)' }}>
            <span className="eyebrow-line" style={{ background: 'rgba(255,255,255,0.3)' }} />
            How We Create Value
          </div>
          <h2 className="value-headline">
            Operators building<br />operators.
          </h2>
          <p className="value-sub">
            Every FulcrumPoint portfolio company benefits from our proprietary Value Creation Framework—
            a structured, 100-day onboarding and multi-year growth roadmap developed from direct
            operating experience in the trades.
          </p>
          <Link href="/investment-focus/value-creation" className="value-link">
            Our value creation approach
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
        <div className="value-right">
          {pillars.map((p) => (
            <div key={p.num} className="value-pillar">
              <div className="value-pillar-num">{p.num}</div>
              <div className="value-pillar-content">
                <h3 className="value-pillar-title">{p.title}</h3>
                <p className="value-pillar-body">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Insights teaser ─── */
export function InsightsSection() {
  const posts = [
    {
      tag: 'Market Outlook',
      date: 'February 2026',
      title: 'The Skilled Trades Shortage: Why It\'s Creating a Generational Investment Opportunity',
      excerpt: 'With 3 million open trade jobs and an aging workforce, the supply-demand imbalance in skilled trades is creating durable tailwinds for well-positioned operators.',
      slug: 'skilled-trades-shortage',
    },
    {
      tag: 'Operations',
      date: 'January 2026',
      title: 'Building Recurring Revenue in HVAC: A Maintenance Agreement Playbook',
      excerpt: 'Service agreements transform project-based HVAC businesses into recurring revenue platforms. Here\'s how we implement them across our portfolio.',
      slug: 'hvac-maintenance-agreements',
    },
    {
      tag: 'M&A',
      date: 'December 2025',
      title: 'The 100-Day Integration: How We Onboard New Portfolio Companies',
      excerpt: 'The first 100 days after acquisition are the most critical. Our structured onboarding framework reduces disruption and accelerates value creation.',
      slug: 'hundred-day-integration',
    },
  ];
  return (
    <section className="insights-section">
      <div className="insights-inner">
        <div className="insights-header">
          <div>
            <div className="eyebrow">News &amp; Insights</div>
            <h2 className="insights-headline">From the FulcrumPoint team</h2>
          </div>
          <Link href="/insights" className="insights-all-link">
            All insights
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
        <div className="insights-grid">
          {posts.map((p) => (
            <Link key={p.slug} href={`/insights/${p.slug}`} className="insight-card">
              <div className="insight-card-meta">
                <span className="insight-tag">{p.tag}</span>
                <span className="insight-date">{p.date}</span>
              </div>
              <h3 className="insight-title">{p.title}</h3>
              <p className="insight-excerpt">{p.excerpt}</p>
              <div className="insight-read">
                Read more
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Bottom CTA ─── */
export function CtaSection() {
  const headlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const headline = headlineRef.current;
    if (!headline) return;
    const section = headline.closest('.cta-section') as HTMLElement;
    if (!section) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect();
        const vh = window.innerHeight;
        // 0 = section bottom touches viewport bottom; 1 = section has scrolled fully past
        const progress = Math.max(0, Math.min(1, (vh - rect.top) / (rect.height + vh)));
        // Ease in-out quad
        const e = progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2;
        // Slide from +120px (right, before section enters) → 0 (in-view) → −80px (scroll-out left)
        const x = progress < 0.5
          ? 120 * (1 - e * 2)       // enter: +120 → 0
          : -80 * ((e - 0.5) * 2);  // exit:  0 → -80
        headline.style.transform = `translate3d(${x}px, 0, 0)`;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(raf); };
  }, []);

  return (
    <section className="cta-section">
      {/* subtle geo accents */}
      <div className="cta-geo" aria-hidden="true">
        <div className="cta-geo-orange" />
        <div className="cta-geo-slate" />
      </div>

      <div className="cta-inner">
        {/* sliding headline */}
        <div className="cta-headline-wrapper" ref={headlineRef}>
          <h2 className="cta-headline">
            Ready to explore<br />a partnership?
          </h2>
        </div>

        {/* body + CTAs */}
        <div className="cta-body-wrapper">
          <div className="eyebrow" style={{ color: 'rgba(255,255,255,0.45)' }}>
            <span className="eyebrow-line" style={{ background: 'rgba(255,255,255,0.3)' }} />
            Get Started
          </div>
          <p className="cta-sub">
            Whether you&apos;re a business owner considering your next chapter, or an advisor working with
            a potential seller, we&apos;d like to hear from you.
          </p>
          <div className="cta-actions">
            <Link href="/submit" className="cta-btn-primary">
              Submit a Deal
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link href="/contact" className="cta-btn-outline">Contact Us</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
