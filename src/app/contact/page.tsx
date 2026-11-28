import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import LeadCaptureForm from '@/components/LeadCaptureForm';
import MapEmbed from '@/components/MapEmbed';
import { buildWhatsAppUrl, siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Contact & Walk-In — Ameerpet, Hyderabad',
  description:
    'Visit X-Axis Overseas at KVR Enclave, Ameerpet, Hyderabad (2 mins from Ameerpet Metro) or book a free UK university & student visa counselling session.',
  openGraph: {
    type: 'website',
    siteName: 'X-Axis Overseas',
    locale: 'en_IN',
    title: 'Contact & Walk-In — Ameerpet, Hyderabad',
    description:
      'Visit X-Axis Overseas at KVR Enclave, Ameerpet, Hyderabad (2 mins from Ameerpet Metro) or book a free UK university & student visa counselling session.',
    url: 'https://xaxisoverseas.com/contact/',
    images: [{ url: '/og-card.png', type: 'image/png', width: 1200, height: 630 }],
  },
};

const walkInDocs = [
  '10th, 12th, and degree marksheets / provisional certificate (phone PDFs are fine for initial review)',
  'Updated CV or brief notes on work experience / study gap timeline (if any)',
  'IELTS / PTE scorecard if taken (or college/university name for a free MOI eligibility check)',
  'Approximate budget or education loan preference (London vs outside-London UK campuses)',
];

export default function Page() {
  return (
    <>
      <section className="bg-navy py-10 text-white sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-3xl font-bold sm:text-4xl">Contact X-Axis Overseas — Ameerpet, Hyderabad</h1>
          <p className="mt-3 max-w-2xl text-white/80">
            Book a free UK counselling call or walk into our Ameerpet office (2 minutes from Ameerpet Metro Interchange) for university shortlisting, MOI checks, or a free UKVI visa file audit.
          </p>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-2 lg:gap-10 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-bold text-navy">Book Free UK Counselling</h2>
          <LeadCaptureForm variant="full" prefill={{ source: 'contact-page' }} />
        </div>
        <div className="space-y-4">
          <div className="flex gap-3 rounded-xl bg-ivory p-5">
            <MapPin aria-hidden="true" className="h-5 w-5 shrink-0 text-crimson" />
            <div>
              <h2 className="font-bold text-navy">Hyderabad Office Address</h2>
              <address className="text-sm not-italic text-slate-700">{siteConfig.address.full}</address>
            </div>
          </div>
          <div className="flex gap-3 rounded-xl bg-ivory p-5">
            <Phone aria-hidden="true" className="h-5 w-5 shrink-0 text-crimson" />
            <a href={`tel:${siteConfig.phoneRaw}`} className="text-sm font-semibold text-navy hover:text-crimson">
              {siteConfig.phoneDisplay}
            </a>
          </div>
          <div className="flex gap-3 rounded-xl bg-ivory p-5">
            <MessageCircle aria-hidden="true" className="h-5 w-5 shrink-0 text-crimson" />
            <a
              href={buildWhatsAppUrl('Hi X-Axis, I want to know about studying in the UK.')}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-navy hover:text-crimson"
            >
              Chat on WhatsApp ({siteConfig.phoneDisplay})
            </a>
          </div>
          <div className="flex gap-3 rounded-xl bg-ivory p-5">
            <Mail aria-hidden="true" className="h-5 w-5 shrink-0 text-crimson" />
            <a href={`mailto:${siteConfig.email}`} className="text-sm font-semibold text-navy hover:text-crimson">
              {siteConfig.email}
            </a>
          </div>
          <div className="flex gap-3 rounded-xl bg-ivory p-5">
            <Clock aria-hidden="true" className="h-5 w-5 shrink-0 text-crimson" />
            <span className="text-sm text-slate-700">{siteConfig.officeHours}</span>
          </div>
          <p className="text-sm text-slate-600">
            <strong>Directions:</strong> {siteConfig.address.landmarkNote} (Red &amp; Blue Metro Lines interchange). Take the lift or stairs to the 1st floor of KVR Enclave above the Bata showroom.
          </p>
          <a
            href={siteConfig.googleMapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm font-semibold text-crimson hover:underline"
          >
            Open in Google Maps →
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
        <section className="rounded-2xl border border-slate-200 bg-ivory p-6 sm:p-8">
          <h2 className="font-serif text-xl font-bold text-navy">What to Bring for a Free Walk-In Profile Evaluation</h2>
          <p className="mt-1.5 text-sm text-slate-600">
            Walk-ins are welcome Monday–Saturday. Bringing soft copies on your phone helps our counsellors give you an exact UK shortlist in one visit:
          </p>
          <ul className="mt-4 grid gap-2.5 text-sm text-slate-700 sm:grid-cols-2">
            {walkInDocs.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <CheckCircle2 aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-crimson" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-slate-600">
            Prefer to check your tier before visiting? Try our{' '}
            <Link href="/eligibility/" className="font-semibold text-navy underline hover:text-crimson">
              60-second UK Eligibility Evaluator
            </Link>{' '}
            or browse our{' '}
            <Link href="/blog/uk-visa-vfs-hyderabad-tb-test-checklist/" className="font-semibold text-navy underline hover:text-crimson">
              Hyderabad VFS &amp; TB Test Guide
            </Link>
            .
          </p>
        </section>
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <MapEmbed tall />
      </div>
    </>
  );
}
