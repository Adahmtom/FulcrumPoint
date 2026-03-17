import Link from 'next/link';

/* ─────────────────────────────────────────────────────────────────────────────
   HERO MASK LOGIC
     white fill = opaque (page background shows)
     black fill = transparent (video shows through)
     white OVER black = punches back to opaque (creates the equilateral triangle cuts)

   Shapes:
     · Top Parallelogram   — video panel, top-right, left edge angled
     · Bottom Parallelogram — video panel, bottom-right, left edge angled (mirrored)
     · FP Monogram          — video shows through the FP letterform
     · Equilateral Triangle 1 — white cutout inside top parallelogram
     · Equilateral Triangle 2 — white cutout inside bottom parallelogram
───────────────────────────────────────────────────────────────────────────── */

export default function Hero() {
  const fpBlade  = 'm0 0h137l-6 7-19 19-1 2h-2l-2 4-69 69-7 8-31 31h-2v-138z';
  const fpTopBar = 'm0 0h94l1 3v37l-1 21h-152v-3l37-37 7-8 12-12z';
  const fpBody   =
    'm0 0h66l16 3 15 6 14 8 10 8 10 10 10 15 6 13 5 19 1 7v16l-2 14-5 15-7 14-8 11-10 11-15 11-17 8-19 5-14 1h-94l-10 1-1 68h-58l-1-1-1-28v-101l166-1 10-2 12-6 7-8 4-9 1-4v-13l-3-9-6-9-8-7-7-3-16-2h-106l-3-2 30-30 7-8z';

  const FP_TRANSFORM = 'translate(441,-54) scale(1.33)';

  /*
    Top parallelogram: y 40→275 (height 235), left edge angled right by 100px top→bottom
      top-left=(850,40) top-right=(1400,40) bottom-right=(1400,275) bottom-left=(750,275)

    Equilateral triangle 1 (right-pointing, side s=200) inside top parallelogram:
      center-y = (40+275)/2 = 157.5
      left vertices at x=1040: top=(1040,57) bottom=(1040,258) apex=(1213,158)
      Verify: left side = 258−57 = 201 ≈ 200 ✓
              slant    = √(173²+100²) ≈ 200 ✓

    Bottom parallelogram (mirror): y 625→880 (height 255), left edge angled the other way
      top-left=(750,625) top-right=(1400,625) bottom-right=(1400,880) bottom-left=(850,880)

    Equilateral triangle 2 (right-pointing, side s=200) inside bottom parallelogram:
      center-y = (625+880)/2 = 752.5
      left vertices at x=1040: top=(1040,652) bottom=(1040,852) apex=(1213,752)
  */

  return (
    <section className="hero">

      {/* ── Layer 1: Full-bleed looping video ──────────────────────── */}
      <video className="hero-bg-video" autoPlay muted loop playsInline preload="auto">
        <source src="https://videos.pexels.com/video-files/6450803/6450803-hd_1920_1080_25fps.mp4" type="video/mp4" />
        <source src="https://videos.pexels.com/video-files/6450803/6450803-sd_960_506_25fps.mp4" type="video/mp4" />
      </video>

      {/* ── Layer 2: SVG mask + accent shapes ─────────────────────── */}
      <svg
        className="hero-mask-svg"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <mask id="fp-hero-mask">
            {/* Base: full white (everything opaque) */}
            <rect width="1440" height="900" fill="white" />

            {/* ── TOP PARALLELOGRAM ── */}
            <polygon points="850,40 1400,40 1400,275 750,275" fill="black" />

            {/* ── EQUILATERAL TRIANGLE 1: white cut into top parallelogram ── */}
            <polygon points="1040,57 1213,158 1040,258" fill="white" />

            {/* ── FP MONOGRAM ── */}
            <g transform={FP_TRANSFORM}>
              <path transform="translate(233,234)" d={fpBlade}  fill="black" />
              <path transform="translate(420,234)" d={fpTopBar} fill="black" />
              <path transform="translate(340,314)" d={fpBody}   fill="black" />
            </g>

            {/* ── BOTTOM PARALLELOGRAM ── */}
            <polygon points="750,625 1400,625 1400,880 850,880" fill="black" />

            {/* ── EQUILATERAL TRIANGLE 2: white cut into bottom parallelogram ── */}
            <polygon points="1040,652 1213,752 1040,852" fill="white" />
          </mask>
        </defs>

        {/* White overlay — video visible only through mask cutouts */}
        <rect width="1440" height="900" fill="#FDFDFD" mask="url(#fp-hero-mask)" />

        {/* ── Accent triangles (drawn over the white background) ── */}

        {/* Orange accent triangle — between top panel and FP monogram */}
        <polygon points="825,282 905,282 865,328" fill="#EC8647" opacity="0.5" />

        {/* Navy accent triangle — left of FP monogram */}
        <polygon points="750,330 910,330 750,480" fill="#2B3441" />

        {/* Small navy accent — upper-right gap */}
        <polygon points="1400,520 1400,625 1290,625" fill="#2B3441" />

        {/* Orange brand bar at very bottom */}
        <rect x="0" y="893" width="1440" height="7" fill="#EC8647" />
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
