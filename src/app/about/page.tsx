import Link from 'next/link';
import Image from 'next/image';

const glance = [
  {
    num: '01',
    title: 'Operator-First Approach',
    body: 'Every investment decision is informed by direct operating experience in skilled trades. We know these businesses because we\'ve run them — from the field to the financials.',
    href: '/about/strategy',
  },
  {
    num: '02',
    title: 'Aligned Incentives',
    body: 'We align ownership and incentives so that portfolio leaders, investors, and FulcrumPoint share in the value they create.',
    href: '/about/strategy',
  },
  {
    num: '03',
    title: 'Long-Term Value Creation',
    body: 'We invest with a long-term perspective, giving businesses the time, resources, and support needed to strengthen operations, develop people, and create lasting value for all stakeholders.',
    href: '/about/strategy',
  },
];

const values = [
  { num: '01', title: 'Put Operators First', body: 'I act as if our portfolio leaders are in the room and make decisions that empower those closest to the work.' },
  { num: '02', title: 'Operate from the Facts', body: 'I seek truth through data, discipline, and healthy debate, and act decisively on what the numbers and the field reveal.' },
  { num: '03', title: 'Build as One Team', body: 'I collaborate across companies and functions, remove silos, and take shared ownership for outcomes.' },
  { num: '04', title: 'Value Diverse Perspectives', body: 'I invite differing views, challenge assumptions, and strengthen decisions through constructive tension.' },
  { num: '05', title: 'Learn Fast, Share Openly', body: 'I pursue continuous improvement, learn from wins and misses, and scale what works across the portfolio.' },
  { num: '06', title: 'Simplify to Scale', body: 'I eliminate unnecessary complexity, standardize where it creates leverage, and focus effort where it compounds value.' },
  { num: '07', title: 'Act with Ownership', body: 'I take accountability, move with urgency, and deliver results without waiting for perfect information.' },
  { num: '08', title: 'Think Like a Long-Term Owner', body: 'I make decisions today that strengthen durability, alignment, and exit outcomes for tomorrow.' },
];

const stats = [
  { value: '$5M+',   label: 'Capital deployed' },
  { value: '2+',     label: 'Portfolio companies' },
  { value: '5–7yr',  label: 'Avg. hold period' },
  { value: '3+',     label: 'Add-on Acquisitions' },
];

