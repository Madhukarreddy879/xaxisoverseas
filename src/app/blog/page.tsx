import type { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '@/data/blogPosts';
import { siteConfig } from '@/config/site';
import BlogExplorer, { type BlogCardItem } from '@/components/BlogExplorer';
import CtaButton from '@/components/CtaButton';

export const metadata: Metadata = {
  title: 'UK Study Abroad Blog & Visa Guides',
  description:
    'Up-to-date UK study abroad guides from X-Axis Overseas Hyderabad: March/May 2027 intakes, MOI waivers, new UKVI funds, Pre-CAS Q&As, backlogs, scholarships & PSW.',
  openGraph: {
    type: 'website',
    siteName: 'X-Axis Overseas',
    locale: 'en_IN',
    title: 'UK Study Abroad Blog & Visa Guides',
    description:
      'Up-to-date UK study abroad guides from X-Axis Overseas Hyderabad: March/May 2027 intakes, MOI waivers, new UKVI funds, Pre-CAS Q&As, backlogs, scholarships & PSW.',
    url: 'https://xaxisoverseas.com/blog/',
    images: [{ url: '/og-card.png', type: 'image/png', width: 1200, height: 630 }],
  },
};

export default function BlogIndexPage() {
  const summaries: BlogCardItem[] = blogPosts.map(
    ({ slug, title, description, category, intakeTag, updatedAt, readTime }) => ({
      slug,
      title,
      description,
      category,
      intakeTag,
      updatedAt,
      readTime,
    })
  );

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        name: 'UK Study Abroad Blog & Visa Guides',
        url: `${siteConfig.siteUrl}/blog/`,
        description:
          'In-depth UK university admissions, MOI waivers, UKVI maintenance funds, Pre-CAS interview prep, scholarships, and 2027 Graduate Route PSW guides.',
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: blogPosts.map((post, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            url: `${siteConfig.siteUrl}/blog/${post.slug}/`,
            name: post.title,
          })),
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteConfig.siteUrl}/` },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${siteConfig.siteUrl}/blog/` },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
      <section className="bg-navy py-10 text-white sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-gold">UK Study Insights • Updated Nov 2026</p>
          <h1 className="mt-1.5 font-serif text-3xl font-bold sm:text-4xl">UK Study Abroad Blog &amp; Visa Guides</h1>
          <p className="mt-3 max-w-2xl text-white/80">
            In-depth guides for Hyderabad &amp; Indian students covering UK March/May &amp; September 2027 intakes, MOI waivers, backlogs and study gaps, Pre-CAS interview Q&amp;As, scholarships, updated UKVI funds, VFS Hyderabad steps, and 2027 Graduate Route PSW rules.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <BlogExplorer posts={summaries} />

        <div className="mt-12 rounded-2xl bg-navy p-6 text-center text-white sm:p-10">
          <h2 className="font-serif text-2xl font-bold sm:text-3xl">Want a Personalised UK University Shortlist?</h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-white/80 sm:text-base">
            Book a free 1-on-1 counselling session online or walk in to our Ameerpet, Hyderabad office.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <CtaButton source="blog-index" className="min-h-[48px] rounded-xl bg-crimson px-6 py-3 font-semibold text-white hover:bg-crimson-dark">
              Book Free UK Counselling
            </CtaButton>
            <Link
              href="/eligibility/"
              className="inline-flex min-h-[48px] items-center justify-center rounded-xl border border-white/30 px-6 py-3 font-semibold text-white hover:bg-white/10"
            >
              Take 60-Sec Eligibility Check
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
