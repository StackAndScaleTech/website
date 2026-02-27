'use client'

import { useState } from 'react'
import { Services } from '@/components/services/Services'
import { servicesData } from '@/data/services'
import type { Service } from '@/types'

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>(servicesData)

  const handleToggleService = (serviceId: string) => {
    setServices((prev) =>
      prev.map((s) =>
        s.id === serviceId ? { ...s, expanded: !s.expanded } : s
      )
    )
  }

  return (
    <Services services={services} onToggleService={handleToggleService} />
  )
}
