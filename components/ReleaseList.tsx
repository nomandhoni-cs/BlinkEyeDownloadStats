import { fetchReleases } from '../utils/api'
import ReleaseCard from './ReleaseCard'

export default async function ReleaseList() {
  const releases = await fetchReleases()

  return (
    <div className="space-y-6">
      {releases.map((release) => (
        <ReleaseCard key={release.id} release={release} />
      ))}
    </div>
  )
}

