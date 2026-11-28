import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import CtaButton from '@/components/CtaButton';
import { blogPosts } from '@/data/blogPosts';

export const metadata: Metadata = {
  title: 'Study in the UK Guide for Indian Students',
  description:
    'Complete 2027 UK study guide for Indian students: 1-year master’s, MOI without IELTS, £1,570/£1,203 UKVI funds, £558 visa fee, 18-month PSW & cities.',
  openGraph: {
    type: 'website',
    siteName: 'X-Axis Overseas',
    locale: 'en_IN',
    title: 'Study in the UK Guide for Indian Students',
    description:
      'Complete 2027 UK study guide for Indian students: 1-year master’s, MOI without IELTS, £1,570/£1,203 UKVI funds, £558 visa fee, 18-month PSW & cities.',
    url: 'https://xaxisoverseas.com/study-in-uk/',
    images: [{ url: '/og-card.png', type: 'image/png', width: 1200, height: 630 }],
  },
};

const docs = [
  'Valid original passport (plus old passports if any) and digital photographs',
  'Academic transcripts and certificates (10th, 12th, semester marksheets & degree/provisional certificate)',
  'Tailored Statement of Purpose (SOP) and 1–2 academic or employer Letters of Recommendation (LORs)',
  'Updated CV / resume accounting for every month since graduation (no unexplained study gaps)',
  'English proficiency proof: IELTS / PTE scorecard, Class 12 English marks, or official MOI certificate',
  'Work experience letters, payslips, or business proofs (if you have a study gap after graduation)',
  'UKVI financial documents: 28-day bank statements / liquid FD or unconditional education loan sanction letter',
  'CAS statement and TB clearance certificate from a GOV.UK-approved clinic (CMM or GYD in Hyderabad)',
];

const cities = [
  ['London', 'Global finance, consulting, and tech headquarters with the largest graduate employer pool — highest UKVI living requirement (£1,570/month).'],
  ['Manchester', 'Major northern tech, media, and engineering hub with Russell Group excellence and strong Indian student community.'],
  ['Birmingham & Coventry', 'Central UK connectivity, automotive/EV engineering strength, and flexible September, January, and May intakes.'],
  ['Leeds & Sheffield', 'Top Russell Group campuses with significantly lower student housing costs than London.'],
  ['Glasgow & Edinburgh', 'World-ranked Scottish universities strong in computing, finance, renewable energy, and life sciences.'],
  ['Leicester, Middlesbrough & Belfast', 'High-ROI affordable outside-London cities (£1,203/month UKVI rate) with strong MOI-friendly universities.'],
];

