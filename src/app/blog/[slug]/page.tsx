import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Calendar, CheckCircle2, Clock, MapPin, MessageCircle } from 'lucide-react';
import { blogPosts, getBlogPost } from '@/data/blogPosts';
import { buildWhatsAppUrl, siteConfig } from '@/config/site';
import FaqAccordion from '@/components/FaqAccordion';
import LeadCaptureForm from '@/components/LeadCaptureForm';

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  const url = `${siteConfig.siteUrl}/blog/${post.slug}/`;
  return {
    title: post.seoTitle,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      siteName: 'X-Axis Overseas',
      locale: 'en_IN',
      title: post.seoTitle,
      description: post.description,
      url,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      images: [{ url: '/og-card.png', type: 'image/png', width: 1200, height: 630 }],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const canonical = `${siteConfig.siteUrl}/blog/${post.slug}/`;
  const related = post.relatedSlugs
    .map((s) => getBlogPost(s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.description,
        datePublished: post.publishedAt,
        dateModified: post.updatedAt,
        mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
        image: `${siteConfig.siteUrl}/og-card.png`,
        author: { '@type': 'Organization', name: siteConfig.legalName, url: siteConfig.siteUrl },
        publisher: {
          '@type': 'Organization',
          name: siteConfig.legalName,
          url: siteConfig.siteUrl,
          logo: { '@type': 'ImageObject', url: `${siteConfig.siteUrl}/logo.png` },
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteConfig.siteUrl}/` },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${siteConfig.siteUrl}/blog/` },
          { '@type': 'ListItem', position: 3, name: post.title, item: canonical },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: post.faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
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
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-4 flex flex-wrap items-center gap-2 text-xs text-white/70">
            <Link href="/" className="hover:text-white">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/blog/" className="hover:text-white">Blog</Link>
            <span aria-hidden="true">/</span>
            <span className="text-gold">{post.category}</span>
          </nav>
          <div className="mb-3 flex flex-wrap items-center gap-2 text-xs">
            <span className="rounded-full bg-crimson px-2.5 py-0.5 font-semibold text-white">{post.intakeTag}</span>
            <span className="inline-flex items-center gap-1 text-white/80">
              <Calendar aria-hidden="true" className="h-3.5 w-3.5" /> Updated {post.updatedAt}
            </span>
            <span className="inline-flex items-center gap-1 text-white/80">
              <Clock aria-hidden="true" className="h-3.5 w-3.5" /> {post.readTime}
            </span>
          </div>
          <h1 className="font-serif text-3xl font-bold leading-tight sm:text-4xl">{post.title}</h1>
          <p className="mt-3 text-base text-white/80">{post.description}</p>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="grid gap-3 rounded-2xl border border-slate-200 bg-ivory p-5 sm:grid-cols-2 lg:grid-cols-4">
          {post.quickFacts.map((fact) => (
            <div key={fact.label}>
              <p className="text-[11px] font-bold uppercase tracking-wider text-crimson">{fact.label}</p>
              <p className="mt-1 text-sm font-semibold text-navy">{fact.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 space-y-10">
          {post.sections.map((sec, idx) => (
            <div key={sec.heading}>
              <section>
                <h2 className="font-serif text-2xl font-bold text-navy">{sec.heading}</h2>
                <div className="mt-3 space-y-4 text-[15px] leading-relaxed text-slate-700 sm:text-base">
                  {sec.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
                {sec.bullets && (
                  <ul className="mt-4 space-y-2.5 text-[15px] text-slate-700">
                    {sec.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5">
                        <CheckCircle2 aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-crimson" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {sec.table && (
                  <div
                    tabIndex={0}
                    role="region"
                    aria-label={sec.table.caption}
                    className="mt-5 overflow-x-auto rounded-xl border border-slate-200"
                  >
                    <table className="w-full min-w-[540px] border-collapse text-left text-sm">
                      <caption className="bg-slate-50 px-4 py-2.5 text-left text-xs font-semibold text-slate-600">
                        {sec.table.caption}
                      </caption>
                      <thead className="bg-navy text-white">
                        <tr>
                          {sec.table.headers.map((h) => (
                            <th key={h} scope="col" className="px-4 py-3 font-semibold">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 bg-white">
                        {sec.table.rows.map((row) => (
                          <tr key={row[0]} className="hover:bg-slate-50">
                            {row.map((cell, ci) => (
                              <td
                                key={`${row[0]}-${ci}`}
                                className={`px-4 py-3 ${ci === 0 ? 'font-semibold text-navy' : 'text-slate-700'}`}
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </section>

              {idx === 1 && (
                <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-2xl bg-navy p-6 text-white sm:flex-row sm:items-center">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gold">Free 60-Second Tool</p>
                    <p className="mt-1 text-lg font-bold">Check Which UK Universities Fit Your Profile</p>
                    <p className="mt-0.5 text-sm text-white/75">
                      See Russell Group, London &amp; MOI-friendly options based on your score, backlogs &amp; intake.
                    </p>
                  </div>
                  <Link
                    href="/eligibility/"
                    className="inline-flex min-h-[44px] shrink-0 items-center gap-1.5 rounded-xl bg-crimson px-5 py-2.5 text-sm font-semibold text-white hover:bg-crimson-dark"
                  >
                    Check Eligibility <ArrowRight aria-hidden="true" className="h-4 w-4" />
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>

        <section className="mt-12">
          <h2 className="mb-4 font-serif text-2xl font-bold text-navy">Frequently Asked Questions</h2>
          <FaqAccordion items={post.faqs} />
        </section>

        <p className="mt-8 rounded-xl bg-slate-50 p-4 text-xs leading-relaxed text-slate-600">
          <strong>Accuracy Note:</strong> UKVI rules, maintenance fund thresholds, and university MOI criteria change periodically. Figures above reflect official GOV.UK updates as of November 2026—always confirm current policies on{' '}
          <a href="https://www.gov.uk/student-visa" target="_blank" rel="noopener noreferrer" className="font-semibold text-navy underline">
            gov.uk/student-visa
          </a>{' '}
          or with an X-Axis counsellor before applying.
        </p>

        <section className="mt-10 grid gap-6 rounded-2xl border border-slate-200 bg-ivory p-6 sm:p-8 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-crimson">Free UK Counselling</p>
            <h2 className="mt-1 font-serif text-2xl font-bold text-navy">Get Help With Your UK Application</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Need a Spring 2027 or September 2027 shortlist, MOI check, or free 28-day financial document audit? Talk to our Hyderabad UK counsellors.
            </p>
            <p className="mt-4 flex items-start gap-2 text-sm text-slate-700">
              <MapPin aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-crimson" />
              <span>{siteConfig.address.full}</span>
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={buildWhatsAppUrl(`Hi X-Axis, I just read "${post.title}" and want free UK counselling.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-green-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-green-700"
              >
                <MessageCircle aria-hidden="true" className="h-4 w-4" /> WhatsApp {siteConfig.phoneDisplay}
              </a>
              <Link
                href="/universities/"
                className="inline-flex min-h-[44px] items-center rounded-xl border border-navy px-4 py-2.5 text-sm font-semibold text-navy hover:bg-navy hover:text-white"
              >
                Browse UK Universities
              </Link>
            </div>
          </div>
          <div className="rounded-xl bg-white p-5 shadow-sm">
            <LeadCaptureForm variant="compact" prefill={{ source: `blog-${post.slug}` }} />
          </div>
        </section>

        {related.length > 0 && (
          <section className="mt-12 border-t border-slate-200 pt-10">
            <h2 className="font-serif text-xl font-bold text-navy">Related UK Study Guides</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}/`}
                  className="group rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-crimson/40"
                >
                  <span className="text-[11px] font-bold uppercase tracking-wide text-crimson">{r.category}</span>
                  <h3 className="mt-1 font-bold text-navy group-hover:text-crimson">{r.title}</h3>
                  <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-crimson">
                    Read guide <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}

        <div className="mt-8">
          <Link href="/blog/" className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-crimson">
            <ArrowLeft aria-hidden="true" className="h-4 w-4" /> Back to all UK Study Guides
          </Link>
        </div>
      </article>
    </>
  );
}
