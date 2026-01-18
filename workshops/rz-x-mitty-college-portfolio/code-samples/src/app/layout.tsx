import type { Metadata, Viewport } from 'next'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'Alex Chen | HCI Researcher & Student',
  description:
    'Portfolio website of Alex Chen, a Human-Computer Interaction researcher with published work at CHI, competitive rock climber, and robotics enthusiast.',
  keywords: ['Portfolio', 'HCI', 'Robotics', 'Research', 'Alex Chen'],
  authors: [{ name: 'Alex Chen', url: 'mailto:alex.chen@email.com' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body>{children}</body>
    </html>
  )
}
