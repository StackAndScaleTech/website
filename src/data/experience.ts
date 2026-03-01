import type { Experience, ExperienceCTA } from '@/types'

export const experiencesData: Experience[] = [
  {
    id: 'team-leadership',
    title: 'Engineering Team Leadership',
    icon: 'Users',
    description:
      "Hiring the first engineer is nothing like hiring the 50th. I've built squads from scratch, restructured teams mid-growth, and navigated all the messiness in between. My most consistent lesson: hiring is everything. Culture is fragile. Good people will move mountains if they believe in what they're building.",
  },
  {
    id: 'early-stage-development',
    title: 'Early-Stage Product Development',
    icon: 'Rocket',
    description:
      "The zero-to-one phase is chaos by design — and I'm comfortable in it. I've made the call to move fast and cut corners when it was the right call, and made the call to slow down and build it right when the shortcuts would've cost more later. Helping founders figure out what to build next is one of my favourite things to do.",
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
  heading: 'Want to work together?',
  description: "If you're building something and need a partner who can help you navigate the hard parts, let's talk.",
  buttonText: 'Get in touch',
}
