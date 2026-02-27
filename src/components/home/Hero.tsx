'use client'

import type { HeroSection } from '@/types'

interface HeroProps {
  hero: HeroSection
  onNavigate?: (href: string) => void
}

export function Hero({ hero, onNavigate }: HeroProps) {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-slate-50 mb-6">
          {hero.headline}
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 mb-12 leading-relaxed">
          {hero.subheading}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {hero.ctaButtons.map((button) => (
            <button
              key={button.href}
              onClick={() => onNavigate?.(button.href)}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-200 text-base sm:text-lg ${
                button.variant === 'primary'
                  ? 'bg-blue-600 text-white hover:bg-blue-700 active:scale-95 dark:bg-blue-500 dark:hover:bg-blue-600'
                  : 'bg-orange-500 text-white hover:bg-orange-600 active:scale-95 dark:bg-orange-600 dark:hover:bg-orange-700'
              }`}
            >
              {button.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
