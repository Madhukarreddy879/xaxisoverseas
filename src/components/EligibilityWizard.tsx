'use client';

import { useId, useState } from 'react';
import { buildWhatsAppUrl } from '@/config/site';
import LeadCaptureForm from './LeadCaptureForm';

const steps = ['Academics', 'English & Gap', 'Preferences', 'Result'];

const sel =
  'custom-select mt-1.5 h-12 w-full rounded-xl border border-slate-300 bg-white px-3.5 text-base font-normal text-slate-900 focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/15';

const num =
  'mt-1.5 h-12 w-full rounded-xl border border-slate-300 bg-white px-3.5 text-base font-normal text-slate-900 focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/15';

export default function EligibilityWizard() {
  const [step, setStep] = useState(0);
  const uid = useId();
  const [a, setA] = useState({
    qualification: "Bachelor's / B.Tech / Degree",
    score: 2,
    backlogs: 0,
    gap: 0,
    english: 'MOI',
    intake: 'September',
    region: 'Open to all UK',
  });
  const set = (k: string, v: string | number) => setA((p) => ({ ...p, [k]: v }));

  const points =
    a.score * 2 +
    (a.backlogs === 0 ? 2 : a.backlogs <= 5 ? 1 : 0) +
    (a.gap <= 1 ? 2 : a.gap <= 3 ? 1 : 0) +
    (a.english === 'Ready' ? 1 : 0);
  const result =
    points >= 9
      ? { badge: 'Strong fit', text: 'You look eligible for Russell Group and top modern UK universities.', tier: 'Russell Group + top modern universities' }
      : points >= 6
        ? { badge: 'Good fit', text: 'Good prospects at many London and career-focused universities, often with scholarships.', tier: 'London + career-focused universities' }
        : { badge: 'Needs a closer look', text: 'Options exist at several universities, but your profile needs personal assessment and a strong SOP.', tier: 'Selected MOI-friendly universities' };

  const summary = `Hi X-Axis, my UK eligibility check:\nQualification: ${a.qualification}\nScore band: ${['<55%', '55-65%', '65-75%', '75%+'][a.score]}\nBacklogs: ${a.backlogs}\nGap: ${a.gap} yr\nEnglish: ${a.english}\nIntake: ${a.intake}\nRegion: ${a.region}\nResult: ${result.badge}`;

  return (
    <div className="mx-auto max-w-2xl rounded-2xl border border-slate-200 bg-white p-5 shadow-lg sm:p-8">
      <ol className="mb-6 grid grid-cols-4 gap-1.5 sm:gap-2">
        {steps.map((s, i) => (
          <li
            key={s}
            aria-current={i === step ? 'step' : undefined}
            className={`rounded-full px-1 py-1.5 text-center text-[11px] font-semibold sm:text-xs ${
              i <= step ? 'bg-navy text-white' : 'bg-slate-100 text-slate-600'
            }`}
          >
            {s}
          </li>
        ))}
      </ol>

      {step === 0 && (
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-navy">Step 1: Academic Background</h2>
          <label htmlFor={`${uid}-qual`} className="block text-sm font-semibold text-navy">
            Highest qualification
            <select id={`${uid}-qual`} name="qualification" className={sel} value={a.qualification} onChange={(e) => set('qualification', e.target.value)}>
              <option>12th / Intermediate</option>
              <option>Bachelor&apos;s / B.Tech / Degree</option>
              <option>Master&apos;s</option>
            </select>
          </label>
          <label htmlFor={`${uid}-score`} className="block text-sm font-semibold text-navy">
            Academic percentage / score
            <select id={`${uid}-score`} name="score" className={sel} value={a.score} onChange={(e) => set('score', Number(e.target.value))}>
              <option value={0}>Below 55%</option>
              <option value={1}>55 – 65%</option>
              <option value={2}>65 – 75%</option>
              <option value={3}>75% and above</option>
            </select>
          </label>
          <label htmlFor={`${uid}-backlogs`} className="block text-sm font-semibold text-navy">
            Number of backlogs
            <input
              id={`${uid}-backlogs`}
              name="backlogs"
              type="number"
              min={0}
              max={30}
              className={num}
              value={a.backlogs}
              onChange={(e) => set('backlogs', Math.min(30, Math.max(0, Number(e.target.value) || 0)))}
            />
          </label>
        </div>
      )}
      {step === 1 && (
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-navy">Step 2: English &amp; Study Gap</h2>
          <label htmlFor={`${uid}-gap`} className="block text-sm font-semibold text-navy">
            Study / work gap (years)
            <input
              id={`${uid}-gap`}
              name="gap"
              type="number"
              min={0}
              max={20}
              className={num}
              value={a.gap}
              onChange={(e) => set('gap', Math.min(20, Math.max(0, Number(e.target.value) || 0)))}
            />
          </label>
          <label htmlFor={`${uid}-eng`} className="block text-sm font-semibold text-navy">
            English proficiency status
            <select id={`${uid}-eng`} name="english" className={sel} value={a.english} onChange={(e) => set('english', e.target.value)}>
              <option value="MOI">MOI eligible (Medium of Instruction)</option>
              <option value="Ready">IELTS / PTE score ready</option>
              <option value="Not taken">Not taken yet</option>
            </select>
          </label>
        </div>
      )}
      {step === 2 && (
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-navy">Step 3: UK Preferences</h2>
          <label htmlFor={`${uid}-intake`} className="block text-sm font-semibold text-navy">
            Preferred UK intake
            <select id={`${uid}-intake`} name="intake" className={sel} value={a.intake} onChange={(e) => set('intake', e.target.value)}>
              <option>September</option>
              <option>January</option>
              <option>May</option>
            </select>
          </label>
          <label htmlFor={`${uid}-region`} className="block text-sm font-semibold text-navy">
            Preferred UK region
            <select id={`${uid}-region`} name="region" className={sel} value={a.region} onChange={(e) => set('region', e.target.value)}>
              <option>Open to all UK</option>
              <option>London &amp; South East</option>
              <option>Midlands &amp; North — lower living cost</option>
              <option>Scotland &amp; Wales</option>
            </select>
          </label>
        </div>
      )}
      {step === 3 && (
        <div>
          <span className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-sm font-bold text-emerald-800">{result.badge}</span>
          <p className="mt-3 text-slate-700">{result.text}</p>
          <p className="mt-2 text-sm text-slate-500">
            Suggested tier: <strong className="text-navy">{result.tier}</strong>
          </p>
          <a
            href={buildWhatsAppUrl(summary)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex min-h-[44px] items-center rounded-xl bg-green-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-green-700"
          >
            Send Result on WhatsApp
          </a>
          <div className="mt-6 border-t pt-6">
            <h2 className="mb-3 text-lg font-bold text-navy">Get a Curated 5-University Shortlist</h2>
            <LeadCaptureForm
              variant="compact"
              prefill={{
                intake: a.intake,
                qualification: a.qualification,
                english: a.english === 'MOI' ? 'MOI / Without IELTS' : a.english === 'Ready' ? 'IELTS / PTE taken' : 'Planning to take',
                notes: `Score: ${['<55%', '55-65%', '65-75%', '75%+'][a.score]}, Backlogs: ${a.backlogs}, Gap: ${a.gap}yr, Region: ${a.region}, Result: ${result.badge}`,
                source: 'eligibility',
              }}
            />
          </div>
        </div>
      )}

      <div className="mt-6 flex justify-between border-t border-slate-100 pt-4">
        <button
          type="button"
          disabled={step === 0}
          onClick={() => setStep(step - 1)}
          className="min-h-[44px] rounded-xl px-4 py-2 text-sm font-semibold text-navy hover:bg-slate-100 disabled:opacity-30"
        >
          Back
        </button>
        {step < 3 && (
          <button
            type="button"
            onClick={() => setStep(step + 1)}
            className="min-h-[44px] rounded-xl bg-navy px-6 py-2 text-sm font-semibold text-white hover:bg-navy-light"
          >
            {step === 2 ? 'See My Result' : 'Next'}
          </button>
        )}
      </div>
      <p className="mt-4 text-xs text-slate-400">Indicative guidance only — not a guarantee of admission or visa.</p>
    </div>
  );
}
