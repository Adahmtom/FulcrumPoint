'use client';

import { useState } from 'react';
import PageHero from '@/components/PageHero';
import Image from 'next/image';
import Link from 'next/link';

/* ─── Founder's Note Modal ───────────────────────────────────────────────── */
function FoundersNoteModal({ onClose }: { onClose: () => void }) {
  const [activePhotoIdx, setActivePhotoIdx] = useState<number | null>(null);

  function handlePhotoClick(idx: number) {
    setActivePhotoIdx(activePhotoIdx === idx ? null : idx);
  }

  return (
    <div className="fn-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label="Founder's Note">
      <div className="fn-modal" onClick={(e) => e.stopPropagation()}>
        <button className="fn-close" onClick={onClose} aria-label="Close">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M2 2l14 14M16 2L2 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>
        <div className="fn-eyebrow">A Note From Our Founder</div>
        <h2 className="fn-headline">What Inspired Me to Build FulcrumPoint</h2>
        <div className="fn-body">
          <p>
            At FulcrumPoint, we know that skilled trades are more than just jobs—they are the foundation of our collective legacy and the heartbeat of our nation&apos;s progress. For generations, these professions have not only built livelihoods but have powered dreams, uplifted families, and forged the very communities we call home. From electricians who illuminate our cities to welders whose hands shape the future, the skilled trades embody a spirit of resilience, pride, and unwavering dedication. They are the unsung heroes who transform vision into reality, reminding us that greatness is built, not given.
          </p>
          <p>
            My own story is a testament to how the skilled trades shape not just careers, but destinies. My father, Colin Brown, started out as a forklift driver at the Goodyear Tire and Rubber Plant in Topeka, Kansas. Driven by a vision for a brighter future and a better life for his family, he broke barriers in 1976 by becoming the first African-American to enter the Kansas Carpenters&apos; Apprenticeship Program, earning his certification in 1979. His journey took our family to Sacramento, where he spent nearly three decades as a proud Journeyman Carpenter at California State University. Through his example, my father taught us that true success is measured not only by what you achieve, but also by the integrity of your work and the hands-on pride you pass down to the next generation. The hours my brother and I spent in the garage with him, learning carpentry, restoring classic cars, and sharing stories, were more than lessons in skill. They were lessons in perseverance, character, and the joy of building something lasting.
          </p>

          {/* ── 4 photos — accordion expand on hover (desktop) or tap (mobile) ── */}
          <div className="fn-photos">
            {[
              { src: '/images/fn-photo-4.png', pos: 'center top', alt: 'Colin Brown proudly displaying his carpentry work at CSU',       num: '01' },
              { src: '/images/fn-photo-1.png', pos: 'center top', alt: 'Father and son working together on a carpentry project',         num: '02' },
              { src: '/images/fn-photo-2.png', pos: 'center top', alt: 'Colin Brown at work in his carpentry shop',                     num: '03' },
              { src: '/images/fn-photo-3.png', pos: 'center top', alt: 'Sedar and his father with their classic car restoration project', num: '04' },
            ].map(({ src, pos, alt, num }, idx) => (
              <div
                key={src}
                className={`fn-photo-wrap${activePhotoIdx === idx ? ' fn-photo-wrap--active' : ''}`}
                style={{ '--photo-src': `url(${src})` } as React.CSSProperties}
                onPointerUp={(e) => { if (e.pointerType === 'touch') handlePhotoClick(idx); }}
              >
                <Image
                  src={src}
                  alt={alt}
                  fill
                  loading="eager"
                  style={{ objectFit: 'cover', objectPosition: pos }}
                  sizes="(max-width: 600px) calc(100vw - 40px), 350px"
                />
                <div className="fn-photo-overlay" aria-hidden="true" />
                <div className="fn-photo-badge" aria-hidden="true">{num}</div>
              </div>
            ))}
          </div>
          <div className="fn-hint" aria-hidden="true">
            <span className="fn-hint-line" />
            <span className="fn-hint-hover">Hover to explore</span>
            <span className="fn-hint-tap">Tap to explore</span>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
            <span className="fn-hint-line" />
          </div>

          <p>
            Though I did not follow my father&apos;s path into carpentry, I had a knack for fixing just about anything and settled on computer electronics. After high school, I moved to Phoenix, AZ to attend High Tech Institute, a vocational school, earning my Associate&apos;s in Computer Electronics and stepping into a career that allowed me to provide for my family and live out my own American dream. The skilled trades gave me more than a livelihood; they gave me purpose and pride, and a sense of responsibility to pay it forward. At FulcrumPoint, we aspire to build a self-sustaining ecosystem that will shape the skilled trades for generations to come, rooted in the values of putting people first and championing regenerative, future-focused initiatives. Our vision is bold: to centralize education, expand apprenticeship pathways, and harness immersive technologies through a unified training academy to ignite potential and create a vibrant, diverse pipeline of talent ready to lead tomorrow.
          </p>
          <p>
            FulcrumPoint, as part of its Creating Shared Value (CSR) sustainability strategy, is committed to broadening access and opening doors for all, recruiting from underrepresented communities, championing second-chance hiring, and rebuilding pathways from high schools and technical institutions. By doing so, alongside the growing coalition working to address the skilled trades labor workforce shortage, we will reposition the skilled trades as a first-choice, high-value career—a path of dignity, promise, and possibility. Every person deserves the chance to discover their potential, to be empowered with skills that can change lives, and to choose a future that leads to the American dream. Together, let&apos;s build that future—one skill, one opportunity, one legacy at a time.
          </p>
        </div>
        <div className="fn-sig">
          <div className="fn-sig-name">Sedar Brown</div>
          <div className="fn-sig-title">Founder &amp; CEO — FulcrumPoint Holdings, Inc.</div>
        </div>
      </div>
    </div>
  );
}

