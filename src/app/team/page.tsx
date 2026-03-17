import PageHero from '@/components/PageHero';
import Link from 'next/link';

const leadership = [
  {
    name: 'Marcus D. Alvarez',
    title: 'Founder & Managing Partner',
    bio: 'Marcus founded FulcrumPoint after 15 years building and operating skilled trade businesses across the Sun Belt. He previously served as President of a regional HVAC platform company, where he oversaw growth from $8M to $47M in revenue through organic expansion and six bolt-on acquisitions. Marcus brings deep operating expertise and an extensive network of trade business owners throughout the Southwest.',
    focus: ['HVAC & Cooling', 'M&A', 'Portfolio Operations'],
    initials: 'MA',
  },
  {
    name: 'Renata J. Chen',
    title: 'Partner, Finance & Investments',
    bio: 'Renata leads deal sourcing, underwriting, and portfolio financial management at FulcrumPoint. Prior to joining the firm, she spent eight years in middle market private equity at a Phoenix-based fund focused on services businesses. She holds an MBA from Thunderbird School of Global Management and a B.S. in Finance from Arizona State University.',
    focus: ['Deal Sourcing', 'Financial Underwriting', 'Portfolio Finance'],
    initials: 'RC',
  },
  {
    name: 'Derek T. Monroe',
    title: 'Partner, Operations',
    bio: 'Derek oversees operational value creation across the FulcrumPoint portfolio. He spent over a decade in field operations, rising from service technician to Regional Operations Director at a national HVAC services company. Derek leads our 100-day onboarding process, operational benchmarking, and technology implementation programs.',
    focus: ['Operational Excellence', 'Technology', 'Talent & Training'],
    initials: 'DM',
  },
  {
    name: 'Simone A. Reeves',
    title: 'Vice President, Business Development',
    bio: 'Simone leads FulcrumPoint&apos;s business development efforts, including proprietary deal sourcing, broker relationships, and owner outreach programs. She has a background in investment banking coverage of construction and building products companies, and brings a deep network of intermediaries across the Southwest and Southeast.',
    focus: ['Deal Origination', 'Broker Relations', 'Sector Research'],
    initials: 'SR',
  },
  {
    name: 'James P. Tran',
    title: 'Director, Accounting & Reporting',
    bio: 'James manages financial reporting, portfolio company accounting integration, and LP reporting for FulcrumPoint. He previously served as Controller at a regional mechanical contractor and brings direct trade business financial expertise to the firm&apos;s portfolio monitoring and value creation efforts.',
    focus: ['Financial Reporting', 'Accounting Integration', 'LP Relations'],
    initials: 'JT',
  },
  {
    name: 'Olivia M. Brandt',
    title: 'Associate',
    bio: 'Olivia supports deal sourcing, financial modeling, and portfolio company analysis at FulcrumPoint. She joined the firm after two years in investment banking focused on industrial services M&A. She holds a B.S. in Finance and Real Estate from the W. P. Carey School of Business at Arizona State University.',
    focus: ['Financial Modeling', 'Deal Analysis', 'Market Research'],
    initials: 'OB',
  },
  {
    name: 'Carlos R. Medina',
    title: 'Operating Advisor — HVAC & Electrical',
    bio: 'Carlos serves as an Operating Advisor to FulcrumPoint portfolio companies in the HVAC and electrical sectors. He founded and operated a multi-location HVAC and electrical services company for 20 years before a successful sale. Carlos provides hands-on guidance on sales team development, service agreement programs, and technician recruiting.',
    focus: ['HVAC Operations', 'Sales Systems', 'Recruiting'],
    initials: 'CM',
  },
];

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Team"
        headline="Operators first.<br />Investors second."
        sub="FulcrumPoint is built by people who have run the businesses we invest in. Every member of our team brings direct operating experience in the skilled trades — not just financial expertise."
      />

      <section className="team-section">
        <div className="team-inner">
          <div className="team-grid">
            {leadership.map((member) => (
              <div key={member.name} className="team-card">
                <div className="team-card-avatar">
                  <span>{member.initials}</span>
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">{member.name}</h3>
                  <div className="team-card-title">{member.title}</div>
                  <p
                    className="team-card-bio"
                    dangerouslySetInnerHTML={{ __html: member.bio }}
                  />
                  <div className="team-card-focus">
                    {member.focus.map(f => (
                      <span key={f} className="team-focus-tag">{f}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="team-join">
        <div className="team-join-inner">
          <div>
            <h2 className="team-join-headline">Join the team</h2>
            <p className="team-join-sub">We&apos;re always interested in connecting with talented operators and finance professionals who share our passion for the skilled trades.</p>
          </div>
          <Link href="/contact" className="btn-primary">
            Get in Touch
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
