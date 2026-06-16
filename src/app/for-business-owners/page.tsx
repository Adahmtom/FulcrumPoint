import Link from 'next/link';
import Image from 'next/image';
import { CtaSection } from '@/components/HomeSections';
import AnimatedGeoBlock from '@/components/AnimatedGeoBlock';

const SELLER_FORM = 'https://docs.google.com/forms/d/e/1FAIpQLSd0Xtk8oq0N4Q0u4ZCpROnY3tIGiuhZV_t9pi87fbpJmP2_3Q/viewform?usp=header';
const START_CONVERSATION_FORM = 'https://docs.google.com/forms/d/e/1FAIpQLSdZMfgkjkbdoN6393uE_28EP_i-w_lPgRpLfLhYYwt80PkKXA/viewform?usp=header';

const pillars = [
  {
    num: '01',
    title: 'A Partnership Built Around You',
    color: 'var(--orange)',
    body: 'We structure every deal to fit your goals — not a standardized template. Whether you want a clean exit, partial liquidity with continued involvement, or a growth partner while you stay at the helm, we build the terms around what matters most to you.',
    bullets: [
      'Flexible deal structures tailored to your timeline',
      'Rollover equity available for owners who want to participate in future upside',
      'We work around your schedule, your team, and your pace',
    ],
  },
  {
    num: '02',
    title: 'Operator-Led from Day One',
    color: 'var(--slate)',
    body: 'We are not financial buyers who learn your business from a spreadsheet. Our team has direct experience running skilled trade organizations — from the field to the financials. We speak your language and earn credibility through competence.',
    bullets: [
      'Leadership team with hands-on trade and operations experience',
      'Faster diligence because we know what to look for',
      'No steep learning curve — we integrate without disruption',
    ],
  },
  {
    num: '03',
    title: 'Your Legacy, Protected',
    color: 'var(--orange)',
    body: "What you've built represents decades of relationships, reputation, and community standing. We take that seriously. Our goal is never to strip and flip — it is to build on what you started and carry it forward with the same pride you put into it.",
    bullets: [
      'Brand, name, and market reputation preserved',
      'Existing team retained and invested in',
      'Community relationships honored and strengthened',
    ],
  },
  {
    num: '04',
    title: 'A 100-Day Value Creation Plan',
    color: 'var(--slate)',
    body: 'Every partnership starts with a structured VCP — a 100-day roadmap developed with you and your management team. It covers technology deployment, reporting infrastructure, sales systems, and workforce development. Structured, but never rigid.',
    bullets: [
      'Co-developed with you — not imposed on you',
      'Immediate focus on quick wins alongside long-term priorities',
      'Full operational support without disrupting daily operations',
    ],
  },
  {
    num: '05',
    title: 'Growth Capital When You Need It',
    color: 'var(--orange)',
    body: "Whether you've been held back by capital constraints, untapped service lines, or geographic expansion opportunities, we provide the resources to act. Our network of operating partners, advisors, and add-on acquisition targets accelerates what your business can become.",
    bullets: [
      'Capital for equipment, fleet, and infrastructure upgrades',
      'Add-on acquisition support and integration playbooks',
      'Access to FulcrumPoint\'s operator network and partnerships',
    ],
  },
  {
    num: '06',
    title: 'A Partner Who Gets It',
    color: 'var(--slate)',
    body: 'Private equity has a reputation — and not always a good one. We are building something different. Our model is grounded in respect for what you built, shared accountability for what comes next, and a commitment to showing up the way you deserve.',
    bullets: [
      'Transparent communication at every stage',
      'Aligned incentives — we win when you win',
      'Long-term relationship, not a transactional exit',
    ],
  },
];

