import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageHero from '@/components/PageHero';

// ─── Sector Data ───────────────────────────────────────────────────────────────
const sectors: Record<string, {
  label: string;
  stat: string;
  tagline: string;
  body: string[];
  why: string[];
  criteria: { label: string; value: string }[];
}> = {
  hvac: {
    label: 'HVAC & Cooling Systems',
    stat: '$22B+',
    tagline: 'Mission-critical comfort infrastructure for the growing Sun Belt.',
    body: [
      'HVAC service and installation is a non-discretionary expenditure for homeowners and commercial tenants alike. In the Sun Belt, where summer temperatures regularly exceed 110°F, functional cooling is not a luxury — it is a life-safety issue. This creates a demand floor that persists through economic cycles.',
      'The market is highly fragmented, with tens of thousands of owner-operated HVAC companies serving local geographies. Most have strong customer relationships, recurring maintenance contract revenue, and consistent margins — yet remain subscale relative to the capital investment required to modernize operations, hire talent, and pursue adjacent acquisitions.',
      'FulcrumPoint targets HVAC businesses with $1M–$10M EBITDA, primarily in the Phoenix, Las Vegas, Dallas, and Florida corridors where population and commercial construction growth is most pronounced.',
    ],
    why: [
      'Non-discretionary demand driven by climate',
      'Highly fragmented, ripe for roll-up',
      'Recurring revenue from maintenance contracts',
      'Labor-first model creates durable competitive moat',
      'Aging equipment replacement cycle accelerating',
    ],
    criteria: [
      { label: 'Revenue', value: '$5M – $50M' },
      { label: 'EBITDA', value: '$1M – $10M' },
      { label: 'Geography', value: 'Sun Belt / Southeast' },
      { label: 'Business Type', value: 'Residential & Commercial Service' },
    ],
  },
  electrical: {
    label: 'Electrical',
    stat: '$220B+',
    tagline: 'The backbone of every building, every data center, every EV corridor.',
    body: [
      'Electrical contracting is the largest and most structurally complex of the skilled trades sectors FulcrumPoint targets. The scope of work ranges from residential panel upgrades to commercial tenant improvements to industrial power distribution — all of which are experiencing simultaneous tailwinds from electrification, data center construction, and EV infrastructure buildout.',
      'The fragmentation of this sector is extraordinary. Over 70% of electrical contractors generate less than $10M in annual revenue. These businesses are often the most technically sophisticated operators in their local markets, with deep relationships across general contractors, developers, and municipalities — but they lack the back-office, financial infrastructure, and growth capital to scale.',
      'We focus on commercial and industrial electrical contractors in high-growth markets where the infrastructure investment cycle is most active, targeting businesses that can serve as platforms for geographic and service-line expansion.',
    ],
    why: [
      'Electrification megatrend: EVs, data centers, renewable integration',
      'Massive fragmentation with platform opportunity',
      'Long-term customer relationships and repeat contract revenue',
      'Technical complexity creates natural barriers to entry',
      'Labor shortage driving pricing power for quality operators',
    ],
    criteria: [
      { label: 'Revenue', value: '$5M – $75M' },
      { label: 'EBITDA', value: '$1M – $10M' },
      { label: 'Geography', value: 'Sun Belt / Southeast' },
      { label: 'Business Type', value: 'Commercial & Industrial' },
    ],
  },
  plumbing: {
    label: 'Plumbing',
    stat: '$130B+',
    tagline: 'Essential infrastructure in every structure, with durable recurring demand.',
    body: [
      'Plumbing services represent one of the most resilient categories in the skilled trades universe. Unlike renovation or discretionary remodeling, plumbing repairs, drain services, and emergency calls are driven by necessity — no homeowner or building owner delays a pipe burst or sewage backup.',
      'The Sun Belt growth story is particularly powerful in plumbing: new residential construction, commercial development, and aging municipal water infrastructure all drive sustained demand for experienced plumbing contractors. Arizona, Texas, Florida, and Georgia — FulcrumPoint\'s core geographies — have seen outsized population and construction growth over the past decade.',
      'We look for plumbing businesses with strong service-call volumes, commercial maintenance contracts, and leadership depth capable of supporting expansion. Many of our best targets have developed proprietary customer relationship management processes that create durable recurring revenue streams.',
    ],
    why: [
      'Non-discretionary: emergency calls create guaranteed demand floor',
      'New construction tailwind in core Sun Belt markets',
      'High repeat-call rate creates natural retention economics',
      'Commercial maintenance contracts provide recurring revenue',
      'Municipal infrastructure aging accelerates replacement demand',
    ],
    criteria: [
      { label: 'Revenue', value: '$3M – $40M' },
      { label: 'EBITDA', value: '$750K – $8M' },
      { label: 'Geography', value: 'Sun Belt / Southeast' },
      { label: 'Business Type', value: 'Residential, Commercial & Service' },
    ],
  },
  construction: {
    label: 'Commercial Construction',
    stat: '$1.8T+',
    tagline: 'The build-out of America\'s fastest-growing commercial markets.',
    body: [
      'Commercial construction in the Sun Belt and Southeast is experiencing a generational expansion. Data centers, logistics warehouses, medical facilities, light industrial, and mixed-use developments are all being built at a pace that outstrips the capacity of legacy regional contractors. The contractors positioned to capture this growth are those with strong subcontractor networks, experienced project management teams, and the financial stability to bond large projects.',
      'FulcrumPoint focuses on specialty commercial subcontractors and general contractors in the $10M–$100M revenue range — businesses too large for small-business lenders but too specialized for generalist PE firms to understand. These companies typically have deep customer relationships with national developers and REITs, repeat business relationships, and strong backlogs.',
      'Our operating team brings direct construction management experience, which allows us to evaluate project risk, assess management depth, and identify operational improvements that drive margin expansion without compromising project quality.',
    ],
    why: [
      'Data center and logistics boom driving multi-year backlog',
      'Medical and mixed-use development accelerating',
      'Strong operator-developer relationships create high switching costs',
      'Bonding capacity and financial strength are competitive barriers',
      'Labor and subcontractor relationships are the core asset',
    ],
    criteria: [
      { label: 'Revenue', value: '$10M – $100M' },
      { label: 'EBITDA', value: '$1.5M – $12M' },
      { label: 'Geography', value: 'Sun Belt / Southeast' },
      { label: 'Business Type', value: 'Specialty & General Contracting' },
    ],
  },
  industrial: {
    label: 'Industrial Trades',
    stat: '$480B+',
    tagline: 'Specialized maintenance and services for the industrial infrastructure economy.',
    body: [
      'Industrial trades encompass a broad spectrum of specialized services: mechanical insulation, industrial piping, process equipment maintenance, millwright services, and specialty welding and fabrication. These businesses serve refineries, chemical plants, food processing facilities, water treatment infrastructure, and manufacturing operations — customers with non-discretionary maintenance spend driven by regulatory compliance, safety requirements, and operational uptime.',
      'The industrial trades sector is perhaps the most underserved by traditional capital providers. The technical complexity of the work, the need for deep customer security clearances and facility access, and the specialized labor requirements create substantial barriers to entry — and equally substantial switching costs for customers. Once an industrial contractor has established a presence at a facility, they tend to retain that work for years or decades.',
      'FulcrumPoint partners with industrial trades businesses that have established facility relationships, a trained and certified workforce, and the operational infrastructure to safely and profitably execute complex industrial projects.',
    ],
    why: [
      'Regulatory compliance drives non-discretionary maintenance spend',
      'Deep facility relationships create extremely high switching costs',
      'Certified workforce and security access are durable competitive moats',
      'Manufacturing reshoring driving new facility demand',
      'Highly specialized work commands premium pricing',
    ],
    criteria: [
      { label: 'Revenue', value: '$5M – $60M' },
      { label: 'EBITDA', value: '$1M – $10M' },
      { label: 'Geography', value: 'Sun Belt / Southeast / Gulf Coast' },
      { label: 'Business Type', value: 'Specialty Industrial Services' },
    ],
  },
};

