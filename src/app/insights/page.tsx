import Link from 'next/link';
import PageHero from '@/components/PageHero';

const articles = [
  {
    slug: 'sun-belt-trades-demand-2025',
    tag: 'Market Outlook',
    date: 'February 2025',
    title: 'Sun Belt Trades: Why Demand Will Outpace Supply for the Next Decade',
    excerpt: 'Population migration, commercial development, and an aging infrastructure base are converging to create a structural demand advantage for well-positioned skilled trade operators across the Southwest and Southeast.',
    readTime: '6 min read',
  },
  {
    slug: 'owner-transition-planning',
    tag: 'Operations',
    date: 'January 2025',
    title: 'The Owner Transition: What the Data Tells Us About Successful PE Partnerships',
    excerpt: 'Analyzing outcomes across 40+ skilled trade transactions, we find that the quality of the management transition — not the financial structure — is the primary predictor of post-acquisition value creation.',
    readTime: '8 min read',
  },
  {
    slug: 'hvac-roll-up-playbook',
    tag: 'M&A',
    date: 'December 2024',
    title: 'The HVAC Roll-Up Playbook: Integration Principles That Actually Work',
    excerpt: 'Most HVAC consolidations fail to generate anticipated synergies. Here is the framework we have developed — through both successes and hard-won failures — for executing acquisitions that genuinely accelerate platform value.',
    readTime: '10 min read',
  },
  {
    slug: 'ebitda-multiples-trades',
    tag: 'Market Outlook',
    date: 'November 2024',
    title: 'EBITDA Multiples in the Trades: Where We Are and Where We\'re Going',
    excerpt: 'Skilled trade valuations have compressed from 2021–22 peaks but remain historically elevated. We examine current market dynamics and the characteristics that continue to command premium pricing.',
    readTime: '5 min read',
  },
  {
    slug: 'talent-infrastructure',
    tag: 'Operations',
    date: 'October 2024',
    title: 'Building a Talent Infrastructure That Scales: Lessons from Portfolio Operations',
    excerpt: 'The binding constraint on growth for most skilled trade businesses is not capital or demand — it is labor. This is how we approach workforce development as a core operating priority, not an HR afterthought.',
    readTime: '7 min read',
  },
  {
    slug: 'industrial-maintenance-thesis',
    tag: 'Sector Deep Dive',
    date: 'September 2024',
    title: 'The Industrial Maintenance Thesis: Why Non-Discretionary Services Win in Every Cycle',
    excerpt: 'Industrial maintenance contractors serving refineries, chemical plants, and food processing facilities occupy a uniquely defensible niche in the skilled trades landscape. Here is why we are allocating capital there.',
    readTime: '9 min read',
  },
];

const featuredArticle = articles[0];
const remainingArticles = articles.slice(1);

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        headline="Perspectives on<br />the trades."
        sub="Research, operational thinking, and market analysis from the FulcrumPoint team."
      />

      <section className="insights-page-section">
        <div className="insights-page-inner">

          {/* Featured */}
          <Link href={`/insights/${featuredArticle.slug}`} className="insights-featured">
            <div className="insights-featured-meta">
              <span className="insights-tag">{featuredArticle.tag}</span>
              <span className="insights-date">{featuredArticle.date}</span>
            </div>
            <h2 className="insights-featured-title">{featuredArticle.title}</h2>
            <p className="insights-featured-excerpt">{featuredArticle.excerpt}</p>
            <span className="insights-featured-cta">
              Read article
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </Link>

          {/* Grid */}
          <div className="insights-page-grid">
            {remainingArticles.map((a) => (
              <Link key={a.slug} href={`/insights/${a.slug}`} className="insights-page-card">
                <div className="insights-page-card-meta">
                  <span className="insights-tag">{a.tag}</span>
                  <span className="insights-date">{a.date}</span>
                </div>
                <h3 className="insights-page-card-title">{a.title}</h3>
                <p className="insights-page-card-excerpt">{a.excerpt}</p>
                <span className="insights-page-card-read">{a.readTime}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
