'use client'

import type { Service } from '@/types'
import { ChevronDown } from 'lucide-react'

interface ServiceCardProps {
  service: Service
  onToggle?: () => void
}

export function ServiceCard({ service, onToggle }: ServiceCardProps) {
  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {/* Card Header - Always Visible */}
      <button
        onClick={onToggle}
        className="w-full p-6 text-left hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
              {service.name}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
              {service.description}
            </p>
          </div>
          <ChevronDown
            className={`w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 transition-transform ${
              service.expanded ? 'rotate-180' : ''
            }`}
          />
        </div>
      </button>

      {/* Expanded Content */}
      {service.expanded && (
        <div className="border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
          <div className="p-6 space-y-6">
            {/* Who It's For */}
            <div>
              <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-2">
                Who It&apos;s For
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                {service.whoItIsFor}
              </p>
            </div>

            {/* Key Outcomes */}
            <div>
              <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">
                Key Outcomes
              </h4>
              <ul className="space-y-2">
                {service.keyOutcomes.map((outcome, idx) => (
                  <li key={idx} className="flex gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0 mt-1.5" />
                    <span className="text-sm text-slate-600 dark:text-slate-300">
                      {outcome}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <button className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium py-2.5 px-4 rounded-md transition-colors">
              Get Started
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
