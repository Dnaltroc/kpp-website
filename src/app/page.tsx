import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';

// Lazy load heavy components to reduce initial bundle size
const CoachesSection = dynamic(() => import('@/components/CoachesSection'), {
  loading: () => <div className="py-10 md:py-14 bg-black" />,
});

const TransformationsSection = dynamic(() => import('@/components/TransformationsSection'), {
  loading: () => <div className="py-10 md:py-14 bg-gray-50" />,
});

const BOOK_CALL_URL = 'https://calendly.com/jackson-kirkspitchingperformance/kpp-interest-meeting';

const TESTIMONIALS = [
  {
    name: 'Chase Geiser',
    result: 'Velo ↑ + Confidence ↑',
    quote: 'Before training with Jackson I always had the work ethic but never had a solid plan… within 4 months… PR of 91, earned a scholarship… felt super confident…',
  },
  {
    name: 'KPP Athlete',
    result: 'Velo ↑ + Command ↑',
    quote: 'Impact was immediate — I started throwing harder with less effort and my command sharpened. KPP covers the mental + physical sides.',
  },
  {
    name: 'KPP Athlete',
    result: 'Performance ↑',
    quote: 'Im actually starting to get good agian. I actually excited to go to the field and get after it training tomorrow, the next day, and in the future. Im having fun again.',
  },
  {
    name: 'KPP Athlete',
    result: 'Strength ↑',
    quote: 'In the best shape of my career, Hands downn. Upper boddy feels amazing. Reverse lunged 315 for the first time today! Life is good!',
  },
  {
    name: 'KPP Athlete',
    result: 'Performance ↑',
    quote: '4 simulated vs our lineup: 11 Ks, 0 H, 2 BB… landing stuff wherever I wanted.',
  },
  {
    name: 'KPP Athlete',
    result: 'Athleticism ↑',
    quote: 'Big eye opener for in-season/out-of-season. Variability week to week made me a better athlete.',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-14 md:py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-red-600 rounded-full filter blur-[120px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-red-800 rounded-full filter blur-[100px]"></div>
        </div>

        {/* Logo in Hero */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3 border border-white/10">
              <div className="flex items-center space-x-3">
                <div className="relative w-10 h-10 rounded-lg overflow-hidden">
                  <Image
                    src="/kpp.logo/KPP.LOGO.png"
                    alt="KPP Logo"
                    fill
                    className="object-contain"
                    sizes="40px"
                    priority
                  />
                </div>
                <span className="text-white/90 font-semibold tracking-wide">KIRK&apos;S PITCHING PERFORMANCE</span>
              </div>
            </div>
          </div>

          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              Train Like a Pro.<br />
              <span className="text-red-500">Pitch with Power, Command & Confidence.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-6">
              Data-Driven Pitching Development for <strong className="text-white">Velocity</strong>, <strong className="text-white">Control</strong> & <strong className="text-white">Competitive Edge</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={BOOK_CALL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-md text-lg transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Book a Call
              </a>
              <Link
                href="/apply"
                className="inline-flex items-center justify-center border border-white/30 hover:border-white/60 hover:bg-white/5 text-white font-semibold px-8 py-4 rounded-md text-lg transition-all"
              >
                Apply for Training
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="bg-gray-900 text-white py-3 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 text-sm">
            <div className="flex items-center space-x-2">
              <span className="text-red-500 font-bold">150+</span>
              <span className="text-gray-400">Athletes Trained</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-red-500 font-bold">+3 MPH</span>
              <span className="text-gray-400">Avg Velo Gain</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-red-500 font-bold">92%</span>
              <span className="text-gray-400">Return Rate</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-red-500 font-bold">25+</span>
              <span className="text-gray-400">College Commits</span>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-10 md:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-2">Our Approach</p>
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              The Three Pillars of Elite Pitching
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-100 hover:border-red-200 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-black mb-2">Stuff</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Velocity and movement are the foundation. Data-driven protocols to maximize arm speed and develop a devastating arsenal.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-100 hover:border-red-200 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-black mb-2">Command</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Precision through repeatable mechanics and real-time feedback. Build confidence to execute any pitch in any count.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-100 hover:border-red-200 hover:shadow-md transition-all group">
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-black mb-2">Resilience</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Mental game and arm health. Build durable athletes who handle adversity and stay healthy for the long haul.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Proven Results */}
      <section className="py-10 md:py-14 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-red-500 font-semibold text-sm uppercase tracking-wider mb-2">Proven Results</p>
            <h2 className="text-3xl md:text-4xl font-bold">Built on Data. Refined by Results.</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
            <div className="bg-gray-900 rounded-xl p-6 text-center border border-gray-800 hover:border-red-500/50 transition-colors">
              <div className="text-4xl md:text-5xl font-bold text-red-500 mb-1">+3.0</div>
              <div className="text-sm text-white font-semibold uppercase tracking-wide">Avg MPH Gain</div>
              <div className="text-xs text-gray-500 mt-1">Across All Program Athletes</div>
            </div>
            <div className="bg-gray-900 rounded-xl p-6 text-center border border-gray-800 hover:border-red-500/50 transition-colors">
              <div className="text-4xl md:text-5xl font-bold text-red-500 mb-1">15%</div>
              <div className="text-sm text-white font-semibold uppercase tracking-wide">Command Improvement</div>
              <div className="text-xs text-gray-500 mt-1">Zone Rate Increase</div>
            </div>
            <div className="bg-gray-900 rounded-xl p-6 text-center border border-gray-800 hover:border-red-500/50 transition-colors">
              <div className="text-4xl md:text-5xl font-bold text-red-500 mb-1">94%</div>
              <div className="text-sm text-white font-semibold uppercase tracking-wide">Success Rate</div>
              <div className="text-xs text-gray-500 mt-1">Athletes Hit Their Goals Within First Year </div>
            </div>
          </div>
          <div className="text-center mt-6">
            <Link
              href="/results"
              className="inline-flex items-center justify-center bg-transparent border border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-semibold px-5 py-2.5 rounded-md transition-colors text-sm"
            >
              See all athlete results
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Transformations */}
      <TransformationsSection />

      {/* How It Works */}
      <section className="py-10 md:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-2">Simple Process</p>
            <h2 className="text-3xl md:text-4xl font-bold text-black">How It Works</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            <div className="relative text-center">
              <div className="w-11 h-11 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-3">1</div>
              <h3 className="text-lg font-bold text-black mb-2">Book a Call</h3>
              <p className="text-gray-600 text-sm">
                Schedule a free consultation to discuss your goals and see if we are the right fit.
              </p>
            </div>
            <div className="relative text-center">
              <div className="w-11 h-11 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-3">2</div>
              <h3 className="text-lg font-bold text-black mb-2">Assessment</h3>
              <p className="text-gray-600 text-sm">
                Comprehensive evaluation of your mechanics, movement, and performance metrics.
              </p>
            </div>
            <div className="relative text-center">
              <div className="w-11 h-11 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-3">3</div>
              <h3 className="text-lg font-bold text-black mb-2">Train & Transform</h3>
              <p className="text-gray-600 text-sm">
                Custom programming with ongoing coaching to ensure consistent progress.
              </p>
            </div>
          </div>
          <div className="text-center mt-6">
            <a
              href={BOOK_CALL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-md transition-colors"
            >
              Start with a Free Call
            </a>
          </div>
        </div>
      </section>

      {/* Meet Our Coaches */}
      <CoachesSection />

      {/* Testimonials */}
      <section className="py-10 md:py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-2">Success Stories</p>
            <h2 className="text-3xl md:text-4xl font-bold text-black">What Athletes Say</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {TESTIMONIALS.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xs">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <p className="font-semibold text-black text-sm">{testimonial.name}</p>
                  </div>
                </div>
                <div className="bg-red-50 text-red-700 text-xs font-semibold px-2 py-1 rounded inline-block mb-2">
                  {testimonial.result}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  &quot;{testimonial.quote}&quot;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-10 md:py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-2">Common Questions</p>
            <h2 className="text-3xl md:text-4xl font-bold text-black">FAQ</h2>
          </div>
          <div className="space-y-3">
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
              <h3 className="font-semibold text-black mb-1.5">What about arm health?</h3>
              <p className="text-gray-600 text-sm">
                Arm health is foundational. Our programs incorporate workload management, arm care protocols, and movement assessments. Longevity is always part of the equation.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
              <h3 className="font-semibold text-black mb-1.5">Do you offer remote coaching?</h3>
              <p className="text-gray-600 text-sm">
                Yes! Remote includes video analysis, personalized programming, weekly check-ins, and direct coaching access. Many of our best results come from remote athletes.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
              <h3 className="font-semibold text-black mb-1.5">Who is this for?</h3>
              <p className="text-gray-600 text-sm">
                Serious pitchers from high school through pro levels. We do not require a certain velocity — we require the right mindset and commitment.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
              <h3 className="font-semibold text-black mb-1.5">What equipment do I need?</h3>
              <p className="text-gray-600 text-sm">
                Minimum: mound access, baseballs, and a phone for video. We scale recommendations to your setup and provide weighted ball guidance.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
              <h3 className="font-semibold text-black mb-1.5">How does pricing work?</h3>
              <p className="text-gray-600 text-sm">
                Transparent pricing after your consultation. No hidden fees. Investment varies by program type and duration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-10 md:py-14 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Ready to Elevate Your Game?
          </h2>
          <p className="text-gray-400 mb-5 max-w-xl mx-auto">
            Take the first step toward becoming the pitcher you know you can be.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={BOOK_CALL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-md text-lg transition-colors"
            >
              Book a Free Call
            </a>
            <Link
              href="/apply"
              className="inline-flex items-center justify-center border border-white/30 hover:border-white/60 text-white font-semibold px-8 py-4 rounded-md text-lg transition-colors"
            >
              Apply for Training
            </Link>
          </div>
          <p className="text-gray-500 text-sm mt-5">
            Or DM us on{' '}
            <a href="https://instagram.com/kirkspitchingperformance" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400">
              @kirkspitchingperformance
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
