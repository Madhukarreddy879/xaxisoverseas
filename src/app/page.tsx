import type { Metadata } from 'next';
import Link from 'next/link';
import { Award, Banknote, BookOpenCheck, Briefcase, CheckCircle2, GraduationCap, MapPin, ShieldCheck } from 'lucide-react';
import LeadCaptureForm from '@/components/LeadCaptureForm';
import UkCostCalculator from '@/components/UkCostCalculator';
import FaqAccordion from '@/components/FaqAccordion';
import CtaButton from '@/components/CtaButton';
import MapEmbed from '@/components/MapEmbed';
import { courseStreams, faqs, intakes, processSteps, trustHighlights, universities } from '@/data/ukData';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  openGraph: {
    type: 'website',
    siteName: 'X-Axis Overseas',
    locale: 'en_IN',
    title: 'X-Axis Overseas — Study in UK Consultants in Hyderabad',
    description: 'UK admissions, scholarships and student visa guidance from Ameerpet, Hyderabad.',
    url: 'https://xaxisoverseas.com/',
    images: [{ url: '/og-card.png', type: 'image/png', width: 1200, height: 630 }],
  },
};

const why = [
  { icon: GraduationCap, title: '1-Year Master\'s', text: 'Most UK master\'s degrees take just one year — save time and money.' },
  { icon: Briefcase, title: 'Graduate Route Visa', text: 'Eligible graduates can usually stay and work for 2 years after study.' },
  { icon: BookOpenCheck, title: 'MOI / Without IELTS', text: 'Many universities accept MOI or your English marks instead of IELTS.' },
  { icon: ShieldCheck, title: 'Strong Visa Process', text: 'A transparent, document-based student visa system with clear rules.' },
  { icon: Banknote, title: 'Part-time Work Rights', text: 'Work up to 20 hours a week during term time on degree courses.' },
  { icon: Award, title: 'Globally Ranked', text: 'Home to world-renowned universities and internationally valued degrees.' },
];

const stats = [
  ['24+', 'UK universities'],
  ['3', 'Intakes a year'],
  ['Up to £10K', 'Scholarships'],
  ['100%', 'Free counselling'],
];

