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
            <p className="legal-updated">Last updated: January 2025</p>

            <h2>Introduction</h2>
            <p>FulcrumPoint Holdings, LLC ("FulcrumPoint," "we," "our," or "us") is committed to protecting your privacy. This Privacy Policy describes how we collect, use, and share information about you when you visit our website or contact us.</p>

            <h2>Information We Collect</h2>
            <p>We may collect information you provide directly to us, including your name, email address, phone number, company name, and any other information you submit through our contact forms or deal submission portal. We also automatically collect certain technical information when you visit our website, including IP address, browser type, pages viewed, and referring URLs.</p>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to respond to your inquiries, evaluate deal submissions, communicate with you about potential investment partnerships, improve our website, and comply with legal obligations. We do not sell your personal information to third parties.</p>

            <h2>Information Sharing</h2>
            <p>We may share your information with service providers who assist us in operating our website and conducting our business, with professional advisors such as attorneys and accountants under confidentiality obligations, and as required by law or legal process.</p>

            <h2>Deal Submission Confidentiality</h2>
            <p>Information submitted through our deal submission portal is treated as strictly confidential. We will not share your business information with third parties without your express consent, except as required by law or in connection with a potential transaction that you have authorized us to pursue.</p>

            <h2>Data Retention</h2>
            <p>We retain contact and submission information for as long as necessary to fulfill the purposes described in this policy or as required by law. You may request deletion of your information by contacting us at the address below.</p>

            <h2>Your Rights</h2>
            <p>You may request access to, correction of, or deletion of your personal information by contacting us. We will respond to such requests within a reasonable time.</p>

            <h2>Contact</h2>
            <p>For privacy-related inquiries, please contact us at <a href="mailto:info@fulcrumpointholdings.com">info@fulcrumpointholdings.com</a>.</p>
          </div>
        </div>
      </section>
    </>
  );
}
