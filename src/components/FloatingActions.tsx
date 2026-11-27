import { MessageCircle, Phone } from 'lucide-react';
import { buildWhatsAppUrl, siteConfig } from '@/config/site';

export default function FloatingActions() {
  const wa = buildWhatsAppUrl('Hi X-Axis, I want to know about studying in the UK.');
  return (
    <>
      {/* Mobile: sleek lower-middle right-edge docked tab */}
      <div
        className="fixed z-40 flex flex-col overflow-hidden rounded-l-2xl border-y border-l border-white/25 shadow-lg md:hidden"
        style={{
          bottom: 'calc(6rem + env(safe-area-inset-bottom, 0px))',
          right: 'env(safe-area-inset-right, 0px)',
        }}
      >
        <a
          href={`tel:${siteConfig.phoneRaw}`}
          aria-label={`Call ${siteConfig.phoneDisplay}`}
          className="inline-flex h-12 w-11 items-center justify-center bg-navy text-white transition active:opacity-85"
        >
          <Phone aria-hidden="true" className="h-5 w-5 text-gold" />
        </a>
        <a
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="inline-flex h-12 w-11 items-center justify-center border-t border-white/15 bg-green-600 text-white transition active:opacity-85"
        >
          <MessageCircle aria-hidden="true" className="h-5 w-5" />
        </a>
      </div>

      {/* Desktop: compact bottom-right floating pills */}
      <div className="fixed bottom-6 right-5 z-40 hidden flex-col items-end gap-2.5 md:flex">
        <a
          href={`tel:${siteConfig.phoneRaw}`}
          aria-label={`Call ${siteConfig.phoneDisplay}`}
          className="inline-flex items-center gap-2 rounded-full bg-navy/95 px-4 py-2.5 text-sm font-semibold text-white shadow-lg ring-1 ring-white/20 backdrop-blur-sm transition hover:bg-navy-light"
        >
          <Phone aria-hidden="true" className="h-4 w-4 text-gold" />
          <span>Call Us</span>
        </a>
        <a
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="inline-flex items-center gap-2 rounded-full bg-green-600/95 px-4 py-2.5 text-sm font-semibold text-white shadow-lg ring-1 ring-white/20 backdrop-blur-sm transition hover:bg-green-700"
        >
          <MessageCircle aria-hidden="true" className="h-4 w-4" />
          <span>WhatsApp</span>
        </a>
      </div>
    </>
  );
}
