import Image from 'next/image';
import Link from 'next/link';
import { CtaSection } from '@/components/HomeSections';

const pillars = [
  {
    num: '01',
    title: 'Operator-Led Diligence',
    body: 'Every acquisition begins with a process led by operating team members who have direct sector experience. We evaluate people, processes, and market position — not just financial ratios.',
  },
  {
    num: '02',
    title: 'Partnership Over Control',
    body: 'We partner with existing leadership teams, retaining founders where desired and building a shared roadmap. Our management equity programs ensure key operators are meaningfully aligned with outcome.',
  },
  {
    num: '03',
    title: '100-Day Integration',
    body: 'Every new portfolio company follows a structured 100-day plan covering technology, reporting, sales, and the first add-on pipeline — accelerating value creation while minimizing disruption.',
  },
  {
    num: '04',
    title: 'Add-On M&A',
    body: 'Bolt-on acquisitions at 3–5× EBITDA are immediately accretive at platform exit multiples. Standardized integration playbooks let our companies execute without disrupting core operations.',
  },
];

const criteria = [
  { label: 'Revenue',         value: '$5M – $75M' },
  { label: 'EBITDA',          value: '$1M – $10M' },
  { label: 'EBITDA Margin',   value: '10%+ preferred' },
  { label: 'Hold Period',     value: '5 – 7 years' },
  { label: 'Geography',       value: 'Sun Belt / Southeast' },
  { label: 'Business Age',    value: '5+ years operating history' },
];

const sectors = [
  { label: 'HVAC & Cooling Systems',  href: '/investment-focus/hvac' },
  { label: 'Electrical',              href: '/investment-focus/electrical' },
  { label: 'Plumbing',                href: '/investment-focus/plumbing' },
  { label: 'Commercial Construction', href: '/investment-focus/construction' },
  { label: 'Industrial Trades',       href: '/investment-focus/industrial' },
];

export default function StrategyPage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="strat-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/geo-feature.svg" className="page-geo-feature" alt="" aria-hidden="true" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/geo-accent.svg" className="page-geo-accent" alt="" aria-hidden="true" />
        <Image
          src="/images/if-hero.jpg"
          alt="Commercial construction site — FulcrumPoint Investment Strategy"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center 55%' }}
          sizes="100vw"
          priority
          className="strat-hero-img"
        />
        <div className="strat-hero-overlay" />
        <div className="strat-hero-content">
          <div className="eyebrow anim-up" style={{ color: 'rgba(255,255,255,0.5)' }}>
            About — Investment Strategy
          </div>
          <h1 className="strat-hero-headline anim-up delay-1">
            Disciplined capital.<br />Operator instincts.
          </h1>
          <p className="strat-hero-sub anim-up delay-2">
            FulcrumPoint invests exclusively in essential services businesses across skilled
            trades — partnering with founders to unlock value through operational expertise,
            structured capital, and a genuine long-term orientation.
          </p>
        </div>
        <div className="strat-hero-bar" />
      </section>

      {/* ─── OVERVIEW STATEMENT ───────────────────────────────────── */}
      <section className="strat-overview">
        <div className="strat-overview-inner">
          <div className="strat-overview-left">
            <div className="eyebrow">Our Strategy</div>
            <div className="vm-rule" />
          </div>
          <div className="strat-overview-right">
            <blockquote className="strat-statement">
              We acquire, grow, and professionalize skilled trade businesses in the Sun Belt
              and Southeast — deploying operator-led capital to create enduring value for
              founders, employees, and investors.
            </blockquote>
            <p className="strat-statement-sub">
              Our edge is not financial engineering. It is direct operating experience in the
              industries we invest in, combined with a disciplined, repeatable acquisition and
              value creation process built specifically for essential services businesses.
            </p>
          </div>
        </div>
      </section>

      {/* ─── PHOTO SPLIT — operator at work ──────────────────────── */}
      <section className="strat-split">
        <div className="strat-split-img">
          <Image
            src="/images/if-split.jpg"
            alt="FulcrumPoint operator reviewing blueprints on-site"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center 20%' }}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="strat-split-geo" aria-hidden="true" />
        </div>
        <div className="strat-split-content">
          <div className="eyebrow">Where We Invest</div>
          <h2 className="strat-split-headline">Five sectors. Deep expertise.</h2>
          <p className="strat-split-body">
            We concentrate exclusively on five skilled trade verticals where our operating
            team has direct experience — HVAC, Electrical, Plumbing, Commercial Construction,
            and Industrial Trades. This focus lets us evaluate deals with precision, add
            operational value immediately, and build a portfolio with natural synergies.
          </p>
          <ul className="strat-sector-list">
            {sectors.map((s) => (
              <li key={s.href}>
                <Link href={s.href} className="strat-sector-link">
                  <span>{s.label}</span>
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ─── HOW WE INVEST — 4 pillars ───────────────────────────── */}
      <section className="strat-pillars">
        <div className="strat-pillars-inner">
          <div className="strat-pillars-header">
            <div className="eyebrow">How We Invest</div>
            <h2 className="strat-pillars-headline">Our operating playbook</h2>
            <p className="strat-pillars-sub">
              A repeatable, four-pillar framework refined across every acquisition —
              built for the realities of skilled trade businesses.
            </p>
          </div>
          <div className="strat-pillars-grid">
            {pillars.map((p) => (
              <div key={p.num} className="strat-pillar-card">
                <div className="strat-pillar-num">{p.num}</div>
                <h3 className="strat-pillar-title">{p.title}</h3>
                <p className="strat-pillar-body">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PHOTO + CRITERIA SPLIT ───────────────────────────────── */}
      <section className="strat-criteria">
        <div className="strat-criteria-inner">
          {/* Left — photo */}
          <div className="strat-criteria-img">
            <Image
              src="/images/if-electrical.jpg"
              alt="Electricians commissioning a panel on a FulcrumPoint portfolio site"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              sizes="(max-width: 768px) 100vw, 45vw"
            />
          </div>
          {/* Right — criteria table */}
          <div className="strat-criteria-content">
            <div className="eyebrow">Target Profile</div>
            <h2 className="strat-criteria-headline">Investment criteria</h2>
            <p className="strat-criteria-sub">
              We are disciplined but flexible. The parameters below represent our primary
              focus — we will consider outliers where the qualitative factors are compelling.
            </p>
            <div className="strat-criteria-table">
              {criteria.map((c) => (
                <div key={c.label} className="strat-criteria-row">
                  <span className="strat-criteria-label">{c.label}</span>
                  <span className="strat-criteria-value">{c.value}</span>
                </div>
              ))}
            </div>
            <Link href="/investment-focus/criteria" className="strat-criteria-link">
              Full investment criteria
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA ───────────────────────────────────────────── */}
      <CtaSection />
    </>
  );
}
