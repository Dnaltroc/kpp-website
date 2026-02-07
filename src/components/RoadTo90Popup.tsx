'use client';

import { useState, useEffect } from 'react';

export default function RoadTo90Popup() {
  const [showPopup, setShowPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const seenKey = 'kpp_popup_seen';
    const timer = setTimeout(() => {
      if (!sessionStorage.getItem(seenKey)) {
        setShowPopup(true);
        sessionStorage.setItem(seenKey, 'true');
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowPopup(false);
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      offer: 'Road to 90+ Free ($199.99 value)',
    };

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setIsSuccess(true);
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!showPopup) return null;

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn"
      onClick={(e) => e.target === e.currentTarget && setShowPopup(false)}
    >
      <div className="w-full max-w-[560px] bg-white rounded-2xl p-6 shadow-2xl animate-slideUp">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 className="text-2xl font-black m-0">Get the Road to 90+ Guide</h2>
            <span className="inline-block mt-2 px-3 py-1.5 bg-red-50 text-red-600 rounded-full font-bold text-sm">
              $199.99 value • Instant access
            </span>
          </div>
          <button
            onClick={() => setShowPopup(false)}
            className="text-2xl leading-none px-2 py-1 hover:bg-gray-100 rounded transition-colors"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        {isSuccess ? (
          <div className="mt-6 text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">You&apos;re In!</h3>
            <p className="text-gray-600">Check your email for the Road to 90+ guide.</p>
            <button
              onClick={() => setShowPopup(false)}
              className="mt-4 text-red-600 font-semibold hover:text-red-700"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <p className="mt-4 mb-4 text-gray-700 leading-relaxed">
              Want a clearer plan to build velocity <b>without beating up your arm</b>?
              Enter your info and I&apos;ll send you the Road to 90+ guide immediately — throwing structure,
              mechanics checkpoints, workload, and mindset.
            </p>

            <form className="grid gap-3" onSubmit={handleSubmit}>
              <input
                className="w-full px-4 py-3 border border-gray-300 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                name="name"
                placeholder="Name"
                required
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
                <input
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  required
                />
              </div>
              {error && (
                <p className="text-red-600 text-sm">{error}</p>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 bg-red-600 text-white font-black rounded-xl hover:bg-red-700 transition-colors shadow-lg shadow-red-600/25 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send me the FREE guide'}
              </button>
              <p className="text-xs text-gray-500 text-center">No spam. Just pitching resources + updates.</p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
