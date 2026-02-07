import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-8xl md:text-9xl font-black text-red-600 mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Page Not Found</h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          Looks like this pitch went wide. Let&apos;s get you back on the mound.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-md transition-colors"
          >
            Back to Home
          </Link>
          <Link
            href="/apply"
            className="inline-flex items-center justify-center border border-white/30 hover:border-white/60 text-white font-semibold px-6 py-3 rounded-md transition-colors"
          >
            Apply for Training
          </Link>
        </div>
      </div>
    </div>
  );
}
