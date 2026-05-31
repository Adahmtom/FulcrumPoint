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
        <h2 className="fn-headline">Why I Built FulcrumPoint</h2>
        <div className="fn-body">
          <p>
            I grew up watching my father build a life with his hands. Not metaphorically — literally.
            He was a tradesman. He worked long hours, managed a crew, and came home carrying the weight
            of a business on his back. What he built wasn&apos;t just a company. It was identity, purpose,
            and the foundation of everything our family had.
          </p>
          <p>
            When the time came for him to consider his next chapter, I watched what happened to owners
            like him when they entered conversations with buyers. Too often, they were treated as
            targets — their businesses reduced to spreadsheets, their legacies treated as liabilities
            to be restructured away. The people who had given everything to build something real were
            handed a term sheet and shown the door.
          </p>
          <p>
            That experience never left me. Years later, after building my own career across
            institutional organizations — learning how capital markets, operational systems, and
            investment discipline actually work — I came back to that question: <em>what would it
            look like to do this right?</em>
          </p>
          <p>
            FulcrumPoint is my answer. We exist to be the partner I wish existed for my father — one
            that brings institutional resources and disciplined execution without losing sight of
            what these businesses actually represent. The people behind them. The communities they
            serve. The legacy they carry.
          </p>
          <p>
            Our edge isn&apos;t financial engineering. It&apos;s operator credibility, genuine respect for the
            craft, and an unwavering commitment to building something that lasts. We partner with
            skilled trade owners not to extract value from what they&apos;ve built — but to protect it,
            grow it, and carry it forward for the next generation.
          </p>
          <p>
            That&apos;s the only version of this work I believe in. And it&apos;s the standard FulcrumPoint
            will hold itself to every day.
          </p>
        </div>
        <div className="fn-sig">
          <div className="fn-sig-name">Sedar Brown</div>
          <div className="fn-sig-title">Founder &amp; CEO — FulcrumPoint Holdings</div>
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
        headline="Operators first.<br />Investors second."
        sub="FulcrumPoint is built by people who have run the businesses we invest in. Every member of our team brings direct operating experience across skilled trades, finance, and institutional capital."
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
