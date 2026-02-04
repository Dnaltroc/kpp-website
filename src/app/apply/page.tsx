import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Apply | Kirk\'s Pitching Performance',
  description: 'Apply to train with Kirk\'s Pitching Performance. Take the first step toward elite pitching development.',
};

const BOOK_CALL_URL = 'https://calendly.com/jackson-kirkspitchingperformance/kpp-interest-meeting';

export default function Apply() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-10 md:py-16 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-red-600 rounded-full filter blur-[120px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-red-800 rounded-full filter blur-[100px]"></div>
        </div>

        <div className="relative max-w-[1150px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              Apply to Train
            </h1>
            <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
              Ready to take your pitching to the next level? Book a call to get started. We will discuss your goals and the best path forward.
            </p>
          </div>

          {/* Application CTA Card */}
          <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-xl p-6 md:p-8 max-w-xl mx-auto text-center">
            <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-5">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
              Start Your Application
            </h2>
            <p className="text-gray-400 mb-6 text-sm md:text-base">
              Book a free call to discuss your goals and see if KPP is the right fit. Takes 15-20 minutes.
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
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-10 md:py-16 bg-white">
        <div className="max-w-[1150px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-2">Simple Process</p>
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              What Happens Next?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            <div className="text-center bg-gray-50 rounded-xl p-5 border border-gray-100">
              <div className="w-11 h-11 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">Book a Call</h3>
              <p className="text-gray-600 text-sm">
                Tell us about yourself, your goals, and your current situation.
              </p>
            </div>
            <div className="text-center bg-gray-50 rounded-xl p-5 border border-gray-100">
              <div className="w-11 h-11 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">Assessment</h3>
              <p className="text-gray-600 text-sm">
                We evaluate your goals, timeline, and determine the best program fit.
              </p>
            </div>
            <div className="text-center bg-gray-50 rounded-xl p-5 border border-gray-100">
              <div className="w-11 h-11 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">Get Started</h3>
              <p className="text-gray-600 text-sm">
                If it is a fit, we outline your path and begin training within 1-2 weeks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Answers */}
      <section className="py-10 md:py-16 bg-gray-50">
        <div className="max-w-[1150px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-2">Common Questions</p>
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              Quick Answers
            </h2>
          </div>
          <div className="space-y-3 max-w-3xl mx-auto">
            <div className="bg-white rounded-xl p-5 border border-gray-200">
              <h3 className="font-semibold text-black mb-1.5">Do I need to be a certain velocity to apply?</h3>
              <p className="text-gray-600 text-sm">
                No. We work with athletes at various levels. What matters is your commitment to the process and desire to improve.
              </p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-200">
              <h3 className="font-semibold text-black mb-1.5">Is there an age requirement?</h3>
              <p className="text-gray-600 text-sm">
                We primarily work with high school through professional level athletes. For younger athletes (14U and below), reach out to discuss if we are the right fit.
              </p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-200">
              <h3 className="font-semibold text-black mb-1.5">How soon can I start?</h3>
              <p className="text-gray-600 text-sm">
                After your call and assessment, most athletes begin within 1-2 weeks depending on availability and program type.
              </p>
            </div>
          </div>
          <div className="text-center mt-6">
            <Link
              href="/#faq"
              className="text-red-600 hover:text-red-700 font-medium transition-colors"
            >
              View all FAQs →
            </Link>
          </div>
        </div>
      </section>

      {/* Alternative Contact */}
      <section className="py-10 md:py-16 bg-black text-white">
        <div className="max-w-[1150px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Have Questions First?
          </h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Not ready to apply yet? No problem. Send us a DM on Instagram and we will answer any questions you have about our programs.
          </p>
          <a
            href="https://instagram.com/kirkspitchingperformance"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white text-black font-semibold px-8 py-4 rounded-md text-lg hover:bg-gray-100 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            DM on Instagram
          </a>
        </div>
      </section>
    </div>
  );
}
