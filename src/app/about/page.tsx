import type { Metadata } from 'next';
import CtaButton from '@/components/CtaButton';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'About Us — UK Study Consultants in Hyderabad',
  description:
    'X-Axis Overseas is a UK-first study abroad consultancy in Ameerpet, Hyderabad offering transparent, ethical counselling.',
  openGraph: {
    type: 'website',
    siteName: 'X-Axis Overseas',
    locale: 'en_IN',
    title: 'About Us — UK Study Consultants in Hyderabad',
    description:
      'X-Axis Overseas is a UK-first study abroad consultancy in Ameerpet, Hyderabad offering transparent, ethical counselling.',
    url: 'https://xaxisoverseas.com/about/',
    images: [{ url: '/og-card.png', type: 'image/png', width: 1200, height: 630 }],
  },
};

const pillars = [
  ['Transparent process', 'Clear costs, clear timelines and no hidden surprises.'],
  ['Ethical counselling', 'We advise what is right for your profile and budget, not what is easiest.'],
  ['Pre-CAS mock training', 'Practice interviews so you feel confident when the university calls.'],
  ['End-to-end support', 'From your first visit in Ameerpet to settling on a UK campus.'],
];

export default function Page() {
  return (
    <>
      <section className="bg-navy py-10 text-white sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-3xl font-bold sm:text-4xl">About X-Axis Overseas</h1>
          <p className="mt-3 max-w-2xl text-white/80">A UK-first consultancy built for students from Hyderabad and the Telugu states.</p>
        </div>
      </section>
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <p className="text-lg leading-relaxed text-slate-700">
          X-Axis is an overseas education consultancy based in Ameerpet, Hyderabad. We focus on one destination — the United Kingdom — so our counsellors know the universities, intakes, scholarships and UKVI rules in depth. Our goal is simple: help every student make a well-informed choice and reach the UK with confidence.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {pillars.map(([t, d]) => (
            <div key={t} className="rounded-xl border border-slate-200 p-6">
              <h2 className="font-bold text-navy">{t}</h2>
              <p className="mt-1 text-sm text-slate-600">{d}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 rounded-xl bg-ivory p-6">
          <h2 className="font-bold text-navy">Easy to find</h2>
          <p className="mt-2 text-slate-700">{siteConfig.address.full}. {siteConfig.address.landmarkNote}.</p>
        </div>
        <div className="mt-10 text-center"><CtaButton source="about" /></div>
      </div>
    </>
  );
}
