import { ArrowRight } from 'lucide-react'
import type { ExperienceProps } from '../types'
import { ExperienceCard } from './ExperienceCard'

export function Experience({ experiences, cta, onContactClick }: ExperienceProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="mb-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-3">
            Background
          </span>
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Experience
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
            From early-stage product development to scaling established engineering organizations — hands-on technical and leadership depth across the full arc of company growth.
          </p>
        </div>

        {/* Experience Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              index={index}
            />
          ))}
        </div>

        {/* CTA Strip */}
        <div className="mt-16 border border-orange-200 dark:border-orange-900/40 bg-orange-50/50 dark:bg-orange-950/20 rounded-lg p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-1">
                {cta.heading}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {cta.description}
              </p>
            </div>
            <button
              onClick={onContactClick}
              className="shrink-0 flex items-center gap-2 bg-orange-500 hover:bg-orange-600 active:scale-95 text-white font-semibold py-2.5 px-5 rounded-md transition-all duration-200 text-sm"
            >
              {cta.buttonText}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}
