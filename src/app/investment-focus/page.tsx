import PageHero from '@/components/PageHero';
import Link from 'next/link';

const sectors = [
  { slug: 'hvac', label: 'HVAC & Cooling Systems', stat: '$22B+', icon: '◈' },
  { slug: 'electrical', label: 'Electrical', stat: '$220B+', icon: '◈' },
  { slug: 'plumbing', label: 'Plumbing', stat: '$130B+', icon: '◈' },
  { slug: 'construction', label: 'Commercial Construction', stat: '$1.8T+', icon: '◈' },
  { slug: 'industrial', label: 'Industrial Trades', stat: '$480B+', icon: '◈' },
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
      <PageHero
        eyebrow="Investment Focus"
        headline="Where we invest.<br />How we create value."
        sub="FulcrumPoint concentrates exclusively on skilled trade businesses in the Sun Belt and Southeast — the markets with the most durable demand growth, the highest fragmentation, and the greatest need for operator-led capital."
      />

      <section className="if-sectors-section">
        <div className="if-inner">
          <div className="eyebrow">Where We Invest</div>
          <h2 className="if-headline">Five sectors. One focus.</h2>
          <div className="if-sectors-grid">
            {sectors.map((s) => (
              <Link key={s.slug} href={`/investment-focus/${s.slug}`} className="if-sector-card">
                <div className="if-sector-icon">{s.icon}</div>
                <div className="if-sector-content">
                  <h3 className="if-sector-label">{s.label}</h3>
                  <span className="if-sector-stat">{s.stat} market</span>
                </div>
                <svg className="if-sector-arrow" width="16" height="16" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="if-approach-section">
        <div className="if-inner">
          <div className="eyebrow">How We Invest</div>
          <h2 className="if-headline">Our approach</h2>
          <div className="if-approach-grid">
            {approach.map((a) => (
              <Link key={a.slug} href={`/investment-focus/${a.slug}`} className="if-approach-card">
                <h3 className="if-approach-label">{a.label}</h3>
                <p className="if-approach-desc">{a.desc}</p>
                <span className="if-approach-link">
                  Learn more
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="if-cta">
        <div className="if-cta-inner">
          <h2 className="if-cta-headline">Have a business that fits?</h2>
          <p className="if-cta-sub">Submit your business for confidential review. No obligation, no pressure.</p>
          <Link href="/submit" className="btn-primary">
            Submit a Deal
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
