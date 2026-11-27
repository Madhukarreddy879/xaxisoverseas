import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Award,
  Banknote,
  BookOpenCheck,
  Briefcase,
  Calculator,
  Check,
  Clock,
  Compass,
  GraduationCap,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
} from 'lucide-react';
import LeadCaptureForm from '@/components/LeadCaptureForm';
import UkCostCalculator from '@/components/UkCostCalculator';
import FaqAccordion from '@/components/FaqAccordion';
import CtaButton from '@/components/CtaButton';
import MapEmbed from '@/components/MapEmbed';
import { courseStreams, faqs, intakes, processSteps, trustHighlights, universities } from '@/data/ukData';
import { buildWhatsAppUrl, siteConfig } from '@/config/site';

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
  { icon: GraduationCap, title: "1-Year Master's", text: "Most UK master's degrees finish in 12 months — saving a full year of tuition and living costs." },
  { icon: Briefcase, title: 'Graduate Route Visa', text: 'Work in the UK after study: 18 months for Bachelor’s/Master’s from Jan 2027 (3 years for PhD).' },
  { icon: BookOpenCheck, title: 'MOI / Without IELTS', text: 'Many UK universities accept Medium of Instruction (MOI) or 12th English marks in place of IELTS.' },
  { icon: ShieldCheck, title: 'Clear Visa Rules', text: 'Transparent points-based student visa process with clear 28-day financial documentation.' },
  { icon: Banknote, title: 'Part-Time Work Rights', text: 'Work up to 20 hours per week during term time and full-time during official vacations.' },
  { icon: Award, title: 'Globally Ranked Degrees', text: 'Home to Russell Group universities and degrees recognised by employers worldwide.' },
];

const stats = [
  ['24+', 'UK Universities'],
  ['3', 'Yearly Intakes'],
  ['Up to £10K', 'Scholarships'],
  ['100%', 'Free Counselling'],
];

const trustIcons = {
  compass: Compass,
  calculator: Calculator,
  shield: ShieldCheck,
  map: MapPin,
} as const;

const container = 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8';

