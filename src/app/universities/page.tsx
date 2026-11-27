import type { Metadata } from 'next';
import UniversityExplorer from '@/components/UniversityExplorer';

export const metadata: Metadata = {
  title: 'UK Universities — Russell Group, London & MOI-Friendly',
  description:
    'Explore 24 UK universities with intakes, indicative tuition, scholarships and MOI-friendly options. Check your eligibility with X-Axis Overseas.',
  openGraph: {
    type: 'website',
    siteName: 'X-Axis Overseas',
    locale: 'en_IN',
    title: 'UK Universities — Russell Group, London & MOI-Friendly',
    description:
      'Explore 24 UK universities with intakes, indicative tuition, scholarships and MOI-friendly options. Check your eligibility with X-Axis Overseas.',
    url: 'https://xaxisoverseas.com/universities/',
    images: [{ url: '/og-card.png', type: 'image/png', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
    <>
      <section className="bg-navy py-14 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="font-serif text-4xl font-bold">UK Universities</h1>
          <p className="mt-3 text-white/80">Search and filter universities we work with, then check your eligibility in one click.</p>
        </div>
      </section>
      <div className="mx-auto max-w-7xl px-4 py-12">
        <UniversityExplorer />
      </div>
    </>
  );
}
