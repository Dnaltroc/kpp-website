'use client';

import { useState } from 'react';
import Image from 'next/image';
import { TRANSFORMATIONS, type Transformation } from '@/lib/transformations';

export default function TransformationsSection() {
  const [selectedVideo, setSelectedVideo] = useState<Transformation | null>(null);

  return (
    <section className="py-10 md:py-14 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-2">See the Proof</p>
          <h2 className="text-3xl md:text-4xl font-bold text-black">Transformations</h2>
          <p className="text-gray-600 mt-2">Real athletes. Real results. Watch their journeys.</p>
        </div>

        <div className="grid grid-cols-2 gap-4 max-w-3xl mx-auto">
          {TRANSFORMATIONS.map((video) => (
            <button
              key={video.id}
              onClick={() => setSelectedVideo(video)}
              className="group relative bg-gray-900 rounded-xl overflow-hidden aspect-video flex items-center justify-center hover:ring-2 hover:ring-red-500 transition-all text-left"
            >
              {/* Actual thumbnail image */}
              <Image
                src={video.thumbnail}
                alt={video.title}
                fill
                sizes="(max-width: 768px) 50vw, 400px"
                className="object-cover"
                loading="lazy"
              />
              {/* Content overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10"></div>
              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-red-600/90 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-red-600 transition-transform shadow-lg">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
              {/* Text content */}
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 z-20">
                <p className="text-white font-semibold text-sm md:text-base">{video.title}</p>
                <p className="text-red-400 text-xs md:text-sm font-medium">{video.subtitle}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="bg-black rounded-2xl max-w-4xl w-full overflow-hidden border border-gray-800"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-gray-800">
              <div>
                <h3 className="text-lg font-bold text-white">{selectedVideo.title}</h3>
                <p className="text-red-500 text-sm">{selectedVideo.subtitle}</p>
              </div>
              <button
                onClick={() => setSelectedVideo(null)}
                className="text-gray-400 hover:text-white transition-colors p-1"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="relative aspect-video bg-gray-900">
              {selectedVideo.videoType === 'youtube' ? (
                <iframe
                  src={`${selectedVideo.videoUrl}?autoplay=1`}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              ) : selectedVideo.videoType === 'vimeo' ? (
                <iframe
                  src={`${selectedVideo.videoUrl}?autoplay=1`}
                  className="absolute inset-0 w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              ) : (
                <video
                  src={selectedVideo.videoUrl}
                  className="absolute inset-0 w-full h-full"
                  controls
                  autoPlay
                />
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
