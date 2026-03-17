'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState<'general' | 'deal'>('general');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <section className="contact-hero">
        <div className="contact-hero-inner">
          <div className="eyebrow anim-up">Contact</div>
          <h1 className="contact-hero-headline anim-up delay-1">
            Let&apos;s start a<br /><em>conversation.</em>
          </h1>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-inner">
          <div className="contact-left">
            <div className="contact-tabs">
              <button
                className={`contact-tab ${activeTab === 'general' ? 'active' : ''}`}
                onClick={() => setActiveTab('general')}
              >
                General Inquiry
              </button>
              <button
                className={`contact-tab ${activeTab === 'deal' ? 'active' : ''}`}
                onClick={() => setActiveTab('deal')}
              >
                Deal Submission
              </button>
            </div>

            {submitted ? (
              <div className="contact-success">
                <div className="contact-success-icon">✓</div>
                <h3>Message received.</h3>
                <p>Thank you for reaching out. A member of our team will be in touch within 1–2 business days.</p>
                <button className="contact-reset" onClick={() => setSubmitted(false)}>Send another message</button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                {activeTab === 'general' && (
                  <>
                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label">First Name *</label>
                        <input className="form-input" type="text" required placeholder="First" />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Last Name *</label>
                        <input className="form-input" type="text" required placeholder="Last" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email *</label>
                      <input className="form-input" type="email" required placeholder="you@company.com" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Company</label>
                      <input className="form-input" type="text" placeholder="Your company name" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Subject *</label>
                      <select className="form-input form-select" required>
                        <option value="">Select a topic</option>
                        <option>Investment Partnership Inquiry</option>
                        <option>Investor / LP Inquiry</option>
                        <option>Media / Press</option>
                        <option>Career Inquiry</option>
                        <option>General Question</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Message *</label>
                      <textarea className="form-input form-textarea" required placeholder="Tell us what's on your mind…" rows={5} />
                    </div>
                  </>
                )}

                {activeTab === 'deal' && (
                  <>
                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label">Your Name *</label>
                        <input className="form-input" type="text" required placeholder="Full name" />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Email *</label>
                        <input className="form-input" type="email" required placeholder="you@company.com" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Phone</label>
                      <input className="form-input" type="tel" placeholder="+1 (555) 000-0000" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Company / Business Name *</label>
                      <input className="form-input" type="text" required placeholder="Business name" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Trade Sector *</label>
                      <select className="form-input form-select" required>
                        <option value="">Select sector</option>
                        <option>HVAC & Cooling Systems</option>
                        <option>Electrical</option>
                        <option>Plumbing</option>
                        <option>Commercial Construction</option>
                        <option>Industrial Trades</option>
                        <option>Other Skilled Trade</option>
                      </select>
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label">Annual Revenue (approx.)</label>
                        <select className="form-input form-select">
                          <option value="">Select range</option>
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
                          <option value="">Select range</option>
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
                      <label className="form-label">Location (City, State) *</label>
                      <input className="form-input" type="text" required placeholder="e.g., Phoenix, AZ" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Tell us about the business *</label>
                      <textarea className="form-input form-textarea" required placeholder="Brief overview of the business, what you're looking for, and why you reached out to FulcrumPoint…" rows={5} />
                    </div>
                  </>
                )}

                <button type="submit" className="form-submit">
                  Submit
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </form>
            )}
          </div>

          <div className="contact-right">
            <div className="contact-info-block">
              <div className="contact-info-label">Office</div>
              <address className="contact-info-address">
                Phoenix, Arizona<br />
                United States
              </address>
            </div>
            <div className="contact-info-block">
              <div className="contact-info-label">Phone</div>
              <a href="tel:+16025550100" className="contact-info-link">+1 (602) 555-0100</a>
            </div>
            <div className="contact-info-block">
              <div className="contact-info-label">Email</div>
              <a href="mailto:info@fulcrumpointholdings.com" className="contact-info-link">
                info@fulcrumpointholdings.com
              </a>
            </div>
            <div className="contact-info-block">
              <div className="contact-info-label">For Deal Submissions</div>
              <a href="mailto:deals@fulcrumpointholdings.com" className="contact-info-link">
                deals@fulcrumpointholdings.com
              </a>
            </div>
            <div className="contact-note">
              <p>
                <strong>Response time:</strong> We respond to all inquiries within 1–2 business days.
                Deal submissions receive a preliminary response within 5 business days.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
