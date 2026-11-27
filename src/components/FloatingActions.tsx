'use client';

import { MessageCircle, Phone, CalendarCheck } from 'lucide-react';
import { useCounselling } from './CounsellingContext';
import { buildWhatsAppUrl, siteConfig } from '@/config/site';

export default function FloatingActions() {
  const { openModal } = useCounselling();
  const wa = buildWhatsAppUrl('Hi X-Axis, I want to know about studying in the UK.');
  return (
    <>
      <div className="fixed bottom-6 right-5 z-40 hidden flex-col items-end gap-3 md:flex">
        <a
          href={`tel:${siteConfig.phoneRaw}`}
          aria-label={`Call ${siteConfig.phoneDisplay}`}
          className="inline-flex items-center gap-2 rounded-full bg-navy px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-navy-light"
        >
          <Phone className="h-5 w-5 text-gold" />
          <span>Call Now</span>
        </a>
        <a
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="inline-flex items-center gap-2 rounded-full bg-green-600 px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-green-700"
        >
          <MessageCircle className="h-5 w-5" />
          <span>WhatsApp</span>
        </a>
      </div>
      <div className="mobile-safe-bar fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.12)] md:hidden">
        <a href={`tel:${siteConfig.phoneRaw}`} className="flex min-h-[56px] flex-col items-center justify-center gap-0.5 bg-navy py-2 text-xs font-semibold text-white active:opacity-85">
          <Phone aria-hidden="true" className="h-5 w-5 text-gold" /> Call Now
        </a>
        <a href={wa} target="_blank" rel="noopener noreferrer" className="flex min-h-[56px] flex-col items-center justify-center gap-0.5 py-2 text-xs font-semibold text-green-700 active:bg-slate-50">
          <MessageCircle aria-hidden="true" className="h-5 w-5" /> WhatsApp
        </a>
        <button type="button" onClick={() => openModal({ source: 'mobile-bar' })} className="flex min-h-[56px] flex-col items-center justify-center gap-0.5 bg-crimson py-2 text-xs font-semibold text-white active:opacity-85">
          <CalendarCheck aria-hidden="true" className="h-5 w-5" /> Free Counselling
        </button>
      </div>
    </>
  );
}
