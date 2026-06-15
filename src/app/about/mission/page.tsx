import Link from 'next/link';
import Image from 'next/image';
import { CtaSection } from '@/components/HomeSections';

const coreValues = [
  {
    icon: '◈',
    title: 'Integrity above all',
    body: 'We do what we say and say what we do. Every founder, management team, and investor can rely on our word.',
  },
  {
    icon: '◈',
    title: 'Hands-on partnership',
    body: 'We don\'t delegate from a boardroom. We roll up our sleeves and work alongside the teams we invest in.',
  },
  {
    icon: '◈',
    title: 'Operational excellence',
    body: 'We bring systematic process improvements and technology to businesses that have grown through grit and talent.',
  },
  {
    icon: '◈',
    title: 'Respect for legacy',
    body: 'Every founder has built something meaningful. We honor that history as we build toward a larger future.',
  },
  {
    icon: '◈',
    title: 'Community accountability',
    body: 'Skilled trade businesses are pillars of local economies. We take seriously our responsibility to workers, customers, and the communities we serve.',
  },
  {
    icon: '◈',
    title: 'Shared upside',
    body: 'The best partnerships are ones where everyone wins. We structure every deal so that success is genuinely shared.',
  },
];

export default function MissionPage() {
  return (
    <>
      {/* ─── MISSION HERO ─── */}
      <section className="vm-hero">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/geo-feature.svg" className="page-geo-feature" alt="" aria-hidden="true" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/geo-accent.svg" className="page-geo-accent" alt="" aria-hidden="true" />
        <div className="vm-hero-inner">
          <div className="vm-hero-text">
            <div className="eyebrow anim-up">Mission &amp; Vision</div>
            <h1 className="vm-hero-headline anim-up delay-1">
              A clearer purpose<br />for every partnership.
            </h1>
          </div>
          {/* large background photo */}
          <div className="vm-hero-img" aria-hidden="true">
            <Image
              src="/images/mission-hero.jpg"
              alt=""
              fill
              style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
              sizes="100vw"
              priority
            />
            <div className="vm-hero-overlay" />
          </div>
        </div>
      </section>

      {/* ─── MISSION STATEMENT ─── */}
      <section className="vm-mission">
        <div className="vm-mission-inner">
          <div className="vm-mission-left">
            <div className="eyebrow">Our Mission</div>
            <div className="vm-rule" />
          </div>
          <div className="vm-mission-right">
            <blockquote className="vm-statement">
              To acquire, grow, and professionalize essential services businesses in skilled
              trades — creating enduring value for founders, employees, investors, and the
              communities where our companies operate.
            </blockquote>
            <p className="vm-statement-sub">
              We exist to be the partner skilled trade business owners have always needed—one who understands the work, honors the legacy, and brings the capital and operational expertise to help strong businesses reach their full potential.
            </p>
          </div>
        </div>
      </section>

      {/* ─── VISION STATEMENT ─── */}
      <section className="vm-vision">
        <div className="vm-vision-inner">
          <div className="vm-vision-img-wrap">
            <Image
              src="/images/mission-vision.jpg"
              alt="FulcrumPoint team working on commercial construction site"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center 20%' }}
              sizes="(max-width: 768px) 100vw, 45vw"
            />
            <div className="vm-vision-img-geo" aria-hidden="true">
              <div className="vm-geo-sq-orange" />
              <div className="vm-geo-sq-navy" />
            </div>
          </div>
          <div className="vm-vision-content">
            <div className="eyebrow">Our Vision</div>
            <div className="vm-rule" />
            <h2 className="vm-vision-headline">
              The most trusted partner for skilled trade business owners in transition.
            </h2>
            <p className="vm-vision-body">
              We envision a future where ownership transitions are handled with true understanding, combining operational expertise, disciplined capital, and deep respect for the businesses and people who built them.
            </p>
            <p className="vm-vision-body">
              Our vision is to build FulcrumPoint into a premier growth platform for skilled trade businesses across Arizona and beyond, aligned by values, systems, and a focus on long-term excellence.
            </p>
            <Link href="/about/strategy" className="vm-vision-link">
              Our investment strategy
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CORE VALUES ─── */}
      <section className="vm-values">
        <div className="vm-values-inner">
          <div className="vm-values-header">
            <div className="eyebrow">What We Stand For</div>
            <div className="vm-rule" />
            <h2 className="vm-values-headline">Core values</h2>
            <p className="vm-values-sub">
              These aren&apos;t aspirational words on a wall. They are the values
              that guide every investment decision, every conversation with a seller, and every
              interaction with a management team.
            </p>
          </div>
          <div className="vm-values-grid">
            {coreValues.map((v) => (
              <div key={v.title} className="vm-value-card">
                <div className="vm-value-accent" aria-hidden="true" />
                <h3 className="vm-value-title">{v.title}</h3>
                <p className="vm-value-body">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA — same as homepage ─── */}
      <CtaSection />
    </>
  );
}
