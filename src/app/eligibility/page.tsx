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
      <section className="bg-navy py-14 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h1 className="font-serif text-4xl font-bold">Check Your UK Eligibility</h1>
          <p className="mt-3 text-white/80">Answer a few quick questions and get an instant indication.</p>
        </div>
      </section>
      <div className="bg-ivory px-4 py-12">
        <EligibilityWizard />
      </div>
    </>
  );
}
