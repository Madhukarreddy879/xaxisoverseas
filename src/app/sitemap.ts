import type { MetadataRoute } from 'next';
import { blogPosts } from '@/data/blogPosts';

export const dynamic = 'force-static';

const staticRoutes = ['', 'study-in-uk/', 'universities/', 'services/', 'eligibility/', 'blog/', 'about/', 'contact/'];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = staticRoutes.map((r) => ({
    url: `https://xaxisoverseas.com/${r}`,
    lastModified: now,
  }));
  const blogs = blogPosts.map((p) => ({
    url: `https://xaxisoverseas.com/blog/${p.slug}/`,
    lastModified: new Date(p.updatedAt),
  }));
  return [...base, ...blogs];
}
