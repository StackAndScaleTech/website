import type { HeroSection, Highlight } from '@/types'
import { Hero } from './Hero'
import { Highlights } from './Highlights'

interface HomeProps {
  hero: HeroSection
  highlights: Highlight[]
  onNavigate?: (href: string) => void
}

export function Home({ hero, highlights, onNavigate }: HomeProps) {
  return (
    <div className="w-full">
      <Hero hero={hero} onNavigate={onNavigate} />
      <Highlights highlights={highlights} />
    </div>
  )
}
