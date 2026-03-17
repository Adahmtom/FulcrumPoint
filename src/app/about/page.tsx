import PageHero from '@/components/PageHero';
import Link from 'next/link';

const values = [
  { num: '01', title: 'Operators First', body: 'Every investment decision is informed by operating experience. We only invest in industries where members of our team have directly built and run businesses.' },
  { num: '02', title: 'Aligned Incentives', body: 'We structure every partnership to align seller proceeds, management equity, and FulcrumPoint returns. We win together.' },
  { num: '03', title: 'Long-Term Thinking', body: 'We build companies for durable, long-term value — not to flip them. Our 5–7 year hold periods allow us to invest deeply in operational transformation.' },
  { num: '04', title: 'Owner-Operator Respect', body: 'We honor the legacy that founders have built. Our goal is always to accelerate what is already working, not to dismantle it.' },
  { num: '05', title: 'Transparent Partnership', body: 'We communicate openly with sellers, management teams, and investors — even when the news is difficult. Trust is our most valuable asset.' },
  { num: '06', title: 'Community Impact', body: 'Skilled trades are the backbone of local economies. We take seriously our responsibility to create good jobs and strengthen the communities where our companies operate.' },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About FulcrumPoint"
        headline="Built by operators.<br /><em>For operators.</em>"
        sub="FulcrumPoint Holdings was founded on a simple conviction: the best investors in skilled trade businesses are the people who have actually run them. We exist to put that principle into practice."
      />

      <section className="about-story">
        <div className="about-story-inner">
          <div className="about-story-left">
            <div className="eyebrow">Our Story</div>
            <h2 className="about-story-headline">
              Why FulcrumPoint exists
            </h2>
          </div>
          <div className="about-story-right">
            <p>
              FulcrumPoint Holdings was founded in 2021 by Marcus Alvarez after spending 15 years building
              and operating HVAC and mechanical service businesses across the Southwest. Marcus witnessed
              firsthand how skilled trade owners — who had spent decades building extraordinary businesses —
              were underserved by traditional private equity firms that lacked operational context and
              industry relationships.
            </p>
            <p>
              At the same time, he saw the enormous opportunity: an aging owner-operator demographic,
              favorable supply-demand dynamics driven by housing growth in the Sun Belt, and a persistent
              shortage of skilled tradespeople creating durable pricing power for well-managed operators.
            </p>
            <p>
              FulcrumPoint was built to bridge that gap — bringing institutional capital and disciplined
              investment process to an industry that deserves better partners.
            </p>
            <Link href="/team" className="about-story-link">
              Meet the team
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="about-values-inner">
          <div className="about-values-header">
            <div className="eyebrow">How We Operate</div>
            <h2 className="about-values-headline">Our principles</h2>
          </div>
          <div className="about-values-grid">
            {values.map((v) => (
              <div key={v.num} className="about-value-item">
                <div className="about-value-num">{v.num}</div>
                <h3 className="about-value-title">{v.title}</h3>
                <p className="about-value-body">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-location">
        <div className="about-location-inner">
          <div className="about-location-left">
            <div className="eyebrow">Headquartered</div>
            <h2 className="about-location-headline">Phoenix, Arizona</h2>
            <p className="about-location-sub">
              We are headquartered in Phoenix for a reason: the Sun Belt is the epicenter of skilled trades
              demand growth, driven by population influx, housing construction, and commercial development
              that shows no signs of slowing. Our proximity to our markets gives us a sourcing and
              operational edge that out-of-market competitors cannot replicate.
            </p>
            <address className="about-address">
              Phoenix, Arizona<br />
              United States<br />
              <a href="tel:+16025550100">+1 (602) 555-0100</a><br />
              <a href="mailto:info@fulcrumpointholdings.com">info@fulcrumpointholdings.com</a>
            </address>
          </div>
          <div className="about-location-right">
            <div className="about-geo-block">
              <div className="about-geo-orange" />
              <div className="about-geo-slate" />
              <div className="about-geo-light" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
