import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Playfair_Display } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';
import JsonLd from '@/components/JsonLd';
import { CounsellingProvider } from '@/components/CounsellingContext';

const sans = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const serif = Playfair_Display({ subsets: ['latin'], variable: '--font-serif', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://xaxisoverseas.com'),
  title: {
    default: 'X-Axis Overseas — Study in UK Consultants in Hyderabad',
    template: '%s | X-Axis Overseas — Study in UK Consultants Hyderabad',
  },
  description:
    'X-Axis Overseas is a Hyderabad (Ameerpet) consultancy specialising in UK university admissions, scholarships, MOI/without-IELTS options and UK student visas. Free counselling.',
  alternates: { canonical: './' },
  openGraph: {
    type: 'website',
    siteName: 'X-Axis Overseas',
    locale: 'en_IN',
    images: [{ url: '/og-card.png', type: 'image/png', width: 1200, height: 630, alt: 'X-Axis Overseas — Study in the UK' }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body className="font-sans antialiased">
        <JsonLd />
        <CounsellingProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <FloatingActions />
        </CounsellingProvider>
      </body>
    </html>
  );
}
