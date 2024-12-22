'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <nav className="bg-white dark:bg-gray-800 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center gap-2">
            <Image
              src="https://utfs.io/f/93hqarYp4cDdY0euKxvcTyVLEjQxOU1ovp9SM8PzDAnJKZs2"
              alt="Blink Eye Logo"
              width={32}
              height={32}
              className="rounded-full"
            />
            <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white hover:text-accent dark:hover:text-accent">
              Blink Eye Stats
            </Link>
          </div>
          <div className="flex items-center">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-accent dark:hover:text-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <SunIcon className="h-6 w-6" />
              ) : (
                <MoonIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

