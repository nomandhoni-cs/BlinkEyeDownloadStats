export async function fetchReleases() {
  const response = await fetch('https://api.github.com/repos/nomandhoni-cs/blink-eye/releases', { next: { revalidate: 3600 } })
  if (!response.ok) {
    throw new Error('Failed to fetch releases')
  }
  const releases = await response.json()
  return releases.map(release => ({
    ...release,
    assets: release.assets.filter(asset => asset.name !== 'latest.json'),
    total_downloads: release.assets
      .filter(asset => asset.name !== 'latest.json')
      .reduce((sum, asset) => sum + asset.download_count, 0)
  }))
}

export async function fetchRelease(tag: string) {
  const releases = await fetchReleases()
  return releases.find(release => release.tag_name === tag)
}

