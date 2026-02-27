import type { Experience, ExperienceCTA } from '@/types'

export const experiencesData: Experience[] = [
  {
    id: 'team-leadership',
    title: 'Engineering Team Leadership',
    icon: 'Users',
    description:
      'Leading engineering teams through the full spectrum of growth challenges — from hiring a team\'s first engineers to structuring squads, defining roles, and building a culture of ownership and craft. Strong at translating business goals into clear technical direction that keeps teams aligned and motivated.',
  },
  {
    id: 'early-stage-development',
    title: 'Early-Stage Product Development',
    icon: 'Rocket',
    description:
      'Experience building in the zero-to-one phase: moving fast, validating assumptions, and making pragmatic technical decisions that preserve optionality without accumulating crippling debt. Comfortable operating under ambiguity and helping founders figure out what to build next.',
  },
  {
    id: 'engineering-practices',
    title: 'Engineering Practices & Standards',
    icon: 'CheckBadge',
    description:
      'Establishing the foundations that let teams move fast without breaking things: code review culture, CI/CD pipelines, testing strategies, documentation habits, and on-call practices. These processes pay compounding dividends as teams and codebases grow.',
  },
  {
    id: 'scaling-for-growth',
    title: 'Scaling Engineering for Business Growth',
    icon: 'TrendingUp',
    description:
      'Navigating the organizational and technical challenges that come with scaling — managing headcount growth, evolving architecture to meet demand, handling complexity that wasn\'t a problem at smaller scale, and keeping the team cohesive through rapid change.',
  },
  {
    id: 'cloud-infrastructure',
    title: 'Cloud Infrastructure',
    icon: 'Cloud',
    description:
      'Hands-on experience designing, building, and operating cloud infrastructure on AWS. From containerization and Kubernetes to cost optimization and reliability engineering — comfortable getting into the details while keeping the broader architecture in mind.',
  },
  {
    id: 'software-development',
    title: 'Software Development',
    icon: 'Code',
    description:
      'A strong software engineering foundation across backend systems, APIs, and frontend development. Comfortable across the stack, with particular depth in distributed systems, service architecture, and developer experience. Still writes code.',
  },
  {
    id: 'ai-and-ml',
    title: 'AI & Machine Learning',
    icon: 'Sparkles',
    description:
      'Practical experience bringing AI capabilities into products — from integrating LLM APIs and building RAG systems to working with ML pipelines and data infrastructure. Focused on the intersection of AI capabilities and real product value.',
  },
]

export const ctaData: ExperienceCTA = {
  heading: 'Ready to work together?',
  description: "Let's talk about how Stack and Scale can help your company build and grow.",
  buttonText: 'Get in touch',
}
