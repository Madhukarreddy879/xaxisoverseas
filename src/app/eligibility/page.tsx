import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import EligibilityWizard from '@/components/EligibilityWizard';

export const metadata: Metadata = {
  title: 'UK Eligibility Check — 60 Second Evaluator',
  description:
    'Check your eligibility for UK universities in 60 seconds based on percentage, backlogs, IELTS/MOI & budget — free shortlist from X-Axis Overseas Hyderabad.',
  openGraph: {
    type: 'website',
    siteName: 'X-Axis Overseas',
    locale: 'en_IN',
    title: 'UK Eligibility Check — 60 Second Evaluator',
    description:
      'Check your eligibility for UK universities in 60 seconds based on percentage, backlogs, IELTS/MOI & budget — free shortlist from X-Axis Overseas Hyderabad.',
    url: 'https://xaxisoverseas.com/eligibility/',
    images: [{ url: '/og-card.png', type: 'image/png', width: 1200, height: 630 }],
  },
};

const criteria = [
  'Academic Score (55%–70%+): Most career-focused UK universities accept 55%–60% in Indian Bachelor’s degrees for MSc/MBA entry, while top Russell Group universities typically look for 65%–70%+.',
  'English Proficiency (IELTS / PTE / MOI): Graduates from JNTUH, Osmania University, and accredited Indian colleges with recent English-medium degrees or 70%+ in Class 12 English may qualify for an IELTS waiver at select campuses.',
  'Cleared Backlogs & Study Gaps: Many modern UK universities accept 8–15 cleared backlogs and 2–5+ year study gaps backed by genuine work, business, or upskilling proof—all active backlogs must be cleared before CAS.',
  'Budget & UKVI Financial Readiness: Factor in 1-year net tuition (£13,000–£30,000+ after scholarships) plus 9-month UKVI living funds (£14,130 London / £10,827 outside London effective 30 Nov 2026).',
];

export default function Page() {
  return (
    <>
      <section className="bg-navy py-10 text-white sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-3xl font-bold sm:text-4xl">Check Your UK Eligibility</h1>
          <p className="mt-3 max-w-2xl text-white/80">
            Answer 4 quick questions about your degree score, intake, English test or MOI, and budget to see which UK university tier fits your profile.
          </p>
        </div>
      </section>

      <div className="bg-ivory px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <EligibilityWizard />
      </div>

      <div className="mx-auto max-w-4xl space-y-8 px-4 py-12 sm:px-6 lg:px-8">
        <section>
          <h2 className="font-serif text-2xl font-bold text-navy">How UK University Eligibility Is Assessed for 2027 Intakes</h2>
          <p className="mt-2 leading-relaxed text-slate-700">
            UK universities evaluate Indian profiles holistically rather than using a single entrance exam like the GRE. Our 60-second tool maps your answers against current entry benchmarks across Russell Group, London, and regional UK campuses:
          </p>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700 sm:text-base">
            {criteria.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <CheckCircle2 aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-crimson" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="font-serif text-xl font-bold text-navy">Helpful Guides Based on Your Profile</h2>
          <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-crimson">
            <Link href="/blog/study-in-uk-without-ielts-jntuh-ou-moi/" className="hover:underline">
              MOI Waiver Without IELTS →
            </Link>
            <Link href="/blog/uk-universities-accepting-backlogs-study-gap/" className="hover:underline">
              Backlogs &amp; Study Gap Universities →
            </Link>
            <Link href="/blog/affordable-uk-universities-scholarships-2027/" className="hover:underline">
              Affordable UK Universities &amp; Scholarships →
            </Link>
            <Link href="/blog/uk-march-may-2027-intake-universities/" className="hover:underline">
              March / May 2027 Spring Intake →
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
