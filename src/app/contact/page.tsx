import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Kirk\'s Pitching Performance',
  description: 'Get in touch with Kirk\'s Pitching Performance. Reach out via Instagram or apply to start training.',
};

const BOOK_CALL_URL = 'https://calendly.com/jackson-kirkspitchingperformance/kpp-interest-meeting';

export default function Contact() {
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
              Contact
            </h1>
            <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
              Have questions about training? Want to learn more before applying? We are here to help.
            </p>
          </div>

          {/* Contact Options Grid */}
          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {/* Instagram */}
            <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <h2 className="text-lg font-bold text-white mb-2">Instagram</h2>
              <p className="text-gray-400 mb-4 text-sm">
                Best way to reach us. We typically respond within 24 hours.
              </p>
              <a
                href="https://instagram.com/kirkspitchingperformance"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-black font-semibold px-5 py-2.5 rounded-md transition-colors text-sm"
              >
                @kirkspitchingperformance
              </a>
            </div>

            {/* Book a Call */}
            <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-lg font-bold text-white mb-2">Book a Call</h2>
              <p className="text-gray-400 mb-4 text-sm">
                Ready to get started? Schedule a free consultation call.
              </p>
              <a
                href={BOOK_CALL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-semibold px-5 py-2.5 rounded-md transition-colors text-sm"
              >
                Schedule Call
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What to Include */}
      <section className="py-10 md:py-16 bg-white">
        <div className="max-w-[1150px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-2">Be Prepared</p>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-3">
              When You Reach Out
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              To help us respond effectively, consider including:
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
              <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-black mb-2">Your Background</h3>
              <p className="text-gray-600 text-sm">
                Age, current level (high school, college, etc.), position, and any relevant experience.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
              <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-black mb-2">Current Metrics</h3>
              <p className="text-gray-600 text-sm">
                Current velocity, recent performance, or any data you have on your pitching.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
              <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-black mb-2">Your Goals</h3>
              <p className="text-gray-600 text-sm">
                What are you looking to achieve? Velocity gain, college recruitment, professional development?
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
              <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-black mb-2">Specific Questions</h3>
              <p className="text-gray-600 text-sm">
                Any specific questions about our approach, programs, or how we might help you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Follow CTA */}
      <section className="py-10 md:py-16 bg-black text-white">
        <div className="max-w-[1150px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Follow Our Content
          </h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Not ready to reach out yet? Follow along on Instagram for training tips, athlete success stories, and insights into our approach.
          </p>
          <a
            href="https://instagram.com/kirkspitchingperformance"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border border-white/30 hover:bg-white hover:text-black text-white font-semibold px-8 py-4 rounded-md text-lg transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Follow @kirkspitchingperformance
          </a>
        </div>
      </section>
    </div>
  );
}
