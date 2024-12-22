import { notFound } from 'next/navigation'
import { fetchRelease } from '../../utils/api'
import ReleaseCard from '../../components/ReleaseCard'
import Link from 'next/link'
import { Metadata } from 'next'

export async function generateMetadata({ params }: { params: { tag: string } }): Promise<Metadata> {
  const release = await fetchRelease(params.tag)
  if (!release) return {}

  return {
    title: `Release ${release.tag_name}`,
    description: `Release details and download statistics for Blink Eye version ${release.tag_name}`,
    openGraph: {
      title: `Blink Eye ${release.tag_name}`,
      description: `Release details and download statistics for Blink Eye version ${release.tag_name}`,
    },
  }
}

export default async function ReleasePage({ params }: { params: { tag: string } }) {
  const release = await fetchRelease(params.tag)

  if (!release) {
    notFound()
  }

  return (
    <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Release: {release.name || release.tag_name}</h1>
        <Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-accent dark:hover:text-accent">
          &larr; Back to all releases
        </Link>
      </div>
      <ReleaseCard release={release} />
    </main>
  )
}

