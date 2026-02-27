import type { HeroSection, Highlight } from '@/types'

export const heroData: HeroSection = {
  headline: 'Build better tech. Scale faster.',
  subheading:
    'I help startups and mid-market companies architect modern tech, scale their engineering teams, and navigate growth. As a hands-on engineer and leader, I bring both execution and strategic vision.',
  ctaButtons: [
    { label: 'View Services', href: '/services', variant: 'primary' },
    { label: 'Start a Conversation', href: '/contact', variant: 'secondary' },
  ],
}

export const highlightsData: Highlight[] = [
  {
    id: 'hands-on-leader',
    title: 'Hands-on Engineer + Proven Leader',
    description:
      "I don't just strategize — I code. Whether it's architecting cloud infrastructure, shipping features, or building teams from scratch, I lead by example. I've scaled engineering orgs from 3 to 50+ people while staying deeply involved in technical decisions.",
  },
  {
    id: 'cloud-ai-expertise',
    title: 'Cloud Infrastructure & AI',
    description:
      'From modernizing legacy systems to cloud-native architecture, from integrating AI capabilities to optimizing infrastructure costs — I bring hands-on expertise in the technologies that power modern startups. I help you make the right tech choices early.',
  },
  {
    id: 'startup-focus',
    title: 'Early-stage to Mid-market',
    description:
      "I focus on companies finding their footing and navigating growth. Whether you're a pre-Series A startup looking for your first CTO or a mid-market company modernizing your tech stack, I understand the unique constraints and opportunities at each stage.",
  },
]
