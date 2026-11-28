import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import CtaButton from '@/components/CtaButton';
import { processSteps, services } from '@/data/ukData';

export const metadata: Metadata = {
  title: 'UK Study Abroad Services',
  description:
    'End-to-end UK admission services in Ameerpet, Hyderabad: shortlisting, SOP, MOI waiver, Pre-CAS mock prep, scholarships, education loans & UK student visa.',
  openGraph: {
    type: 'website',
    siteName: 'X-Axis Overseas',
    locale: 'en_IN',
    title: 'UK Study Abroad Services',
    description:
      'End-to-end UK admission services in Ameerpet, Hyderabad: shortlisting, SOP, MOI waiver, Pre-CAS mock prep, scholarships, education loans & UK student visa.',
    url: 'https://xaxisoverseas.com/services/',
    images: [{ url: '/og-card.png', type: 'image/png', width: 1200, height: 630 }],
  },
};

const guarantees = [
  '100% UK-focused counsellors — we do not spread thin across 15 countries, so our intake, MOI, and UKVI rules stay sharp.',
  'Free initial profile evaluation, honest backlog/gap review, and balanced ambitious + target + safe university shortlisting.',
  'Dedicated 1-on-1 mock Pre-CAS credibility interviews tailored to your exact course modules, city, and financial sponsor.',
  'Line-by-line audit of your 28-day bank statements, parental consent letters, and unconditional education loan sanctions before VFS Hyderabad filing.',
];

export default function Page() {
  return (
    <>
      <section className="bg-navy py-10 text-white sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-gold">Ameerpet, Hyderabad • UK Specialists</p>
          <h1 className="mt-1.5 font-serif text-3xl font-bold sm:text-4xl">Our UK Study Abroad Services</h1>
          <p className="mt-3 max-w-2xl text-white/80">
            From your first free profile evaluation in Ameerpet to clearing Pre-CAS, VFS Hyderabad biometrics, and settling on your UK campus — one dedicated team handles every milestone.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-14 px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <section>
          <h2 className="font-serif text-2xl font-bold text-navy">End-to-End UK Admissions &amp; Visa Support</h2>
          <p className="mt-2 max-w-3xl text-slate-600">
            Whether you are aiming for a Russell Group September intake, a fast-track{' '}
            <Link href="/blog/uk-march-may-2027-intake-universities/" className="font-semibold text-navy underline decoration-crimson/50 hover:text-crimson">
              March/May 2027 Spring intake
            </Link>
            , or an{' '}
            <Link href="/blog/study-in-uk-without-ielts-jntuh-ou-moi/" className="font-semibold text-navy underline decoration-crimson/50 hover:text-crimson">
              MOI waiver without IELTS
            </Link>
            , we structure each step around current GOV.UK rules.
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {services.map((s, i) => (
              <div key={s.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <span className="text-sm font-bold text-crimson">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-1 text-lg font-bold text-navy">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-ivory p-6 sm:p-8">
          <h2 className="font-serif text-2xl font-bold text-navy">How Our 6-Step Hyderabad-to-UK Process Works</h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-600">
            Every student gets a written timeline covering offer deadlines, 28-day fund maturity dates, CAS release, and VFS Global Hyderabad biometrics so nothing slips at the last minute.
          </p>
          <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, i) => (
              <li key={step.title} className="flex gap-3.5 rounded-xl border border-slate-200 bg-white p-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-crimson text-xs font-bold text-white">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-bold text-navy">{step.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold text-navy">Why Hyderabad &amp; Telangana Students Work With Us</h2>
          <ul className="mt-4 space-y-3 text-slate-700">
            {guarantees.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <CheckCircle2 aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-crimson" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-slate-600">
            Preparing your documents right now? Read our{' '}
            <Link href="/blog/uk-student-visa-28-day-funds-rule-inr/" className="font-semibold text-navy underline hover:text-crimson">
              28-Day UKVI Funds Rule Guide
            </Link>
            ,{' '}
            <Link href="/blog/uk-pre-cas-credibility-interview-questions/" className="font-semibold text-navy underline hover:text-crimson">
              25 Pre-CAS Interview Q&amp;As
            </Link>
            , and{' '}
            <Link href="/blog/uk-visa-vfs-hyderabad-tb-test-checklist/" className="font-semibold text-navy underline hover:text-crimson">
              VFS Hyderabad &amp; TB Test Checklist
            </Link>
            .
          </p>
        </section>

        <div className="rounded-2xl bg-navy p-8 text-center text-white">
          <h2 className="font-serif text-2xl font-bold">Start With a Free Profile Evaluation</h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-white/80">
            Book an online call or walk into our KVR Enclave, Ameerpet office with your transcripts to get a clear UK shortlist and budget plan.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <CtaButton source="services" className="min-h-[48px] rounded-xl bg-crimson px-6 py-3 font-semibold text-white hover:bg-crimson-dark">
              Book Free UK Counselling
            </CtaButton>
            <Link
              href="/eligibility/"
              className="inline-flex min-h-[48px] items-center justify-center rounded-xl border border-white/30 px-6 py-3 font-semibold text-white hover:bg-white/10"
            >
              Take 60-Sec Eligibility Check
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
