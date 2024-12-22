import { remark } from 'remark'
import html from 'remark-html'

export default async function Changelog({ body }) {
  const processedContent = await remark()
    .use(html)
    .process(body)
  const contentHtml = processedContent.toString()

  return (
    <div>
      <h4 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">Changelog</h4>
      <div 
        className="text-sm text-gray-700 dark:text-gray-300 space-y-4"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </div>
  )
}

