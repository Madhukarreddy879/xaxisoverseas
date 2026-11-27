import type { Metadata } from 'next';
import CtaButton from '@/components/CtaButton';
import { services } from '@/data/ukData';

export const metadata: Metadata = {
  title: 'UK Study Abroad Services',
  description:
    'End-to-end UK admission services in Hyderabad: shortlisting, SOP, MOI waiver, Pre-CAS prep, scholarships, loans, UKVI funds and visa filing.',
  openGraph: {
    type: 'website',
    siteName: 'X-Axis Overseas',
    locale: 'en_IN',
    title: 'UK Study Abroad Services',
    description:
      'End-to-end UK admission services in Hyderabad: shortlisting, SOP, MOI waiver, Pre-CAS prep, scholarships, loans, UKVI funds and visa filing.',
    url: 'https://xaxisoverseas.com/services/',
    images: [{ url: '/og-card.svg', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
    <>
      <section className="bg-navy py-14 text-white">
        <div className="mx-auto max-w-5xl px-4">
          <h1 className="font-serif text-4xl font-bold">Our UK Services</h1>
          <p className="mt-3 text-white/80">From first counselling session to landing in the UK — one team, one process.</p>
        </div>
      </section>
      <div className="mx-auto max-w-5xl px-4 py-14">
        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((s, i) => (
            <div key={s.title} className="rounded-xl border border-slate-200 p-6 shadow-sm">
              <span className="text-sm font-bold text-crimson">0{i + 1}</span>
              <h2 className="mt-1 text-lg font-bold text-navy">{s.title}</h2>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <CtaButton source="services" />
        </div>
      </div>
    </>
  );
}
