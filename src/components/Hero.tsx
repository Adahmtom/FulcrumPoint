import Link from 'next/link';

/*
  HERO OVERLAY — unified SVG on video background:
    · Staircase (#eef0f3) from homepage-header-background-desktop.svg
    · P body punched out via SVG mask → video shows through the P shape
    · F blade + topbar drawn as solid slate on top
    · Two accent triangles (light blue, dark navy) from background SVG

  fpBody — triangle removed:
    Original end: h-106 l-3-2 30-30 7-8 z
    Modified end: h-106 l-3-2 z       (drops the angular notch at the P stem top)
*/

export default function Hero() {
  const fpBlade  = 'm0 0h137l-6 7-19 19-1 2h-2l-2 4-69 69-7 8-31 31h-2v-138z';
  const fpTopBar = 'm0 0h94l1 3v37l-1 21h-152v-3l37-37 7-8 12-12z';

  // Triangle removed — ends with l-3-2z instead of l-3-2 30-30 7-8z
  const fpBody =
    'm0 0h66l16 3 15 6 14 8 10 8 10 10 10 15 6 13 5 19 1 7v16l-2 14-5 15-7 14-8 11-10 11-15 11-17 8-19 5-14 1h-94l-10 1-1 68h-58l-1-1-1-28v-101l166-1 10-2 12-6 7-8 4-9 1-4v-13l-3-9-6-9-8-7-7-3-16-2h-106l-3-2z';

  return (
    <section className="hero">

      {/* ── Layer 1: Full-bleed looping video (desktop only) ───────── */}
      <video className="hero-bg-video" autoPlay muted loop playsInline preload="auto">
        <source src="/hero-video.mp4"    type="video/mp4" />
        <source src="/hero-video-sd.mp4" type="video/mp4" />
      </video>

      {/* ── Layer 1b: Static photo for mobile/tablet ───────────────── */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/if-hero.jpg"
        alt=""
        aria-hidden="true"
        className="hero-mobile-photo"
      />

      {/* ── Mobile white overlay ────────────────────────────────────── */}
      <div className="hero-mobile-overlay" aria-hidden="true" />

      {/* ── Geo accent (mobile only) ────────────────────────────────── */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/geo-accent.svg" className="hero-mobile-geo" alt="" aria-hidden="true" />

      {/* ── Layer 2: Combined overlay SVG (desktop only) ───────────── */}
      <svg
        className="hero-mask-svg"
        viewBox="0 0 1440 720"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          {/*
            Mask for the staircase path:
              white = staircase visible (#eef0f3 shows)
              black = hole (video shows through)
            The P body shape is painted black → punches a transparent P into the staircase.
          */}
          <mask id="logo-cutout-mask">
            <rect width="1440" height="720" fill="white" />
            {/* All three logo shapes punched black → video shows through entire FP mark */}
            <g transform="translate(496,0)">
              <path transform="translate(233,234)" d={fpBlade}  fill="black" />
              <path transform="translate(420,234)" d={fpTopBar} fill="black" />
              <path transform="translate(340,314)" d={fpBody}   fill="black" />
            </g>
          </mask>
        </defs>

        {/* ── Staircase with full FP logo punched out (video visible through entire mark) ── */}
        <path
          d="M1440 720.001h-89l88-88v-272h-180v-180h-179v-180l360 360v360Zm-361 0H0v-720h180v179l179-179v180h180v-180h181v180h180v180h179v360Z"
          fill="#eef0f3"
          mask="url(#logo-cutout-mask)"
        />

        {/* ── Accent shapes from homepage-header-background-desktop.svg ── */}
        <path d="m899.998 268-88-88v88Z"       fill="#7aa2ce" />
        <path d="m1078.998 539-179-179v179Z"    fill="#0d2756" />

        {/* Orange brand bar */}
        <rect x="0" y="713" width="1440" height="7" fill="#EC8647" />
      </svg>

      {/* ── Layer 3: Hero text ──────────────────────────────────────── */}
      <div className="hero-content">
        <div className="hero-left">
          <div className="eyebrow anim-up delay-1">Operator-Led Private Equity</div>
          <h1 className="hero-headline anim-up delay-2">
            The right <em>leverage</em> changes everything.
          </h1>
          <p className="hero-sub anim-up delay-3">
            FulcrumPoint Holdings partners with skilled trade businesses to unlock
            untapped growth through disciplined, operator-led value creation—
            building durable companies aligned for exceptional exit outcomes.
          </p>
          <div className="hero-actions anim-up delay-4">
            <Link href="/investment-focus" className="btn-primary">
              Our Approach
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5"
                  strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link href="/submit" className="btn-outline">Submit a Deal</Link>
          </div>
        </div>
      </div>

    </section>
  );
}
