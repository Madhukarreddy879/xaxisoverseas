import type { Metadata } from 'next';
import CtaButton from '@/components/CtaButton';

export const metadata: Metadata = {
  title: 'Study in the UK — Complete Guide for Indian Students',
  description:
    'Guide to studying in the UK: 1-year master\'s, study without IELTS (MOI), UKVI financial rules, Graduate Route visa, cities and document checklist.',
  openGraph: {
    type: 'website',
    siteName: 'X-Axis Overseas',
    locale: 'en_IN',
    title: 'Study in the UK — Complete Guide for Indian Students',
    description:
      'Guide to studying in the UK: 1-year master\'s, study without IELTS (MOI), UKVI financial rules, Graduate Route visa, cities and document checklist.',
    url: 'https://xaxisoverseas.com/study-in-uk/',
    images: [{ url: '/og-card.png', type: 'image/png', width: 1200, height: 630 }],
  },
};

const docs = [
  'Passport (valid) and photographs',
  'Academic transcripts and certificates (10th, 12th, degree)',
  'Statement of Purpose (SOP) and 1–2 letters of recommendation',
  'Updated CV / resume',
  'English proof: IELTS / PTE or MOI letter',
  'Work experience letters (if applicable)',
  'Financial documents (bank statements / education loan letter)',
  'CAS letter and tuberculosis test certificate from a UKVI-approved clinic',
];

const cities = [
  ['London', 'Global finance, tech and the most jobs — highest living cost.'],
  ['Manchester', 'Student-friendly city with strong industry links.'],
  ['Birmingham & Coventry', 'Central location, engineering and automotive strength.'],
  ['Leeds & Sheffield', 'Lower cost of living with excellent universities.'],
  ['Glasgow & Edinburgh', 'Rich culture and reputed Scottish universities.'],
  ['Cardiff & Swansea', 'Affordable cities with friendly communities.'],
];

export default function Page() {
  return (
    <>
      <section className="bg-navy py-10 text-white sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-3xl font-bold sm:text-4xl">Study in the UK</h1>
          <p className="mt-3 max-w-2xl text-white/80">Everything Indian students need to know before applying — in plain language.</p>
        </div>
      </section>
      <div className="mx-auto max-w-7xl space-y-10 px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <section>
          <h2 className="font-serif text-2xl font-bold text-navy">1-Year vs 2-Year (Placement) Master&apos;s</h2>
          <p className="mt-3 text-slate-700">
            A standard UK master&apos;s takes 12 months, saving a year of fees and living costs. Many universities also offer a 2-year version with an industry placement year, giving UK work experience before you graduate.
          </p>
        </section>
        <section>
          <h2 className="font-serif text-2xl font-bold text-navy">Study in the UK Without IELTS</h2>
          <p className="mt-3 text-slate-700">
            Several universities waive IELTS if you have a Medium of Instruction (MOI) letter from your university, or a required score in English in 12th grade. Acceptance varies by university and course, and UKVI can still ask for evidence of English during the visa process. We check each shortlisted university&apos;s current policy for you.
          </p>
        </section>
        <section>
          <h2 className="font-serif text-2xl font-bold text-navy">UKVI Financial Rules (28-Day + 31-Day Rule)</h2>
          <p className="mt-3 text-slate-700">
            You need to show your first-year tuition (less any deposit paid on your CAS) plus living costs for up to 9 months, held for 28 consecutive days ending within 31 days of your visa application date. Effective 30 November 2026, official GOV.UK living-cost rates are £1,570/month in London (£14,130 for 9 months) and £1,203/month outside London (£10,827 for 9 months). Education loans must meet UKVI sanction-letter rules—always verify the latest figures on gov.uk.
          </p>
        </section>
        <section>
          <h2 className="font-serif text-2xl font-bold text-navy">Graduate Route (Post-Study Work) Visa</h2>
          <p className="mt-3 text-slate-700">
            After successfully completing an eligible UK degree, Bachelor&apos;s and Master&apos;s graduates applying on or after 1 January 2027 can stay and work for 18 months (2 years for applications made on or before 31 December 2026), and PhD graduates receive 3 years. Always check gov.uk for the latest rules.
          </p>
        </section>
        <section>
          <h2 className="font-serif text-2xl font-bold text-navy">Top Student Cities</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {cities.map(([c, d]) => (
              <div key={c} className="rounded-xl border border-slate-200 p-4">
                <h3 className="font-bold text-navy">{c}</h3>
                <p className="text-sm text-slate-600">{d}</p>
              </div>
            ))}
          </div>
        </section>
        <section>
          <h2 className="font-serif text-2xl font-bold text-navy">Document Checklist</h2>
          <ul className="mt-4 space-y-2 text-slate-700">
            {docs.map((d) => <li key={d}>✓ {d}</li>)}
          </ul>
        </section>
        <div className="rounded-2xl bg-ivory p-8 text-center">
          <h2 className="font-serif text-2xl font-bold text-navy">Not sure where to start?</h2>
          <p className="mt-2 text-slate-600">Talk to our UK counsellors — it is free.</p>
          <CtaButton source="study-in-uk" className="mt-5 rounded-lg bg-crimson px-6 py-3 font-semibold text-white hover:bg-crimson-dark" />
        </div>
      </div>
    </>
  );
}
