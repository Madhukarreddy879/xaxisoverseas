import type { MetadataRoute } from 'next';
import { blogPosts } from '@/data/blogPosts';

export const dynamic = 'force-static';

// Explicit content-modified dates so Google trusts sitemap lastmod (never bump unchanged routes).
const staticRoutes: { path: string; lastModified: string }[] = [
  { path: '', lastModified: '2026-11-28' },
  { path: 'study-in-uk/', lastModified: '2026-11-28' },
  { path: 'universities/', lastModified: '2026-11-28' },
  { path: 'services/', lastModified: '2026-11-28' },
  { path: 'eligibility/', lastModified: '2026-11-28' },
  { path: 'about/', lastModified: '2026-11-28' },
  { path: 'contact/', lastModified: '2026-11-28' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const latestBlogDate = blogPosts.reduce(
    (latest, post) => (post.updatedAt > latest ? post.updatedAt : latest),
    '2026-11-27'
  );

  const base = staticRoutes.map((r) => ({
    url: `https://xaxisoverseas.com/${r.path}`,
    lastModified: new Date(`${r.lastModified}T09:00:00+05:30`),
  }));

  const blogIndex = {
    url: 'https://xaxisoverseas.com/blog/',
    lastModified: new Date(`${latestBlogDate}T09:00:00+05:30`),
  };

  const blogs = blogPosts.map((p) => ({
    url: `https://xaxisoverseas.com/blog/${p.slug}/`,
    lastModified: new Date(`${p.updatedAt}T09:00:00+05:30`),
  }));

  return [...base, blogIndex, ...blogs];
}
