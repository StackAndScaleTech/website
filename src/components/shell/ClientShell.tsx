'use client'

import { usePathname, useRouter } from 'next/navigation'
import { AppShell } from './AppShell'

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Experience', href: '/experience' },
  { label: 'Services', href: '/services' },
  { label: 'Contact & Engage', href: '/contact' },
]

export function ClientShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()

  return (
    <AppShell
      navigationItems={NAV_ITEMS.map((item) => ({
        ...item,
        isActive: pathname === item.href,
      }))}
      onNavigate={(href) => router.push(href)}
    >
      {children}
    </AppShell>
  )
}
