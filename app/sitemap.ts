import { MetadataRoute } from 'next';

// --- TODO: Replace with your final domain ---
const siteUrl = "https://hushcabs.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}