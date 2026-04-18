import PageHero from '@/components/PageHero';
import Image from 'next/image';
import Link from 'next/link';

/* ─── Avatar component ──────────────────────────────────────────────────────
   Shows a branded silhouette SVG placeholder until a real photo is supplied.
   When `photo` is a non-null path, the <Image> is rendered instead.
─────────────────────────────────────────────────────────────────────────── */
function MemberAvatar({
  initials,
  photo,
  name,
}: {
  initials: string;
  photo: string | null;
  name: string;
}) {
  if (photo) {
    return (
      <div className="team-card-avatar">
        <Image
          src={photo}
          alt={name}
          width={80}
          height={80}
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        />
      </div>
    );
  }

  return (
    <div className="team-card-avatar" aria-label={`${name} — photo coming soon`}>
      <svg
        viewBox="0 0 80 80"
        width="80"
        height="80"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* background */}
        <rect width="80" height="80" fill="#3a3f52" />
        {/* head */}
        <circle cx="40" cy="27" r="13" fill="rgba(255,255,255,0.18)" />
        {/* shoulders */}
        <path d="M4 80 Q4 50 40 50 Q76 50 76 80Z" fill="rgba(255,255,255,0.14)" />
        {/* initials */}
        <text
          x="40"
          y="75"
          textAnchor="middle"
          fontFamily="Georgia, serif"
          fontSize="11"
          fontWeight="400"
          letterSpacing="2"
          fill="#EC8647"
          fillOpacity="0.85"
        >
          {initials}
        </text>
      </svg>
    </div>
  );
}

