'use client';

import { useState } from 'react';
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
    title: '100-Day Value Creation Plan (VCP)',
    body: 'Every new portfolio company follows a structured 100-Day VCP covering technology, reporting, sales, and the first add-on pipeline — accelerating value creation while minimizing disruption.',
  },
  {
    num: '04',
    title: 'Add-On Acquisition',
    body: 'Strategic add-on acquisitions help our companies grow faster, expand capabilities, and increase long-term value. With a disciplined integration process, we ensure growth is achieved without disrupting core operations.',
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

// Commercial construction data
const constructionStates = [
  { rank: 1, state: 'Arizona',    perCapita: '$5,980', total: '$44.4B', change5yr: '+681.7%', changeAdj: '+544.2%', popChange: '+3.6%' },
  { rank: 2, state: 'Texas',      perCapita: '$4,210', total: '$118.2B', change5yr: '+412.3%', changeAdj: '+318.5%', popChange: '+8.9%' },
  { rank: 3, state: 'Florida',    perCapita: '$3,940', total: '$86.7B',  change5yr: '+387.1%', changeAdj: '+301.4%', popChange: '+7.4%' },
  { rank: 4, state: 'Nevada',     perCapita: '$3,720', total: '$12.1B',  change5yr: '+354.8%', changeAdj: '+274.2%', popChange: '+5.2%' },
  { rank: 5, state: 'Georgia',    perCapita: '$3,410', total: '$37.9B',  change5yr: '+298.6%', changeAdj: '+231.7%', popChange: '+4.1%' },
];

const sectorData = [
  { label: 'Manufacturing',          v2019: 100, v2024: 248 },
  { label: 'Office',                 v2019: 100, v2024: 95  },
  { label: 'Warehouse',              v2019: 55,  v2024: 70  },
  { label: 'Health Care',            v2019: 75,  v2024: 65  },
  { label: 'Lodging',                v2019: 40,  v2024: 25  },
  { label: 'Educational',            v2019: 30,  v2024: 30  },
  { label: 'Amusement & Recreation', v2019: 25,  v2024: 25  },
  { label: 'Multi-retail',           v2019: 20,  v2024: 20  },
  { label: 'Food/Beverage',          v2019: 15,  v2024: 15  },
  { label: 'Automotive',             v2019: 10,  v2024: 10  },
];

const MAX_BAR = 250;

export default function StrategyPage() {
  const [openPanel, setOpenPanel] = useState<string | null>(null);

  const togglePanel = (key: string) =>
    setOpenPanel(prev => (prev === key ? null : key));

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
            Our Investment Strategy
          </div>
          <h1 className="strat-hero-headline anim-up delay-1">
            Disciplined Capital.<br />Operational Excellence.<br />Long-Term Value.
          </h1>
          <p className="strat-hero-sub anim-up delay-2">
            Fulcrum<span style={{color:'var(--orange)'}}>Point</span> invests exclusively in skilled trade businesses, partnering with founders and management teams to unlock growth through operational expertise, disciplined capital allocation, and a long-term ownership mindset.
          </p>
        </div>
      </section>

      {/* ─── INVESTMENT PHILOSOPHY ────────────────────────────────── */}
      <section className="invest-philosophy-section">
        <div className="invest-philosophy-inner">
          <div className="invest-philosophy-label">
            <div className="eyebrow">Investment Philosophy</div>
            <div className="vm-rule" />
          </div>
          <div className="invest-philosophy-content">
            <blockquote className="invest-philosophy-quote">
              &ldquo;At FulcrumPoint Holdings, our investment philosophy centers on partnership,
              alignment, and long-term value creation through a rollover equity strategy.&rdquo;
            </blockquote>
            <p className="invest-philosophy-body">
              We partner with business owners seeking both liquidity today and meaningful
              participation in future growth. By acquiring a majority stake while allowing
              founders to retain a minority equity position, we provide the resources and
              strategic operator-led support needed to scale the business and unlock its next
              phase of value. This approach enables owners to realize partial liquidity, remain
              actively engaged in driving performance, and ultimately capture greater value
              upon a future sale — transforming a single exit into a sustained journey of growth
              and shared success.
            </p>
          </div>
        </div>
      </section>

      {/* ─── HOLD PERIOD + EXIT PHILOSOPHY ───────────────────────── */}
      <section className="hold-period-section">
        <div className="hold-period-inner">
          <div className="hold-period-header">
            <div className="eyebrow">Hold Period &amp; Exit Philosophy</div>
            <div className="vm-rule" />
            <h2 className="hold-period-headline">Long-term partnership.<br />Exit when value is realized.</h2>
          </div>
          <div className="hold-period-grid">
            <div className="hold-period-card">
              <div className="hold-period-card-icon" aria-hidden="true">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <rect x="4" y="4" width="24" height="24" rx="2" stroke="#EC8647" strokeWidth="1.5"/>
                  <path d="M10 16h12M16 10v12" stroke="#EC8647" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="hold-period-card-title">Agile Value Creation Plan</h3>
              <p className="hold-period-card-body">
                Our hold periods are guided by an agile VCP — breaking long-term objectives into
                short, iterative execution cycles with continuous feedback. Progress is measured
                by achieved value creation milestones, not predetermined timelines.
              </p>
            </div>
            <div className="hold-period-card">
              <div className="hold-period-card-icon" aria-hidden="true">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M6 24L12 14l6 6 4-8 4 4" stroke="#EC8647" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="26" cy="10" r="2" fill="#EC8647"/>
                </svg>
              </div>
              <h3 className="hold-period-card-title">Value Creation Metrics</h3>
              <p className="hold-period-card-body">
                We evaluate value creation through strong EBITDA growth, meaningful multiple
                expansion, and demonstrable free cash flow generation — supported by a
                data-driven narrative of operational improvements.
              </p>
            </div>
            <div className="hold-period-card">
              <div className="hold-period-card-icon" aria-hidden="true">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M16 6l2.5 5 5.5.8-4 3.9.9 5.5L16 18.5l-4.9 2.7.9-5.5L8 11.8l5.5-.8z" stroke="#EC8647" strokeWidth="1.5" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="hold-period-card-title">Disciplined Exit Timing</h3>
              <p className="hold-period-card-body">
                Exits are pursued only when businesses are well-positioned for continued success
                and long-term value is fully realized — targeting compelling IRR and MOIC that
                provide clear proof of our ability to generate outsized risk-adjusted returns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MARKET DATA ACCORDION ────────────────────────────────── */}
      <section className="market-data-section">
        <div className="market-data-inner">
          <div className="market-data-header">
            <div className="eyebrow">Market Context</div>
            <div className="vm-rule" />
            <h2 className="market-data-headline">Why skilled trades. Why now.</h2>
          </div>

          {/* Panel 1: Top States */}
          <div className={`mda-item${openPanel === 'states' ? ' open' : ''}`}>
            <button className="mda-trigger" onClick={() => togglePanel('states')} aria-expanded={openPanel === 'states'}>
              <span className="mda-trigger-label">Top 5 States — Commercial Construction Investment (2025)</span>
              <svg className="mda-chevron" width="18" height="18" viewBox="0 0 18 18" fill="none"
                style={{ transform: openPanel === 'states' ? 'rotate(45deg)' : 'none', transition: 'transform 0.25s ease' }}>
                <path d="M9 3v12M3 9h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
              </svg>
            </button>
            {openPanel === 'states' && (
              <div className="mda-panel">
                <div className="mda-table-wrap">
                  <table className="mda-table">
                    <thead>
                      <tr>
                        <th>Rank</th>
                        <th>State</th>
                        <th>Per-Capita Spend</th>
                        <th>Total Spend</th>
                        <th>5-yr Change</th>
                        <th>5-yr Change (Adj.)</th>
                        <th>5-yr Pop. Change</th>
                      </tr>
                    </thead>
                    <tbody>
                      {constructionStates.map(row => (
                        <tr key={row.state}>
                          <td>{row.rank}</td>
                          <td><strong>{row.state}</strong></td>
                          <td>{row.perCapita}</td>
                          <td>{row.total}</td>
                          <td className="mda-positive">{row.change5yr}</td>
                          <td className="mda-positive">{row.changeAdj}</td>
                          <td>{row.popChange}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>

          {/* Panel 2: Sector Growth Chart */}
          <div className={`mda-item${openPanel === 'sectors' ? ' open' : ''}`}>
            <button className="mda-trigger" onClick={() => togglePanel('sectors')} aria-expanded={openPanel === 'sectors'}>
              <span className="mda-trigger-label">Commercial Construction Growth by Sector — 2019 vs 2024</span>
              <svg className="mda-chevron" width="18" height="18" viewBox="0 0 18 18" fill="none"
                style={{ transform: openPanel === 'sectors' ? 'rotate(45deg)' : 'none', transition: 'transform 0.25s ease' }}>
                <path d="M9 3v12M3 9h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
              </svg>
            </button>
            {openPanel === 'sectors' && (
              <div className="mda-panel">
                <p className="mda-chart-note">Spending in constant 2024 dollars (B = billions)</p>
                <div className="mda-chart">
                  {sectorData.map(row => (
                    <div key={row.label} className="mda-bar-row">
                      <div className="mda-bar-label">{row.label}</div>
                      <div className="mda-bar-tracks">
                        <div className="mda-bar-pair">
                          <div className="mda-bar mda-bar--2019" style={{ width: `${(row.v2019 / MAX_BAR) * 100}%` }} title={`2019: $${row.v2019}B`} />
                          <span className="mda-bar-val">${row.v2019}B</span>
                        </div>
                        <div className="mda-bar-pair">
                          <div className="mda-bar mda-bar--2024" style={{ width: `${(row.v2024 / MAX_BAR) * 100}%` }} title={`2024: $${row.v2024}B`} />
                          <span className="mda-bar-val">${row.v2024}B</span>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="mda-chart-legend">
                    <span className="mda-legend-item"><span className="mda-legend-dot mda-legend-dot--2019" />2019 (adjusted)</span>
                    <span className="mda-legend-item"><span className="mda-legend-dot mda-legend-dot--2024" />2024</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Panel 3: Skilled Trade Opportunities */}
          <div className={`mda-item${openPanel === 'trades' ? ' open' : ''}`}>
            <button className="mda-trigger" onClick={() => togglePanel('trades')} aria-expanded={openPanel === 'trades'}>
              <span className="mda-trigger-label">Skilled Trade Business Sector Opportunities</span>
              <svg className="mda-chevron" width="18" height="18" viewBox="0 0 18 18" fill="none"
                style={{ transform: openPanel === 'trades' ? 'rotate(45deg)' : 'none', transition: 'transform 0.25s ease' }}>
                <path d="M9 3v12M3 9h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
              </svg>
            </button>
            {openPanel === 'trades' && (
              <div className="mda-panel">
                <p className="mda-body-text">
                  The skilled trades job market is positioned for steady growth over the next decade.
                  The U.S. Bureau of Labor Statistics projects total employment to increase by
                  5.2 million jobs by 2034, with many skilled trade roles — particularly electricians,
                  HVAC technicians, and cooling system specialists — growing faster than the national average.
                </p>
                <p className="mda-body-text">
                  Clean energy expansion and continued investment in semiconductor facilities,
                  advanced manufacturing, and data centers are further accelerating demand. These
                  sectors rely on critical power and cooling infrastructure, driving sustained need
                  for technicians skilled in high-efficiency systems, automation, and advanced
                  HVAC solutions.
                </p>
              </div>
            )}
          </div>
        </div>
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
              We invest in skilled trade businesses with strong foundations and untapped potential, partnering with founders and management teams to build stronger companies and create lasting value for all stakeholders.
            </blockquote>
            <p className="strat-statement-sub">
              What differentiates Fulcrum<span style={{color:'var(--orange)'}}>Point</span> is not financial engineering, but operational leadership. Drawing on decades of hands-on experience, we apply disciplined capital, proven operating principles, and a repeatable value creation framework tailored to the unique needs of skilled trade businesses.
            </p>
          </div>
        </div>
      </section>

      {/* ─── PHOTO SPLIT ──────────────────────────────────────────── */}
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
          <div className="vm-rule" />
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
            <div className="vm-rule" />
            <h2 className="strat-pillars-headline">Our operating playbook</h2>
            <p className="strat-pillars-sub">
              A repeatable, four-pillar framework refined across every acquisition.
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

      {/* ─── CRITERIA SPLIT ───────────────────────────────────────── */}
      <section className="strat-criteria">
        <div className="strat-criteria-inner">
          <div className="strat-criteria-img">
            <Image
              src="/images/if-electrical.jpg"
              alt="Electricians commissioning a panel on a FulcrumPoint portfolio site"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              sizes="(max-width: 768px) 100vw, 45vw"
            />
          </div>
          <div className="strat-criteria-content">
            <div className="eyebrow">Target Profile</div>
            <div className="vm-rule" />
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
            <Link href="/contact" className="strat-criteria-link">
              Submit a Business
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
