import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Community | Kirk\'s Pitching Performance',
  description: 'Join 350+ pitchers in the KPP community. Get pitching education, weekly updates, and accountability to reach your goals.',
  openGraph: {
    title: 'Join the Pitching Community | KPP',
    description: 'Get real pitching education, weekly updates, and a community that holds you accountable.',
  },
};

export default function CommunityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
