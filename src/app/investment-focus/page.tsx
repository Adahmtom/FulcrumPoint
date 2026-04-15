import Image from 'next/image';
import Link from 'next/link';
import { CtaSection } from '@/components/HomeSections';

const sectors = [
  { slug: 'hvac',         label: 'HVAC & Cooling Systems',  stat: '$22B+',   desc: 'Non-discretionary demand driven by Sun Belt climate — the strongest demand floor in skilled trades.' },
  { slug: 'electrical',   label: 'Electrical',               stat: '$220B+',  desc: 'Electrification, EV corridors, and data-center buildout are driving a once-in-a-generation investment cycle.' },
  { slug: 'plumbing',     label: 'Plumbing',                 stat: '$130B+',  desc: 'Essential infrastructure with recurring service-call economics and a new-construction tailwind in core markets.' },
  { slug: 'construction', label: 'Commercial Construction',  stat: '$1.8T+',  desc: 'Data centers, logistics, and mixed-use development are outpacing legacy contractor capacity across the Sun Belt.' },
  { slug: 'industrial',   label: 'Industrial Trades',        stat: '$480B+',  desc: 'Regulatory compliance and manufacturing reshoring create durable, non-discretionary maintenance spend.' },
];

const approach = [
  {
    slug: 'value-creation',
    label: 'Value Creation',
    desc: 'How we build enterprise value inside each portfolio company through our proprietary operating framework.',
  },
  {
    slug: 'approach',
    label: 'Operational Approach',
    desc: 'Our hands-on, operator-led method for accelerating revenue growth and building management depth.',
  },
  {
    slug: 'criteria',
    label: 'Investment Criteria',
    desc: 'The specific financial and operational characteristics we look for in acquisition targets.',
  },
];

export default function InvestmentFocusPage() {
  return (
    <>
      {/* ─── PHOTO HERO ─────────────────────────────────────────────── */}
      <section className="if-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/geo-feature.svg" className="page-geo-feature" alt="" aria-hidden="true" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/geo-accent.svg" className="page-geo-accent" alt="" aria-hidden="true" />
        <Image
          src="/images/if-hero.jpg"
          alt="Commercial construction site — FulcrumPoint Investment Focus"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center 55%' }}
          sizes="100vw"
          priority
          className="if-hero-img"
        />
        <div className="if-hero-overlay" />
        <div className="if-hero-content">
          <div className="eyebrow anim-up" style={{ color: 'rgba(255,255,255,0.5)' }}>Investment Focus</div>
          <h1 className="if-hero-headline anim-up delay-1">
            Where we invest.<br />How we create value.
          </h1>
          <p className="if-hero-sub anim-up delay-2">
            FulcrumPoint concentrates exclusively on skilled trade businesses in the Sun Belt and Southeast —
            the markets with the most durable demand growth, the highest fragmentation, and the greatest need
            for operator-led capital.
          </p>
          <div className="if-hero-actions anim-up delay-3">
            <Link href="/submit" className="btn-primary">Submit a Business
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link href="#sectors" className="if-hero-scroll">
              Explore sectors
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 2v10M2 7l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
        {/* orange bottom bar */}
        <div className="if-hero-bar" />
      </section>

      {/* ─── SECTORS ────────────────────────────────────────────────── */}
      <section className="if-sectors-section" id="sectors">
        <div className="if-inner">
          <div className="if-section-header">
            <div className="eyebrow">Where We Invest</div>
            <h2 className="if-headline">Five sectors. One focus.</h2>
            <p className="if-section-sub">
              We go deep rather than broad — investing only where our operating team has direct hands-on experience.
            </p>
          </div>
          <div className="if-sectors-grid">
            {sectors.map((s, i) => (
              <Link key={s.slug} href={`/investment-focus/${s.slug}`} className="if-sector-card">
                <div className="if-sector-num">0{i + 1}</div>
                <div className="if-sector-content">
                  <h3 className="if-sector-label">{s.label}</h3>
                  <p className="if-sector-desc">{s.desc}</p>
                  <span className="if-sector-stat">{s.stat} market</span>
                </div>
                <svg className="if-sector-arrow" width="16" height="16" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PHOTO SPLIT — "Operator-first diligence" ───────────────── */}
      <section className="if-split">
        <div className="if-split-img-col">
          <Image
            src="/images/if-split.jpg"
            alt="FulcrumPoint operator reviewing project blueprints on-site"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center 25%' }}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* brand geo accent */}
          <div className="if-split-geo-tr" aria-hidden="true" />
        </div>
        <div className="if-split-content">
          <div className="eyebrow">How We Work</div>
          <h2 className="if-split-headline">
            Operator-first diligence — every time.
          </h2>
          <p className="if-split-body">
            Every acquisition begins with a diligence process led by operating team members
            who have direct experience in the sector. We are not financial engineers evaluating
            ratios — we are operators evaluating people, processes, and market position.
          </p>
          <p className="if-split-body">
            Our diligence goes deep on workforce quality, customer relationship strength, and
            operational infrastructure — giving us a more accurate view of risk and opportunity
            than generalist investors.
          </p>
          <Link href="/investment-focus/approach" className="if-split-link">
            Our operational approach
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </section>

      {/* ─── APPROACH ───────────────────────────────────────────────── */}
      <section className="if-approach-section">
        <div className="if-inner">
          <div className="if-section-header">
            <div className="eyebrow">How We Invest</div>
            <h2 className="if-headline">Our approach</h2>
          </div>
          <div className="if-approach-grid">
            {approach.map((a) => (
              <Link key={a.slug} href={`/investment-focus/${a.slug}`} className="if-approach-card">
                <h3 className="if-approach-label">{a.label}</h3>
                <p className="if-approach-desc">{a.desc}</p>
                <span className="if-approach-link">
                  Learn more
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA ─────────────────────────────────────────────── */}
      <CtaSection />
    </>
  );
}
