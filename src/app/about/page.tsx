import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import CtaButton from '@/components/CtaButton';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'About Us — UK Study Consultants in Hyderabad',
  description:
    'X-Axis Overseas is a UK-only study abroad consultancy in Ameerpet, Hyderabad offering transparent university admissions, MOI checks, Pre-CAS prep & visa support.',
  openGraph: {
    type: 'website',
    siteName: 'X-Axis Overseas',
    locale: 'en_IN',
    title: 'About Us — UK Study Consultants in Hyderabad',
    description:
      'X-Axis Overseas is a UK-only study abroad consultancy in Ameerpet, Hyderabad offering transparent university admissions, MOI checks, Pre-CAS prep & visa support.',
    url: 'https://xaxisoverseas.com/about/',
    images: [{ url: '/og-card.png', type: 'image/png', width: 1200, height: 630 }],
  },
};

const pillars = [
  ['Transparent Costs & Timelines', 'We share full GBP-to-INR budgets upfront—tuition, scholarships, £558 visa fee, £776/yr IHS, and updated 30 Nov 2026 UKVI living funds—with zero hidden surprises.'],
  ['Ethical, Profile-First Counselling', 'We recommend universities that genuinely match your academic percentage, backlogs, study gap, and career ROI rather than pushing whatever pays the highest commission.'],
  ['Dedicated Pre-CAS Mock Training', 'Every student practices realistic 1-on-1 credibility interviews covering their exact UK course modules, campus city, sponsor income, and post-study career goals.'],
  ['Complete Hyderabad-to-UK Support', 'From verifying JNTUH/Osmania MOI letters and 28-day bank statements in Ameerpet to VFS Hyderabad biometrics, TB clinic booking, and pre-departure briefing.'],
];

const studentGroups = [
  'B.Tech, B.Sc, B.Com, BBA, and MBA graduates from JNTUH, Osmania University, Kakatiya University, JNTUK, JNTUA, Andhra University, and autonomous colleges across Telangana & Andhra Pradesh.',
  'Working IT, engineering, finance, and healthcare professionals with 2–5+ year study gaps who need honest CV/SOP framing and verifiable gap documentation.',
  'Students with cleared backlogs looking for realistic UK university shortlists that convert cleanly into unconditional offers and CAS letters.',
  'Budget-conscious families comparing outside-London affordable UK campuses, £2,000–£5,000 merit bursaries, and SBI/NBFC education loans.',
];

export default function Page() {
  return (
    <>
      <section className="bg-navy py-10 text-white sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-gold">KVR Enclave • Ameerpet, Hyderabad</p>
          <h1 className="mt-1.5 font-serif text-3xl font-bold sm:text-4xl">About X-Axis Overseas</h1>
          <p className="mt-3 max-w-2xl text-white/80">
            A UK-first overseas education consultancy built for students and families from Hyderabad, Telangana, and Andhra Pradesh.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-12 px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <section className="max-w-4xl space-y-4 text-base leading-relaxed text-slate-700">
          <h2 className="font-serif text-2xl font-bold text-navy">Why We Focus Exclusively on the United Kingdom</h2>
          <p>
            X-Axis Overseas is an Ameerpet, Hyderabad study-abroad consultancy focused on one destination: the United Kingdom. UK university entry requirements, Medium of Instruction (MOI) partner lists, Pre-CAS credibility standards, and GOV.UK Student Route rules change multiple times a year. By concentrating exclusively on UK higher education, our counsellors stay current on every policy shift—including the 30 November 2026 UKVI maintenance fund update and the 1 January 2027 18-month Graduate Route rule.
          </p>
          <p>
            Our promise to every student and parent who walks through our doors is simple: honest profile advice, zero fake gap documents, clear GBP/INR financial planning, and hands-on support through{' '}
            <Link href="/services/" className="font-semibold text-navy underline decoration-crimson/50 hover:text-crimson">
              every stage of admissions and UK visa filing
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold text-navy">Our 4 Counselling Principles</h2>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            {pillars.map(([t, d]) => (
              <div key={t} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-navy">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{d}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold text-navy">Who We Help Across Hyderabad &amp; the Telugu States</h2>
          <ul className="mt-4 space-y-3 text-slate-700">
            {studentGroups.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <CheckCircle2 aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-crimson" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-slate-600">
            Explore our{' '}
            <Link href="/universities/" className="font-semibold text-navy underline hover:text-crimson">
              24 UK Partner Universities
            </Link>{' '}
            or read our latest{' '}
            <Link href="/blog/" className="font-semibold text-navy underline hover:text-crimson">
              UK Study &amp; Visa Guides
            </Link>{' '}
            before your counselling session.
          </p>
        </section>

        <section className="rounded-2xl bg-ivory p-6 sm:p-8">
          <h2 className="font-serif text-2xl font-bold text-navy">Visit Our Ameerpet Office</h2>
          <p className="mt-2 text-slate-700">
            <strong>Address:</strong> {siteConfig.address.full}. {siteConfig.address.landmarkNote}.
          </p>
          <p className="mt-1.5 text-sm text-slate-600">
            <strong>Office Hours:</strong> {siteConfig.officeHours} • <strong>Phone / WhatsApp:</strong> {siteConfig.phoneDisplay}
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <CtaButton source="about" className="min-h-[48px] rounded-xl bg-crimson px-6 py-3 font-semibold text-white hover:bg-crimson-dark">
              Book Free Counselling
            </CtaButton>
            <Link
              href="/contact/"
              className="inline-flex min-h-[48px] items-center justify-center rounded-xl border border-navy px-6 py-3 font-semibold text-navy hover:bg-navy hover:text-white"
            >
              Get Directions &amp; Map
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
