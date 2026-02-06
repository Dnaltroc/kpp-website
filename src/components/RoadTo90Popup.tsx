'use client';

import { useState, useEffect } from 'react';

export default function RoadTo90Popup() {
  const [showPopup, setShowPopup] = useState(false);

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

  if (!showPopup) return null;

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={(e) => e.target === e.currentTarget && setShowPopup(false)}
    >
      <div className="w-full max-w-[560px] bg-white rounded-2xl p-6 shadow-2xl">
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

        <p className="mt-4 mb-4 text-gray-700 leading-relaxed">
          Want a clearer plan to build velocity <b>without beating up your arm</b>?
          Enter your info and I&apos;ll send you the Road to 90+ guide immediately — throwing structure,
          mechanics checkpoints, workload, and mindset.
        </p>

        <form className="grid gap-3" action="YOUR_FORM_ENDPOINT_HERE" method="POST">
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
          <input type="hidden" name="offer" value="Road to 90+ Free ($199.99 value)" />
          <button
            type="submit"
            className="w-full py-3.5 bg-red-600 text-white font-black rounded-xl hover:bg-red-700 transition-colors shadow-lg shadow-red-600/25"
          >
            Send me the FREE guide
          </button>
          <p className="text-xs text-gray-500 text-center">No spam. Just pitching resources + updates.</p>
        </form>
      </div>
    </div>
  );
}
