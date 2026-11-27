import Link from 'next/link';
import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import BrandLogo from './BrandLogo';
import { buildWhatsAppUrl, siteConfig } from '@/config/site';

export default function Footer() {
  return (
    <footer className="bg-navy text-white/80">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 pb-10 pt-12 sm:px-6 md:grid-cols-2 lg:grid-cols-12 lg:gap-10 lg:px-8 lg:pt-14">
        <div className="lg:col-span-4">
          <BrandLogo dark />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/75">
            Hyderabad&apos;s UK-focused overseas education consultancy — honest guidance from course shortlisting to student visa and UK arrival.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 lg:col-span-4">
          <div>
            <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><Link href="/study-in-uk/" className="hover:text-white">Study in UK</Link></li>
              <li><Link href="/universities/" className="hover:text-white">UK Universities</Link></li>
              <li><Link href="/services/" className="hover:text-white">Our Services</Link></li>
              <li><Link href="/eligibility/" className="hover:text-white">Check Eligibility</Link></li>
              <li><Link href="/about/" className="hover:text-white">About Us</Link></li>
              <li><Link href="/contact/" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-white">UK Courses</h3>
            <ul className="space-y-2 text-sm">
              {[
                ['Data Science & AI', 'Data'],
                ['Cyber Security', 'Cyber'],
                ['MBA & Business', 'MBA'],
                ['Engineering', 'Engineering'],
                ['Finance & FinTech', 'Finance'],
                ['Public Health', 'Health'],
              ].map(([label, q]) => (
                <li key={label}>
                  <Link href={`/universities/?q=${encodeURIComponent(q)}`} className="hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="lg:col-span-4">
          <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-white">Visit Our Office</h3>
          <ul className="space-y-2.5 text-sm">
            <li className="flex gap-2.5">
              <MapPin aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>{siteConfig.address.full}</span>
            </li>
            <li className="flex gap-2.5">
              <Clock aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>{siteConfig.officeHours}</span>
            </li>
            <li className="flex gap-2.5">
              <Phone aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href={`tel:${siteConfig.phoneRaw}`} className="hover:text-white">{siteConfig.phoneDisplay}</a>
            </li>
            <li className="flex gap-2.5">
              <MessageCircle aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a
                href={buildWhatsAppUrl('Hi X-Axis, I want to know about studying in the UK.')}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                WhatsApp us
              </a>
            </li>
            <li className="flex gap-2.5">
              <Mail aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-white">{siteConfig.email}</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 pb-24 pt-5 text-center text-xs text-white/65 sm:px-6 md:pb-20 lg:px-8">
        © {new Date().getFullYear()} X-Axis Overseas ({siteConfig.domain}). All rights reserved. University fees and visa rules change — please verify with official sources.
      </div>
    </footer>
  );
}
