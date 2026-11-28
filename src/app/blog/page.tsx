import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { blogPosts } from '@/data/blogPosts';
import CtaButton from '@/components/CtaButton';

export const metadata: Metadata = {
  title: 'UK Study Abroad Blog & Visa Guides',
  description:
    'Up-to-date UK study abroad guides from X-Axis Overseas Hyderabad: March/May 2027 intakes, MOI waivers, new UKVI funds, Pre-CAS Q&As, backlogs, scholarships & PSW.',
  openGraph: {
    type: 'website',
    siteName: 'X-Axis Overseas',
    locale: 'en_IN',
    title: 'UK Study Abroad Blog & Visa Guides',
    description:
      'Up-to-date UK study abroad guides from X-Axis Overseas Hyderabad: March/May 2027 intakes, MOI waivers, new UKVI funds, Pre-CAS Q&As, backlogs, scholarships & PSW.',
    url: 'https://xaxisoverseas.com/blog/',
    images: [{ url: '/og-card.png', type: 'image/png', width: 1200, height: 630 }],
  },
};

export default function BlogIndexPage() {
  return (
    <>
      <section className="bg-navy py-10 text-white sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-gold">UK Study Insights • Updated Nov 2026</p>
          <h1 className="mt-1.5 font-serif text-3xl font-bold sm:text-4xl">UK Study Abroad Blog &amp; Visa Guides</h1>
          <p className="mt-3 max-w-2xl text-white/80">
            Practical, up-to-date guides on UK Spring 2027 intakes, MOI waivers, new UKVI financial rules, and VFS Hyderabad visa steps.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-slate-300 hover:shadow-md"
            >
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="rounded-full bg-crimson-light px-2.5 py-0.5 font-bold text-crimson">{post.category}</span>
                <span className="rounded-full bg-gold-light px-2.5 py-0.5 font-semibold text-amber-800">{post.intakeTag}</span>
                <span className="ml-auto inline-flex items-center gap-1 text-slate-500">
                  <Clock aria-hidden="true" className="h-3.5 w-3.5" /> {post.readTime}
                </span>
              </div>
              <h2 className="mt-3 font-serif text-xl font-bold leading-snug text-navy">
                <Link href={`/blog/${post.slug}/`} className="hover:text-crimson">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{post.description}</p>
              <div className="mt-auto flex items-center justify-between pt-5 text-sm">
                <span className="inline-flex items-center gap-1.5 text-xs text-slate-500">
                  <Calendar aria-hidden="true" className="h-3.5 w-3.5" /> Updated {post.updatedAt}
                </span>
                <Link
                  href={`/blog/${post.slug}/`}
                  className="inline-flex items-center gap-1 font-semibold text-crimson hover:underline"
                >
                  Read guide <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-navy p-6 text-center text-white sm:p-10">
          <h2 className="font-serif text-2xl font-bold sm:text-3xl">Want a Personalised UK University Shortlist?</h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-white/80 sm:text-base">
            Book a free 1-on-1 counselling session online or walk in to our Ameerpet, Hyderabad office.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <CtaButton source="blog-index" className="min-h-[48px] rounded-xl bg-crimson px-6 py-3 font-semibold text-white hover:bg-crimson-dark">
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