export default function AboutPage() {
  return (
    <>
      {/* ─── WHO WE ARE — split hero ─── */}
      <section className="aw-hero">
        {/* brand geo shapes */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/geo-feature.svg" className="page-geo-feature" alt="" aria-hidden="true" />
        <div className="aw-hero-inner">
          {/* left */}
          <div className="aw-hero-left">
            <div className="eyebrow anim-up">Who We Are</div>
            <h1 className="aw-hero-headline anim-up delay-1">
              Partners in<br />growth.
            </h1>
            <p className="aw-hero-body anim-up delay-2">
              FulcrumPoint Holdings is a Phoenix-based operator-led holdings company focused exclusively on
              acquiring and building essential services businesses in skilled trades — HVAC, electrical,
              plumbing, commercial construction, and industrial services.
            </p>
            <p className="aw-hero-body anim-up delay-2">
              In an industry built on relationships, we are proud to be a trusted, hands-on partner
              to great companies. We join the team in the trenches to help drive innovation and growth,
              bringing institutional capital to an industry that has long deserved better partners.
            </p>
            <Link href="/team" className="aw-hero-link anim-up delay-3">
              Meet the team
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          {/* right — photo + geo overlay */}
          <div className="aw-hero-right">
            <div className="aw-hero-img-wrap">
              <Image
                src="/images/about-hero.jpg"
                alt="FulcrumPoint trade team working on-site"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
                sizes="(max-width: 768px) 100vw, 55vw"
                priority
              />
              {/* geometric corner accents */}
              <div className="aw-geo-tr" aria-hidden="true" />
              <div className="aw-geo-br" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── AT A GLANCE ─── */}
      <section className="aw-glance">
        <div className="aw-glance-inner">
          <div className="eyebrow aw-glance-eyebrow">FulcrumPoint at a Glance</div>
          <div className="aw-glance-grid">
            {glance.map((g) => (
              <div key={g.num} className="aw-glance-card">
                <div className="aw-glance-accent" aria-hidden="true" />
                <h3 className="aw-glance-title">{g.title}</h3>
                <p className="aw-glance-body">{g.body}</p>
                <Link href={g.href} className="aw-glance-link">
                  Learn more
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── STATS BAND ─── */}
      <section className="aw-stats">
        <div className="aw-stats-inner">
          <div className="aw-stats-header" style={{ gridColumn: '1 / -1', marginBottom: '32px' }}>
            <div className="eyebrow">2026-2028 Goals</div>
          </div>
          {stats.map((s) => (
            <div key={s.label} className="aw-stat">
              <div className="aw-stat-value">{s.value}</div>
              <div className="aw-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── OUR CULTURE & OPERATING PRINCIPLES ─── */}
      <section className="about-values">
        <div className="about-values-inner">
          <div className="about-values-header">
            <div className="eyebrow">How We Operate</div>
            <div className="vm-rule" />
            <h2 className="about-values-headline">Our Culture &amp; Operating Principles</h2>
            <p className="about-values-desc">
              At FulcrumPoint, culture is how value gets created. Our Operating Principles guide how we show up as owners and operators—aligning behavior, decision-making, and execution to deliver consistent performance and long-term value for our investors, portfolio partners, and the communities we serve.
            </p>
          </div>
          <div className="about-values-grid">
            {values.map((v) => (
              <div key={v.num} className="about-value-item">
                <div className="about-value-num">{v.num}</div>
                <h3 className="about-value-title">{v.title}</h3>
                <p className="about-value-body" style={{ fontStyle: 'italic' }}>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── STORY + PHOTO ─── */}
      <section className="aw-story">
        <div className="aw-story-inner">
          <div className="aw-story-img-wrap">
            <Image
              src="/images/about-story.jpg"
              alt="FulcrumPoint operator reviewing project plans"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
              sizes="(max-width: 768px) 100vw, 45vw"
            />
          </div>
          <div className="aw-story-content">
            <div className="eyebrow">Our Story</div>
            <div className="vm-rule" />
            <h2 className="aw-story-headline">Why Fulcrum<span style={{color:'var(--orange)'}}>Point</span> exists</h2>
            <p>
              Every successful business reaches a point where what brought it this far is no longer enough to take it where it needs to go next. We call that moment the fulcrum point—the point where leadership, execution, and opportunity align to unlock transformational growth.
            </p>
            <p>
              The name FulcrumPoint reflects a simple principle: with the right leverage, even the greatest challenges can be moved. In business, that leverage comes from disciplined operations, focused leadership, and strategic action that transform potential into performance.
            </p>
            <p>
              FulcrumPoint Holdings was founded on the belief that many of America&apos;s best skilled trade businesses possess tremendous untapped potential. These businesses are the backbone of our communities, creating essential services, meaningful careers, and economic opportunity, yet often lack the systems and operational support needed to reach their next stage of growth.
            </p>
            <p>
              Our mission is simple: help exceptionally skilled trade businesses reach their fulcrum point—where potential becomes performance, growth becomes sustainable, and strong companies become enduring legacies.
            </p>
            <Link href="/about/mission" className="aw-story-link">
              Our mission &amp; vision
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── MEET OUR TEAM ─── */}
      <section className="aw-meet-team">
        {/* geometric triangle — left accent */}
        <div className="aw-meet-tri" aria-hidden="true" />

        <div className="aw-meet-inner">
          {/* left column intentionally empty — triangle fills visually */}
          <div />
          <div className="aw-meet-content">
            <h2 className="aw-meet-headline">Meet our team</h2>
            <p className="aw-meet-body">
              Our dedicated FulcrumPoint team is here to support our portfolio company partners.
              With deep expertise across skilled trades operations, finance, and value creation,
              we strive to help great companies achieve their fullest potential.
            </p>
            <Link href="/team" className="aw-meet-btn">
              Meet the team
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
