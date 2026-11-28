'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import type { BlogPost } from '@/data/blogPosts';

export type BlogCardItem = Pick<
  BlogPost,
  'slug' | 'title' | 'description' | 'category' | 'intakeTag' | 'updatedAt' | 'readTime'
>;

const CATEGORY_ORDER: BlogPost['category'][] = [
  'Intakes',
  'MOI & Eligibility',
  'Visa & Funds',
  'Scholarships & Cost',
  'Hyderabad Local',
];

export default function BlogExplorer({ posts }: { posts: BlogCardItem[] }) {
  const [selected, setSelected] = useState<'All' | BlogPost['category']>('All');

  const categories = CATEGORY_ORDER.filter((cat) => posts.some((p) => p.category === cat));
  const filtered = selected === 'All' ? posts : posts.filter((p) => p.category === selected);

  return (
    <div>
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div role="group" aria-label="Filter UK study guides by topic" className="flex flex-wrap gap-2">
          <button
            type="button"
            aria-pressed={selected === 'All'}
            onClick={() => setSelected('All')}
            className={`min-h-[40px] rounded-full px-4 py-1.5 text-xs font-semibold transition sm:text-sm ${
              selected === 'All'
                ? 'bg-navy text-white shadow-sm'
                : 'border border-slate-200 bg-white text-slate-700 hover:border-navy/40 hover:text-navy'
            }`}
          >
            All ({posts.length})
          </button>
          {categories.map((cat) => {
            const count = posts.filter((p) => p.category === cat).length;
            const active = selected === cat;
            return (
              <button
                key={cat}
                type="button"
                aria-pressed={active}
                onClick={() => setSelected(cat)}
                className={`min-h-[40px] rounded-full px-4 py-1.5 text-xs font-semibold transition sm:text-sm ${
                  active
                    ? 'bg-crimson text-white shadow-sm'
                    : 'border border-slate-200 bg-white text-slate-700 hover:border-crimson/40 hover:text-crimson'
                }`}
              >
                {cat} ({count})
              </button>
            );
          })}
        </div>

        <p aria-live="polite" className="shrink-0 text-xs font-medium text-slate-500">
          Showing {filtered.length} {filtered.length === 1 ? 'guide' : 'guides'}
          {selected !== 'All' ? ` in ${selected}` : ''}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {filtered.map((post) => (
          <article
            key={post.slug}
            className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-slate-300 hover:shadow-md"
          >
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="rounded-full bg-crimson-light px-2.5 py-0.5 font-bold text-crimson">{post.category}</span>
              <span className="rounded-full bg-gold-light px-2.5 py-0.5 font-semibold text-amber-800">{post.intakeTag}</span>
              <span className="ml-auto inline-flex items-center gap-1 text-slate-500">
                <Clock aria-hidden="true" className="h-3.5 w-3.5" /> {post.readTime}
              </span>
            </div>
            <h2 className="mt-3 font-serif text-xl font-bold leading-snug text-navy">
              <Link href={`/blog/${post.slug}/`} className="hover:text-crimson">
                {post.title}
              </Link>
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{post.description}</p>
            <div className="mt-auto flex items-center justify-between pt-5 text-sm">
              <span className="inline-flex items-center gap-1.5 text-xs text-slate-500">
                <Calendar aria-hidden="true" className="h-3.5 w-3.5" />
                <time dateTime={post.updatedAt}>Updated {post.updatedAt}</time>
              </span>
              <Link
                href={`/blog/${post.slug}/`}
                className="inline-flex items-center gap-1 font-semibold text-crimson hover:underline"
              >
                Read guide<span className="sr-only">: {post.title}</span> <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
