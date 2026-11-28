import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8">
      <p className="text-xs font-bold uppercase tracking-widest text-crimson">404 • Page Not Found</p>
      <h1 className="mt-2 font-serif text-3xl font-bold text-navy sm:text-4xl">We Couldn&apos;t Find That Page</h1>
      <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
        The link may have moved or been mistyped. Explore our UK university directory, 60-second eligibility checker, or latest 2027 UK study guides below.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="inline-flex min-h-[44px] items-center gap-1.5 rounded-xl bg-crimson px-5 py-2.5 text-sm font-semibold text-white hover:bg-crimson-dark"
        >
          Back to Home <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </Link>
        <Link
          href="/universities/"
          className="inline-flex min-h-[44px] items-center rounded-xl border border-navy px-5 py-2.5 text-sm font-semibold text-navy hover:bg-navy hover:text-white"
        >
          UK Universities
        </Link>
        <Link
          href="/eligibility/"
          className="inline-flex min-h-[44px] items-center rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-semibold text-navy hover:border-navy"
        >
          Check Eligibility
        </Link>
        <Link
          href="/blog/"
          className="inline-flex min-h-[44px] items-center rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-semibold text-navy hover:border-navy"
        >
          UK Study Guides
        </Link>
      </div>
    </section>
  );
}
