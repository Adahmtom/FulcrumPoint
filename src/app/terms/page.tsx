import PageHero from '@/components/PageHero';

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        headline="Terms of Use"
      />
      <section className="legal-section">
        <div className="legal-inner">
          <div className="legal-content">
            <p className="legal-updated">Last updated: January 2025</p>

            <h2>Acceptance of Terms</h2>
            <p>By accessing or using the FulcrumPoint Holdings website (the "Site"), you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use the Site.</p>

            <h2>Use of the Site</h2>
            <p>You may use the Site for lawful purposes only. You agree not to use the Site to transmit any content that is unlawful, harmful, threatening, abusive, or otherwise objectionable. You may not attempt to gain unauthorized access to any portion of the Site or any systems or networks connected to the Site.</p>

            <h2>Intellectual Property</h2>
            <p>All content on the Site, including text, graphics, logos, and images, is the property of FulcrumPoint Holdings, LLC or its content suppliers and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works from Site content without our express written permission.</p>

            <h2>Deal Submissions</h2>
            <p>By submitting a deal through our website, you represent that you have the authority to disclose the information provided and that the information is accurate to the best of your knowledge. You acknowledge that submission does not constitute any commitment by FulcrumPoint to pursue a transaction.</p>

            <h2>Disclaimer of Warranties</h2>
            <p>The Site is provided on an "as is" and "as available" basis without warranties of any kind, either express or implied. FulcrumPoint does not warrant that the Site will be uninterrupted, error-free, or free of viruses or other harmful components.</p>

            <h2>Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, FulcrumPoint shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the Site.</p>

            <h2>Governing Law</h2>
            <p>These Terms of Use shall be governed by the laws of the State of Arizona, without regard to its conflict of law provisions.</p>

            <h2>Changes to Terms</h2>
            <p>We reserve the right to modify these Terms of Use at any time. Your continued use of the Site after any changes constitutes your acceptance of the modified terms.</p>

            <h2>Contact</h2>
            <p>For questions regarding these Terms of Use, please contact us at <a href="mailto:info@fulcrumpointholdings.com">info@fulcrumpointholdings.com</a>.</p>
          </div>
        </div>
      </section>
    </>
  );
}
