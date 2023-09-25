import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Analytics } from '@vercel/analytics/react';

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Share Recipe',
  description: 'Share and find recipes from around the world.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="description" content={metadata.description?.toString()} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon/favicon.ico" />
      </head>
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header title={metadata.title?.toString()} />

          <div className='flex-grow'>
            <main className="container mx-auto py-4 px-8">
              {children}
              <Analytics />
            </main>
          </div>

          <Footer title={metadata.title?.toString()} />
        </div>
      </body>
    </html>
  )
}