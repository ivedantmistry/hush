import { MetadataRoute } from 'next';

// --- TODO: Replace with your final domain ---
const siteUrl = "https://hushcabs.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}