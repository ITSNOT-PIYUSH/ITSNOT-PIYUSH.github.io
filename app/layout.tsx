import React from 'react'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Piyush Mandal - AIML Engineer',
  description: 'Portfolio of Piyush Mandal, AIML Engineering Student based in Bangalore. Showcasing projects in AI, Machine Learning, and Web Development.',
  keywords: ['Piyush Mandal', 'AIML Engineer', 'Portfolio', 'AI', 'Machine Learning', 'Bangalore'],
  authors: [{ name: 'Piyush Mandal' }],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
} 