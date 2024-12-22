import { ArrowDownIcon, CloudArrowDownIcon } from '@heroicons/react/24/solid'

export default function StatsCard({ releases }) {
  const totalDownloads = releases.reduce((sum, release) => sum + release.total_downloads, 0)
  const latestVersion = releases[0]?.tag_name || 'N/A'

  return (
    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg mb-6">
      <div className="px-4 py-5 sm:p-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="flex items-center">
            <div className="flex-shrink-0 bg-red-100 dark:bg-red-800 rounded-md p-3">
              <CloudArrowDownIcon className="h-6 w-6 text-red-600 dark:text-red-200" aria-hidden="true" />
            </div>
            <div className="ml-5 w-0 flex-1">
              <dl>
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">Total Downloads</dt>
                <dd className="text-3xl font-semibold text-gray-900 dark:text-gray-100">{totalDownloads.toLocaleString()}</dd>
              </dl>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex-shrink-0 bg-red-100 dark:bg-red-800 rounded-md p-3">
              <ArrowDownIcon className="h-6 w-6 text-red-600 dark:text-red-200" aria-hidden="true" />
            </div>
            <div className="ml-5 w-0 flex-1">
              <dl>
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">Latest Version</dt>
                <dd className="text-3xl font-semibold text-gray-900 dark:text-gray-100">{latestVersion}</dd>
              </dl>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex-shrink-0 bg-red-100 dark:bg-red-800 rounded-md p-3">
              <ArrowDownIcon className="h-6 w-6 text-red-600 dark:text-red-200" aria-hidden="true" />
            </div>
            <div className="ml-5 w-0 flex-1">
              <dl>
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">Total Releases</dt>
                <dd className="text-3xl font-semibold text-gray-900 dark:text-gray-100">{releases.length}</dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

