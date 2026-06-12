'use client';

import { useState } from 'react';
import PageHero from '@/components/PageHero';
import Image from 'next/image';
import Link from 'next/link';

/* ─── Founder's Note Modal ───────────────────────────────────────────────── */
function FoundersNoteModal({ onClose }: { onClose: () => void }) {
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

          {/* ── 4 photos side-by-side ── */}
          <div className="fn-photos">
            {[
              '/images/Photo_2025-11-29_091114.jpg',
              '/images/Photo_2025-11-29_091245.jpg',
              '/images/Photo_2025-11-29_091609.jpg',
              '/images/IMG_4929.JPG',
            ].map((src) => (
              <div key={src} className="fn-photo-wrap">
                <Image
                  src={src}
                  alt="Founder photo"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 45vw, 180px"
                />
              </div>
            ))}
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
        <Image src={photo} alt={name} width={80} height={80} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
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
    bio: 'Sedar sets the vision for FulcrumPoint and inspires its execution with clarity, credibility, and conviction. With nearly three decades of leadership in highly regulated medical device and semiconductor environments, he has built a career aligning people, processes, and priorities around a clear long-term direction. Leveraging advanced degrees from ASU\'s W. P. Carey School of Business and executive private equity training at Columbia Business School, he translates market insight and investment thesis into an actionable portfolio vision.',
    focus: ['Vision & Strategy', 'Portfolio Direction', 'Operator Leadership'],
    initials: 'SB',
    photo: '/images/sedar-brown.jpg',
    isFounder: true,
  },
  {
    name: 'Dylan Traver',
    title: 'Co-Founder & COO — Vice Chairman of the Board',
    bio: 'Dylan brings the rare combination of hands-on operational mastery and cross-sector perspective that makes him an exceptional COO. With nearly two decades of building construction experience spanning commercial and residential projects, he has repeatedly proven his ability to scale complexity into disciplined execution—managing multi-million-dollar developments and high-value residential transformations with equal precision.',
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
    bio: 'With over 25 years of dedicated service in Arizona, Darrell has established a distinguished career advocating for underserved populations and driving legislative and policy reform. As an accomplished Executive Director, he has effectively collaborated with local and state governments, like organizations, and community stakeholders to develop and implement programs that enhance quality of life.',
    focus: ['Governance', 'Community Relations', 'Policy & Advocacy'],
    initials: 'DW',
    photo: '/images/darrell-wright.jpg',
    isFounder: false,
  },
  {
    name: 'Lurissa Brown',
    title: 'Board Member — Secretary',
    bio: 'Originally from Panama City, Panama and educated in the United States, Lurissa brings a global perspective, operational discipline, and deep expertise in talent development and workforce systems. With advanced degrees from Arizona State University and 15 years of experience spanning state government, legal operations, immigration compliance, and higher education leadership.',
    focus: ['Talent Development', 'Workforce Systems', 'Strategic Partnerships'],
    initials: 'LB',
    photo: '/images/lurissa-brown.jpg',
    isFounder: false,
  },
  {
    name: 'Chris Ellington',
    title: 'Investment Committee Chairperson',
    bio: 'Chris brings to FulcrumPoint\'s Investment Committee a true owner-operator perspective grounded in real assets, execution speed, and capital discipline. As the founder and owner of multiple operating businesses—including a general contracting firm—Chris has spent years making investment decisions where timelines, budgets, labor, and risk converge in the real world.',
    focus: ['Investment Oversight', 'Real Assets', 'Risk Management'],
    initials: 'CE',
    photo: '/images/chris-ellington.jpg',
    isFounder: false,
  },
  {
    name: 'Tony Jones',
    title: 'Project Management Advisor',
    bio: 'Tony adds strategic value to FulcrumPoint as a battle-tested operator of complex, capital-intensive programs where execution precision directly determines return outcomes. With more than two decades of global program management leadership at Intel and ZF Group, Tony has consistently delivered high-stakes initiatives across engineering, manufacturing, and supply chain environments.',
    focus: ['Program Management', 'Quality Systems', 'Operational Risk'],
    initials: 'TJ',
    photo: '/images/tony-jones.jpg',
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

    </>
  );
}
