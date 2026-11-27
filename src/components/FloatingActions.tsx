'use client';

import { MessageCircle, Phone, CalendarCheck } from 'lucide-react';
import { useCounselling } from './CounsellingContext';
import { buildWhatsAppUrl, siteConfig } from '@/config/site';

export default function FloatingActions() {
  const { openModal } = useCounselling();
  const wa = buildWhatsAppUrl('Hi X-Axis, I want to know about studying in the UK.');
  return (
    <>
      <a
        href={wa}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-20 right-4 z-40 hidden rounded-full bg-green-600 p-4 text-white shadow-lg hover:bg-green-700 md:bottom-6 md:block"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.1)] md:hidden">
        <a href={`tel:${siteConfig.phoneRaw}`} className="flex flex-col items-center gap-0.5 py-2.5 text-xs font-semibold text-navy">
          <Phone className="h-5 w-5" /> Call
        </a>
        <a href={wa} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-0.5 py-2.5 text-xs font-semibold text-green-700">
          <MessageCircle className="h-5 w-5" /> WhatsApp
        </a>
        <button onClick={() => openModal({ source: 'mobile-bar' })} className="flex flex-col items-center gap-0.5 bg-crimson py-2.5 text-xs font-semibold text-white">
          <CalendarCheck className="h-5 w-5" /> Free Counselling
        </button>
      </div>
    </>
  );
}
