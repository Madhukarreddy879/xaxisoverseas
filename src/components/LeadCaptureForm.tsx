'use client';

import { useId, useRef, useState } from 'react';
import { CheckCircle2, MessageCircle, Phone } from 'lucide-react';
import { buildWhatsAppUrl, siteConfig } from '@/config/site';
import { trackEvent } from './GoogleAnalytics';

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
  'h-12 w-full rounded-xl border border-slate-300 bg-white px-3.5 text-base text-slate-900 placeholder:text-slate-400 focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/15';

const selectField = `${field} custom-select`;

export default function LeadCaptureForm({
  variant = 'full',
  prefill,
}: {
  variant?: 'compact' | 'full';
  prefill?: Prefill;
}) {
  const [done, setDone] = useState(false);
  const [error, setError] = useState('');
  const [deliveryFallback, setDeliveryFallback] = useState(false);
  const [summary, setSummary] = useState('');
  const phoneRef = useRef<HTMLInputElement>(null);
  const uid = useId();
  const full = variant === 'full';
  const defaultTarget = prefill?.target || [prefill?.university, prefill?.course].filter(Boolean).join(' - ');

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data: Record<string, string> = {};
    fd.forEach((v, k) => (data[k] = String(v).trim()));
    const digits = data.phone.replace(/\D/g, '');
    if (digits.length < 10 || digits.length > 15 || /^(\d)\1+$/.test(digits)) {
      setError('Please enter a valid mobile number (10–15 digits).');
      phoneRef.current?.focus();
      return;
    }
    setError('');
    setDeliveryFallback(false);
    data.source = prefill?.source || 'website';
    const pagePath = window.location.pathname;
    fetch('/api/lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
      keepalive: true,
    })
      .then(async (res) => {
        if (!res.ok) {
          setDeliveryFallback(true);
          return;
        }
        trackEvent('generate_lead', {
          form_source: data.source,
          intake: data.intake || 'unspecified',
          page_path: pagePath,
        });
        const body = (await res.json().catch(() => null)) as { emailSent?: boolean } | null;
        if (body && body.emailSent === false) setDeliveryFallback(true);
      })
      .catch(() => setDeliveryFallback(true));
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
      <div role="status" aria-live="polite" className="py-4 text-center">
        <CheckCircle2 aria-hidden="true" className="mx-auto h-12 w-12 text-green-600" />
        <h3 className="mt-3 text-xl font-bold text-navy">Thank you!</h3>
        <p className="mt-1 text-sm text-slate-600">
          {deliveryFallback
            ? 'Please tap WhatsApp or Call below to send your enquiry right away.'
            : 'Our UK counsellor will contact you shortly. For the fastest reply, send your details on WhatsApp.'}
        </p>
        <div className="mt-5 flex flex-col gap-3">
          <a
            href={buildWhatsAppUrl(summary)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-green-600 px-4 py-3 font-semibold text-white hover:bg-green-700"
          >
            <MessageCircle aria-hidden="true" className="h-5 w-5" /> Send Details on WhatsApp
          </a>
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-navy px-4 py-3 font-semibold text-navy hover:bg-navy hover:text-white"
          >
            <Phone aria-hidden="true" className="h-5 w-5" /> Call Ameerpet Office
          </a>
        </div>
      </div>
    );
  }

  return (
    <form action="/api/lead" method="POST" onSubmit={onSubmit} className="space-y-3">
      <input id={`${uid}-hp`} name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      {prefill?.notes && <input type="hidden" name="notes" value={prefill.notes} />}
      {!full && prefill?.qualification && <input type="hidden" name="qualification" value={prefill.qualification} />}
      {!full && prefill?.english && <input type="hidden" name="english" value={prefill.english} />}
      {!full && defaultTarget && <input type="hidden" name="target" value={defaultTarget} />}

      <div className={full ? 'grid gap-3 sm:grid-cols-2' : 'space-y-3'}>
        <input
          id={`${uid}-name`}
          name="name"
          required
          autoComplete="name"
          enterKeyHint="next"
          placeholder="Full name *"
          className={field}
          aria-label="Full name"
        />
        <input
          ref={phoneRef}
          id={`${uid}-phone`}
          name="phone"
          required
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          enterKeyHint="next"
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${uid}-err` : undefined}
          onChange={() => error && setError('')}
          placeholder="Mobile / WhatsApp *"
          className={field}
          aria-label="Mobile number"
        />
      </div>

      {full && (
        <input
          id={`${uid}-email`}
          name="email"
          type="email"
          autoComplete="email"
          autoCorrect="off"
          autoCapitalize="none"
          spellCheck={false}
          enterKeyHint="next"
          placeholder="Email (optional)"
          className={field}
          aria-label="Email"
        />
      )}

      <div className={full ? 'grid gap-3 sm:grid-cols-2' : undefined}>
        <select
          id={`${uid}-intake`}
          name="intake"
          defaultValue={prefill?.intake || ''}
          className={selectField}
          aria-label="Preferred intake"
        >
          <option value="">Preferred UK intake</option>
          <option>September</option>
          <option>January</option>
          <option>May</option>
        </select>

        {full && (
          <select
            id={`${uid}-qual`}
            name="qualification"
            defaultValue={prefill?.qualification || ''}
            className={selectField}
            aria-label="Qualification"
          >
            <option value="">Current qualification</option>
            <option>12th / Intermediate</option>
            <option>Bachelor&apos;s / B.Tech / Degree</option>
            <option>Master&apos;s</option>
          </select>
        )}
      </div>

      {full && (
        <div className="grid gap-3 sm:grid-cols-2">
          <select
            id={`${uid}-eng`}
            name="english"
            defaultValue={prefill?.english || ''}
            className={selectField}
            aria-label="English test status"
          >
            <option value="">English test status</option>
            <option>MOI / Without IELTS</option>
            <option>IELTS / PTE taken</option>
            <option>Planning to take</option>
          </select>
          <input
            id={`${uid}-target`}
            name="target"
            defaultValue={defaultTarget}
            enterKeyHint="done"
            placeholder="Target university / course"
            className={field}
            aria-label="Target university or course"
          />
        </div>
      )}

      {error && (
        <p id={`${uid}-err`} role="alert" className="text-sm font-medium text-crimson">
          {error}
        </p>
      )}
      <button
        type="submit"
        className="min-h-[48px] w-full rounded-xl bg-crimson px-4 py-3 font-semibold text-white shadow-sm transition hover:bg-crimson-dark"
      >
        Book Free UK Counselling
      </button>
      <p className="text-center text-xs text-slate-500">100% free • No spam • Reply within 1 working day</p>
    </form>
  );
}
