import { MessageCircle, Phone } from 'lucide-react';
import { buildWhatsAppUrl, siteConfig } from '@/config/site';

export default function FloatingActions() {
  const wa = buildWhatsAppUrl('Hi X-Axis, I want to know about studying in the UK.');
  return (
    <div
      className="fixed z-40 flex flex-col items-end gap-2.5"
      style={{
        bottom: 'max(1rem, env(safe-area-inset-bottom, 0px))',
        right: 'max(0.75rem, env(safe-area-inset-right, 0px))',
      }}
    >
      <a
        href={`tel:${siteConfig.phoneRaw}`}
        aria-label={`Call ${siteConfig.phoneDisplay}`}
        className="inline-flex h-11 w-11 items-center justify-center gap-2 rounded-full bg-navy/95 text-sm font-semibold text-white shadow-lg ring-2 ring-white/85 backdrop-blur-sm transition hover:bg-navy-light active:scale-95 md:h-auto md:w-auto md:px-4 md:py-2.5 md:ring-white/20"
      >
        <Phone aria-hidden="true" className="h-4 w-4 text-gold" />
        <span className="hidden md:inline">Call Us</span>
      </a>
      <a
        href={wa}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="inline-flex h-11 w-11 items-center justify-center gap-2 rounded-full bg-green-600/95 text-sm font-semibold text-white shadow-lg ring-2 ring-white/85 backdrop-blur-sm transition hover:bg-green-700 active:scale-95 md:h-auto md:w-auto md:px-4 md:py-2.5 md:ring-white/20"
      >
        <MessageCircle aria-hidden="true" className="h-4 w-4" />
        <span className="hidden md:inline">WhatsApp</span>
      </a>
    </div>
  );
}
