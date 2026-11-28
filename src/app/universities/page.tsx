import type { Metadata } from 'next';
import Link from 'next/link';
import UniversityExplorer from '@/components/UniversityExplorer';

export const metadata: Metadata = {
  title: 'UK Universities — Russell Group & MOI',
  description:
    'Explore 24 UK universities with September, January & May intakes, indicative tuition, scholarships & MOI-friendly options with X-Axis Overseas Hyderabad.',
  openGraph: {
    type: 'website',
    siteName: 'X-Axis Overseas',
    locale: 'en_IN',
    title: 'UK Universities — Russell Group & MOI',
    description:
      'Explore 24 UK universities with September, January & May intakes, indicative tuition, scholarships & MOI-friendly options with X-Axis Overseas Hyderabad.',
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
          <p className="mt-3 max-w-2xl text-white/80">
            Search and filter 24 UK universities across Russell Group, London, and career-focused campuses by intake, course, and MOI acceptance.
          </p>
        </div>
      </section>
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <UniversityExplorer />

        <section className="mt-14 rounded-2xl border border-slate-200 bg-ivory p-6 sm:p-8">
          <h2 className="font-serif text-2xl font-bold text-navy">How to Shortlist the Right UK University Tier</h2>
          <div className="mt-4 grid gap-5 md:grid-cols-3">
            <div>
              <h3 className="font-bold text-navy">Russell Group Universities</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                Research-intensive UK universities (Manchester, Birmingham, Leeds, Glasgow, Sheffield, Nottingham, Queen Mary, Cardiff) suited to 65%–70%+ graduates aiming for top global rankings and September entry.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-navy">London Campuses</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                Direct proximity to finance, tech, and consulting employers. Remember London requires £14,130 (9 months at £1,570/mo) in UKVI living funds under the 30 Nov 2026 rules.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-navy">Career-Focused &amp; Affordable UK Unis</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                Strong ROI outside London (£10,827 UKVI living funds), flexible{' '}
                <Link href="/blog/study-in-uk-without-ielts-jntuh-ou-moi/" className="font-semibold text-navy underline">
                  MOI waivers
                </Link>
                ,{' '}
                <Link href="/blog/uk-universities-accepting-backlogs-study-gap/" className="font-semibold text-navy underline">
                  backlog &amp; gap acceptance
                </Link>
                , and{' '}
                <Link href="/blog/uk-1-year-masters-vs-placement-year-psw/" className="font-semibold text-navy underline">
                  2-year placement options
                </Link>
                .
              </p>
            </div>
          </div>
          <p className="mt-5 text-sm text-slate-700">
            Unsure which tier fits your score and budget? Try our{' '}
            <Link href="/eligibility/" className="font-semibold text-crimson hover:underline">
              60-second UK Eligibility Check
            </Link>{' '}
            or read our{' '}
            <Link href="/blog/affordable-uk-universities-scholarships-2027/" className="font-semibold text-crimson hover:underline">
              Affordable UK Universities &amp; Scholarships Guide
            </Link>
            .
          </p>
        </section>
      </div>
    </>
  );
}
