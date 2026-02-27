import type { EngagementType, Inquiry } from '@/types'

export const engagementTypesData: EngagementType[] = [
  { id: 'technical-consulting', label: 'Technical Consulting' },
  { id: 'full-time-cto', label: 'Full-time CTO' },
  { id: 'fractional-cto', label: 'Fractional CTO' },
  { id: 'engineering-leadership', label: 'Engineering Leadership' },
]

export const defaultInquiry: Inquiry = {
  id: '',
  name: '',
  email: '',
  message: '',
  engagementType: null,
  submitted: false,
}