// ─── Approach Data ─────────────────────────────────────────────────────────────
const approaches: Record<string, {
  label: string;
  eyebrow: string;
  tagline: string;
  sections: { heading: string; body: string }[];
}> = {
  'value-creation': {
    label: 'Value Creation',
    eyebrow: 'How We Build Value',
    tagline: 'A proprietary operating framework built for the realities of skilled trade businesses.',
    sections: [
      {
        heading: 'Revenue Acceleration',
        body: 'We begin every partnership with a structured 100-day revenue diagnostic. We map customer concentration, analyze service-line margins, audit pricing against market benchmarks, and identify expansion opportunities in adjacent geographies or service categories. Most businesses we acquire are leaving 15–25% of achievable revenue on the table — not through poor execution, but through under-investment in sales infrastructure, customer communication, and service expansion.',
      },
      {
        heading: 'Operational Excellence',
        body: 'Skilled trade businesses are fundamentally labor and logistics operations. Our operating team installs modern field management technology, optimizes dispatch and routing, and builds KPI dashboards that give leadership real-time visibility into utilization, job profitability, and technician performance. We routinely drive 200–400bps of EBITDA margin improvement in the first 18 months of ownership.',
      },
      {
        heading: 'Talent & Organization',
        body: 'The constraint on growth for most skilled trade businesses is not demand — it is talent. We build recruiting infrastructure, apprenticeship programs, and management development tracks that allow companies to grow their workforce in line with demand growth. We have invested in partnerships with trade schools and vocational programs across the Sun Belt to support pipeline development.',
      },
      {
        heading: 'M&A Integration',
        body: 'Add-on acquisitions are a core element of the FulcrumPoint value creation thesis. Our portfolio companies acquire smaller, complementary businesses at 3–5x EBITDA multiples that are immediately accretive to enterprise value at platform exit multiples. We have developed standardized integration playbooks — covering HR, technology, finance, and operations — that allow portfolio companies to execute acquisitions efficiently without disrupting core operations.',
      },
    ],
  },
  approach: {
    label: 'Operational Approach',
    eyebrow: 'How We Work',
    tagline: 'Hands-on, operator-led, and built on genuine industry relationships.',
    sections: [
      {
        heading: 'Operator-Led Diligence',
        body: 'Every acquisition begins with a diligence process led by operating team members who have direct experience in the sector. We are not financial engineers evaluating ratios — we are operators evaluating people, processes, and market position. Our diligence goes deep on workforce quality, customer relationship strength, and operational infrastructure, giving us a more accurate view of risk and opportunity than generalist investors.',
      },
      {
        heading: 'Partnership Model',
        body: 'We do not acquire businesses to immediately restructure management and impose a generic operating model. We partner with the existing leadership team — retaining founders where desired, supplementing management depth where needed, and building a shared roadmap for value creation. Our management equity programs ensure that key operators are meaningfully aligned with outcome.',
      },
      {
        heading: '100-Day Integration Plan',
        body: 'Every new portfolio company follows a structured 100-day integration plan developed collaboratively with management. The plan covers technology deployment, financial reporting infrastructure, sales and marketing, workforce development, and the first add-on acquisition pipeline. This structured approach accelerates value creation while minimizing disruption to core operations.',
      },
      {
        heading: 'Ongoing Board Engagement',
        body: 'FulcrumPoint maintains active board-level engagement with every portfolio company throughout our hold period. Our partners bring functional expertise in operations, finance, sales, HR, and M&A — and make that expertise available to management on an ongoing basis, not just at quarterly board meetings. We are accessible, engaged, and deeply invested in the outcome.',
      },
    ],
  },
  criteria: {
    label: 'Investment Criteria',
    eyebrow: 'What We Look For',
    tagline: 'Specific, disciplined, and focused on the characteristics that drive durable value.',
    sections: [
      {
        heading: 'Financial Profile',
        body: 'We target businesses with $1M–$10M in EBITDA and $5M–$75M in annual revenue. We are comfortable with businesses at the lower end of that range if the growth profile, customer mix, and management depth support a clear path to scale. EBITDA margins above 10% are preferred, though we will pursue businesses with lower margins where operational improvement opportunities are identifiable and specific.',
      },
      {
        heading: 'Business Characteristics',
        body: 'Our ideal targets are owner-operated businesses with at least 5 years of operating history, a demonstrated track record of customer retention, and meaningful recurring or repeat revenue from service contracts, maintenance agreements, or long-term customer relationships. We place a premium on companies with documented operational processes, financial reporting infrastructure, and a workforce that is not dependent on any single individual.',
      },
      {
        heading: 'Sector Alignment',
        body: 'We invest exclusively in skilled trade businesses operating in the five sectors where our team has direct operating experience: HVAC, Electrical, Plumbing, Commercial Construction, and Industrial Trades. This focused approach allows us to evaluate deals more accurately, add operational value more effectively, and build a portfolio with synergistic add-on acquisition opportunities.',
      },
      {
        heading: 'Geography',
        body: 'Our primary investment focus is the Sun Belt and Southeast United States — specifically the Phoenix, Dallas-Fort Worth, Las Vegas, Tampa, Orlando, Atlanta, Charlotte, and Nashville markets. We also evaluate opportunities in the Gulf Coast industrial corridor. Our geographic focus aligns with our team\'s market relationships and the demographic and economic tailwinds that drive demand for skilled trade services.',
      },
    ],
  },
};