/* ─── Avatar component ───────────────────────────────────────────────────── */
function MemberAvatar({ initials, photo, name }: { initials: string; photo: string | null; name: string }) {
  if (photo) {
    return (
      <div className="team-card-avatar">
        <Image src={photo} alt={name} width={210} height={250} style={{ objectFit: 'cover', objectPosition: 'center top', width: '100%', height: '100%' }} sizes="(max-width: 640px) 100vw, 210px" />
      </div>
    );
  }
  return (
    <div className="team-card-avatar" aria-label={`${name} — photo coming soon`}>
      <svg viewBox="0 0 80 80" width="80" height="80" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect width="80" height="80" fill="#3a3f52" />
        <circle cx="40" cy="27" r="13" fill="rgba(255,255,255,0.18)" />
        <path d="M4 80 Q4 50 40 50 Q76 50 76 80Z" fill="rgba(255,255,255,0.14)" />
        <text x="40" y="75" textAnchor="middle" fontFamily="Georgia, serif" fontSize="11" fontWeight="400" letterSpacing="2" fill="#EC8647" fillOpacity="0.85">{initials}</text>
      </svg>
    </div>
  );
}

/* ─── Team data ─────────────────────────────────────────────────────────── */
const leadership = [
  {
    name: 'Sedar Brown',
    title: 'Founder & CEO — Chairman of the Board',
    bio: 'Sedar provides the strategic vision, disciplined leadership, and long-term direction guiding FulcrumPoint\'s growth. With nearly three decades of leadership experience in the medical diagnostics and semiconductor industries, he has built a career leading complex cross-functional initiatives that strengthened organizational performance, advanced operational excellence, and delivered measurable business results. Prior to founding FulcrumPoint, Sedar was selected for Roche Diagnostics\' prestigious Enterprise Leadership Development Program, where he helped execute enterprise-wide strategic initiatives at one of the world\'s leading healthcare companies. He holds both a Bachelor\'s in Business concentrated in Global Leadership and an MBA from Arizona State University\'s W. P. Carey School of Business and has completed executive education in Private Equity through Columbia Business School Executive Education, bringing together operational leadership, strategic management, and investment discipline.',
    focus: ['Vision & Strategy', 'Portfolio Direction', 'Operator Leadership'],
    initials: 'SB',
    photo: '/images/sedar-brown.jpg',
    isFounder: true,
  },
  {
    name: 'Dylan Traver',
    title: 'Co-Founder & COO — Vice Chairman of the Board',
    bio: 'Dylan brings nearly two decades of operational leadership in the construction industry. As the founder and owner-operator of a successful general contracting company, he has built a reputation for delivering complex commercial and residential projects through disciplined execution, operational excellence, and trusted industry relationships. His hands-on experience managing cost control, project execution, quality, and subcontractor performance provides the practical expertise needed to scale and optimize operating businesses. He holds a bachelor\'s degree in Business with a minor in Construction Technology from Ohio State University. His ability to translate strategy into operational performance and build high-performing organizations strengthens post-acquisition strategic value creation plans, helping portfolio companies achieve sustainable growth, operational efficiency, and long-term profitability.',
    focus: ['Operations', 'Construction', 'Value Creation'],
    initials: 'DT',
    photo: '/images/dylan-traver.jpg',
    isFounder: false,
  },
  {
    name: 'Olaoluwa Kolawole',
    title: 'CFO — Investment Committee Member',
    bio: 'Olaoluwa brings a rare combination of institutional-grade financial rigor and operator-minded execution, making him a strategic force in translating operational performance into measurable returns. With senior finance leadership experience at Microsoft and Intel, he has managed and influenced decisions across tens of billions of dollars in COGS, CapEx, and revenue.',
    focus: ['Financial Strategy', 'Capital Allocation', 'Deal Underwriting'],
    initials: 'OK',
    photo: '/images/olaoluwa-kolawole.jpg',
    isFounder: false,
  },
  {
    name: 'Darrell Wright',
    title: 'Board Member — Treasurer & Investment Committee Member',
    bio: 'Darrell brings more than 25 years of executive leadership experience overseeing complex organizations, strategic planning, and financial stewardship. Throughout his career, he has partnered with government agencies, community organizations, and executive leadership to develop sustainable initiatives while maintaining disciplined financial oversight and organizational accountability. His experience includes managing budgets exceeding $200 million, leading annual budget development and forecasting, and supporting strategic decision-making through financial analysis and modeling. His expertise in fiscal governance, financial planning, and organizational oversight provides FulcrumPoint with valuable insight, helping ensure disciplined capital management, financial transparency, and long-term organizational sustainability.',
    focus: ['Governance', 'Community Relations', 'Policy & Advocacy'],
    initials: 'DW',
    photo: '/images/darrell-wright.jpg',
    isFounder: false,
  },
  {
    name: 'Lurissa Brown',
    title: 'Board Member — Secretary',
    bio: 'Lurissa brings more than 25 years of experience developing talent pipelines and aligning human capital with strategic organizational objectives. Her career spans higher education, state government, legal operations, and immigration compliance, where she has worked closely with executive leadership on initiatives requiring sound judgment, regulatory awareness, stakeholder collaboration, and disciplined organizational practices that foster effective governance. As Associate Director on the Career Management Team at Arizona State University\'s W. P. Carey School of Business, she partners with university leaders and industry partners to strengthen workforce readiness.',
    focus: ['Talent Development', 'Workforce Systems', 'Strategic Partnerships'],
    initials: 'LB',
    photo: '/images/lurissa-brown.jpg',
    isFounder: false,
  },
  {
    name: 'Chris Ellington',
    title: 'Investment Committee Chairperson',
    bio: 'Chris brings an owner-operator perspective to FulcrumPoint\'s Investment Committee, with extensive experience building, acquiring, and operating businesses across construction, real estate, and development. As the founder of multiple companies, including a general contracting firm, he has spent years making investment decisions where capital allocation, operational execution, and risk management directly impact business performance. His experience evaluating, negotiating, and managing assets across changing market conditions provides a practical lens for assessing investment opportunities beyond financial models alone.',
    focus: ['Investment Oversight', 'Real Assets', 'Risk Management'],
    initials: 'CE',
    photo: '/images/chris-ellington.jpg',
    isFounder: false,
  },
  {
    name: 'Tony Jones',
    title: 'Project Management Advisor',
    bio: 'Tony adds strategic value to FulcrumPoint as a battle-tested operator of complex, capital-intensive programs where execution precision directly determines return outcomes. With more than two decades of global program management leadership in the Semiconductor and Automotive industries, Tony has consistently delivered high-stakes initiatives across engineering, manufacturing, and supply chain environments.',
    focus: ['Program Management', 'Quality Systems', 'Operational Risk'],
    initials: 'TJ',
    photo: '/images/tony-jones.jpg',
    isFounder: false,
  },
  {
    name: 'Andre Gulmesoff',
    title: 'Acquisition Valuation Advisor',
    bio: 'Andre is a trusted valuation, transaction strategy, and deal execution advisor to FulcrumPoint\'s Investment Committee and Deal Team. As a licensed business broker (License #01774609) and owner of a successful advisory firm (bizbyandre.com), he supports the full investment lifecycle from initial assessment through closing and exit. Andre provides disciplined, market-aligned valuations and financial insights that guide pricing, structuring, and timing decisions — ensuring every opportunity is thoroughly vetted before closing.',
    focus: ['Business Valuation', 'Transaction Strategy', 'Deal Execution'],
    initials: 'AG',
    photo: '/images/Andre Gulmesoff.jpg',
    isFounder: false,
  },
];

