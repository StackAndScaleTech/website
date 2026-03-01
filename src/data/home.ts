import type { HeroSection, Highlight } from '@/types'

export const heroData: HeroSection = {
  headline: 'Build better tech. Scale faster.',
  subheading:
    "I'm David Chancogne — a software engineer and technical leader with 25+ years of building and scaling products. I work with startups and mid-market companies that need someone who can code, lead teams, and think strategically about what to build next.",
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
      "Strategy without execution is just noise. I code, ship, and lead — often all at once. I've scaled teams from 3 to 50+ engineers, led product launches under pressure, and rebuilt architectures mid-flight. You can't lead engineers well without understanding the problems they're actually solving.",
  },
  {
    id: 'cloud-ai-expertise',
    title: 'Cloud Infrastructure & AI',
    description:
      "Tech decisions compound fast — the wrong architecture at year one is still a headache at year five. I've modernized legacy systems that were bleeding money, built cloud architectures that handled 10x growth, and integrated AI into products in ways that actually moved the needle. I help you get those early calls right.",
  },
  {
    id: 'startup-focus',
    title: 'Early-stage to Mid-market',
    description:
      "The messy middle — post-launch but pre-scale, or growing fast and suddenly drowning in technical debt — is where I do my best work. I've been at both stages. I know which decisions lock you in and which ones you can revisit later. And I know which problems kill companies if you get them wrong.",
  },
]
