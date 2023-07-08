/*
  Description : Here we define the general layout of the whole project.
  Author      : Prince Dalsaniya
*/

// Imports
import { Footer, Navbar } from '@/components'
import './globals.css'
import type { Metadata } from 'next'

// Metadata
export const metadata: Metadata = {
  title: 'Car Dealer',
  description: 'Car rental platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