export default function Home() {
  const featured = universities.slice(0, 6);
  return (
    <>
      <section className="grid-pattern bg-navy text-white">
        <div className={`${container} grid items-center gap-8 py-9 sm:py-14 lg:grid-cols-12 lg:gap-12 lg:py-16`}>
          <div className="lg:col-span-7">
            <p className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold tracking-wider text-gold sm:text-xs">
              UK SPECIALISTS • AMEERPET, HYDERABAD
            </p>
            <h1 className="font-serif text-[clamp(1.95rem,1.35rem+2.8vw,3.35rem)] font-bold leading-[1.12]">
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
            <dl className="mt-7 grid grid-cols-2 gap-y-4 rounded-2xl border border-white/10 bg-white/[0.05] p-4 sm:mt-9 sm:grid-cols-4 sm:divide-x sm:divide-white/10 sm:p-5">
              {stats.map(([n, l], idx) => (
                <div key={l} className={idx > 0 ? 'sm:pl-5' : ''}>
                  <dt className="text-xl font-extrabold text-gold sm:text-2xl">{n}</dt>
                  <dd className="mt-0.5 text-xs text-white/75">{l}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="overflow-hidden rounded-2xl bg-white text-slate-900 shadow-2xl lg:col-span-5">
            <div className="h-1.5 bg-gradient-to-r from-crimson via-crimson to-gold" />
            <div className="p-5 sm:p-6">
              <h2 className="mb-1 text-xl font-bold text-navy">Get a Free Callback</h2>
              <p className="mb-4 text-sm text-slate-600">Share 3 quick details — a UK counsellor will call you.</p>
              <LeadCaptureForm variant="compact" prefill={{ source: 'hero-form' }} />
            </div>
          </div>
        </div>
      </section>

      <section className={`${container} py-10 md:py-16`}>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-crimson">Why the United Kingdom</p>
          <h2 className="mt-1.5 font-serif text-2xl font-bold text-navy sm:text-3xl">Why Choose the UK?</h2>
          <p className="mt-2 text-sm text-slate-600 sm:text-base">
            Faster degrees, strong post-study work rights and flexible entry routes for Indian graduates.
          </p>
        </div>
        <div className="mt-7 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {why.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-slate-300 hover:shadow-md sm:p-6">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-crimson/10 text-crimson">
                <Icon aria-hidden="true" className="h-5 w-5" />
              </div>
              <h3 className="mt-3.5 text-base font-bold text-navy">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ivory py-10 md:py-16">
        <div className={container}>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-crimson">Admission Calendar</p>
            <h2 className="mt-1.5 font-serif text-2xl font-bold text-navy sm:text-3xl">UK Intakes</h2>
            <p className="mt-2 text-sm text-slate-600 sm:text-base">
              Pick the intake that matches your graduation timeline and scholarship goals.
            </p>
          </div>
          <div className="mt-7 grid gap-5 sm:mt-10 md:grid-cols-3 md:gap-6">
            {intakes.map((i) => (
              <div
                key={i.name}
                className={`flex flex-col rounded-2xl bg-white p-5 shadow-sm sm:p-6 ${
                  i.featured ? 'border-2 border-crimson/80 shadow-md' : 'border border-slate-200'
                }`}
              >
                <span
                  className={`inline-block w-fit rounded-full px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide ${
                    i.featured ? 'bg-crimson text-white' : 'bg-crimson-light text-crimson'
                  }`}
                >
                  {i.tag}
                </span>
                <h3 className="mt-3 text-2xl font-bold text-navy">{i.name}</h3>
                <p className="text-sm font-semibold text-amber-800">{i.deadline}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{i.detail}</p>
                <ul className="mt-auto space-y-2 pt-4 text-sm text-slate-700">
                  {i.pros.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${container} py-10 md:py-16`}>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-crimson">Top Destinations</p>
            <h2 className="mt-1 font-serif text-2xl font-bold text-navy sm:text-3xl">Featured UK Universities</h2>
            <p className="mt-1.5 text-sm text-slate-600">Russell Group and career-focused campuses popular with Hyderabad students.</p>
          </div>
          <Link href="/universities/" className="inline-flex items-center gap-1 text-sm font-semibold text-crimson hover:underline">
            Explore all 24 universities <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-7 grid gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {featured.map((u) => (
            <article key={u.name} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-slate-300 hover:shadow-md">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-bold text-navy">{u.name}</h3>
                <span className="shrink-0 rounded-md bg-gold-light px-2 py-0.5 text-[11px] font-semibold text-amber-800">
                  {u.tier}
                </span>
              </div>
              <p className="mt-0.5 text-sm text-slate-500">{u.city}</p>
              <div className="mt-3 flex flex-wrap gap-1.5 text-xs">
                {u.intakes.map((intake) => (
                  <span key={intake} className="rounded-md bg-navy/5 px-2 py-0.5 font-medium text-navy">
                    {intake}
                  </span>
                ))}
                <span className="rounded-md bg-slate-100 px-2 py-0.5 font-medium text-slate-700">{u.tuition}</span>
              </div>
              <p className="mt-3 text-sm text-slate-600">{u.courses.join(' • ')}</p>
              <div className="mt-auto pt-4">
                <CtaButton
                  source="featured-university"
                  prefill={{ university: u.name }}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-crimson hover:underline"
                >
                  Check Eligibility <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
                </CtaButton>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-ivory py-10 md:py-16">
        <div className={container}>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-crimson">High-Demand Streams</p>
            <h2 className="mt-1.5 font-serif text-2xl font-bold text-navy sm:text-3xl">Popular UK Courses</h2>
            <p className="mt-2 text-sm text-slate-600 sm:text-base">
              Tap any stream to see matching UK universities and intakes.
            </p>
          </div>
          <div className="mt-7 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-5 lg:grid-cols-4">
            {courseStreams.map((c) => (
              <Link
                key={c.title}
                href={`/universities/?q=${encodeURIComponent(c.query)}`}
                className="group flex flex-col rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm transition hover:border-crimson/40 hover:shadow-md sm:p-5"
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-sm font-bold text-navy group-hover:text-crimson sm:text-base">{c.title}</h3>
                  <ArrowRight
                    aria-hidden="true"
                    className="mt-0.5 h-4 w-4 shrink-0 text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-crimson"
                  />
                </div>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-600 sm:text-sm">{c.blurb}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={`${container} py-10 md:py-16`}>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-crimson">Step-By-Step Support</p>
          <h2 className="mt-1.5 font-serif text-2xl font-bold text-navy sm:text-3xl">Your Hyderabad-to-UK Roadmap</h2>
          <p className="mt-2 text-sm text-slate-600 sm:text-base">
            One dedicated team guiding you from your first Ameerpet visit to campus arrival.
          </p>
        </div>
        <ol className="mt-8 grid gap-5 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {processSteps.map((s, i) => (
            <li key={s.title} className="flex gap-4 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-crimson text-sm font-bold text-white shadow-sm">
                {i + 1}
              </span>
              <div>
                <h3 className="font-bold text-navy">{s.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-8 text-center">
          <CtaButton source="roadmap" className="min-h-[48px] rounded-xl bg-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-navy-light">
            Start Step 1: Book Free Counselling
          </CtaButton>
        </div>
      </section>

      <section id="cost-estimator" className="bg-slate-100/80 py-10 md:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-7 max-w-2xl text-center sm:mb-9">
            <p className="text-xs font-bold uppercase tracking-widest text-crimson">Budget Planning</p>
            <h2 className="mt-1.5 font-serif text-2xl font-bold text-navy sm:text-3xl">UK Study Cost Estimator</h2>
            <p className="mt-2 text-sm text-slate-600 sm:text-base">
              Estimate your first-year tuition, UKVI maintenance funds and potential scholarship in GBP &amp; INR.
            </p>
          </div>
          <UkCostCalculator />
        </div>
      </section>

      <section className="bg-navy py-12 text-white md:py-16">
        <div className={container}>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-gold">The X-Axis Difference</p>
            <h2 className="mt-1.5 font-serif text-2xl font-bold sm:text-3xl">Why Students Choose X-Axis</h2>
            <p className="mt-2 text-sm text-white/75 sm:text-base">
              Dedicated exclusively to UK admissions so students across Hyderabad &amp; Telangana get honest advice.
            </p>
          </div>
          <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {trustHighlights.map((item) => {
              const Icon = trustIcons[item.icon as keyof typeof trustIcons];
              return (
                <div key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.05] p-5 sm:p-6">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gold/15 text-gold">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </div>
                  <h3 className="mt-3.5 text-base font-bold text-white">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/75">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-ivory py-10 md:py-16">
        <div className={`${container} grid gap-8 lg:grid-cols-12 lg:items-start lg:gap-10`}>
          <div className="lg:sticky lg:top-24 lg:col-span-4">
            <p className="text-xs font-bold uppercase tracking-widest text-crimson">Common Questions</p>
            <h2 className="mt-1.5 font-serif text-2xl font-bold text-navy sm:text-3xl">UK Study &amp; Visa FAQs</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Clear answers on MOI waivers, the 28-day UKVI fund rule, Graduate Route PSW, backlogs and part-time work.
            </p>
            <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="font-bold text-navy">Still have a question?</p>
              <p className="mt-1 text-sm text-slate-600">Ask our Ameerpet UK counsellors directly on WhatsApp.</p>
              <a
                href={buildWhatsAppUrl('Hi X-Axis, I have a question about studying in the UK.')}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-xl bg-green-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-green-700"
              >
                <MessageCircle aria-hidden="true" className="h-4 w-4" /> Chat on WhatsApp
              </a>
            </div>
          </div>
          <div className="lg:col-span-8">
            <FaqAccordion items={faqs.slice(0, 8)} />
          </div>
        </div>
      </section>

      <section className={`${container} grid items-center gap-8 py-10 md:py-16 lg:grid-cols-2 lg:gap-12`}>
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-crimson">Hyderabad Head Office</p>
          <h2 className="mt-1.5 font-serif text-2xl font-bold text-navy sm:text-3xl">Walk In to Our Ameerpet Office</h2>
          <ul className="mt-5 space-y-3 text-sm text-slate-700">
            <li className="flex gap-2.5">
              <MapPin aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-crimson" />
              <span>
                {siteConfig.address.full}
                <span className="mt-0.5 block text-slate-500">2 mins walk from Ameerpet Metro Station.</span>
              </span>
            </li>
            <li className="flex items-center gap-2.5">
              <Clock aria-hidden="true" className="h-5 w-5 shrink-0 text-crimson" />
              <span>{siteConfig.officeHours}</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone aria-hidden="true" className="h-5 w-5 shrink-0 text-crimson" />
              <a href={`tel:${siteConfig.phoneRaw}`} className="font-semibold text-navy hover:text-crimson">
                {siteConfig.phoneDisplay}
              </a>
            </li>
          </ul>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
            <CtaButton source="office" className="min-h-[48px] rounded-xl bg-crimson px-5 py-3 text-sm font-semibold text-white transition hover:bg-crimson-dark sm:px-6 sm:text-base">
              Book a Visit
            </CtaButton>
            <a
              href={siteConfig.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] items-center justify-center rounded-xl border border-navy px-5 py-3 text-sm font-semibold text-navy transition hover:bg-navy hover:text-white sm:px-6 sm:text-base"
            >
              Get Directions
            </a>
          </div>
        </div>
        <MapEmbed />
      </section>
    </>
  );
}
