import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Training Programs | Kirk\'s Pitching Performance',
  description: 'Explore our comprehensive pitching development programs. Remote options available for serious athletes.',
};

const BOOK_CALL_URL = 'https://calendly.com/jackson-kirkspitchingperformance/kpp-interest-meeting';

const PROGRAM_FEATURES = [
  'Detailed video analysis with personalized feedback',
  'Weekly check-in calls and progress reviews',
  'Individualized throwing and training programs',
  'Direct messaging access for questions and support',
  'Scalable to your equipment and facility access',
  'Arm care and workload management built-in',
];

const INCLUDED_FEATURES = [
  {
    title: 'Data-Driven Approach',
    description: 'We measure what matters — velocity, spin, movement, and more. Data informs every decision in your program.',
    icon: (
      <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: 'Individualized Programming',
    description: 'No cookie-cutter plans. Your program is built specifically for your body, your goals, and your schedule.',
    icon: (
      <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: 'Arm Health Focus',
    description: 'Performance means nothing if you cannot stay on the field. Arm care and workload management are built into every program.',
    icon: (
      <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: 'Video Analysis',
    description: 'Regular video breakdowns help you understand your mechanics and track improvements over time.',
    icon: (
      <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Direct Communication',
    description: 'Questions do not wait until your next session. You have direct access to coaching support when you need it.',
    icon: (
      <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    title: 'Mental Performance',
    description: 'The mental game is part of the holistic approach. We address mindset, confidence, and competitive focus.',
    icon: (
      <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
];

export default function Training() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-10 md:py-16 overflow-hidden">
        {/* Background gradient matching Home hero */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-red-600 rounded-full filter blur-[120px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-red-800 rounded-full filter blur-[100px]"></div>
        </div>

        <div className="relative max-w-[1150px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              Training Programs
            </h1>
            <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
              Science-backed, individualized programs designed to maximize your potential. Get the same quality coaching and programming from anywhere in the world.
            </p>
          </div>

          {/* Remote Training Card */}
          <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-xl p-6 md:p-8 max-w-2xl mx-auto">
            <div className="inline-block bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
              Remote Training
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
              Train with KPP from Anywhere
            </h2>
            <p className="text-gray-400 mb-5 text-sm md:text-base">
              Our remote athletes see the same results as in-person clients. Get personalized coaching, video analysis, and direct support — no matter where you are.
            </p>
            <ul className="space-y-2 mb-6">
              {PROGRAM_FEATURES.map((feature, index) => (
                <li key={index} className="flex items-start text-sm">
                  <svg className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
            <a
              href={BOOK_CALL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-md transition-colors"
            >
              Apply for Remote Training
            </a>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-10 md:py-16 bg-white">
        <div className="max-w-[1150px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-2">Comprehensive Support</p>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-3">
              What Every Program Includes
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              You will receive a comprehensive, athlete-centered experience designed for real results.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {INCLUDED_FEATURES.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-5 border border-gray-100 hover:border-red-200 hover:shadow-md transition-all">
                <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center mb-3">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-16 bg-black text-white">
        <div className="max-w-[1150px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Ready to Get Started?
          </h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Book a call and we will help you figure out the best path forward based on your goals and situation.
          </p>
          <a
            href={BOOK_CALL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-md text-lg transition-colors"
          >
            Book a Call
          </a>
        </div>
      </section>
    </div>
  );
}
