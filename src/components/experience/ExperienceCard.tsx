import {
  Users,
  Rocket,
  BadgeCheck,
  TrendingUp,
  Cloud,
  Code,
  Sparkles,
  type LucideIcon,
} from 'lucide-react'
import type { Experience } from '@/types'

const iconMap: Record<string, LucideIcon> = {
  Users,
  Rocket,
  CheckBadge: BadgeCheck,
  TrendingUp,
  Cloud,
  Code,
  Sparkles,
}

interface ExperienceCardProps {
  experience: Experience
  index: number
}

export function ExperienceCard({ experience, index }: ExperienceCardProps) {
  const Icon = iconMap[experience.icon] ?? Code

  return (
    <div className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-6 transition-all duration-200 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-sm">
      {/* Card top row: icon + index */}
      <div className="flex items-start justify-between mb-5">
        <div className="w-10 h-10 rounded-md bg-blue-50 dark:bg-blue-950 flex items-center justify-center shrink-0">
          <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" strokeWidth={1.5} />
        </div>
        <span className="font-mono text-xs text-slate-300 dark:text-slate-700 tabular-nums">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-semibold text-base text-slate-900 dark:text-slate-100 mb-3 leading-snug">
        {experience.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
        {experience.description}
      </p>
    </div>
  )
}
