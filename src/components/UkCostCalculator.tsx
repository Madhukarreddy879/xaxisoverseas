'use client';

import { useMemo, useState } from 'react';
import { useCounselling } from './CounsellingContext';

const GBP_INR = 110; // indicative rate

const tuitionBands = {
  modern: { label: 'Affordable modern universities', master: 16500, bachelor: 15500 },
  mid: { label: 'Mid-tier universities', master: 21000, bachelor: 20000 },
  russell: { label: 'Russell Group universities', master: 28500, bachelor: 27000 },
} as const;

const scoreWaiver = [0, 0.1, 0.2, 0.3]; // fraction of... capped below

const sel =
  'min-h-[48px] w-full rounded-lg border border-slate-400 bg-white px-3 py-2.5 text-base focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/20';

export default function UkCostCalculator() {
  const [location, setLocation] = useState<'london' | 'outside'>('outside');
  const [level, setLevel] = useState<'master' | 'bachelor'>('master');
  const [band, setBand] = useState<keyof typeof tuitionBands>('modern');
  const [score, setScore] = useState(1);
  const { openModal } = useCounselling();

  const r = useMemo(() => {
    const tuition = tuitionBands[band][level];
    const living = location === 'london' ? 13347 : 10224;
    const scholarship = Math.min(Math.round(tuition * scoreWaiver[score] * 0.5), 6000);
    const total = tuition + living - scholarship;
    return { tuition, living, scholarship, total };
  }, [location, level, band, score]);

  const gbp = (n: number) => `£${n.toLocaleString('en-GB')}`;
  const lakh = (n: number) => `₹${((n * GBP_INR) / 100000).toFixed(1)} Lakhs`;

  return (
    <div className="grid gap-8 rounded-2xl bg-white p-6 shadow-lg md:grid-cols-2 md:p-8">
      <div className="space-y-4">
        <label className="block text-sm font-semibold text-navy">
          Study location
          <select value={location} onChange={(e) => setLocation(e.target.value as 'london' | 'outside')} className={`${sel} mt-1`}>
            <option value="outside">Outside London (Manchester, Coventry, Leeds…)</option>
            <option value="london">London</option>
          </select>
        </label>
        <label className="block text-sm font-semibold text-navy">
          Programme
          <select value={level} onChange={(e) => setLevel(e.target.value as 'master' | 'bachelor')} className={`${sel} mt-1`}>
            <option value="master">1-year Master&apos;s</option>
            <option value="bachelor">Bachelor&apos;s (first year)</option>
          </select>
        </label>
        <label className="block text-sm font-semibold text-navy">
          University band
          <select value={band} onChange={(e) => setBand(e.target.value as keyof typeof tuitionBands)} className={`${sel} mt-1`}>
            {Object.entries(tuitionBands).map(([k, v]) => (
              <option key={k} value={k}>{v.label}</option>
            ))}
          </select>
        </label>
        <label className="block text-sm font-semibold text-navy">
          Academic score
          <select value={score} onChange={(e) => setScore(Number(e.target.value))} className={`${sel} mt-1`}>
            <option value={0}>Below 60%</option>
            <option value={1}>60 – 70%</option>
            <option value={2}>70 – 80%</option>
            <option value={3}>80% and above</option>
          </select>
        </label>
      </div>
      <div className="rounded-xl bg-navy p-6 text-white">
        <h3 className="text-lg font-bold">Estimated first-year budget</h3>
        <dl className="mt-4 space-y-3 text-sm">
          <div className="flex justify-between"><dt>Tuition fee</dt><dd className="font-semibold">{gbp(r.tuition)}</dd></div>
          <div className="flex justify-between"><dt>UKVI living funds (9 months)</dt><dd className="font-semibold">{gbp(r.living)}</dd></div>
          <div className="flex justify-between text-green-300"><dt>Potential scholarship</dt><dd className="font-semibold">− {gbp(r.scholarship)}</dd></div>
          <div className="flex justify-between border-t border-white/20 pt-3 text-base"><dt className="font-bold">Net estimate</dt><dd className="font-bold text-gold">{gbp(r.total)}</dd></div>
          <div className="text-right text-lg font-bold">≈ {lakh(r.total)}</div>
        </dl>
        <p className="mt-3 text-xs text-white/60">Indicative only (£1 ≈ ₹{GBP_INR}). Actual fees, scholarships and living-cost rules vary by university and year.</p>
        <button
          type="button"
          onClick={() =>
            openModal({
              target: `${level === 'master' ? "1-Yr Master's" : "Bachelor's"} (${location === 'london' ? 'London' : 'Outside London'})`,
              notes: `Band: ${tuitionBands[band].label}, Est: ${gbp(r.total)}`,
              source: 'cost-calculator',
            })
          }
          className="mt-5 w-full rounded-lg bg-crimson px-4 py-3 font-semibold hover:bg-crimson-dark"
        >
          Get an exact fee &amp; scholarship sheet
        </button>
      </div>
    </div>
  );
}
