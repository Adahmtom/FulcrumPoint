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
            <p className="legal-updated">Effective Date: July 6, 2026</p>

            <h2>Acceptance of Terms</h2>
            <p>By accessing or using this website, you agree to be bound by these Terms of Use. If you do not agree with these Terms, you should discontinue use of the website immediately.</p>

            <h2>Permitted Use</h2>
            <p>This website is intended to provide information about FulcrumPoint Holdings, Inc., its acquisition strategy, investment philosophy, portfolio, and business activities.</p>
            <p>You agree to use the website only for lawful purposes and in a manner that does not interfere with the operation or security of the website.</p>

            <h2>Intellectual Property</h2>
            <p>Unless otherwise noted, all content appearing on this website—including text, graphics, logos, icons, photographs, reports, documents, downloadable materials, videos, software, and design elements—is the exclusive property of FulcrumPoint Holdings, Inc. and is protected by applicable intellectual property laws.</p>
            <p>No content may be copied, reproduced, distributed, published, modified, or commercially exploited without prior written permission.</p>

            <h2>Trademarks</h2>
            <p>&ldquo;FulcrumPoint,&rdquo; the FulcrumPoint logo, and related branding elements are proprietary trademarks or service marks of FulcrumPoint Holdings, Inc. Unauthorized use is prohibited.</p>

            <h2>User Conduct</h2>
            <p>Users agree not to:</p>
            <ul>
              <li>Violate any applicable laws or regulations.</li>
              <li>Attempt unauthorized access to website systems or data.</li>
              <li>Introduce malicious software or harmful code.</li>
              <li>Interfere with website functionality.</li>
              <li>Misrepresent their identity.</li>
              <li>Use website content for unlawful or fraudulent purposes.</li>
            </ul>

            <h2>Third-Party Links</h2>
            <p>This website may contain links to third-party websites provided solely for convenience. FulcrumPoint does not endorse or assume responsibility for the content, services, or privacy practices of any third-party websites.</p>

            <h2>No Warranties</h2>
            <p>This website is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without warranties of any kind, either express or implied.</p>

            <h2>Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, FulcrumPoint Holdings, Inc. shall not be liable for any direct, indirect, incidental, consequential, special, or punitive damages arising out of the use of this website.</p>

            <h2>Indemnification</h2>
            <p>Users agree to indemnify and hold harmless FulcrumPoint Holdings, Inc., its directors, officers, employees, and affiliates from claims arising from misuse of the website or violation of these Terms.</p>

            <h2>Governing Law</h2>
            <p>These Terms shall be governed by the laws of the State of Arizona without regard to conflict of law principles.</p>

            <h2>Changes</h2>
            <p>FulcrumPoint may modify these Terms at any time. Updated versions will be posted on this page with a revised effective date.</p>

            <h2>Contact</h2>
            <p>Questions regarding the Website Terms of Use, please contact us at <a href="mailto:fulcrumpointholdings@gmail.com">fulcrumpointholdings@gmail.com</a>.</p>
          </div>
        </div>
      </section>
    </>
  );
}