export default function TeamPage() {
  const [showFoundersNote, setShowFoundersNote] = useState(false);

  return (
    <>
      {showFoundersNote && <FoundersNoteModal onClose={() => setShowFoundersNote(false)} />}

      <PageHero
        eyebrow="Our Team"
        headline="Transformational Leaders.<br />Operational Builders."
        sub="FulcrumPoint was founded by leaders who understand that sustainable value is created through people, process, and execution. Drawing on decades of experience leading complex organizations and growing businesses, we help companies navigate inflection points, unlock potential, and achieve lasting success."
      />

      <section className="team-section">
        <div className="team-inner">
          <div className="team-grid">
            {leadership.map((member) => (
              <div key={member.name} className="team-card">
                <MemberAvatar initials={member.initials} photo={member.photo} name={member.name} />
                <div className="team-card-body">
                  <h3 className="team-card-name">{member.name}</h3>
                  <div className="team-card-title">{member.title}</div>
                  <p className="team-card-bio">{member.bio}</p>
                  {member.isFounder && (
                    <button
                      className="fn-trigger"
                      onClick={() => setShowFoundersNote(true)}
                    >
                      Read Founder&apos;s Note
                      <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                        <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  )}
                </div>
                <div className="team-card-focus">
                  {member.focus.map((f) => (
                    <span key={f} className="team-focus-tag">{f}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