/* ─── Team data ─────────────────────────────────────────────────────────── */
const leadership = [
  {
    name: 'Sedar Brown',
    title: 'Founder & CEO — Chairman of the Board',
    bio: 'Sedar sets the vision for FulcrumPoint and inspires its execution with clarity, credibility, and conviction. With nearly three decades of leadership in highly regulated medical device and semiconductor environments, he has built a career aligning people, processes, and priorities around a clear long-term direction. Leveraging advanced degrees from ASU\'s W. P. Carey School of Business and executive private equity training at Columbia Business School, he translates market insight and investment thesis into an actionable portfolio vision. At Roche Diagnostics, Sedar was one of three selected for an elite enterprise leadership rotation program, leading cross-functional initiatives through automation, systems thinking, and talent enablement.',
    focus: ['Vision & Strategy', 'Portfolio Direction', 'Operator Leadership'],
    initials: 'SB',
    photo: '/images/sedar-brown.jpg',
  },
  {
    name: 'Dylan Traver',
    title: 'Co-Founder & COO — Vice Chairman of the Board',
    bio: 'Dylan brings the rare combination of hands-on operational mastery and cross-sector perspective that makes him an exceptional COO. With nearly two decades of building construction experience spanning commercial and residential projects, he has repeatedly proven his ability to scale complexity into disciplined execution—managing multi-million-dollar developments and high-value residential transformations with equal precision. His dual-contractor background gives him end-to-end understanding of cost control, scheduling, subcontractor orchestration, and quality management across diverse asset types. Dylan is a force multiplier who can professionalize operations, translate strategy into consistent performance, and turn portfolio complexity into durable, repeatable value creation.',
    focus: ['Operations', 'Construction', 'Value Creation'],
    initials: 'DT',
    photo: '/images/dylan-traver.jpg',
  },
  {
    name: 'Olaoluwa Kolawole',
    title: 'CFO — Investment Committee Member',
    bio: 'Olaoluwa brings a rare combination of institutional-grade financial rigor and operator-minded execution, making him a strategic force in translating operational performance into measurable returns. With senior finance leadership experience at Microsoft and Intel, he has managed and influenced decisions across tens of billions of dollars in COGS, CapEx, and revenue—building scalable forecasting models, accelerating close cycles, strengthening SOX-compliant controls, and delivering decision-ready insights to executive leadership. His ability to connect operational levers to financial outcomes equips FulcrumPoint with a CFO who can professionalize portfolio company finance functions, support buy-and-build strategies, and enhance exit readiness.',
    focus: ['Financial Strategy', 'Capital Allocation', 'Deal Underwriting'],
    initials: 'OK',
    photo: '/images/olaoluwa-kolawole.jpg',
  },
  {
    name: 'Darrell Wright',
    title: 'Board Member — Treasurer & Investment Committee Member',
    bio: 'With over 25 years of dedicated service in Arizona, Darrell has established a distinguished career advocating for underserved populations and driving legislative and policy reform. As an accomplished Executive Director, he has effectively collaborated with local and state governments, like organizations, and community stakeholders to develop and implement programs that enhance quality of life. His leadership has been instrumental in securing critical funding, shaping public policy, and fostering inclusive environments. He currently serves on the AAPPD Executive Committee as Vice Chair for District Central.',
    focus: ['Governance', 'Community Relations', 'Policy & Advocacy'],
    initials: 'DW',
    photo: '/images/darrell-wright.jpg',
  },
  {
    name: 'Lurissa Brown',
    title: 'Board Member — Secretary',
    bio: 'Originally from Panama City, Panama and educated in the United States, Lurissa brings a global perspective, operational discipline, and deep expertise in talent development and workforce systems. With advanced degrees from Arizona State University and 15 years of experience spanning state government, legal operations, immigration compliance, and higher education leadership, she has built and led high-impact programs connecting talent, institutions, and employers. Currently serving as Associate Director of International Initiatives at ASU\'s W. P. Carey School of Business, she oversees career coaching teams and employer partnerships in finance, analytics, AI, and business innovation.',
    focus: ['Talent Development', 'Workforce Systems', 'Strategic Partnerships'],
    initials: 'LB',
    photo: '/images/lurissa-brown.jpg',
  },
  {
    name: 'Chris Ellington',
    title: 'Investment Committee Chairperson',
    bio: 'Chris brings to FulcrumPoint\'s Investment Committee a true owner-operator perspective grounded in real assets, execution speed, and capital discipline. As the founder and owner of multiple operating businesses—including a general contracting firm—Chris has spent years making investment decisions where timelines, budgets, labor, and risk converge in the real world. His ability to deliver complex projects in occupied, revenue-generating environments gives him uncommon insight into operational resilience, cost control, and return on invested capital. His deep background in real estate, development, brokerage, and foreclosure investing further sharpens go/no-go decisions across market cycles.',
    focus: ['Investment Oversight', 'Real Assets', 'Risk Management'],
    initials: 'CE',
    photo: '/images/chris-ellington.jpg',
  },
  {
    name: 'Tony Jones',
    title: 'Project Management Advisor',
    bio: 'Tony adds strategic value to FulcrumPoint as a battle-tested operator of complex, capital-intensive programs where execution precision directly determines return outcomes. With more than two decades of global program management leadership at Intel and ZF Group, Tony has consistently delivered high-stakes initiatives across engineering, manufacturing, and supply chain environments—managing portfolios exceeding $250M in annual revenue and guiding multi-region teams through launch, scale, and risk inflection points. His deep expertise in quality management, APQP, PPAP, and launch readiness brings institutional discipline to FulcrumPoint\'s investment oversight.',
    focus: ['Program Management', 'Quality Systems', 'Operational Risk'],
    initials: 'TJ',
    photo: '/images/tony-jones.jpg',
  },
];

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Team"
        headline="Operators first.<br />Investors second."
        sub="FulcrumPoint is built by people who have run the businesses we invest in. Every member of our team brings direct operating experience across skilled trades, finance, and institutional capital."
      />

      <section className="team-section">
        <div className="team-inner">
          <div className="team-grid">
            {leadership.map((member) => (
              <div key={member.name} className="team-card">
                <MemberAvatar
                  initials={member.initials}
                  photo={member.photo}
                  name={member.name}
                />
                <div className="team-card-body">
                  <h3 className="team-card-name">{member.name}</h3>
                  <div className="team-card-title">{member.title}</div>
                  <p
                    className="team-card-bio"
                    dangerouslySetInnerHTML={{ __html: member.bio }}
                  />
                  <div className="team-card-focus">
                    {member.focus.map((f) => (
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
            <h2 className="team-join-headline">Work with us</h2>
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
