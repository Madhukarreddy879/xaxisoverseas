import type { Metadata } from 'next';
import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import LeadCaptureForm from '@/components/LeadCaptureForm';
import MapEmbed from '@/components/MapEmbed';
import { buildWhatsAppUrl, siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Contact & Walk-In — Ameerpet, Hyderabad',
  description:
    'Visit X-Axis Overseas at KVR Enclave, Ameerpet, Hyderabad or book a free UK counselling session online.',
  openGraph: {
    type: 'website',
    siteName: 'X-Axis Overseas',
    locale: 'en_IN',
    title: 'Contact & Walk-In — Ameerpet, Hyderabad',
    description:
      'Visit X-Axis Overseas at KVR Enclave, Ameerpet, Hyderabad or book a free UK counselling session online.',
    url: 'https://xaxisoverseas.com/contact/',
    images: [{ url: '/og-card.png', type: 'image/png', width: 1200, height: 630 }],
  },
};

export default function Page() {
  return (
    <>
      <section className="bg-navy py-10 text-white sm:py-14">
        <div className="mx-auto max-w-5xl px-4">
          <h1 className="font-serif text-3xl font-bold sm:text-4xl">Contact Us</h1>
          <p className="mt-3 text-white/80">Book free counselling or walk in to our Ameerpet office.</p>
        </div>
      </section>
      <div className="mx-auto grid max-w-5xl gap-10 px-4 py-10 sm:py-14 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-bold text-navy">Book Free UK Counselling</h2>
          <LeadCaptureForm variant="full" prefill={{ source: 'contact-page' }} />
        </div>
        <div className="space-y-4">
          <div className="flex gap-3 rounded-xl bg-ivory p-5"><MapPin aria-hidden="true" className="h-5 w-5 shrink-0 text-crimson" /><div><h2 className="font-bold text-navy">Office</h2><address className="text-sm not-italic text-slate-700">{siteConfig.address.full}</address></div></div>
          <div className="flex gap-3 rounded-xl bg-ivory p-5"><Phone aria-hidden="true" className="h-5 w-5 shrink-0 text-crimson" /><a href={`tel:${siteConfig.phoneRaw}`} className="text-sm font-semibold text-navy">{siteConfig.phoneDisplay}</a></div>
          <div className="flex gap-3 rounded-xl bg-ivory p-5"><MessageCircle aria-hidden="true" className="h-5 w-5 shrink-0 text-crimson" /><a href={buildWhatsAppUrl('Hi X-Axis, I want to know about studying in the UK.')} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-navy">Chat on WhatsApp</a></div>
          <div className="flex gap-3 rounded-xl bg-ivory p-5"><Mail aria-hidden="true" className="h-5 w-5 shrink-0 text-crimson" /><a href={`mailto:${siteConfig.email}`} className="text-sm font-semibold text-navy">{siteConfig.email}</a></div>
          <div className="flex gap-3 rounded-xl bg-ivory p-5"><Clock aria-hidden="true" className="h-5 w-5 shrink-0 text-crimson" /><span className="text-sm text-slate-700">{siteConfig.officeHours}</span></div>
          <p className="text-sm text-slate-600">Directions: {siteConfig.address.landmarkNote}. Take the lift or stairs to the 1st floor.</p>
          <a href={siteConfig.googleMapsDirectionsUrl} target="_blank" rel="noopener noreferrer" className="inline-block text-sm font-semibold text-crimson hover:underline">Open in Google Maps →</a>
        </div>
      </div>
      <div className="mx-auto max-w-5xl px-4 pb-14"><MapEmbed tall /></div>
    </>
  );
}
