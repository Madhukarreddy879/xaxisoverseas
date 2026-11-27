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
    images: [{ url: '/og-card.png', type: 'image/png', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
    <>
      <section className="bg-navy py-10 text-white sm:py-14">
        <div className="mx-auto max-w-5xl px-4">
          <h1 className="font-serif text-3xl font-bold sm:text-4xl">Our UK Services</h1>
          <p className="mt-3 text-white/80">From first counselling session to landing in the UK — one team, one process.</p>
        </div>
      </section>
      <div className="mx-auto max-w-5xl px-4 py-10 sm:py-14">
        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((s, i) => (
            <div key={s.title} className="rounded-xl border border-slate-200 p-6 shadow-sm">
              <span className="text-sm font-bold text-crimson">{String(i + 1).padStart(2, '0')}</span>
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
