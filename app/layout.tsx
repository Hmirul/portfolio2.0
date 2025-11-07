import type { Metadata } from 'next'
import { ThemeProviderClient } from '@/components/ThemeProviderClient'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'Premium Portfolio',
  description: 'A premium, minimalist portfolio website with iOS/Apple aesthetic',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#fafafa" />
      </head>
      <body>
        <ThemeProviderClient>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProviderClient>
      </body>
    </html>
  )
}
