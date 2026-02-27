import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ClientShell } from '@/components/shell/ClientShell'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Stack and Scale',
  description: 'Hands-on engineering leadership for startups and mid-market companies.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientShell>{children}</ClientShell>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
