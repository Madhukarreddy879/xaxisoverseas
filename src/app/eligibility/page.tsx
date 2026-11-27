import type { Metadata } from 'next';
import EligibilityWizard from '@/components/EligibilityWizard';

export const metadata: Metadata = {
  title: 'UK Eligibility Check — 60 Second Evaluator',
  description:
    'Check your eligibility for UK universities in 60 seconds and get a curated shortlist from X-Axis Overseas counsellors.',
  openGraph: {
    type: 'website',
    siteName: 'X-Axis Overseas',
    locale: 'en_IN',
    title: 'UK Eligibility Check — 60 Second Evaluator',
    description:
      'Check your eligibility for UK universities in 60 seconds and get a curated shortlist from X-Axis Overseas counsellors.',
    url: 'https://xaxisoverseas.com/eligibility/',
    images: [{ url: '/og-card.png', type: 'image/png', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
    <>
      <section className="bg-navy py-10 text-white sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-3xl font-bold sm:text-4xl">Check Your UK Eligibility</h1>
          <p className="mt-3 max-w-2xl text-white/80">Answer a few quick questions and get an instant university tier indication.</p>
        </div>
      </section>
      <div className="bg-ivory px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <EligibilityWizard />
      </div>
    </>
  );
}
