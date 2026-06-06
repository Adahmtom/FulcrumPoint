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

/* ─── Mission + Values — new dark section below hero ─── */
export function MissionValuesSection() {
  return (
    <section className="mv-section">
      <div className="mv-inner">
        {/* Left: Our Mission */}
        <div className="mv-col">
          <div className="eyebrow mv-eyebrow">Our Mission</div>
          <p className="mv-body">
            To build enduring value in skilled trade businesses by applying disciplined,
            operator-led operational value creation that drives sustainable growth,
            profitability, and attractive exits.
          </p>
        </div>

        {/* Divider */}
        <div className="mv-divider" aria-hidden="true" />

        {/* Right: Our Values */}
        <div className="mv-col">
          <div className="eyebrow mv-eyebrow">Our Values</div>
          <p className="mv-body">
            We empower people, advance diverse talent, and invest in communities while
            regenerating the skilled trades workforce through sustainable practices,
            creating a resilient, thriving future for our industry.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── About Us section (formerly "Message From our Founder") ─── */
export function AboutUsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const tri1Ref = useRef<SVGGElement>(null);
  const sq2Ref  = useRef<SVGGElement>(null);
  const sq3Ref  = useRef<SVGGElement>(null);
  const sq1Ref  = useRef<SVGGElement>(null);
  const tri2Ref = useRef<SVGGElement>(null);

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
        const totalTravel = rect.height + vh;
        const progress = Math.max(0, Math.min(1, (vh - rect.top) / totalTravel));

        let factor: number;
        if (progress < 0.15)      factor = 0;
        else if (progress < 0.45) factor = (progress - 0.15) / 0.30;
        else if (progress < 0.55) factor = 1;
        else if (progress < 0.85) factor = 1 - (progress - 0.55) / 0.30;
        else                      factor = 0;

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
    <>
      {/* ── About Us block (white bg, geo shapes on right) ── */}
      <section className="about-us-section" ref={sectionRef}>
        <div className="about-us-geo" aria-hidden="true">
          <svg className="about-us-geo-svg" viewBox="-156 -150 495 570"
            xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
            <g ref={tri1Ref}>
              <path d="M 0 0 L 0 182 L 182 182 L 0 0 Z"
                transform="matrix(1,0,0,1,0,-140.382)" fill="#7aa2ce" opacity="0.35" />
            </g>
            <g ref={sq2Ref}>
              <rect width="182" height="182"
                transform="matrix(1,0,0,1,-146.2714,5.8893)" fill="#4E546B" opacity="0.10" />
            </g>
            <g ref={sq3Ref}>
              <rect width="182" height="182"
                transform="matrix(1,0,0,1,146.2714,5.8893)" fill="#0d2756" opacity="0.08" />
            </g>
            <g ref={sq1Ref}>
              <rect width="182" height="182"
                transform="matrix(1,0,0,1,0,152.1607)" fill="#4E546B" opacity="0.08" />
            </g>
            <g ref={tri2Ref}>
              <path d="M 0 0 L 0 90 L 90 90 L 0 0 Z"
                transform="matrix(1,0,0,1,164.332,314.8853)" fill="#EC8647" opacity="0.55" />
            </g>
          </svg>
        </div>

        <div className="about-us-inner">
          <div className="eyebrow anim-up">About Us</div>
          <h2 className="about-us-headline anim-up delay-1">
            We invest in the people<br />
            who build <em>legacies.</em>
          </h2>
          <p className="about-us-body anim-up delay-2">
            Skilled trades are more than jobs — they are legacies. For generations, these
            professions have built livelihoods, supported families, and sustained
            communities. From electricians who power cities to welders who form the
            backbone of our infrastructure, the skilled trades represent a culture defined
            by resilience, craftsmanship, and service.
          </p>
          <Link href="/team" className="about-us-link anim-up delay-3">
            Meet our Team
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ── Competitive Differentiation teaser ── */}
      <section className="comp-diff-section">
        <div className="comp-diff-inner">
          <div className="comp-diff-header">
            <div className="eyebrow">Our Differentiation</div>
            <h2 className="comp-diff-headline">
              Our Competitive Operational<br />Value Creation Differentiation
            </h2>
          </div>
          <div className="comp-diff-body-grid">
            <p className="comp-diff-body">
              FulcrumPoint Holdings differentiates itself by operating at the intersection of hands-on
              operator leadership, disciplined operational execution, and exit-oriented value creation.
              While many firms emphasize scale, culture, or capital deployment, FulcrumPoint&apos;s
              approach is defined by how value is built inside the business and how that value is
              ultimately realized at exit.
            </p>
            <p className="comp-diff-body">
              Unlike firms focused primarily on targeting businesses to apply their financial
              engineering strategy, FulcrumPoint targets skilled trade companies with strong
              fundamentals but untapped operational potential as its primary strategy. Our focus is not
              simply fueling growth but unlocking it — by addressing execution gaps in systems,
              leadership structure, financial discipline, and workforce scalability — allowing us to
              transform under-optimized businesses into resilient, high-performing platforms capable
              of sustaining EBITDA growth, free cash flow generation, and multiple expansion.
            </p>
            <p className="comp-diff-body">
              While traditional private equity firms rely on standardized playbooks and external
              executives, FulcrumPoint is operator-led and dedicated to elevating and refining those
              strategies. Our value creation is driven by practitioners with real-world experience
              running complex, execution-intensive organizations — resulting in faster diagnosis, more
              practical solutions, and deeper alignment with founder-operators, particularly in
              rollover equity partnerships where trust, credibility, and shared accountability are
              essential.
            </p>
            <p className="comp-diff-body">
              While people-first cultures and professional development are important, FulcrumPoint
              differentiates itself by connecting operational improvements directly to financial
              outcomes. Our initiatives — from digital transformation and data-driven decision systems
              to talent optimization, pricing discipline, and selective M&amp;A — are designed with a
              clear line of sight to cash-on-cash returns (DPI), Internal Rate of Return (IRR), and
              long-term exit value. Growth is not pursued for its own sake, but as a means to build
              durable, scalable businesses that command premium valuations.
            </p>
            <p className="comp-diff-body full-width">
              Ultimately, FulcrumPoint&apos;s advantage lies in its alignment of partnership, execution,
              and outcomes. We partner with founders who retain meaningful equity, apply operator-led
              operational rigor to compound value over time, and pursue exits only when that value is
              demonstrable, defensible, and fully realized.
            </p>
          </div>
          <div className="comp-diff-cta">
            <Link href="/about/strategy" className="btn-primary">
              Our Investment Strategy
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

/* ─── Mission / Thesis band (kept for possible use) ─── */
export function MissionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const tri1Ref = useRef<SVGGElement>(null);
  const sq2Ref  = useRef<SVGGElement>(null);
  const sq3Ref  = useRef<SVGGElement>(null);
  const sq1Ref  = useRef<SVGGElement>(null);
  const tri2Ref = useRef<SVGGElement>(null);

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
        const totalTravel = rect.height + vh;
        const progress = Math.max(0, Math.min(1, (vh - rect.top) / totalTravel));
        let factor: number;
        if (progress < 0.15)      factor = 0;
        else if (progress < 0.45) factor = (progress - 0.15) / 0.30;
        else if (progress < 0.55) factor = 1;
        else if (progress < 0.85) factor = 1 - (progress - 0.55) / 0.30;
        else                      factor = 0;
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
      <div className="mission-geo" aria-hidden="true">
        <svg className="mission-geo-svg" viewBox="-156 -150 495 570"
          xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
          <g ref={tri1Ref}>
            <path d="M 0 0 L 0 182 L 182 182 L 0 0 Z"
              transform="matrix(1,0,0,1,0,-140.382)" fill="#7aa2ce" />
          </g>
          <g ref={sq2Ref}>
            <rect width="182" height="182"
              transform="matrix(1,0,0,1,-146.2714,5.8893)" fill="#4E546B" opacity="0.55" />
          </g>
          <g ref={sq3Ref}>
            <rect width="182" height="182"
              transform="matrix(1,0,0,1,146.2714,5.8893)" fill="#0d2756" />
          </g>
          <g ref={sq1Ref}>
            <rect width="182" height="182"
              transform="matrix(1,0,0,1,0,152.1607)" fill="#4E546B" />
          </g>
          <g ref={tri2Ref}>
            <path d="M 0 0 L 0 90 L 90 90 L 0 0 Z"
              transform="matrix(1,0,0,1,164.332,314.8853)" fill="#EC8647" />
          </g>
        </svg>
      </div>
      <div className="mission-inner">
        <div className="mission-left">
          <div className="eyebrow mission-eyebrow anim-up">About Us</div>
          <h2 className="mission-headline anim-up delay-1">
            We invest in the people<br />
            who build <em>legacies.</em>
          </h2>
          <p className="mission-body">
            Skilled trades are more than jobs — they are legacies. For generations, these professions
            have built livelihoods, supported families, and sustained communities. From electricians
            who power cities to welders who form the backbone of our infrastructure, the skilled
            trades represent a culture defined by resilience, craftsmanship, and service.
          </p>
          <Link href="/team" className="mission-link">
            Meet our Team
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
          <Link href="/contact" className="btn-primary">
            Submit a Deal
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <Link href="/about/strategy" className="btn-outline">View Full Criteria</Link>
        </div>
      </div>
    </section>
  );
}

