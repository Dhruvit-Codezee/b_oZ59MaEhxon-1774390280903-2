import { MetadataRoute } from 'next'
import { getServiceSlugs } from '@/lib/services'
import { getUseCaseSlugs } from '@/lib/use-cases'
import { getAllPosts } from '@/lib/blog'

/* ── Fixed dates for stable lastModified signals ──────────────────── */
/* Using real deployment/content-update dates prevents Google from    */
/* ignoring lastmod due to every URL showing "just modified".        */

const SITE_LAUNCH = '2025-01-15T00:00:00Z'
const LAST_CONTENT_UPDATE = '2026-02-21T00:00:00Z'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.automaly.io'

  const serviceSlugs = getServiceSlugs()
  const servicePages: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: LAST_CONTENT_UPDATE,
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }))

  const useCaseSlugs = getUseCaseSlugs()
  const useCasePages: MetadataRoute.Sitemap = useCaseSlugs.map((slug) => ({
    url: `${baseUrl}/use-cases/${slug}`,
    lastModified: LAST_CONTENT_UPDATE,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  /* Use actual blog post dates for lastModified */
  const allPosts = getAllPosts()
  const blogPages: MetadataRoute.Sitemap = allPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.meta.slug}`,
    lastModified: post.meta.date,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  /* Case study pages */
  const caseStudySlugs = ['ethixbase', 'rankedright', 'pattrn-data']
  const caseStudyPages: MetadataRoute.Sitemap = caseStudySlugs.map((slug) => ({
    url: `${baseUrl}/case-studies/${slug}`,
    lastModified: LAST_CONTENT_UPDATE,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }))

  return [
    {
      url: baseUrl,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...servicePages,
    {
      url: `${baseUrl}/pricing`,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/use-cases`,
      lastModified: LAST_CONTENT_UPDATE,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...useCasePages,
    {
      url: `${baseUrl}/blog`,
      lastModified: allPosts[0]?.meta.date ?? LAST_CONTENT_UPDATE,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    ...blogPages,
    ...caseStudyPages,
    {
      url: `${baseUrl}/company/about`,
      lastModified: SITE_LAUNCH,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/company/careers`,
      lastModified: SITE_LAUNCH,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: SITE_LAUNCH,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/support`,
      lastModified: SITE_LAUNCH,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: SITE_LAUNCH,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: SITE_LAUNCH,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
