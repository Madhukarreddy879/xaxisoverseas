import Link from 'next/link';
import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import BrandLogo from './BrandLogo';
import { siteConfig } from '@/config/site';

export default function Footer() {
  return (
    <footer className="bg-navy text-white/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <BrandLogo dark />
          <p className="mt-4 text-sm leading-relaxed">
            Hyderabad&apos;s UK-focused overseas education consultancy — honest guidance from course selection to visa and arrival.
          </p>
        </div>
        <div>
          <h3 className="mb-3 font-bold text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/study-in-uk/" className="hover:text-white">Study in UK</Link></li>
            <li><Link href="/universities/" className="hover:text-white">UK Universities</Link></li>
            <li><Link href="/services/" className="hover:text-white">Our Services</Link></li>
            <li><Link href="/eligibility/" className="hover:text-white">Check Eligibility</Link></li>
            <li><Link href="/about/" className="hover:text-white">About Us</Link></li>
            <li><Link href="/contact/" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="mb-3 font-bold text-white">Popular UK Courses</h3>
          <ul className="space-y-2 text-sm">
            {['Data Science & AI', 'Cyber Security', 'MBA & Business', 'Engineering & Construction', 'Finance & FinTech', 'Public Health'].map((c) => (
              <li key={c}><Link href="/universities/" className="hover:text-white">{c}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-3 font-bold text-white">Visit Our Office</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> {siteConfig.address.full}</li>
            <li className="flex gap-2"><Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> {siteConfig.officeHours}</li>
            <li className="flex gap-2"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> <a href={`tel:${siteConfig.phoneRaw}`} className="hover:text-white">{siteConfig.phoneDisplay}</a></li>
            <li className="flex gap-2"><MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> <a href={`https://wa.me/${siteConfig.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="hover:text-white">WhatsApp us</a></li>
            <li className="flex gap-2"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> <a href={`mailto:${siteConfig.email}`} className="hover:text-white">{siteConfig.email}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs">
        © {new Date().getFullYear()} X-Axis Overseas ({siteConfig.domain}). All rights reserved. University fees and visa rules change — please verify with official sources.
      </div>
    </footer>
  );
}
