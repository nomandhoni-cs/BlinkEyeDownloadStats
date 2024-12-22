import { CalendarIcon, CloudArrowDownIcon } from '@heroicons/react/24/outline'
import { formatDate } from '../utils/helpers'
import FileList from './FileList'
import Changelog from './Changelog'

export default function ReleaseCard({ release }) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
          {release.name || release.tag_name}
        </h3>
        <div className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center space-x-2">
            <CalendarIcon className="h-5 w-5 text-gray-400 dark:text-gray-500" aria-hidden="true" />
            <span>{formatDate(release.published_at)}</span>
          </div>
          <div className="flex items-center space-x-2 mt-1">
            <CloudArrowDownIcon className="h-5 w-5 text-gray-400 dark:text-gray-500" aria-hidden="true" />
            <span>{release.total_downloads.toLocaleString()} downloads</span>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 dark:border-gray-700 px-4 py-5 sm:px-6">
        <FileList assets={release.assets} />
      </div>
      <div className="border-t border-gray-200 dark:border-gray-700 px-4 py-5 sm:px-6">
        <Changelog body={release.body} />
      </div>
    </div>
  )
}

