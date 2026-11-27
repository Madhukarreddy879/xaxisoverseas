'use client';

import { useState } from 'react';
import { CheckCircle2, MessageCircle, Phone } from 'lucide-react';
import { buildWhatsAppUrl, siteConfig } from '@/config/site';

export interface Prefill {
  university?: string;
  course?: string;
  intake?: string;
  source?: string;
  qualification?: string;
  english?: string;
  target?: string;
  notes?: string;
}

const field =
  'w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/20';

export default function LeadCaptureForm({
  variant = 'full',
  prefill,
}: {
  variant?: 'compact' | 'full';
  prefill?: Prefill;
}) {
  const [done, setDone] = useState(false);
  const [error, setError] = useState('');
  const [summary, setSummary] = useState('');
  const full = variant === 'full';

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data: Record<string, string> = {};
    fd.forEach((v, k) => (data[k] = String(v).trim()));
    const digits = data.phone.replace(/\D/g, '');
    if (digits.length < 10 || digits.length > 15 || /^(\d)\1+$/.test(digits)) {
      setError('Please enter a valid mobile number (10–15 digits).');
      return;
    }
    setError('');
    data.source = prefill?.source || 'website';
    fetch('/api/lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }).catch(() => {});
    const lines = [
      'Hi X-Axis, I would like free UK study counselling.',
      `Name: ${data.name}`,
      `Mobile: ${data.phone}`,
      data.email && `Email: ${data.email}`,
      data.intake && `Intake: ${data.intake}`,
      data.qualification && `Qualification: ${data.qualification}`,
      data.english && `English: ${data.english}`,
      data.target && `Interested in: ${data.target}`,
      data.notes && `Notes: ${data.notes}`,
    ].filter(Boolean);
    setSummary(lines.join('\n'));
    setDone(true);
  }

  if (done) {
    return (
      <div className="text-center py-4">
        <CheckCircle2 className="mx-auto h-12 w-12 text-green-600" />
        <h3 className="mt-3 text-xl font-bold text-navy">Thank you!</h3>
        <p className="mt-1 text-sm text-slate-600">
          Our UK counsellor will contact you shortly. For the fastest reply, send your details on WhatsApp.
        </p>
        <div className="mt-5 flex flex-col gap-3">
          <a
            href={buildWhatsAppUrl(summary)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-600 px-4 py-3 font-semibold text-white hover:bg-green-700"
          >
            <MessageCircle className="h-5 w-5" /> Send Details on WhatsApp
          </a>
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-navy px-4 py-3 font-semibold text-navy hover:bg-navy hover:text-white"
          >
            <Phone className="h-5 w-5" /> Call Ameerpet Office
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      {prefill?.notes && <input type="hidden" name="notes" value={prefill.notes} />}
      {!full && prefill?.qualification && <input type="hidden" name="qualification" value={prefill.qualification} />}
      {!full && prefill?.english && <input type="hidden" name="english" value={prefill.english} />}
      {!full && prefill?.target && <input type="hidden" name="target" value={prefill.target} />}
      <input name="name" required placeholder="Full name" className={field} aria-label="Full name" />
      <input
        name="phone"
        required
        type="tel"
        inputMode="numeric"
        placeholder="Mobile / WhatsApp number"
        className={field}
        aria-label="Mobile number"
      />
      {full && <input name="email" type="email" placeholder="Email (optional)" className={field} aria-label="Email" />}
      <select name="intake" defaultValue={prefill?.intake || ''} className={field} aria-label="Preferred intake">
        <option value="">Preferred UK intake</option>
        <option>September</option>
        <option>January</option>
        <option>May</option>
      </select>
      {full && (
        <>
          <select name="qualification" defaultValue={prefill?.qualification || ''} className={field} aria-label="Qualification">
            <option value="">Current qualification</option>
            <option>12th / Intermediate</option>
            <option>Bachelor&apos;s / B.Tech / Degree</option>
            <option>Master&apos;s</option>
          </select>
          <select name="english" defaultValue={prefill?.english || ''} className={field} aria-label="English test status">
            <option value="">English test status</option>
            <option>MOI / Without IELTS</option>
            <option>IELTS / PTE taken</option>
            <option>Planning to take</option>
          </select>
          <input
            name="target"
            defaultValue={prefill?.target || [prefill?.university, prefill?.course].filter(Boolean).join(' - ')}
            placeholder="Target university / course (optional)"
            className={field}
            aria-label="Target university or course"
          />
        </>
      )}
      {error && <p className="text-sm text-crimson">{error}</p>}
      <button
        type="submit"
        className="w-full rounded-lg bg-crimson px-4 py-3 font-semibold text-white transition hover:bg-crimson-dark"
      >
        Book Free UK Counselling
      </button>
      <p className="text-center text-xs text-slate-500">100% free • No spam • Reply within 1 working day</p>
    </form>
  );
}
