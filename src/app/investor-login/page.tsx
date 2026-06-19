'use client';

import Link from 'next/link';

export default function InvestorLoginPage() {
  return (
    <>
      <section className="login-section">
        <div className="login-inner">
          <div className="login-card">
            <div className="login-logo-mark">FP</div>
            <div className="eyebrow">Investor Portal</div>
            <h1 className="login-headline">LP Access</h1>
            <p className="login-sub">
              The FulcrumPoint investor portal provides limited partners with access to
              portfolio reporting, fund documents, and capital account statements.
            </p>
            <div className="login-coming-soon">
              <div className="login-coming-icon">⏳</div>
              <p>The investor portal is currently in development. Existing limited partners should reach out directly for access to reporting and fund documents.</p>
            </div>
            <div className="login-contact-block">
              <p>For LP inquiries:</p>
              <a href="mailto:investors@fulcrumpointholdings.com" className="login-contact-email">
                investors@fulcrumpointholdings.com
              </a>
            </div>
            <Link href="/" className="login-back">← Back to home</Link>
          </div>
        </div>
      </section>
    </>
  );
}
