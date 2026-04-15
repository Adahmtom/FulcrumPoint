interface PageHeroProps {
  eyebrow: string;
  headline: string;
  sub?: string;
  dark?: boolean;
}

export default function PageHero({ eyebrow, headline, sub, dark }: PageHeroProps) {
  return (
    <section className={`page-hero ${dark ? 'page-hero-dark' : ''}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/geo-accent.svg" className="page-geo-accent" alt="" aria-hidden="true" />
      <div className="page-hero-inner">
        <div className="eyebrow anim-up">{eyebrow}</div>
        <h1
          className="page-hero-headline anim-up delay-1"
          dangerouslySetInnerHTML={{ __html: headline }}
        />
        {sub && <p className="page-hero-sub anim-up delay-2">{sub}</p>}
      </div>
    </section>
  );
}