export default function Home() {
  const featured = universities.slice(0, 6);
  return (
    <>
      <section className="grid-pattern bg-navy text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-9 sm:py-16 lg:grid-cols-5 lg:gap-10 lg:py-20">
          <div className="lg:col-span-3">
            <p className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold tracking-wider text-gold sm:text-xs">
              UK SPECIALISTS • AMEERPET, HYDERABAD
            </p>
            <h1 className="font-serif text-[clamp(1.95rem,1.35rem+3vw,3.25rem)] font-bold leading-[1.15]">
              Your Pathway to a <span className="whitespace-nowrap text-gold">UK Degree</span> Starts Here
            </h1>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-white/80 sm:mt-5 sm:text-lg">
              X-Axis Overseas guides Hyderabad students through UK university admissions, scholarships, MOI / without-IELTS options and student visas — end to end.
            </p>
            <div className="mt-6 flex flex-col gap-2.5 sm:mt-7 sm:flex-row sm:flex-wrap sm:gap-3">
              <CtaButton
                source="hero"
                className="min-h-[48px] w-full rounded-xl bg-crimson px-6 py-3 font-semibold text-white shadow-lg shadow-crimson/25 transition hover:bg-crimson-dark sm:w-auto"
              >
                Book Free Counselling
              </CtaButton>
              <Link
                href="/eligibility/"
                className="inline-flex min-h-[48px] w-full items-center justify-center rounded-xl border border-white/30 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/15 sm:w-auto"
              >
                Check My Eligibility
              </Link>
            </div>
            <dl className="mt-7 grid grid-cols-2 gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 sm:mt-9 sm:grid-cols-4 sm:gap-5 sm:p-5">
              {stats.map(([n, l]) => (
                <div key={l}>
                  <dt className="text-xl font-extrabold text-gold sm:text-2xl">{n}</dt>
                  <dd className="mt-0.5 text-xs text-white/75">{l}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="rounded-2xl bg-white p-5 text-slate-900 shadow-2xl sm:p-6 lg:col-span-2">
            <h2 className="mb-1 text-xl font-bold text-navy">Get a Free Callback</h2>
            <p className="mb-4 text-sm text-slate-600">Tell us a little — a UK counsellor will call you.</p>
            <LeadCaptureForm variant="compact" prefill={{ source: 'hero-form' }} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-center font-serif text-3xl font-bold text-navy">Why Choose the UK?</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {why.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-xl border border-slate-200 p-6 shadow-sm">
              <Icon className="h-8 w-8 text-crimson" />
              <h3 className="mt-3 font-bold text-navy">{title}</h3>
              <p className="mt-1 text-sm text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ivory py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-center font-serif text-3xl font-bold text-navy">UK Intakes</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {intakes.map((i) => (
              <div key={i.name} className="rounded-xl bg-white p-6 shadow-sm">
                <span className="text-xs font-bold uppercase tracking-wide text-crimson">{i.tag}</span>
                <h3 className="text-2xl font-bold text-navy">{i.name}</h3>
                <p className="text-sm font-semibold text-amber-800">{i.deadline}</p>
                <p className="mt-2 text-sm text-slate-600">{i.detail}</p>
                <ul className="mt-3 space-y-1 text-sm text-slate-700">
                  {i.pros.map((p) => <li key={p}>✓ {p}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="flex items-end justify-between">
          <h2 className="font-serif text-3xl font-bold text-navy">Featured UK Universities</h2>
          <Link href="/universities/" className="text-sm font-semibold text-crimson hover:underline">View all →</Link>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((u) => (
            <div key={u.name} className="rounded-xl border border-slate-200 p-5">
              <h3 className="font-bold text-navy">{u.name}</h3>
              <p className="text-sm text-slate-500">{u.city} • {u.tier}</p>
              <p className="mt-2 text-sm text-slate-600">{u.courses.join(' • ')}</p>
              <CtaButton
                source="featured-university"
                prefill={{ university: u.name }}
                className="mt-3 text-sm font-semibold text-crimson hover:underline"
              >
                Check Eligibility →
              </CtaButton>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ivory py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-center font-serif text-3xl font-bold text-navy">Popular UK Courses</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {courseStreams.map((c) => (
              <div key={c.title} className="rounded-xl bg-white p-5 shadow-sm">
                <h3 className="font-bold text-navy">{c.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{c.blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16">
        <h2 className="text-center font-serif text-3xl font-bold text-navy">Your Hyderabad-to-UK Roadmap</h2>
        <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((s, i) => (
            <li key={s.title} className="flex gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-crimson font-bold text-white">{i + 1}</span>
              <div>
                <h3 className="font-bold text-navy">{s.title}</h3>
                <p className="text-sm text-slate-600">{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-navy/5 py-16">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="mb-8 text-center font-serif text-3xl font-bold text-navy">UK Study Cost Estimator</h2>
          <UkCostCalculator />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-center font-serif text-3xl font-bold text-navy">Why Students Choose X-Axis</h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-slate-600">
          Dedicated exclusively to UK admissions so every student from Hyderabad &amp; Telangana gets accurate, honest advice.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustHighlights.map((item) => (
            <div key={item.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <CheckCircle2 aria-hidden="true" className="h-6 w-6 text-crimson" />
              <h3 className="mt-3 font-bold text-navy">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ivory py-16">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="mb-8 text-center font-serif text-3xl font-bold text-navy">UK Study &amp; Visa FAQs</h2>
          <FaqAccordion items={faqs.slice(0, 8)} />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-16 lg:grid-cols-2">
        <div>
          <h2 className="font-serif text-3xl font-bold text-navy">Walk In to Our Ameerpet Office</h2>
          <p className="mt-4 flex gap-2 text-slate-700"><MapPin className="mt-1 h-5 w-5 shrink-0 text-crimson" /> {siteConfig.address.full}</p>
          <p className="mt-2 text-sm text-slate-500">{siteConfig.address.landmarkNote}</p>
          <p className="mt-2 text-sm text-slate-500">{siteConfig.officeHours}</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <CtaButton source="office" className="min-h-[48px] w-full rounded-lg bg-crimson px-6 py-3 font-semibold text-white hover:bg-crimson-dark sm:w-auto">
              Book a Visit
            </CtaButton>
            <a href={siteConfig.googleMapsDirectionsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[48px] w-full items-center justify-center rounded-lg border border-navy px-6 py-3 font-semibold text-navy hover:bg-navy hover:text-white sm:w-auto">
              Get Directions
            </a>
          </div>
        </div>
        <MapEmbed />
      </section>
    </>
  );
}
