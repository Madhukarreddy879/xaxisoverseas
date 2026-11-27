import { siteConfig } from '@/config/site';

export default function JsonLd() {
  const a = siteConfig.address;
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['EducationalOrganization', 'LocalBusiness'],
        '@id': `${siteConfig.siteUrl}/#org`,
        name: siteConfig.legalName,
        alternateName: 'X-Axis Overseas',
        url: siteConfig.siteUrl,
        email: siteConfig.email,
        telephone: siteConfig.phoneRaw,
        description: 'UK study abroad and student visa consultants in Hyderabad.',
        openingHours: 'Mo-Sa 10:00-19:00',
        address: {
          '@type': 'PostalAddress',
          streetAddress: `${a.line1}, ${a.line2}`,
          addressLocality: a.city,
          addressRegion: a.state,
          postalCode: a.pincode,
          addressCountry: 'IN',
        },
        areaServed: 'India',
      },
      {
        '@type': 'WebSite',
        '@id': `${siteConfig.siteUrl}/#website`,
        url: siteConfig.siteUrl,
        name: 'X-Axis Overseas',
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} />;
}
