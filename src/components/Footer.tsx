import Link from 'next/link';
import Image from 'next/image';

const INVESTOR_FORM = 'https://docs.google.com/forms/d/e/1FAIpQLSdZMfgkjkbdoN6393uE_28EP_i-w_lPgRpLfLhYYwt80PkKXA/viewform?usp=header';
const SELLER_FORM   = 'https://docs.google.com/forms/d/e/1FAIpQLSd0Xtk8oq0N4Q0u4ZCpROnY3tIGiuhZV_t9pi87fbpJmP2_3Q/viewform?usp=header';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">

        {/* ── Left: combined FP mark (monogram + geo shapes) ── */}
        <div className="footer-brand">
          <Image
            src="/footer-mark.svg"
            alt="FulcrumPoint Holdings"
            width={300}
            height={200}
            priority
          />
        </div>

        {/* ── Center: sitemap columns ── */}
        <div className="footer-cols">
          <div>
            <div className="footer-col-ttl">Our Firm</div>
            <Link href="/about" className="f-link">About Us</Link>
            <Link href="/team" className="f-link">Team</Link>
            <Link href="/about/mission" className="f-link">Mission &amp; Vision</Link>
          </div>

          <div>
            <div className="footer-col-ttl">Investing</div>
            <Link href="/about/strategy" className="f-link">Our Investment Strategy</Link>
            <Link href="/for-business-owners" className="f-link">For Business Owners</Link>
          </div>

          <div>
            <div className="footer-col-ttl">Get In Touch</div>
            <a href={INVESTOR_FORM} target="_blank" rel="noopener noreferrer" className="f-link">Investor Contact Form</a>
            <a href={SELLER_FORM} target="_blank" rel="noopener noreferrer" className="f-link">Seller Intake Form</a>
          </div>
        </div>

        {/* ── Right: social links placeholder ── */}
        <div className="footer-right">
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
          © {new Date().getFullYear()} FulcrumPoint Holdings, Inc. All rights reserved.
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