export default async function InvestmentFocusDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const sector = sectors[slug];
  const approach = approaches[slug];

  if (!sector && !approach) {
    notFound();
  }

  if (sector) {
    return (
      <>
        <PageHero
          eyebrow={`Sector Focus — ${sector.label}`}
          headline={sector.label}
          sub={sector.tagline}
          dark
        />

        <section className="sector-detail-section">
          <div className="sector-detail-inner">
            <div className="sector-detail-stat-band">
              <div className="sector-detail-stat-item">
                <span className="sector-detail-stat-num">{sector.stat}</span>
                <span className="sector-detail-stat-label">Total Addressable Market</span>
              </div>
              <div className="sector-detail-stat-item">
                <span className="sector-detail-stat-num">${'>'}1M</span>
                <span className="sector-detail-stat-label">Minimum EBITDA Target</span>
              </div>
              <div className="sector-detail-stat-item">
                <span className="sector-detail-stat-num">Sun Belt</span>
                <span className="sector-detail-stat-label">Primary Geography</span>
              </div>
            </div>

            <div className="sector-detail-body">
              <div className="sector-detail-left">
                <div className="eyebrow">Why We Invest Here</div>
                <h2 className="sector-detail-heading">The opportunity</h2>
                {sector.body.map((para, i) => (
                  <p key={i} className="sector-detail-para">{para}</p>
                ))}
              </div>
              <div className="sector-detail-right">
                <div className="sector-detail-why">
                  <h3 className="sector-detail-why-ttl">Key tailwinds</h3>
                  <ul className="sector-detail-why-list">
                    {sector.why.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="sector-detail-criteria">
                  <h3 className="sector-detail-why-ttl">Target profile</h3>
                  {sector.criteria.map((c) => (
                    <div key={c.label} className="sector-detail-criteria-row">
                      <span className="sector-detail-criteria-label">{c.label}</span>
                      <span className="sector-detail-criteria-value">{c.value}</span>
                    </div>
                  ))}
                </div>
                <Link href="/submit" className="btn-primary">
                  Submit a Business
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="sector-detail-back">
          <div className="sector-detail-back-inner">
            <Link href="/investment-focus" className="sector-detail-back-link">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M12 7H2M7 2L2 7l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              All Sectors
            </Link>
            <div className="sector-detail-nav-sectors">
              {Object.entries(sectors)
                .filter(([s]) => s !== slug)
                .slice(0, 3)
                .map(([s, data]) => (
                  <Link key={s} href={`/investment-focus/${s}`} className="sector-detail-nav-pill">
                    {data.label}
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </>
    );
  }

  // Approach page
  return (
    <>
      <PageHero
        eyebrow={approach.eyebrow}
        headline={approach.label}
        sub={approach.tagline}
      />

      <section className="approach-detail-section">
        <div className="approach-detail-inner">
          {approach.sections.map((section, i) => (
            <div key={i} className="approach-detail-item">
              <div className="approach-detail-num">0{i + 1}</div>
              <div className="approach-detail-content">
                <h2 className="approach-detail-heading">{section.heading}</h2>
                <p className="approach-detail-body">{section.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="approach-detail-cta">
        <div className="approach-detail-cta-inner">
          <h2 className="approach-detail-cta-headline">
            {slug === 'criteria'
              ? 'Think you fit our criteria?'
              : 'Want to learn more?'}
          </h2>
          <p className="approach-detail-cta-sub">
            {slug === 'criteria'
              ? 'Submit your business for a confidential review. No obligation at any stage.'
              : 'Reach out to speak with a member of the FulcrumPoint team.'}
          </p>
          <div className="approach-detail-cta-btns">
            <Link href="/submit" className="btn-primary">
              Submit a Deal
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link href="/contact" className="btn-outline-dark">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export function generateStaticParams() {
  return [
    ...Object.keys(sectors).map((slug) => ({ slug })),
    ...Object.keys(approaches).map((slug) => ({ slug })),
  ];
}
