'use client'

import { useRouter } from 'next/navigation'
import { Home } from '@/components/home/Home'
import { heroData, highlightsData } from '@/data/home'

export default function HomePage() {
  const router = useRouter()

  return (
    <Home
      hero={heroData}
      highlights={highlightsData}
      onNavigate={(href) => router.push(href)}
    />
  )
}
