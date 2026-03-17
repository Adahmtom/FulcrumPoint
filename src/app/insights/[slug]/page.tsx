import Link from 'next/link';
import { notFound } from 'next/navigation';

const articles: Record<string, {
  tag: string;
  date: string;
  title: string;
  excerpt: string;
  readTime: string;
  content: { heading?: string; body: string }[];
}> = {
  'sun-belt-trades-demand-2025': {
    tag: 'Market Outlook',
    date: 'February 2025',
    title: 'Sun Belt Trades: Why Demand Will Outpace Supply for the Next Decade',
    excerpt: 'Population migration, commercial development, and an aging infrastructure base are converging to create a structural demand advantage for well-positioned skilled trade operators across the Southwest and Southeast.',
    readTime: '6 min read',
    content: [
      {
        body: 'The skilled trades sector in the Sun Belt is experiencing a demand inflection that has no precedent in modern economic history. Population growth, commercial development, and aging physical infrastructure are converging simultaneously — creating what we believe will be a decade-long structural advantage for well-positioned trade operators across the Southwest and Southeast.',
      },
      {
        heading: 'The Migration Tailwind',
        body: 'Between 2020 and 2024, Arizona, Texas, Florida, and the Carolinas collectively absorbed over 4 million net new residents. Each new household requires HVAC installation or replacement, plumbing, electrical infrastructure, and ongoing maintenance. Each new commercial building requires the same. This demographic shift has created a demand floor for trade services that is largely insensitive to macroeconomic cycles — people need functioning air conditioning in Phoenix regardless of interest rate policy.',
      },
      {
        heading: 'Commercial Construction Boom',
        body: 'Simultaneously, commercial development in Sun Belt markets is at historic levels. Data centers, driven by AI infrastructure build-out, require extraordinary mechanical and electrical capacity — a single hyperscale facility may require 50–100 mechanical and electrical subcontractors over its construction lifecycle. Logistics and distribution facilities, medical office development, and multi-family construction are all adding to a commercial pipeline that will sustain trade demand for years.',
      },
      {
        heading: 'The Supply Constraint',
        body: 'Against this demand backdrop sits a persistent and deepening supply constraint. The skilled trades workforce is aging: the median age of an electrician is 41 years old; for HVAC technicians, it is 38. Retirements are accelerating, and replacement rates are not keeping pace. Vocational enrollment has been recovering from a decades-long decline, but pipeline development takes 4–6 years from enrollment to productive field technician. This is not a near-term problem that resolves itself.',
      },
      {
        heading: 'Implications for Investors',
        body: 'For investors with genuine operational expertise in the trades, this environment creates extraordinary opportunity. Businesses that can attract and retain labor, deliver consistent quality, and build the financial infrastructure to scale are positioned to capture disproportionate share in markets where demand is growing faster than supply. FulcrumPoint is building a portfolio of exactly these businesses — operators who have proven they can win the talent competition and deliver for customers who have no alternatives.',
      },
    ],
  },
  'owner-transition-planning': {
    tag: 'Operations',
    date: 'January 2025',
    title: 'The Owner Transition: What the Data Tells Us About Successful PE Partnerships',
    excerpt: 'Analyzing outcomes across 40+ skilled trade transactions, we find that the quality of the management transition — not the financial structure — is the primary predictor of post-acquisition value creation.',
    readTime: '8 min read',
    content: [
      {
        body: 'After reviewing outcomes across more than 40 skilled trade transactions in our network — including both FulcrumPoint portfolio companies and comparable transactions — a clear pattern emerges: the single greatest predictor of post-acquisition value creation is not the entry multiple, not the leverage structure, and not the growth strategy. It is the quality of the management transition.',
      },
      {
        heading: 'What the Data Shows',
        body: 'Transactions where the selling founder remained operationally engaged for 12–24 months post-close generated median EBITDA growth of 34% in the first three years. Transactions where the founder exited at or shortly after close generated median EBITDA growth of only 11% over the same period. The difference is not about talent — it is about knowledge transfer, customer relationship continuity, and cultural preservation.',
      },
      {
        heading: 'The Knowledge Transfer Problem',
        body: 'Skilled trade businesses are fundamentally relationship businesses. The owner of a 20-year HVAC company carries in his head thousands of micro-decisions about customer preferences, pricing exceptions, subcontractor reliability, and operational shortcuts that make the business run. This knowledge is almost never documented. The transition period is not just a formality — it is the critical window during which this institutional knowledge either transfers to the management team or disappears.',
      },
      {
        heading: 'What We Do Differently',
        body: 'FulcrumPoint structures every acquisition with a mandatory transition period of 12–24 months, supported by management equity that creates genuine alignment for the founding team to invest in their successor\'s success. We conduct structured knowledge transfer sessions covering key accounts, vendor relationships, pricing philosophy, and operational edge cases. We do not treat this as an administrative checklist — we treat it as the most important work of the first year.',
      },
    ],
  },
  'hvac-roll-up-playbook': {
    tag: 'M&A',
    date: 'December 2024',
    title: 'The HVAC Roll-Up Playbook: Integration Principles That Actually Work',
    excerpt: 'Most HVAC consolidations fail to generate anticipated synergies. Here is the framework we have developed — through both successes and hard-won failures — for executing acquisitions that genuinely accelerate platform value.',
    readTime: '10 min read',
    content: [
      {
        body: 'HVAC consolidation has attracted significant private equity attention over the past decade. The thesis is compelling: fragmented market, recurring revenue, non-discretionary demand, and genuine geographic and operational synergies between local operators. The execution, however, has been uneven. Many roll-ups have destroyed value through premature integration, technology mismatches, and cultural disruption that drove technician attrition at precisely the wrong moment.',
      },
      {
        heading: 'The Consolidation Mirage',
        body: 'The most common failure mode in HVAC roll-ups is the push for rapid integration in pursuit of "synergy realization" that looks better in an investment committee presentation than it does in field operations. Forcing add-on acquisitions onto a common scheduling platform before the platform is ready, or eliminating local brand equity in favor of a national brand before customers are ready for the transition, destroys the customer relationships that justified the acquisition multiple.',
      },
      {
        heading: 'Principles That Work',
        body: 'Our approach begins with a principle we call "earn the right to integrate." We do not impose change — we earn the trust of acquired management teams, prove that our operating model works through demonstrated results, and then invite integration rather than mandating it. This takes longer. It produces better outcomes. The businesses that join our platform voluntarily adopt our systems and standards because they see them working at neighboring companies.',
      },
      {
        heading: 'Technology Before Integration',
        body: 'We invest in technology infrastructure — field management software, financial reporting, customer relationship management — at the platform level before acquiring add-ons. When a new company joins the platform, the technology infrastructure is already proven and the implementation team is experienced. The first 90 days focus on financial reporting integration and safety culture alignment. Service delivery and customer experience are protected, not disrupted.',
      },
      {
        heading: 'The Human Capital Reality',
        body: 'HVAC technicians are in short supply. They have options. Any integration process that creates uncertainty, changes compensation structures, or disrupts the working environment will trigger attrition — and every technician who leaves takes customer relationships and institutional knowledge with them. Our integration playbooks are built around technician retention as a non-negotiable constraint, not an afterthought.',
      },
    ],
  },
  'ebitda-multiples-trades': {
    tag: 'Market Outlook',
    date: 'November 2024',
    title: 'EBITDA Multiples in the Trades: Where We Are and Where We\'re Going',
    excerpt: 'Skilled trade valuations have compressed from 2021–22 peaks but remain historically elevated. We examine current market dynamics and the characteristics that continue to command premium pricing.',
    readTime: '5 min read',
    content: [
      {
        body: 'Skilled trade transaction multiples have compressed from the 8–10x EBITDA peak of 2021–22, but remain elevated relative to historical norms. Quality operators in attractive geographies are still trading at 6–8x EBITDA, driven by a combination of strategic buyer activity, continued PE capital deployment, and genuine fundamental strength in the underlying businesses.',
      },
      {
        heading: 'What Drives Premium Pricing',
        body: 'The businesses commanding top-of-range multiples share a consistent profile: meaningful recurring revenue (maintenance contracts, service agreements), $1M+ EBITDA with demonstrated consistency over 3+ years, geographic density in high-growth markets, and management depth beyond the founding owner. These characteristics reduce risk and support higher leverage, which translates to higher multiples.',
      },
      {
        heading: 'Where Value Remains',
        body: 'The best value opportunities in the current market are in the $750K–$2M EBITDA range — businesses large enough to support institutional capital but below the threshold at which multiple PE firms compete aggressively for every deal. This is FulcrumPoint\'s primary hunting ground. We have built the sourcing infrastructure, through direct industry relationships and intermediary networks, to access these transactions before they reach the broader market.',
      },
    ],
  },
  'talent-infrastructure': {
    tag: 'Operations',
    date: 'October 2024',
    title: 'Building a Talent Infrastructure That Scales: Lessons from Portfolio Operations',
    excerpt: 'The binding constraint on growth for most skilled trade businesses is not capital or demand — it is labor. This is how we approach workforce development as a core operating priority, not an HR afterthought.',
    readTime: '7 min read',
    content: [
      {
        body: 'When we conduct our 100-day diagnostic on a new portfolio company, we consistently find the same binding constraint on growth: not capital, not demand, not geography — labor. The business could grow 30% next year if it had the technicians. It does not have the technicians. Every growth conversation eventually returns to the same constraint.',
      },
      {
        heading: 'Why Most Companies Fail at This',
        body: 'Most skilled trade businesses approach talent as a reactive problem: someone quits, you post on Indeed, you interview whoever applies, you hire the best available option. This process is slow, expensive, and produces inconsistent quality. Worse, it signals to existing employees that they are replaceable — which accelerates the attrition it was designed to address.',
      },
      {
        heading: 'The Infrastructure Approach',
        body: 'We approach talent as a infrastructure investment, not a recurring expense line. This means building structured apprenticeship programs in partnership with local vocational schools, developing internal career pathway frameworks that allow technicians to see a clear route from apprentice to master to field supervisor, and investing in the compensation benchmarking tools that allow companies to price labor accurately and competitively.',
      },
      {
        heading: 'Results in Practice',
        body: 'Portfolio companies that have implemented our talent infrastructure model have seen voluntary turnover decline by an average of 28% in the first 18 months. They have reduced time-to-fill for open positions from 67 days to 31 days. And they have built apprenticeship pipelines that are producing revenue-generating technicians at a rate that supports 15–25% revenue growth without degrading service quality.',
      },
    ],
  },
  'industrial-maintenance-thesis': {
    tag: 'Sector Deep Dive',
    date: 'September 2024',
    title: 'The Industrial Maintenance Thesis: Why Non-Discretionary Services Win in Every Cycle',
    excerpt: 'Industrial maintenance contractors serving refineries, chemical plants, and food processing facilities occupy a uniquely defensible niche in the skilled trades landscape. Here is why we are allocating capital there.',
    readTime: '9 min read',
    content: [
      {
        body: 'In every economic cycle — expansion, contraction, and recovery — certain categories of industrial spending are simply non-negotiable. A refinery cannot defer the maintenance turnaround that regulatory compliance requires. A chemical plant cannot skip the safety inspection cycle mandated by its operating permit. A food processing facility cannot run equipment past its maintenance interval without risking contamination, shutdown, and liability.',
      },
      {
        heading: 'The Defensive Economics',
        body: 'Industrial maintenance contractors serving these facilities occupy a uniquely defensible position. The work must be done. The relationship between a plant operator and a trusted maintenance contractor is built over years of access authorizations, security clearances, facility-specific training, and institutional familiarity. Switching costs are extraordinarily high — not because contracts are long, but because the cost of onboarding a new contractor (in time, risk, and operational disruption) is prohibitive.',
      },
      {
        heading: 'The Geographic Opportunity',
        body: 'The Gulf Coast industrial corridor — spanning Houston, Beaumont, Lake Charles, Baton Rouge, and New Orleans — represents the highest concentration of process industry facilities in North America. This geography is underserved by institutional capital, in part because the work is technically complex, geographically concentrated, and not easily understood by generalist investors. We believe this represents a significant opportunity for investors with the operating knowledge to evaluate it correctly.',
      },
      {
        heading: 'Our Approach',
        body: 'FulcrumPoint focuses on industrial maintenance contractors with $1M–$8M EBITDA and established facility relationships at multiple sites. We look for companies with certified workforces, active security clearance programs, and management teams that have built the trust of major facility operators over multiple years. These businesses are not easy to find — they do not market themselves broadly, and they are often not actively for sale. Our industry relationships are our sourcing advantage.',
      },
    ],
  },
};

