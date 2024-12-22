import Link from 'next/link'
import { Suspense } from 'react'
import StatsCard from './components/StatsCard'
import { fetchReleases } from './utils/api'
import { formatDate } from './utils/helpers'

export const metadata = {
  title: 'Home',
}

export default async function Home() {
  const releases = await fetchReleases()

  return (
    <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <Suspense fallback={<div>Loading stats...</div>}>
        <StatsCard releases={releases} />
      </Suspense>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Releases ({releases.length})</h2>
        <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-md">
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {releases.map((release) => (
              <li key={release.id}>
                <Link href={`/release/${release.tag_name}`} className="block hover:bg-gray-50 dark:hover:bg-gray-700">
                  <div className="px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                        {release.name || release.tag_name}
                      </p>
                      <div className="ml-2 flex-shrink-0 flex">
                        <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100">
                          {release.total_downloads.toLocaleString()} downloads
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 sm:flex sm:justify-between">
                      <div className="sm:flex">
                        <p className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                          {formatDate(release.published_at)}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  )
}