export default function ForBusinessOwnersPage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="fbo-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/geo-feature.svg" className="page-geo-feature" alt="" aria-hidden="true" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/geo-accent.svg" className="page-geo-accent" alt="" aria-hidden="true" />
        <Image
          src="/images/if-hero.jpg"
          alt="Skilled trade business owner reviewing blueprints"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
          sizes="100vw"
          priority
          className="fbo-hero-img"
        />
        <div className="fbo-hero-overlay" />
        <div className="fbo-hero-content">
          <div className="eyebrow anim-up" style={{ color: 'rgba(255,255,255,0.5)' }}>For Business Owners</div>
          <h1 className="fbo-hero-headline anim-up delay-1">
            You built something<br />worth protecting.
          </h1>
          <p className="fbo-hero-sub anim-up delay-2">
            FulcrumPoint is the partner built for skilled trade business owners who want
            more than a check — owners who want their legacy honored, their people taken
            care of, and their company positioned to thrive for the next generation.
          </p>
          <div className="fbo-hero-actions anim-up delay-3">
            <a href={START_CONVERSATION_FORM} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Start a Conversation
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <Link href="#our-difference" className="fbo-hero-scroll">
              See how we&apos;re different
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 2v10M2 7l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── INTRO STATEMENT ──────────────────────────────────────── */}
      <section className="fbo-intro">
        <div className="fbo-intro-inner">
          <div className="fbo-intro-left">
            <div className="eyebrow">Why FulcrumPoint</div>
            <div className="vm-rule" />
          </div>
          <div className="fbo-intro-right">
            <p className="fbo-intro-statement">
              Most private equity firms approach skilled trade businesses as financial assets
              to be optimized and sold as quickly as possible. As a holding company, we approach them as legacies to be honored and grown.
            </p>
            <p className="fbo-intro-sub">
              The difference shows in how we structure deals, how we treat your people, and how
              we show up after the ink is dry. We are operators who became investors and that
              distinction matters at every stage of the partnership.
            </p>
          </div>
        </div>
      </section>

      {/* ─── THE 6-PILLAR DIFFERENCE ──────────────────────────────── */}
      <section className="fbo-pillars-section" id="our-difference">
        <div className="fbo-pillars-inner">
          <div className="fbo-pillars-header">
            <div className="eyebrow">Our Difference</div>
            <div className="vm-rule" />
            <h2 className="fbo-pillars-headline">
              For HVAC, Electrical, Plumbing &amp; Construction Owners —<br />
              a FulcrumPoint Partnership is Different
            </h2>
          </div>
          <div className="fbo-pillars-grid">
            {pillars.map((p) => (
              <div key={p.num} className="fbo-pillar-card">
                <div className="fbo-pillar-num" style={{ color: p.color }}>{p.num}</div>
                <h3 className="fbo-pillar-title">{p.title}</h3>
                <p className="fbo-pillar-body">{p.body}</p>
                <ul className="fbo-pillar-bullets">
                  {p.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS STRIP ────────────────────────────────────────── */}
      <section className="fbo-process">
        <div className="fbo-process-inner">
          <div className="fbo-process-header">
            <div className="eyebrow" style={{ color: 'rgba(255,255,255,0.5)' }}>What to Expect</div>
            <div className="vm-rule" />
            <h2 className="fbo-process-headline">Our partnership process</h2>
          </div>
          <div className="fbo-process-steps">
            {[
              { num: '01', title: 'Initial Conversation',   body: 'No pressure, no pitch deck. We start with a confidential call to understand your business and your goals.' },
              { num: '02', title: 'Mutual Exploration',     body: 'We share how we work, discuss fit, and answer every question you have about what a partnership would look like.' },
              { num: '03', title: 'Diligence & LOI',        body: 'Operator-led diligence that respects your time and your team. We move efficiently and communicate clearly.' },
              { num: '04', title: 'Closing & Onboarding',   body: 'We close on a timeline that works for you, then launch our 100-Day VCP together — with your team at the center.' },
            ].map((step) => (
              <div key={step.num} className="fbo-step">
                <div className="fbo-step-num">{step.num}</div>
                <h3 className="fbo-step-title">{step.title}</h3>
                <p className="fbo-step-body">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CRITERIA CALLOUT ─────────────────────────────────────── */}
      <section className="fbo-criteria">
        <div className="fbo-criteria-inner">
          <div className="fbo-criteria-content">
            <div className="eyebrow">What We Look For</div>
            <div className="vm-rule" />
            <h2 className="fbo-criteria-headline">Is your business a fit?</h2>
            <p className="fbo-criteria-sub">
              We invest in skilled trade businesses with strong fundamentals and untapped
              operational potential. If your company fits the profile below, we would like
              to hear from you.
            </p>
            <ul className="fbo-criteria-list">
              <li>$5M – $75M in annual revenue</li>
              <li>$1M – $10M in EBITDA</li>
              <li>HVAC, electrical, plumbing, commercial construction, or industrial trades</li>
              <li>Located in Arizona</li>
              <li>5+ years of operating history</li>
              <li>Owner considering transition, exit, or growth partnership</li>
            </ul>
            <a href={START_CONVERSATION_FORM} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ marginTop: '32px', display: 'inline-flex' }}>
              Start a Conversation
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
          <AnimatedGeoBlock className="fbo-criteria-geo" />
        </div>
      </section>

      <CtaSection />
    </>
  );
}
