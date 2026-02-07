import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyBookCall from "@/components/StickyBookCall";
import RoadTo90Popup from "@/components/RoadTo90Popup";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kirk's Pitching Performance | Elite Pitching Development",
  description: "Data-driven pitching development for velocity, command & competitive edge. Train like a pro with science-backed methods.",
  keywords: ["pitching", "baseball", "training", "velocity", "command", "pitching coach", "pitching development"],
  openGraph: {
    title: "Kirk's Pitching Performance",
    description: "Train Like a Pro. Pitch with Power, Command & Confidence.",
    type: "website",
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SportsActivityLocation',
  name: "Kirk's Pitching Performance",
  description: 'Data-driven pitching development for velocity, command & competitive edge.',
  url: 'https://kirkspitchingperformance.com',
  sameAs: [
    'https://instagram.com/kirkspitchingperformance',
  ],
  priceRange: '$$',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '150',
  },
  review: [
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Cortland Clarke' },
      reviewRating: { '@type': 'Rating', ratingValue: '5' },
      reviewBody: "Jackson is the best to work with because he isn't someone who will tell you to do something for no reason. Everything he teaches comes from real experience.",
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Danny F.' },
      reviewRating: { '@type': 'Rating', ratingValue: '5' },
      reviewBody: 'Working with Jackson will completely transform your game. His programs are effective and tailored to your individual needs.',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
        <StickyBookCall />
        <RoadTo90Popup />
      </body>
    </html>
  );
}
