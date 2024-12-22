import { DocumentIcon } from '@heroicons/react/24/outline'

export default function FileList({ assets }) {
  return (
    <div>
      <h4 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">Files</h4>
      <ul className="divide-y divide-gray-200 dark:divide-gray-700">
        {assets.map((asset) => (
          <li key={asset.id} className="py-4 flex items-center justify-between">
            <div className="flex items-center">
              <DocumentIcon className="h-5 w-5 text-gray-400 dark:text-gray-500 mr-3" aria-hidden="true" />
              <span className="text-sm font-medium text-gray-900 dark:text-gray-100">{asset.name}</span>
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400">{asset.download_count.toLocaleString()} downloads</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

