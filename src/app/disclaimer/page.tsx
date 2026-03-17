import PageHero from '@/components/PageHero';

export default function DisclaimerPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        headline="Disclaimer"
      />
      <section className="legal-section">
        <div className="legal-inner">
          <div className="legal-content">
            <p className="legal-updated">Last updated: January 2025</p>

            <h2>General Disclaimer</h2>
            <p>The information contained on this website is for general informational purposes only. FulcrumPoint Holdings, LLC ("FulcrumPoint") makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on the website for any purpose.</p>

            <h2>Not an Offer</h2>
            <p>Nothing on this website constitutes an offer to sell or a solicitation of an offer to buy any security or investment product. Any such offer or solicitation will only be made by means of a definitive confidential private placement memorandum and subscription documents to qualified investors.</p>

            <h2>Forward-Looking Statements</h2>
            <p>This website may contain forward-looking statements based on current expectations and assumptions. These statements involve known and unknown risks and uncertainties. Actual results may differ materially from those expressed or implied by forward-looking statements. FulcrumPoint undertakes no obligation to update forward-looking statements.</p>

            <h2>Past Performance</h2>
            <p>Past performance is not indicative of future results. Investment in private equity involves substantial risk, including the possible loss of principal. There is no guarantee that any investment strategy will achieve its objectives.</p>

            <h2>Third-Party Information</h2>
            <p>Market data and industry statistics referenced on this website are sourced from publicly available third-party sources. FulcrumPoint has not independently verified this information and makes no representations regarding its accuracy.</p>

            <h2>No Investment Advice</h2>
            <p>Nothing on this website is intended to be, and should not be construed as, investment, tax, legal, or financial advice. Prospective investors should consult with their own advisors before making any investment decisions.</p>

            <h2>Contact</h2>
            <p>For questions regarding this disclaimer, please contact us at <a href="mailto:info@fulcrumpointholdings.com">info@fulcrumpointholdings.com</a>.</p>
          </div>
        </div>
      </section>
    </>
  );
}
