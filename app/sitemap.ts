import { MetadataRoute } from 'next'
import { fetchReleases } from './utils/api'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const releases = await fetchReleases()
  const baseUrl = 'https://stats.blinkeye.app'
  
  const releaseUrls = releases.map((release) => ({
    url: `${baseUrl}/release/${release.tag_name}`,
    lastModified: new Date(release.published_at),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    ...releaseUrls,
  ]
}

