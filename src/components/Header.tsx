'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Mail, MapPin, Menu, Phone, X } from 'lucide-react';
import BrandLogo from './BrandLogo';
import { useCounselling } from './CounsellingContext';
import { siteConfig } from '@/config/site';

const links = [
  { href: '/', label: 'Home' },
  { href: '/study-in-uk/', label: 'Study in UK' },
  { href: '/universities/', label: 'Universities' },
  { href: '/services/', label: 'Services' },
  { href: '/eligibility/', label: 'Check Eligibility' },
  { href: '/blog/', label: 'Blog' },
  { href: '/about/', label: 'About' },
  { href: '/contact/', label: 'Contact' },
];

const norm = (p: string) => p.replace(/\/+$/, '') || '/';

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { openModal } = useCounselling();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <>
      <div className="bg-navy text-[11px] text-white/90 sm:text-xs">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-1 px-4 py-1.5 sm:px-6 md:justify-between md:py-2 lg:px-8">
          <span className="font-semibold text-gold">March/May &amp; Sept 2027 UK Intakes Open — Free Profile Check</span>
          <span className="hidden items-center gap-4 md:flex">
            <span className="inline-flex items-center gap-1">
              <MapPin aria-hidden="true" className="h-3.5 w-3.5" /> KVR Enclave, beside AAA Theatre, Ameerpet
            </span>
            <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-1 hover:text-white">
              <Mail aria-hidden="true" className="h-3.5 w-3.5" /> {siteConfig.email}
            </a>
            <a href={`tel:${siteConfig.phoneRaw}`} className="inline-flex items-center gap-1 hover:text-white">
              <Phone aria-hidden="true" className="h-3.5 w-3.5" /> {siteConfig.phoneDisplay}
            </a>
          </span>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 shadow-sm backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 sm:px-6 lg:px-8" aria-label="Main">
          <Link href="/" aria-label="X-Axis Overseas home">
            <BrandLogo />
          </Link>
          <ul className="hidden items-center gap-1 lg:flex">
            {links.map((l) => {
              const active = l.href === '/' ? norm(pathname) === '/' : norm(pathname).startsWith(norm(l.href));
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    aria-current={active ? 'page' : undefined}
                    className={`rounded-md px-3 py-2 text-sm font-semibold transition ${
                      active ? 'text-crimson underline decoration-2 underline-offset-4' : 'text-navy hover:text-crimson'
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => openModal({ source: 'header' })}
              className="hidden min-h-[42px] rounded-lg bg-crimson px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-crimson-dark sm:block"
            >
              Book Free Counselling
            </button>
            <button
              type="button"
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl p-2 text-navy hover:bg-slate-100 lg:hidden"
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
              aria-expanded={open}
              aria-controls="mobile-nav"
            >
              {open ? <X aria-hidden="true" className="h-6 w-6" /> : <Menu aria-hidden="true" className="h-6 w-6" />}
            </button>
          </div>
        </nav>

        {open && (
          <div id="mobile-nav" className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto overscroll-contain border-t bg-white lg:hidden">
            <ul className="mx-auto max-w-7xl px-4 py-2 sm:px-6">
              {links.map((l) => {
                const active = l.href === '/' ? norm(pathname) === '/' : norm(pathname).startsWith(norm(l.href));
                return (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      aria-current={active ? 'page' : undefined}
                      onClick={() => setOpen(false)}
                      className={`block py-3 font-semibold ${
                        active ? 'text-crimson underline decoration-2 underline-offset-4' : 'text-navy'
                      }`}
                    >
                      {l.label}
                    </Link>
                  </li>
                );
              })}
              <li className="space-y-2 border-t py-3">
                <button
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    openModal({ source: 'mobile-menu' });
                  }}
                  className="min-h-[48px] w-full rounded-xl bg-crimson px-4 py-3 font-semibold text-white"
                >
                  Book Free Counselling
                </button>
                <a href={`tel:${siteConfig.phoneRaw}`} className="flex items-center gap-2 py-1 text-sm font-semibold text-navy">
                  <Phone aria-hidden="true" className="h-4 w-4 text-crimson" /> {siteConfig.phoneDisplay}
                </a>
                <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 py-1 text-sm font-semibold text-navy">
                  <Mail aria-hidden="true" className="h-4 w-4 text-crimson" /> {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
}