export default async function InsightArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) notFound();

  const otherArticles = Object.entries(articles)
    .filter(([s]) => s !== slug)
    .slice(0, 3);

  return (
    <>
      <section className="article-hero">
        <div className="article-hero-inner">
          <div className="article-hero-meta">
            <span className="insights-tag">{article.tag}</span>
            <span className="article-hero-date">{article.date}</span>
            <span className="article-hero-read">{article.readTime}</span>
          </div>
          <h1 className="article-hero-title">{article.title}</h1>
          <p className="article-hero-excerpt">{article.excerpt}</p>
        </div>
      </section>

      <section className="article-body-section">
        <div className="article-body-inner">
          <article className="article-content">
            {article.content.map((block, i) => (
              <div key={i} className="article-block">
                {block.heading && (
                  <h2 className="article-heading">{block.heading}</h2>
                )}
                <p className="article-para">{block.body}</p>
              </div>
            ))}
          </article>

          <aside className="article-sidebar">
            <div className="article-sidebar-block">
              <div className="article-sidebar-label">Published</div>
              <div className="article-sidebar-value">{article.date}</div>
            </div>
            <div className="article-sidebar-block">
              <div className="article-sidebar-label">Category</div>
              <div className="article-sidebar-value">{article.tag}</div>
            </div>
            <div className="article-sidebar-block">
              <div className="article-sidebar-label">Read time</div>
              <div className="article-sidebar-value">{article.readTime}</div>
            </div>
            <div className="article-sidebar-cta">
              <p>Interested in partnering with FulcrumPoint?</p>
              <Link href="/submit" className="btn-primary">
                Submit a Deal
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="article-more-section">
        <div className="article-more-inner">
          <div className="eyebrow">More Insights</div>
          <div className="article-more-grid">
            {otherArticles.map(([s, a]) => (
              <Link key={s} href={`/insights/${s}`} className="article-more-card">
                <span className="insights-tag">{a.tag}</span>
                <h3 className="article-more-title">{a.title}</h3>
                <span className="article-more-read">{a.readTime}</span>
              </Link>
            ))}
          </div>
          <Link href="/insights" className="article-all-link">
            View all insights
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}

export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}