export default function Page() {
  return (
    <>
      <section className="bg-navy py-10 text-white sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-gold">Updated for 2027 Intakes</p>
          <h1 className="mt-1.5 font-serif text-3xl font-bold sm:text-4xl">Study in the UK — Complete 2027 Guide</h1>
          <p className="mt-3 max-w-2xl text-white/80">
            Everything Indian and Hyderabad students need to know before applying to UK universities — degrees, MOI waivers, updated UKVI funds, visa fees, cities, and the 2027 Graduate Route.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-12 px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <section>
          <h2 className="font-serif text-2xl font-bold text-navy">1-Year vs 2-Year (Placement) Master&apos;s</h2>
          <p className="mt-3 leading-relaxed text-slate-700">
            A standard UK Master&apos;s degree takes just 12 months (180 credits), saving a full year of tuition and living expenses compared with 2-year degrees in the USA, Canada, or Australia. Many career-focused UK universities also offer a 2-year version with an optional industry placement year, letting fresh graduates gain full-time UK workplace experience before starting their post-study work visa. Compare costs and upfront IHS fees in our{' '}
            <Link href="/blog/uk-1-year-masters-vs-placement-year-psw/" className="font-semibold text-navy underline decoration-crimson/50 hover:text-crimson">
              1-Year Master&apos;s vs 2-Year Placement Year Guide
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold text-navy">Study in the UK Without IELTS (MOI &amp; Class 12 Waivers)</h2>
          <p className="mt-3 leading-relaxed text-slate-700">
            Several UK Student Sponsor universities waive IELTS if you graduated recently in English from a recognised Indian university (such as JNTUH, Osmania University, Kakatiya University, or NAAC-accredited autonomous colleges) with a Medium of Instruction (MOI) letter, or scored 70%+ in Class 12 English (CBSE, ISC, or Telangana/AP Intermediate). Acceptance varies by university and course, and nearly every MOI-friendly campus conducts a Pre-CAS credibility interview. Read our full{' '}
            <Link href="/blog/study-in-uk-without-ielts-jntuh-ou-moi/" className="font-semibold text-navy underline decoration-crimson/50 hover:text-crimson">
              JNTUH &amp; Osmania MOI Waiver Guide
            </Link>{' '}
            and{' '}
            <Link href="/blog/uk-pre-cas-credibility-interview-questions/" className="font-semibold text-navy underline decoration-crimson/50 hover:text-crimson">
              25 UK Pre-CAS Interview Q&amp;As
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold text-navy">UKVI Financial Rules, Visa Fee &amp; IHS (Nov 2026 Update)</h2>
          <p className="mt-3 leading-relaxed text-slate-700">
            For all UK Student Visa applications submitted on or after 30 November 2026, you must show your remaining first-year tuition fee (minus any deposit/scholarship shown on your CAS) plus 9 months of official GOV.UK living funds: <strong>£1,570/month in London (£14,130 total)</strong> and <strong>£1,203/month outside London (£10,827 total)</strong>. Personal or parental savings must be held for 28 consecutive calendar days ending within 31 days of online visa filing; unconditional education loan sanction letters from RBI-regulated banks/NBFCs do not need 28-day maturity.
          </p>
          <p className="mt-3 leading-relaxed text-slate-700">
            At online filing, budget for the <strong>£558 Student Visa application fee</strong> plus the <strong>£776/year Immigration Health Surcharge (IHS)</strong> (£1,164 for a standard 1-year Master&apos;s covering ~16 months, or £1,940 for a 2-year placement course). Explore exact INR calculations in our{' '}
            <Link href="/blog/uk-student-visa-28-day-funds-rule-inr/" className="font-semibold text-navy underline decoration-crimson/50 hover:text-crimson">
              28-Day Bank Funds Rule Guide
            </Link>{' '}
            or run your budget in the{' '}
            <Link href="/#cost-estimator" className="font-semibold text-navy underline decoration-crimson/50 hover:text-crimson">
              UK Study Cost Estimator
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold text-navy">Graduate Route (Post-Study Work) Visa &amp; Part-Time Work</h2>
          <p className="mt-3 leading-relaxed text-slate-700">
            During your degree, full-time Student Route holders can generally work up to 20 hours per week in term time and full-time during official vacations. After completing an eligible UK degree, Bachelor&apos;s and Master&apos;s graduates applying for the Graduate Route on or after 1 January 2027 receive <strong>18 months</strong> to work in the UK without sponsorship (2 years applies only to applications submitted on or before 31 December 2026), while PhD graduates continue to receive <strong>3 years</strong>. Always verify current immigration policies on{' '}
            <a href="https://www.gov.uk/student-visa" target="_blank" rel="noopener noreferrer" className="font-semibold text-navy underline">
              gov.uk/student-visa
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold text-navy">Top UK Student Cities for Indian Graduates</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {cities.map(([c, d]) => (
              <div key={c} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <h3 className="font-bold text-navy">{c}</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">{d}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-bold text-navy">Complete UK Admissions &amp; Visa Document Checklist</h2>
          <ul className="mt-4 space-y-2.5 text-slate-700">
            {docs.map((d) => (
              <li key={d} className="flex items-start gap-2.5">
                <CheckCircle2 aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-crimson" />
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-serif text-2xl font-bold text-navy">In-Depth UK Study &amp; Visa Guides</h2>
              <p className="mt-1 text-sm text-slate-600">Dive deeper into intakes, MOI waivers, backlogs, Pre-CAS Q&amp;As, scholarships, and VFS Hyderabad steps.</p>
            </div>
            <Link href="/blog/" className="inline-flex items-center gap-1 text-sm font-semibold text-crimson hover:underline">
              View all guides <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}/`}
                className="group flex flex-col rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-crimson/40"
              >
                <span className="text-[11px] font-bold uppercase tracking-wide text-crimson">{post.category}</span>
                <h3 className="mt-1 text-sm font-bold leading-snug text-navy group-hover:text-crimson">{post.seoTitle}</h3>
                <span className="mt-auto inline-flex items-center gap-1 pt-3 text-xs font-semibold text-crimson">
                  Read guide <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        <div className="rounded-2xl bg-ivory p-8 text-center">
          <h2 className="font-serif text-2xl font-bold text-navy">Not Sure Which UK University Fits Your Profile?</h2>
          <p className="mx-auto mt-2 max-w-xl text-slate-600">
            Check your options in 60 seconds or talk to our UK counsellors at KVR Enclave, Ameerpet — completely free.
          </p>
          <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row">
            <CtaButton source="study-in-uk" className="min-h-[48px] rounded-xl bg-crimson px-6 py-3 font-semibold text-white hover:bg-crimson-dark">
              Book Free UK Counselling
            </CtaButton>
            <Link
              href="/eligibility/"
              className="inline-flex min-h-[48px] items-center justify-center rounded-xl border border-navy px-6 py-3 font-semibold text-navy hover:bg-navy hover:text-white"
            >
              Check My Eligibility
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
