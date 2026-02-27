'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Services } from '@/components/services/Services'
import { servicesData } from '@/data/services'
import type { Service } from '@/types'

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>(servicesData)
  const router = useRouter()

  const handleToggleService = (serviceId: string) => {
    setServices((prev) =>
      prev.map((s) =>
        s.id === serviceId ? { ...s, expanded: !s.expanded } : s
      )
    )
  }

  return (
    <Services
      services={services}
      onToggleService={handleToggleService}
      onNavigate={(href) => router.push(href)}
    />
  )
}
