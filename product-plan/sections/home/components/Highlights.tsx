import type { Highlight } from '../types'

interface HighlightsProps {
  highlights: Highlight[]
}

export function Highlights({ highlights }: HighlightsProps) {
  return (
    <div className="bg-white dark:bg-slate-950 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-4">
            What I Bring
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Expertise across the full spectrum of modern engineering leadership
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight) => (
            <div
              key={highlight.id}
              className="group bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-8 hover:shadow-lg dark:hover:shadow-xl transition-all duration-200 hover:border-blue-300 dark:hover:border-blue-700"
            >
              {/* Icon/Accent */}
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-950 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-100 dark:group-hover:bg-orange-950 transition-colors">
                <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-orange-500 rounded-md opacity-80" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-4">
                {highlight.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
