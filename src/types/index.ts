// =============================================================================
// UI Data Shapes — Combined Reference
//
// These types define the data that UI components expect to receive as props.
// They are a frontend contract, not a database schema.
// =============================================================================

// -----------------------------------------------------------------------------
// From: sections/home
// -----------------------------------------------------------------------------

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

// -----------------------------------------------------------------------------
// From: sections/services
// -----------------------------------------------------------------------------

export interface Service {
  id: string
  name: string
  description: string
  whoItIsFor: string
  keyOutcomes: string[]
  expanded: boolean
}

// -----------------------------------------------------------------------------
// From: sections/experience
// -----------------------------------------------------------------------------

export interface Experience {
  id: string
  title: string
  /** Icon name from the icon library (e.g. Lucide React) */
  icon: string
  description: string
}

export interface ExperienceCTA {
  heading: string
  description: string
  buttonText: string
}

// -----------------------------------------------------------------------------
// From: sections/contact-and-engage
// -----------------------------------------------------------------------------

export interface EngagementType {
  id: string
  label: string
}

export interface Inquiry {
  id: string
  name: string
  email: string
  message: string
  engagementType: string | null
  submitted: boolean
}
