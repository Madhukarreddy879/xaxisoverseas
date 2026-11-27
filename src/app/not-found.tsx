import Link from 'next/link';
import CtaButton from '@/components/CtaButton';

export default function NotFound() {
  return (
    <section className="mx-auto max-w-xl px-4 py-24 text-center">
      <h1 className="font-serif text-5xl font-bold text-navy">404</h1>
      <p className="mt-3 text-slate-600">This page could not be found.</p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Link href="/" className="rounded-lg border border-navy px-5 py-2.5 font-semibold text-navy">Home</Link>
        <Link href="/universities/" className="rounded-lg border border-navy px-5 py-2.5 font-semibold text-navy">UK Universities</Link>
        <CtaButton source="404">Free Counselling</CtaButton>
      </div>
    </section>
  );
}
