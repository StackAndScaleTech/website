'use client'

import Image from 'next/image'
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
        <div className="flex items-center justify-center gap-3 mb-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
            {hero.headline}
          </h1>
          <Image
            src="/StackAndScale-Logo.png"
            alt="Stack and Scale"
            width={200}
            height={200}
            className="w-36 h-36 sm:w-44 sm:h-44 lg:w-56 lg:h-56 object-contain"
            priority
          />
        </div>

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
