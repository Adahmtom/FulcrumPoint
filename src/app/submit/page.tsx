'use client';

import { useState } from 'react';

export default function SubmitPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <section className="submit-hero">
        <div className="submit-hero-inner">
          <div className="eyebrow anim-up">Deal Submission Portal</div>
          <h1 className="submit-hero-headline anim-up delay-1">
            Tell us about<br />your business.
          </h1>
          <p className="submit-hero-sub anim-up delay-2">
            All submissions are reviewed confidentially. We respond to every inquiry within 5 business days.
          </p>
        </div>
      </section>

      <section className="submit-section">
        <div className="submit-inner">
          <div className="submit-steps">
            {[1, 2, 3].map((s) => (
              <div key={s} className={`submit-step ${step >= s ? 'active' : ''} ${step > s ? 'done' : ''}`}>
                <div className="submit-step-num">{step > s ? '✓' : s}</div>
                <span className="submit-step-label">
                  {s === 1 ? 'About You' : s === 2 ? 'The Business' : 'Deal Details'}
                </span>
              </div>
            ))}
          </div>

          {submitted ? (
            <div className="submit-success">
              <div className="submit-success-icon">✓</div>
              <h2>Submission received.</h2>
              <p>
                Thank you for submitting your business for consideration. A member of the FulcrumPoint
                team will review your information and reach out within 5 business days.
              </p>
              <p>All submissions are treated with strict confidentiality.</p>
            </div>
          ) : (
            <form className="submit-form" onSubmit={handleSubmit}>
              {step === 1 && (
                <div className="submit-step-content">
                  <h2 className="submit-step-title">About you</h2>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">First Name *</label>
                      <input className="form-input" type="text" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Last Name *</label>
                      <input className="form-input" type="text" required />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Email *</label>
                      <input className="form-input" type="email" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Phone</label>
                      <input className="form-input" type="tel" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Your Role *</label>
                    <select className="form-input form-select" required>
                      <option value="">Select…</option>
                      <option>Business Owner / Founder</option>
                      <option>Business Broker / M&A Advisor</option>
                      <option>Attorney or Accountant</option>
                      <option>Family Member</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="submit-nav">
                    <button type="button" className="btn-primary" onClick={() => setStep(2)}>
                      Continue
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="submit-step-content">
                  <h2 className="submit-step-title">About the business</h2>
                  <div className="form-group">
                    <label className="form-label">Business Name *</label>
                    <input className="form-input" type="text" required />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Trade Sector *</label>
                      <select className="form-input form-select" required>
                        <option value="">Select…</option>
                        <option>HVAC & Cooling Systems</option>
                        <option>Electrical</option>
                        <option>Plumbing</option>
                        <option>Commercial Construction</option>
                        <option>Industrial Trades</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Years in Operation *</label>
                      <input className="form-input" type="number" min="1" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Primary Location (City, State) *</label>
                    <input className="form-input" type="text" required placeholder="e.g., Phoenix, AZ" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Number of Employees</label>
                    <select className="form-input form-select">
                      <option value="">Select…</option>
                      <option>1–10</option>
                      <option>11–25</option>
                      <option>26–50</option>
                      <option>51–100</option>
                      <option>100+</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Business Description *</label>
                    <textarea className="form-input form-textarea" required rows={4} placeholder="Brief overview of services, customers, and geography…" />
                  </div>
                  <div className="submit-nav">
                    <button type="button" className="submit-back" onClick={() => setStep(1)}>← Back</button>
                    <button type="button" className="btn-primary" onClick={() => setStep(3)}>
                      Continue
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="submit-step-content">
                  <h2 className="submit-step-title">Deal details</h2>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Annual Revenue (approx.) *</label>
                      <select className="form-input form-select" required>
                        <option value="">Select…</option>
                        <option>Under $1M</option>
                        <option>$1M – $5M</option>
                        <option>$5M – $15M</option>
                        <option>$15M – $30M</option>
                        <option>$30M – $50M</option>
                        <option>$50M+</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label">EBITDA (approx.)</label>
                      <select className="form-input form-select">
                        <option value="">Select…</option>
                        <option>Under $500K</option>
                        <option>$500K – $1M</option>
                        <option>$1M – $3M</option>
                        <option>$3M – $5M</option>
                        <option>$5M – $10M</option>
                        <option>$10M+</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Transaction Type *</label>
                    <select className="form-input form-select" required>
                      <option value="">Select…</option>
                      <option>Full Sale</option>
                      <option>Majority Recapitalization</option>
                      <option>Minority Investment</option>
                      <option>Management Buyout</option>
                      <option>Not sure yet</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Timeline</label>
                    <select className="form-input form-select">
                      <option value="">Select…</option>
                      <option>Actively in process</option>
                      <option>3–6 months</option>
                      <option>6–12 months</option>
                      <option>1–2 years</option>
                      <option>Just exploring</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Anything else we should know?</label>
                    <textarea className="form-input form-textarea" rows={4} placeholder="Additional context, confidentiality requirements, current advisors, etc." />
                  </div>
                  <div className="submit-nav">
                    <button type="button" className="submit-back" onClick={() => setStep(2)}>← Back</button>
                    <button type="submit" className="btn-primary">
                      Submit Confidentially
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                </div>
              )}
            </form>
          )}

          <div className="submit-sidebar">
            <div className="submit-sidebar-block">
              <h3>What to expect</h3>
              <ul>
                <li>Confidential review within 5 business days</li>
                <li>Preliminary call to discuss fit and interest</li>
                <li>No obligation to proceed at any stage</li>
                <li>NDA available upon request before sharing financials</li>
              </ul>
            </div>
            <div className="submit-sidebar-block">
              <h3>We look for</h3>
              <ul>
                <li>$1M–$10M EBITDA</li>
                <li>Essential service businesses</li>
                <li>Sun Belt / Southeast geography</li>
                <li>Owner-operated with recurring revenue</li>
              </ul>
            </div>
            <div className="submit-sidebar-contact">
              <p>Prefer to reach out directly?</p>
              <a href="mailto:deals@fulcrumpointholdings.com">deals@fulcrumpointholdings.com</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
