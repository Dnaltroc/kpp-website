'use client';

import { useState } from 'react';
import Image from 'next/image';

const BOOK_CALL_URL = 'https://calendly.com/jackson-kirkspitchingperformance/kpp-interest-meeting';

const COACHES = [
  {
    name: 'Jackson Kirkpatrick',
    title: 'Founder and Director of Performance | Professional Pitcher',
    image: '/team/Kirk Pic.png',
    imagePosition: 'object-contain object-top',
    preview: 'Built KPP from firsthand pro development — focused on honesty, capacity, adaptability, and building durable velocity.',
    specialties: ['Velocity Development', 'Biomechanics Analysis', 'Mental Performance', 'Program Design'],
    bio: `I didn't build Kirk's Pitching Performance because I had all the answers.
I built it because I had too many questions — and no interest in lying to myself anymore.

For a long time, I simply wasn't good enough. Not unlucky. Not misunderstood. My command didn't hold up, my performance didn't translate, and what I was doing wasn't working. Facing that reality forced me to take ownership instead of chasing explanations that made me feel better but didn't make me better.

Kirk's Pitching Performance started as a byproduct of me trying to save my own career. While training and competing, I began breaking down what actually mattered for me: why some training showed up in games and other work didn't, why intent exposed weaknesses instead of fixing them, and why so much "advanced" development ignored the most basic requirement — building a body capable of throwing hard, repeatedly, without breaking down.

A large part of my progress came from embracing simple, often novice stimulus and allowing adaptation to happen over time. Strength, power, and robustness weren't accessories — they were the foundation everything else sat on.

That work eventually led to me getting signed and competing professionally. But more importantly, it clarified how I think about development. I don't believe in perfect mechanics, rigid systems, or chasing repeatability. I believe in honesty, capacity, adaptability, and learning how to compete when conditions aren't clean.

KPP reflects that philosophy. I work with pitchers who are willing to stop pretending, stop searching for shortcuts, and actually confront what's holding them back — physically, mentally, and competitively.

Above all, I'm clear about this: anything good that has come from my career or this business isn't something I take credit for. I believe God used failure, frustration, and uncertainty to shape both my work and my purpose. Kirk's Pitching Performance exists because of that grace, and my responsibility is to steward it well.

I don't promise certainty.
I don't sell quick fixes.

I help pitchers build something real — because that's the only way I know how.`,
  },
  {
    name: 'Brett Kerry',
    title: 'Professional Pitcher | Performance Coach | Triple-A Angels Standout',
    image: '/team/brett-kerry.jpg',
    imagePosition: 'object-cover object-top',
    preview: 'Pro-level routines, workload, recovery, and game-ready execution — built from competing in elite environments.',
    specialties: ['Pro-Level Workload Management', 'Recovery Protocols', 'Competitive Execution', 'In-Season Training'],
    bio: `Brett Kerry's rise through baseball is the kind of story that inspires every athlete chasing elite performance and long-term success.

A standout at Wesleyan Christian Academy in North Carolina, Brett earned multiple all-state honors and helped his team to three straight state championships before committing to the University of South Carolina. In college he developed into one of the Gamecocks' most reliable arms — combining strikeout ability, durability, and a mature competitive mindset that drew scouts' attention early.

In 2021 he was selected in the 5th round of the MLB Draft by the Los Angeles Angels, beginning a professional career defined by consistent improvement, hustle, and performance. Brett moved quickly through the Angels' minor league system, earning awards like Southern League Pitcher of the Month and Pacific Coast League Pitcher of the Week along the way. Those performances led to his promotion to Triple-A with the Salt Lake Bees, where he continues to compete at a high level in one of baseball's most challenging environments.

What sets Brett apart isn't just where he plays — it's how he plays and how he thinks about performance. Known among teammates and coaches for his deep baseball IQ, Brett blends elite athletic work with a performance-driven mindset. He doesn't just train to throw strikes or rack up innings; he trains to optimize movement, build resilience under load, and sharpen competitive execution — principles he applies both on the mound and in helping others improve.

As a performance coach, Brett brings firsthand professional experience to athletes at every level. Rather than relying on generic programs, he emphasizes:
• movement quality that supports high-velocity output
• workload and recovery strategies rooted in pro-level schedules
• mental approaches that keep athletes confident and present
• customized progressions that respect individual strengths and tendencies

He helps players perform smarter, not just harder — integrating pro insights into every aspect of practice and preparation.

Whether continuing his climb toward a Major League opportunity or coaching athletes to reach and sustain their best, Brett's story is about relentless pursuit of improvement — a performance philosophy grounded in real competitive success.`,
  },
  {
    name: 'Cam Cotter',
    title: 'Professional Pitcher | Rehab Coach | Performance Specialist',
    image: '/team/new-cam-cotter.png',
    imagePosition: 'object-contain object-center',
    preview: 'Built on real comeback experience — sequencing, tissue capacity, and return-to-velocity rehab that lasts.',
    specialties: ['Return-to-Throw Rehab', 'Tissue Capacity Building', 'Movement Sequencing', 'Injury Prevention'],
    bio: `Cam Cotter's path through baseball is a testament to perseverance, innovation, and relentless commitment to mastery — not just of the game, but of the human body's capacity to recover and perform.

Cam's pitching career began with dominance at Northern Guilford High School and continued at North Carolina State University, where he battled through not one but two major elbow (Tommy John) surgeries along with a debilitating back injury that required surgery. After his first UCL reconstruction, he returned to the mound and competed across four seasons for the Wolfpack.

What most don't do, Cam did: when traditional rehab approaches failed him the second time around in 2021 and his career looked finished, he reimagined his own recovery process. Through meticulous self-analysis, progressive loading methods, and a holistic blend of biomechanics, motor control, and structural preparation, he rebuilt not only arm strength but tissue capacity, kinetic sequencing, and movement confidence — ultimately returning stronger than before.

Cam's professional breakthrough came after that comeback: he signed with the High Point Rockers in independent pro ball, performed effectively out of the bullpen, and earned attention from affiliated baseball. In 2023 the San Francisco Giants signed him to a minor league contract, and Cam pitched his way through the Giants' system — including assignments that took him to Triple-A with the Sacramento River Cats and Richmond Flying Squirrels as part of his climb through the organization.

Today, Cam combines elite playing experience and lived rehab wisdom into a coaching methodology that outperforms traditional timelines and cookie-cutter approaches. Rather than just ticking off phases on a checklist, he focuses on:
• Restoring efficient movement and sequencing
• Building resilient tissue capacity beyond baseline strength
• Sport-specific intent and velocity readiness
• Movement variability and context-specific stability

The result isn't simply "healed" athletes — it's pitchers who move better, throw harder, and stay available for competition longer.

Whether rehabbing after surgery, returning from a long layoff, or pushing performance limits, Cam helps athletes build a foundation that lasts — because he's lived the journey himself and knows what it truly takes.`,
  },
];

