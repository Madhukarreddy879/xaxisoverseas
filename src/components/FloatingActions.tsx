import { MessageCircle, Phone } from 'lucide-react';
import { buildWhatsAppUrl, siteConfig } from '@/config/site';

export default function FloatingActions() {
  const wa = buildWhatsAppUrl('Hi X-Axis, I want to know about studying in the UK.');
  return (
    <div
      className="fixed z-40 flex flex-col items-end gap-3"
      style={{
        bottom: 'max(1.25rem, env(safe-area-inset-bottom, 0px))',
        right: 'max(1rem, env(safe-area-inset-right, 0px))',
      }}
    >
      <a
        href={`tel:${siteConfig.phoneRaw}`}
        aria-label={`Call ${siteConfig.phoneDisplay}`}
        className="inline-flex h-[52px] w-[52px] items-center justify-center gap-2 rounded-full bg-navy text-sm font-semibold text-white shadow-lg ring-2 ring-white/80 transition hover:bg-navy-light active:scale-95 md:h-auto md:w-auto md:px-4 md:py-2.5 md:ring-white/20"
      >
        <Phone aria-hidden="true" className="h-5 w-5 text-gold md:h-4 md:w-4" />
        <span className="hidden md:inline">Call Us</span>
      </a>
      <a
        href={wa}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="inline-flex h-[52px] w-[52px] items-center justify-center gap-2 rounded-full bg-green-600 text-sm font-semibold text-white shadow-lg ring-2 ring-white/80 transition hover:bg-green-700 active:scale-95 md:h-auto md:w-auto md:px-4 md:py-2.5 md:ring-white/20"
      >
        <MessageCircle aria-hidden="true" className="h-5 w-5 md:h-4 md:w-4" />
        <span className="hidden md:inline">WhatsApp</span>
      </a>
    </div>
  );
}
