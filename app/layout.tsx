import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Recipe Website',
  description: 'Database of tasy recipes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header title={metadata.title?.toString()} description={metadata.description?.toString()} />

          <div className='flex-grow'>
            <main className="container mx-auto py-4 px-8">
              {children}
            </main>
          </div>

          <Footer title={metadata.title?.toString()} description={metadata.description?.toString()} />
        </div>
      </body>
    </html>
  )
}