export default function CoachesSection() {
  const [selectedCoach, setSelectedCoach] = useState<typeof COACHES[0] | null>(null);

  return (
    <section className="py-10 md:py-14 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-red-500 font-semibold text-sm uppercase tracking-wider mb-2">Expert Guidance</p>
          <h2 className="text-3xl md:text-4xl font-bold">Meet Our Coaches</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {COACHES.map((coach, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-red-500/50 transition-colors"
            >
              <div className="relative h-72 w-full bg-gray-800">
                <Image
                  src={coach.image}
                  alt={coach.name}
                  fill
                  className={coach.imagePosition || 'object-cover object-center'}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={index === 0}
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-white">{coach.name}</h3>
                <p className="text-red-500 text-xs font-medium mb-3">{coach.title}</p>
                <ul className="space-y-1.5 mb-4">
                  {coach.specialties.map((specialty, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-400">
                      <svg className="w-3.5 h-3.5 text-red-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {specialty}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => setSelectedCoach(coach)}
                    className="text-sm font-semibold text-red-500 hover:text-red-400 transition-colors inline-flex items-center"
                  >
                    Read Bio
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  <a
                    href={BOOK_CALL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium text-gray-500 hover:text-white transition-colors"
                  >
                    Book a Call
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href={BOOK_CALL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-md transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Book a Call
          </a>
        </div>
      </div>

      {/* Modal */}
      {selectedCoach && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedCoach(null)}
        >
          <div
            className="bg-gray-900 rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-hidden border border-gray-700"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-5 border-b border-gray-800">
              <div>
                <h3 className="text-xl font-bold text-white">{selectedCoach.name}</h3>
                <p className="text-red-500 text-sm">{selectedCoach.title}</p>
              </div>
              <button
                onClick={() => setSelectedCoach(null)}
                className="text-gray-400 hover:text-white transition-colors p-1"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-5 overflow-y-auto max-h-[calc(85vh-100px)]">
              <div className="prose prose-invert prose-sm max-w-none">
                {selectedCoach.bio.split('\n\n').map((paragraph, i) => (
                  <p key={i} className="text-gray-300 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
