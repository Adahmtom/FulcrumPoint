import PageHero from '@/components/PageHero';
import Link from 'next/link';

const companies = [
  {
    name: 'SunState HVAC',
    sector: 'HVAC & Cooling',
    location: 'Phoenix, AZ',
    status: 'Active',
    year: 2022,
    desc: 'Residential and light commercial HVAC service and replacement company serving greater Phoenix. Acquired and scaled from $4M to $11M revenue through technician recruitment and maintenance agreement programs.',
    slug: 'sunstate-hvac',
  },
  {
    name: 'Desert Pro Electric',
    sector: 'Electrical',
    location: 'Tucson, AZ',
    status: 'Active',
    year: 2023,
    desc: 'Licensed electrical contractor serving residential, commercial, and solar integration customers across southern Arizona. Bolt-on acquisition integrated into regional platform.',
    slug: 'desert-pro-electric',
  },
  {
    name: 'RioFlow Plumbing',
    sector: 'Plumbing',
    location: 'Scottsdale, AZ',
    status: 'Active',
    year: 2023,
    desc: 'Full-service plumbing contractor with strong residential and new construction presence in the northeast Valley. Expanded service area following acquisition.',
    slug: 'rioflow-plumbing',
  },
  {
    name: 'Apex Mechanical',
    sector: 'Commercial Construction',
    location: 'Las Vegas, NV',
    status: 'Active',
    year: 2024,
    desc: 'Mechanical subcontractor specializing in commercial HVAC and plumbing for hospitality, retail, and light industrial build-outs across the Las Vegas metro.',
    slug: 'apex-mechanical',
  },
  {
    name: 'Gateway Industrial Services',
    sector: 'Industrial Trades',
    location: 'Mesa, AZ',
    status: 'Active',
    year: 2024,
    desc: 'Industrial maintenance and repair organization serving manufacturing and logistics customers across the I-10 corridor. Multi-site MRO contracts.',
    slug: 'gateway-industrial',
  },
  {
    name: 'ThermalEdge Systems',
    sector: 'HVAC & Cooling',
    location: 'Albuquerque, NM',
    status: 'Realized',
    year: 2021,
    desc: 'Commercial HVAC installation and service company. Acquired, scaled through key account development, and exited via strategic sale to a regional HVAC platform in 2024.',
    slug: 'thermaledge',
  },
];

const sectorColors: Record<string, string> = {
  'HVAC & Cooling': '#EC8647',
  'Electrical': '#4E546B',
  'Plumbing': '#b8bdd0',
  'Commercial Construction': '#EC8647',
  'Industrial Trades': '#4E546B',
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        headline="Companies we&apos;ve built<br /><em>together</em>."
        sub="FulcrumPoint partners with skilled trade businesses at pivotal moments — providing the capital, operational expertise, and strategic support to accelerate growth and build lasting enterprise value."
      />

      <section className="portfolio-section">
        <div className="portfolio-inner">
          <div className="portfolio-filter-bar">
            <span className="portfolio-count">{companies.length} Companies</span>
            <div className="portfolio-filters">
              {['All', 'HVAC & Cooling', 'Electrical', 'Plumbing', 'Commercial Construction', 'Industrial Trades'].map(f => (
                <span key={f} className={`pf-filter ${f === 'All' ? 'active' : ''}`}>{f}</span>
              ))}
            </div>
          </div>

          <div className="portfolio-grid">
            {companies.map((co) => (
              <div key={co.slug} className="portfolio-card">
                <div className="portfolio-card-top">
                  <div
                    className="portfolio-card-sector-dot"
                    style={{ background: sectorColors[co.sector] }}
                  />
                  <span className="portfolio-card-sector">{co.sector}</span>
                  <span className={`portfolio-status ${co.status === 'Realized' ? 'realized' : ''}`}>
                    {co.status}
                  </span>
                </div>
                <h3 className="portfolio-card-name">{co.name}</h3>
                <div className="portfolio-card-meta">
                  <span>{co.location}</span>
                  <span>Acquired {co.year}</span>
                </div>
                <p className="portfolio-card-desc">{co.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="portfolio-cta">
        <div className="portfolio-cta-inner">
          <h2 className="portfolio-cta-headline">Own a skilled trade business?</h2>
          <p className="portfolio-cta-sub">We&apos;re actively looking for our next partnership. Tell us about your company.</p>
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
