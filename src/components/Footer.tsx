import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">

        {/* ── Left: combined FP mark (monogram + geo shapes) ── */}
        <div className="footer-brand">
          <Image
            src="/footer-mark.svg"
            alt="FulcrumPoint Holdings"
            width={220}
            height={234}
            priority
          />
        </div>

        {/* ── Center: sitemap columns ── */}
        <div className="footer-cols">
          <div>
            <div className="footer-col-ttl">Where We Invest</div>
            <Link href="/investment-focus/hvac" className="f-link">HVAC &amp; Cooling Systems</Link>
            <Link href="/investment-focus/electrical" className="f-link">Electrical</Link>
            <Link href="/investment-focus/plumbing" className="f-link">Plumbing</Link>
            <Link href="/investment-focus/construction" className="f-link">Commercial Construction</Link>
            <Link href="/investment-focus/industrial" className="f-link">Industrial Trades</Link>
          </div>

          <div>
            <div className="footer-col-ttl">How We Invest</div>
            <Link href="/investment-focus/value-creation" className="f-link">Value Creation</Link>
            <Link href="/investment-focus/approach" className="f-link">Operational Approach</Link>
            <Link href="/investment-focus/criteria" className="f-link">Investment Criteria</Link>
            <Link href="/submit" className="f-link">Deal Submission Portal</Link>
          </div>

          <div>
            <div className="footer-col-ttl">Who We Are</div>
            <Link href="/portfolio" className="f-link">Portfolio</Link>
            <Link href="/team" className="f-link">Team</Link>
            <Link href="/about" className="f-link">About</Link>
            <Link href="/insights" className="f-link">News &amp; Insights</Link>
            <Link href="/contact" className="f-link">Contact</Link>
          </div>
        </div>

        {/* ── Right: CTA buttons + address + social ── */}
        <div className="footer-right">
          <div className="footer-ctas">
            <Link href="/contact" className="f-cta orange">
              Contact
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link href="/investor-login" className="f-cta">
              Investor Login
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </Link>
          </div>

          <address className="footer-addr" style={{ fontStyle: 'normal' }}>
            Phoenix, Arizona<br />
            United States<br />
            <a href="tel:+16025550100">+1 (602) 555-0100</a>
          </address>

          <div className="footer-socials">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
              className="footer-social-btn" aria-label="LinkedIn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>

      </div>

      {/* ── Bottom bar ── */}
      <div className="footer-bottom">
        <span className="footer-copy">
          © {new Date().getFullYear()} FulcrumPoint Holdings, LLC. All rights reserved.
        </span>
        <div className="footer-legal">
          <Link href="/disclaimer">Disclaimer</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Use</Link>
        </div>
      </div>
    </footer>
  );
}
