export interface CTAButton {
  label: string
  href: string
  variant: 'primary' | 'secondary'
}

export interface HeroSection {
  headline: string
  subheading: string
  ctaButtons: CTAButton[]
}

export interface Highlight {
  id: string
  title: string
  description: string
}

export interface HomeProps {
  /** Hero section with headline, subheading, and CTA buttons */
  hero: HeroSection
  /** Array of key highlights showcasing expertise areas */
  highlights: Highlight[]
  /** Callback fired when a CTA button is clicked */
  onNavigate?: (href: string) => void
}
