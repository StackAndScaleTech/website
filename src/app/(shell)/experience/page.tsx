'use client'

import { useRouter } from 'next/navigation'
import { Experience } from '@/components/experience/Experience'
import { experiencesData, ctaData } from '@/data/experience'

export default function ExperiencePage() {
  const router = useRouter()

  return (
    <Experience
      experiences={experiencesData}
      cta={ctaData}
      onContactClick={() => router.push('/contact')}
    />
  )
}
