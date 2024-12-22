import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from './components/theme-provider'
import Navbar from './components/Navbar'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Blink Eye Stats',
    template: '%s | Blink Eye Stats',
  },
  description: 'Track download statistics and releases for the Blink Eye application',
  keywords: ['Blink Eye', 'statistics', 'downloads', 'releases', 'app analytics'],
  authors: [{ name: 'Blink Eye Team' }],
  openGraph: {
    title: 'Blink Eye Stats',
    description: 'Track download statistics and releases for the Blink Eye application',
    url: 'https://stats.blinkeye.app',
    siteName: 'Blink Eye Stats',
    images: [
      {
        url: '/logo.png',
        width: 512,
        height: 512,
        alt: 'Blink Eye Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blink Eye Stats',
    description: 'Track download statistics and releases for the Blink Eye application',
    images: ['/logo.png'],
  },
  icons: {
    icon: [
      {
        url: '/logo.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/logo.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        url: '/logo.png',
        sizes: '512x512',
        type: 'image/png',
      }
    ],
    apple: [
      {
        url: '/logo.png',
        sizes: '180x180',
        type: 'image/png',
      }
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-gray-100 dark:bg-gray-900`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

