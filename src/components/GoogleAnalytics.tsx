'use client';

import { useEffect } from 'react';
import Script from 'next/script';
import { siteConfig } from '@/config/site';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(eventName: string, params?: Record<string, string>) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('event', eventName, params);
}

export default function GoogleAnalytics() {
  const id = siteConfig.gaMeasurementId;

  useEffect(() => {
    if (!id) return;
    const onClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement | null)?.closest('a[href]') as HTMLAnchorElement | null;
      if (!anchor) return;
      const href = anchor.getAttribute('href') || '';
      if (href.startsWith('tel:')) {
        trackEvent('click_call', { event_category: 'lead', page_path: window.location.pathname });
      } else if (href.startsWith('https://wa.me/')) {
        trackEvent('click_whatsapp', { event_category: 'lead', page_path: window.location.pathname });
      }
    };
    document.addEventListener('click', onClick, { passive: true });
    return () => document.removeEventListener('click', onClick);
  }, [id]);

  if (!id) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${id}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${id}');`}
      </Script>
    </>
  );
}
