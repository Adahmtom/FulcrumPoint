import PageHero from '@/components/PageHero';

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        headline="Privacy Policy"
      />
      <section className="legal-section">
        <div className="legal-inner">
          <div className="legal-content">
            <p className="legal-updated">Effective Date: July 6, 2026</p>

            <p>FulcrumPoint Holdings, Inc. (&ldquo;FulcrumPoint,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) respects your privacy and is committed to protecting the personal information you choose to share with us.</p>

            <h2>Information We Collect</h2>
            <p>Depending on how you interact with our website, we may collect:</p>
            <ul>
              <li>Name</li>
              <li>Company name</li>
              <li>Email address</li>
              <li>Telephone number</li>
              <li>Mailing address</li>
              <li>Information submitted through contact forms</li>
              <li>Business information provided by prospective acquisition candidates</li>
              <li>Resume or employment information submitted by job applicants</li>
              <li>Technical information such as IP address, browser type, device information, and website usage analytics</li>
            </ul>

            <h2>How We Use Information</h2>
            <p>We may use collected information to:</p>
            <ul>
              <li>Respond to inquiries</li>
              <li>Evaluate acquisition opportunities</li>
              <li>Communicate with prospective sellers, investors, lenders, or business partners</li>
              <li>Process employment inquiries</li>
              <li>Improve website performance and user experience</li>
              <li>Maintain website security</li>
              <li>Comply with applicable legal obligations</li>
            </ul>

            <h2>Cookies</h2>
            <p>Our website may use cookies and similar technologies to improve functionality, analyze website traffic, and enhance user experience. Users may configure browser settings to decline cookies; however, some website functionality may be affected.</p>

            <h2>Information Sharing</h2>
            <p>FulcrumPoint does not sell personal information.</p>
            <p>Information may be shared with trusted professional advisors, technology service providers, or regulatory authorities when necessary to operate our business or comply with legal obligations.</p>

            <h2>Data Security</h2>
            <p>We maintain commercially reasonable administrative, technical, and physical safeguards designed to protect personal information. However, no method of electronic transmission or storage can be guaranteed to be completely secure.</p>

            <h2>Third-Party Websites</h2>
            <p>Our website may contain links to third-party websites. FulcrumPoint is not responsible for the privacy practices or content of those websites.</p>

            <h2>Children&apos;s Privacy</h2>
            <p>This website is not directed to individuals under the age of 18, and we do not knowingly collect personal information from children.</p>

            <h2>Your Rights</h2>
            <p>Depending on applicable law, you may have the right to request access to, correction of, or deletion of your personal information, subject to legal and regulatory requirements.</p>

            <h2>Policy Updates</h2>
            <p>This Privacy Policy may be updated periodically. Any revisions will be posted on this page with an updated effective date.</p>

            <h2>Contact Us</h2>
            <p>Questions regarding the Privacy Policy, please contact us at <a href="mailto:fulcrumpointholdings@gmail.com">fulcrumpointholdings@gmail.com</a>.</p>
          </div>
        </div>
      </section>
    </>
  );
}
