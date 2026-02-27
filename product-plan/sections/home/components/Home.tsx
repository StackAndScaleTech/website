import type { HomeProps } from '../types'
import { Hero } from './Hero'
import { Highlights } from './Highlights'

/**
 * Home section component - The main landing page for Stack and Scale
 * Displays hero positioning and key expertise highlights
 */
export function Home({ hero, highlights, onNavigate }: HomeProps) {
  return (
    <div className="w-full">
      <Hero hero={hero} onNavigate={onNavigate} />
      <Highlights highlights={highlights} />
    </div>
  )
}