/* ─── Sector cards ─── */
export function SectorsSection() {
  const sectors = [
    { slug: 'hvac',         label: 'HVAC & Cooling',          desc: 'Residential and commercial HVAC installation, service, and replacement with strong recurring maintenance revenue.',                                           stat: '$22B+',  statLbl: 'Market size',    color: '#EC8647' },
    { slug: 'electrical',   label: 'Electrical',               desc: 'Licensed electrical contractors serving residential, commercial, and industrial customers across growing metros.',                                            stat: '$220B+', statLbl: 'Market size',    color: '#4E546B' },
    { slug: 'plumbing',     label: 'Plumbing',                 desc: 'Plumbing service, repair, and installation businesses with high repeat-customer rates and essential service positioning.',                                    stat: '$130B+', statLbl: 'Market size',    color: '#b8bdd0' },
    { slug: 'construction', label: 'Commercial Construction',  desc: 'Specialty subcontractors and general contractors focused on light commercial and industrial build-out.',                                                      stat: '$1.8T+', statLbl: 'Industry output', color: '#EC8647' },
    { slug: 'industrial',   label: 'Industrial Trades',        desc: 'Industrial maintenance, repair, and operations (MRO) service providers supporting manufacturing and logistics facilities.',                                   stat: '$480B+', statLbl: 'MRO market',     color: '#4E546B' },
  ];
  return (
    <section className="sectors-section">
      <div className="sectors-inner">
        <div className="sectors-header">
          <div className="eyebrow">Where We Invest</div>
          <h2 className="sectors-headline">Five sectors.<br />One operational playbook.</h2>
          <Link href="/about/strategy" className="sectors-all-link">
            Our Investment Approach
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
        const progress = Math.max(0, Math.min(1, (vh - rect.top) / (rect.height + vh)));
        const e = progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2;
        const x = progress < 0.5
          ? 120 * (1 - e * 2)
          : -80 * ((e - 0.5) * 2);
        headline.style.transform = `translate3d(${x}px, 0, 0)`;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(raf); };
  }, []);

  return (
    <section className="cta-section">
      <div className="cta-geo" aria-hidden="true">
        <div className="cta-geo-orange" />
        <div className="cta-geo-slate" />
      </div>
      <div className="cta-inner">
        <div className="cta-headline-wrapper" ref={headlineRef}>
          <h2 className="cta-headline">
            Ready to explore<br />a partnership?
          </h2>
        </div>
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
            <Link href="/contact" className="cta-btn-primary">
              Submit a Deal
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link href="/contact" className="cta-btn-outline">Investor Inquiries</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
