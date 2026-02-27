import type { Service } from '@/types'

export const servicesData: Service[] = [
  {
    id: 'technical-consulting',
    name: 'Technical Consulting',
    description:
      'Deep-dive advisory on architecture decisions, technology modernization, and technical strategy. Ideal for teams facing complex engineering challenges or planning major technology transitions.',
    whoItIsFor:
      'Engineering leaders and CIOs evaluating architecture options, planning infrastructure modernization, or solving specific technical challenges. Best for companies that have strong internal leadership but need external expertise on focused problems.',
    keyOutcomes: [
      'Clear technical recommendations backed by real-world experience',
      'Modernization roadmap with implementation strategies',
      'Team alignment on architecture decisions',
      'Reduced technical debt and improved system reliability',
    ],
    expanded: false,
  },
  {
    id: 'full-time-cto',
    name: 'Full-time CTO',
    description:
      'Hands-on Chief Technology Officer role for early-stage and growth-stage companies. David becomes part of your team as the senior technical leader, making key architectural decisions and leading the engineering organization.',
    whoItIsFor:
      'Pre-Series A to Series B companies that need a seasoned technical leader to build and scale their engineering team from the ground up. Best for founders with strong product vision but limited engineering leadership experience.',
    keyOutcomes: [
      'Establish scalable technical foundations',
      'Build and mentor engineering team',
      'Define technical strategy and roadmap',
      'Lead company through critical growth phases',
    ],
    expanded: false,
  },
  {
    id: 'fractional-cto',
    name: 'Fractional CTO',
    description:
      'Part-time technical leadership on a flexible basis. David provides CTO-level guidance, architecture decisions, and team leadership without the full-time commitment. Scales from a few hours to multiple days per week.',
    whoItIsFor:
      'Growing companies that have strong engineering fundamentals but need senior technical guidance to scale. Ideal for teams with a solid VP Engineering or Tech Lead who wants executive-level strategic support.',
    keyOutcomes: [
      'Strategic technical guidance and architecture review',
      'Support for critical infrastructure decisions',
      'Engineering team mentoring and leadership coaching',
      'Flexible engagement that scales with your needs',
    ],
    expanded: false,
  },
  {
    id: 'engineering-leadership',
    name: 'Engineering Leadership',
    description:
      'Executive coaching and mentoring for engineering leaders navigating team growth, organizational challenges, and leadership transitions. Help your leaders develop the skills needed to scale effectively.',
    whoItIsFor:
      'Engineering managers and directors at Series A+ companies dealing with rapid team growth, organizational restructuring, or leadership transitions. Perfect for leaders who want to level up their management skills.',
    keyOutcomes: [
      'Develop strong delegation and management practices',
      'Build high-performing, cohesive teams',
      'Navigate organizational challenges and transitions',
      'Create sustainable engineering cultures',
    ],
    expanded: false,
  },
]
