import { Suspense } from 'react';
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
      <section className="bg-navy py-10 text-white sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-3xl font-bold sm:text-4xl">UK Universities</h1>
          <p className="mt-3 max-w-2xl text-white/80">Search and filter universities we work with, then check your eligibility in one click.</p>
        </div>
      </section>
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <Suspense fallback={<p className="py-8 text-sm text-slate-500">Loading universities…</p>}>
          <UniversityExplorer />
        </Suspense>
      </div>
    </>
  );
}
