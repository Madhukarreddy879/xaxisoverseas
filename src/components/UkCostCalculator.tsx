'use client';

import { useId, useMemo, useState } from 'react';
import { useCounselling } from './CounsellingContext';

const GBP_INR = 110; // indicative rate

const tuitionBands = {
  modern: { label: 'Affordable modern universities', master: 16500, bachelor: 15500 },
  mid: { label: 'Mid-tier universities', master: 21000, bachelor: 20000 },
  russell: { label: 'Russell Group universities', master: 28500, bachelor: 27000 },
} as const;

const scoreWaiver = [0, 0.1, 0.2, 0.3];

const sel =
  'custom-select mt-1.5 h-12 w-full rounded-xl border border-slate-300 bg-white px-3.5 text-base font-normal text-slate-900 focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/15';

export default function UkCostCalculator() {
  const [location, setLocation] = useState<'london' | 'outside'>('outside');
  const [level, setLevel] = useState<'master' | 'bachelor'>('master');
  const [band, setBand] = useState<keyof typeof tuitionBands>('modern');
  const [score, setScore] = useState(1);
  const { openModal } = useCounselling();
  const uid = useId();

  const r = useMemo(() => {
    const tuition = tuitionBands[band][level];
    // Official GOV.UK maintenance rates effective 30 Nov 2026: £1,570/mo London (£14,130), £1,203/mo outside (£10,827)
    const living = location === 'london' ? 14130 : 10827;
    const scholarship = Math.min(Math.round(tuition * scoreWaiver[score] * 0.5), 6000);
    const total = tuition + living - scholarship;
    return { tuition, living, scholarship, total };
  }, [location, level, band, score]);

  const gbp = (n: number) => `£${n.toLocaleString('en-GB')}`;
  const lakh = (n: number) => `₹${((n * GBP_INR) / 100000).toFixed(1)} Lakhs`;

  return (
    <div className="grid items-stretch gap-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-lg sm:p-8 md:grid-cols-2 md:gap-8">
      <div className="space-y-4">
        <label htmlFor={`${uid}-loc`} className="block text-sm font-semibold text-navy">
          Study location
          <select
            id={`${uid}-loc`}
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value as 'london' | 'outside')}
            className={sel}
          >
            <option value="outside">Outside London (Manchester, Leeds…)</option>
            <option value="london">London</option>
          </select>
        </label>
        <label htmlFor={`${uid}-lvl`} className="block text-sm font-semibold text-navy">
          Programme
          <select
            id={`${uid}-lvl`}
            name="level"
            value={level}
            onChange={(e) => setLevel(e.target.value as 'master' | 'bachelor')}
            className={sel}
          >
            <option value="master">1-year Master&apos;s</option>
            <option value="bachelor">Bachelor&apos;s (first year)</option>
          </select>
        </label>
        <label htmlFor={`${uid}-band`} className="block text-sm font-semibold text-navy">
          University band
          <select
            id={`${uid}-band`}
            name="band"
            value={band}
            onChange={(e) => setBand(e.target.value as keyof typeof tuitionBands)}
            className={sel}
          >
            {Object.entries(tuitionBands).map(([k, v]) => (
              <option key={k} value={k}>
                {v.label}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor={`${uid}-score`} className="block text-sm font-semibold text-navy">
          Academic score
          <select
            id={`${uid}-score`}
            name="score"
            value={score}
            onChange={(e) => setScore(Number(e.target.value))}
            className={sel}
          >
            <option value={0}>Below 60%</option>
            <option value={1}>60 – 70%</option>
            <option value={2}>70 – 80%</option>
            <option value={3}>80% and above</option>
          </select>
        </label>
      </div>

      <div className="flex h-full flex-col justify-between rounded-xl bg-navy p-5 text-white sm:p-7">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-gold">Indicative 1st-Year Estimate</p>
          <h3 className="mt-1 text-xl font-bold">Estimated First-Year Budget</h3>
          <dl className="mt-5 space-y-3 text-sm">
            <div className="flex justify-between gap-4">
              <dt className="text-white/80">Tuition fee</dt>
              <dd className="font-semibold">{gbp(r.tuition)}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-white/80">UKVI living funds (9 mo, Nov 2026 rate)</dt>
              <dd className="font-semibold">{gbp(r.living)}</dd>
            </div>
            <div className="flex justify-between gap-4 text-emerald-300">
              <dt>Potential scholarship</dt>
              <dd className="font-semibold">− {gbp(r.scholarship)}</dd>
            </div>
            <div className="flex items-baseline justify-between gap-4 border-t border-white/15 pt-4">
              <dt className="text-base font-bold">Net estimate</dt>
              <dd className="text-right">
                <span className="block text-2xl font-extrabold text-gold">{gbp(r.total)}</span>
                <span className="text-sm font-semibold text-white/90">≈ {lakh(r.total)}</span>
              </dd>
            </div>
          </dl>
        </div>

        <div className="mt-6">
          <p className="text-xs leading-relaxed text-white/60">
            Indicative only (£1 ≈ ₹{GBP_INR}). Separate GOV.UK fees apply at visa filing (£558 Student Visa + £776/yr IHS). Actual tuition, scholarships and UKVI rules vary by university and intake.
          </p>
          <button
            type="button"
            onClick={() =>
              openModal({
                target: `${level === 'master' ? "1-Yr Master's" : "Bachelor's"} (${location === 'london' ? 'London' : 'Outside London'})`,
                notes: `Band: ${tuitionBands[band].label}, Est: ${gbp(r.total)}`,
                source: 'cost-calculator',
              })
            }
            className="mt-4 min-h-[48px] w-full rounded-xl bg-crimson px-4 py-3 font-semibold text-white transition hover:bg-crimson-dark"
          >
            Get an Exact Fee &amp; Scholarship Sheet
          </button>
        </div>
      </div>
    </div>
  );
}
