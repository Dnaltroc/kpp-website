import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book a Call | Kirk\'s Pitching Performance',
  description: 'Schedule a free consultation to discuss your pitching goals and see if KPP is the right fit for you.',
};

const BOOK_CALL_URL = 'https://calendly.com/jackson-kirkspitchingperformance/kpp-interest-meeting';

export default function BookPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <section className="py-10 md:py-14 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-red-500 font-semibold text-sm uppercase tracking-wider mb-2">Get Started</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Book Your Free Call</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Schedule a consultation to discuss your goals, assess your current level, and see if KPP is the right fit for you.
          </p>
        </div>
      </section>

      {/* Calendly Embed */}
      <section className="pb-10 md:pb-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src={`${BOOK_CALL_URL}?hide_gdpr_banner=1&background_color=ffffff&text_color=1a1a1a&primary_color=dc2626`}
              width="100%"
              height="700"
              frameBorder="0"
              title="Schedule a call with KPP"
              className="w-full"
              loading="lazy"
            />
          </div>

          <div className="text-center mt-6">
            <p className="text-gray-500 text-sm mb-3">Having trouble with the embed?</p>
            <a
              href={BOOK_CALL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-md transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Open Booking Link
            </a>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-10 md:py-14 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white text-center mb-8">What to Expect</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3">1</div>
              <h3 className="text-white font-semibold mb-2">Quick Chat</h3>
              <p className="text-gray-400 text-sm">15-20 minute call to discuss where you are and where you want to go</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3">2</div>
              <h3 className="text-white font-semibold mb-2">Assessment</h3>
              <p className="text-gray-400 text-sm">We will evaluate your goals, timeline, and what program fits best</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3">3</div>
              <h3 className="text-white font-semibold mb-2">Next Steps</h3>
              <p className="text-gray-400 text-sm">If it is a fit, we will outline your path to get started</p>
            </div>
          </div>
        </div>
      </section>

      {/* Back Link */}
      <section className="py-8 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
}
