import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const routes = ['', 'study-in-uk/', 'universities/', 'services/', 'eligibility/', 'about/', 'contact/'];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((r) => ({
    url: `https://xaxisoverseas.com/${r}`,
    lastModified: new Date(),
  }));
}
