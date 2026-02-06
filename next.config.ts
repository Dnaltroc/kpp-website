import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimize images
  images: {
    // Allow external image domains for Vimeo thumbnails
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'vumbnail.com',
        pathname: '/**',
      },
    ],
    // Use modern formats
    formats: ['image/avif', 'image/webp'],
    // Optimize image sizes
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },

  // Enable compression
  compress: true,

  // Optimize production builds
  productionBrowserSourceMaps: false,

  // Experimental performance features
  experimental: {
    // Optimize CSS
    optimizeCss: true,
  },

  // Headers for caching static assets
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|jpeg|png|webp|avif|ico|woff|woff2)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
