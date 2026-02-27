'use client'

import type { Service } from '@/types'
import { ServiceCard } from './ServiceCard'

interface ServicesProps {
  services: Service[]
  onToggleService?: (serviceId: string) => void
  onNavigate?: (href: string) => void
}

export function Services({ services, onToggleService, onNavigate }: ServicesProps) {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Services
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl">
            Four tailored engagement models to help companies scale their engineering organizations and technical leadership.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onToggle={() => onToggleService?.(service.id)}
              onContactClick={() => onNavigate?.('/contact')}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
