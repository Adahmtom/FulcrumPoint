import Link from 'next/link';
import Image from 'next/image';

const glance = [
  {
    num: '01',
    title: 'Operator-First Approach',
    body: 'Every investment decision is informed by direct operating experience in skilled trades. We know these businesses because we\'ve run them — from the field to the financials.',
    href: '/about/strategy',
  },
  {
    num: '02',
    title: 'Aligned Incentives',
    body: 'We structure every partnership so that seller proceeds, management equity, and FulcrumPoint returns rise together. There is no version of success where we win and you don\'t.',
    href: '/about/strategy',
  },
  {
    num: '03',
    title: 'Long-Term Value Creation',
    body: 'We invest for durable, multi-year value — not quick flips. Our 5–7 year hold periods let us invest deeply in operational transformation and sustainable growth.',
    href: '/about/strategy',
  },
];

const values = [
  { num: '01', title: 'Operators First', body: 'Every investment decision is informed by operating experience. We only invest in industries where members of our team have directly built and run businesses.' },
  { num: '02', title: 'Aligned Incentives', body: 'We structure every partnership to align seller proceeds, management equity, and FulcrumPoint returns. We win together.' },
  { num: '03', title: 'Long-Term Thinking', body: 'We build companies for durable, long-term value — not to flip them. Our 5–7 year hold periods allow us to invest deeply in operational transformation.' },
  { num: '04', title: 'Owner-Operator Respect', body: 'We honor the legacy that founders have built. Our goal is always to accelerate what is already working, not to dismantle it.' },
  { num: '05', title: 'Transparent Partnership', body: 'We communicate openly with sellers, management teams, and investors — even when the news is difficult. Trust is our most valuable asset.' },
  { num: '06', title: 'Community Impact', body: 'Skilled trades are the backbone of local economies. We take seriously our responsibility to create good jobs and strengthen the communities where our companies operate.' },
];

const stats = [
  { value: '$250M+', label: 'Capital deployed' },
  { value: '12+',    label: 'Portfolio companies' },
  { value: '5–7yr',  label: 'Avg. hold period' },
  { value: '3',      label: 'Core trade verticals' },
];

export default function AboutPage() {
  return (
    <>
      {/* ─── WHO WE ARE — split hero ─── */}
      <section className="aw-hero">
        {/* brand geo shapes */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/geo-feature.svg" className="page-geo-feature" alt="" aria-hidden="true" />
        <div className="aw-hero-inner">
          {/* left */}
          <div className="aw-hero-left">
            <div className="eyebrow anim-up">Who We Are</div>
            <h1 className="aw-hero-headline anim-up delay-1">
              Partners in<br />growth.
            </h1>
            <p className="aw-hero-body anim-up delay-2">
              FulcrumPoint Holdings is a Phoenix-based private equity firm focused exclusively on
              acquiring and building essential services businesses in skilled trades — HVAC, electrical,
              plumbing, commercial construction, and industrial services.
            </p>
            <p className="aw-hero-body anim-up delay-2">
              In an industry built on relationships, we are proud to be a trusted, hands-on partner
              to great companies. We join the team in the trenches to help drive innovation and growth,
              bringing institutional capital to an industry that has long deserved better partners.
            </p>
            <Link href="/team" className="aw-hero-link anim-up delay-3">
              Meet the team
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          {/* right — photo + geo overlay */}
          <div className="aw-hero-right">
            <div className="aw-hero-img-wrap">
              <Image
                src="/images/about-hero.jpg"
                alt="FulcrumPoint trade team working on-site"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
                sizes="(max-width: 768px) 100vw, 55vw"
                priority
              />
              {/* geometric corner accents */}
              <div className="aw-geo-tr" aria-hidden="true" />
              <div className="aw-geo-br" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── AT A GLANCE ─── */}
      <section className="aw-glance">
        <div className="aw-glance-inner">
          <div className="eyebrow aw-glance-eyebrow">FulcrumPoint at a Glance</div>
          <div className="aw-glance-grid">
            {glance.map((g) => (
              <div key={g.num} className="aw-glance-card">
                <div className="aw-glance-accent" aria-hidden="true" />
                <h3 className="aw-glance-title">{g.title}</h3>
                <p className="aw-glance-body">{g.body}</p>
                <Link href={g.href} className="aw-glance-link">
                  Learn more
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── STATS BAND ─── */}
      <section className="aw-stats">
        <div className="aw-stats-inner">
          {stats.map((s) => (
            <div key={s.label} className="aw-stat">
              <div className="aw-stat-value">{s.value}</div>
              <div className="aw-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── OUR PRINCIPLES ─── */}
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

      {/* ─── STORY + PHOTO ─── */}
      <section className="aw-story">
        <div className="aw-story-inner">
          <div className="aw-story-img-wrap">
            <Image
              src="/images/about-story.jpg"
              alt="FulcrumPoint operator reviewing project plans"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
              sizes="(max-width: 768px) 100vw, 45vw"
            />
          </div>
          <div className="aw-story-content">
            <div className="eyebrow">Our Story</div>
            <h2 className="aw-story-headline">Why FulcrumPoint exists</h2>
            <p>
              FulcrumPoint Holdings was founded in 2021 by Marcus Alvarez after spending 15 years
              building and operating HVAC and mechanical service businesses across the Southwest.
              Marcus witnessed firsthand how skilled trade owners were underserved by traditional
              private equity firms that lacked operational context and industry relationships.
            </p>
            <p>
              FulcrumPoint was built to bridge that gap — bringing institutional capital and
              disciplined investment process to an industry that deserves better partners.
            </p>
            <Link href="/about/mission" className="aw-story-link">
              Our vision &amp; mission
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── MEET OUR TEAM ─── */}
      <section className="aw-meet-team">
        {/* geometric triangle — left accent */}
        <div className="aw-meet-tri" aria-hidden="true" />

        <div className="aw-meet-inner">
          {/* left column intentionally empty — triangle fills visually */}
          <div />
          <div className="aw-meet-content">
            <h2 className="aw-meet-headline">Meet our team</h2>
            <p className="aw-meet-body">
              Our dedicated FulcrumPoint team is here to support our portfolio company partners.
              With deep expertise across skilled trades operations, finance, and value creation,
              we strive to help great companies achieve their fullest potential.
            </p>
            <Link href="/team" className="aw-meet-btn">
              Meet the team
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
