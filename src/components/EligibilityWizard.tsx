'use client';

import { useState } from 'react';
import { buildWhatsAppUrl } from '@/config/site';
import LeadCaptureForm from './LeadCaptureForm';

const steps = ['Academics', 'English & gap', 'Preferences', 'Result'];

const sel =
  'w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm focus:border-navy focus:outline-none';

export default function EligibilityWizard() {
  const [step, setStep] = useState(0);
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

  const points = a.score * 2 + (a.backlogs === 0 ? 2 : a.backlogs <= 5 ? 1 : 0) + (a.gap <= 1 ? 2 : a.gap <= 3 ? 1 : 0) + (a.english === 'Ready' ? 1 : 0);
  const result =
    points >= 9
      ? { badge: 'Strong fit', text: 'You look eligible for Russell Group and top modern UK universities.', tier: 'Russell Group + top modern universities' }
      : points >= 6
        ? { badge: 'Good fit', text: 'Good prospects at many London and career-focused universities, often with scholarships.', tier: 'London + career-focused universities' }
        : { badge: 'Needs a closer look', text: 'Options exist at several universities, but your profile needs personal assessment and a strong SOP.', tier: 'Selected MOI-friendly universities' };

  const summary = `Hi X-Axis, my UK eligibility check:\nQualification: ${a.qualification}\nScore band: ${['<55%', '55-65%', '65-75%', '75%+'][a.score]}\nBacklogs: ${a.backlogs}\nGap: ${a.gap} yr\nEnglish: ${a.english}\nIntake: ${a.intake}\nRegion: ${a.region}\nResult: ${result.badge}`;

  return (
    <div className="mx-auto max-w-2xl rounded-2xl bg-white p-6 shadow-lg md:p-8">
      <ol className="mb-6 flex gap-2">
        {steps.map((s, i) => (
          <li key={s} className={`flex-1 rounded-full py-1.5 text-center text-xs font-semibold ${i <= step ? 'bg-navy text-white' : 'bg-slate-100 text-slate-500'}`}>
            {s}
          </li>
        ))}
      </ol>

      {step === 0 && (
        <div className="space-y-4">
          <select className={sel} value={a.qualification} onChange={(e) => set('qualification', e.target.value)} aria-label="Qualification">
            <option>12th / Intermediate</option>
            <option>Bachelor&apos;s / B.Tech / Degree</option>
            <option>Master&apos;s</option>
          </select>
          <select className={sel} value={a.score} onChange={(e) => set('score', Number(e.target.value))} aria-label="Score">
            <option value={0}>Below 55%</option>
            <option value={1}>55 – 65%</option>
            <option value={2}>65 – 75%</option>
            <option value={3}>75% and above</option>
          </select>
          <label className="block text-sm font-semibold text-navy">
            Number of backlogs
            <input type="number" min={0} className={`${sel} mt-1`} value={a.backlogs} onChange={(e) => set('backlogs', Math.max(0, Number(e.target.value)))} />
          </label>
        </div>
      )}
      {step === 1 && (
        <div className="space-y-4">
          <label className="block text-sm font-semibold text-navy">
            Study / work gap (years)
            <input type="number" min={0} className={`${sel} mt-1`} value={a.gap} onChange={(e) => set('gap', Math.max(0, Number(e.target.value)))} />
          </label>
          <select className={sel} value={a.english} onChange={(e) => set('english', e.target.value)} aria-label="English status">
            <option value="MOI">MOI eligible</option>
            <option value="Ready">IELTS / PTE ready</option>
            <option value="Not taken">Not taken yet</option>
          </select>
        </div>
      )}
      {step === 2 && (
        <div className="space-y-4">
          <select className={sel} value={a.intake} onChange={(e) => set('intake', e.target.value)} aria-label="Intake">
            <option>September</option>
            <option>January</option>
            <option>May</option>
          </select>
          <select className={sel} value={a.region} onChange={(e) => set('region', e.target.value)} aria-label="Region">
            <option>Open to all UK</option>
            <option>London &amp; South East</option>
            <option>Midlands &amp; North — lower living cost</option>
            <option>Scotland &amp; Wales</option>
          </select>
        </div>
      )}
      {step === 3 && (
        <div>
          <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-bold text-green-700">{result.badge}</span>
          <p className="mt-3 text-slate-700">{result.text}</p>
          <p className="mt-2 text-sm text-slate-500">Suggested tier: <strong>{result.tier}</strong></p>
          <a href={buildWhatsAppUrl(summary)} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block rounded-lg bg-green-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-green-700">
            Send result on WhatsApp
          </a>
          <div className="mt-6 border-t pt-6">
            <h3 className="mb-3 font-bold text-navy">Get a curated 5-university shortlist</h3>
            <LeadCaptureForm variant="compact" prefill={{
                intake: a.intake,
                qualification: a.qualification,
                english: a.english === 'MOI' ? 'MOI / Without IELTS' : a.english === 'Ready' ? 'IELTS / PTE taken' : 'Planning to take',
                notes: `Score: ${['<55%', '55-65%', '65-75%', '75%+'][a.score]}, Backlogs: ${a.backlogs}, Gap: ${a.gap}yr, Region: ${a.region}, Result: ${result.badge}`,
                source: 'eligibility',
              }} />
          </div>
        </div>
      )}

      <div className="mt-6 flex justify-between">
        <button disabled={step === 0} onClick={() => setStep(step - 1)} className="rounded-lg px-4 py-2 text-sm font-semibold text-navy disabled:opacity-30">
          Back
        </button>
        {step < 3 && (
          <button onClick={() => setStep(step + 1)} className="rounded-lg bg-navy px-5 py-2 text-sm font-semibold text-white hover:bg-navy-light">
            {step === 2 ? 'See my result' : 'Next'}
          </button>
        )}
      </div>
      <p className="mt-4 text-xs text-slate-400">Indicative guidance only — not a guarantee of admission or visa.</p>
    </div>
  );
}
