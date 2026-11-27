'use client';

import { MessageCircle, Phone, CalendarCheck } from 'lucide-react';
import { useCounselling } from './CounsellingContext';
import { buildWhatsAppUrl, siteConfig } from '@/config/site';

export default function FloatingActions() {
  const { openModal } = useCounselling();
  const wa = buildWhatsAppUrl('Hi X-Axis, I want to know about studying in the UK.');
  return (
    <>
      <div className="fixed bottom-6 right-5 z-40 hidden flex-col items-end gap-2.5 md:flex">
        <a
          href={`tel:${siteConfig.phoneRaw}`}
          aria-label={`Call ${siteConfig.phoneDisplay}`}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-navy px-4 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:bg-navy-light"
        >
          <Phone aria-hidden="true" className="h-4 w-4 text-gold" />
          <span>Call Us</span>
        </a>
        <a
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="inline-flex items-center gap-2 rounded-full bg-green-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:bg-green-700"
        >
          <MessageCircle aria-hidden="true" className="h-4 w-4" />
          <span>WhatsApp</span>
        </a>
      </div>
      <div className="mobile-safe-bar mobile-safe-cell fixed inset-x-0 bottom-0 z-40 border-t border-slate-200/90 bg-white/95 px-3 pt-2 shadow-[0_-4px_20px_rgba(10,25,47,0.1)] backdrop-blur-md md:hidden">
        <div className="mx-auto flex max-w-md items-center gap-2">
          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="inline-flex min-h-[46px] flex-1 items-center justify-center gap-1.5 rounded-xl bg-navy px-3 text-xs font-semibold text-white active:opacity-85"
          >
            <Phone aria-hidden="true" className="h-4 w-4 text-gold" />
            <span>Call</span>
          </a>
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[46px] flex-1 items-center justify-center gap-1.5 rounded-xl border border-emerald-200 bg-emerald-50 px-3 text-xs font-semibold text-emerald-800 active:bg-emerald-100"
          >
            <MessageCircle aria-hidden="true" className="h-4 w-4 text-emerald-600" />
            <span>WhatsApp</span>
          </a>
          <button
            type="button"
            onClick={() => openModal({ source: 'mobile-bar' })}
            className="inline-flex min-h-[46px] flex-[1.35] items-center justify-center gap-1.5 rounded-xl bg-crimson px-3 text-xs font-semibold text-white shadow-sm active:opacity-85"
          >
            <CalendarCheck aria-hidden="true" className="h-4 w-4" />
            <span>Free Consult</span>
          </button>
        </div>
      </div>
    </>
  );
}
