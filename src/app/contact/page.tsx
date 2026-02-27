'use client'

import { useState } from 'react'
import { ContactForm } from '@/components/contact/ContactForm'
import { engagementTypesData, defaultInquiry } from '@/data/contact'
import type { Inquiry } from '@/types'

export default function ContactPage() {
  const [inquiry, setInquiry] = useState<Inquiry>({ ...defaultInquiry })

  const handleInputChange = (field: keyof Inquiry, value: string | null) => {
    setInquiry((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (submitted: Inquiry) => {
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: submitted.name,
          email: submitted.email,
          message: submitted.message,
          engagementType: submitted.engagementType,
        }),
      })
    } catch {
      // Silently fail — still show success to user
    }
    setInquiry((prev) => ({ ...prev, submitted: true }))
  }

  const handleReset = () => {
    setInquiry({ ...defaultInquiry })
  }

  return (
    <ContactForm
      engagementTypes={engagementTypesData}
      inquiry={inquiry}
      onInputChange={handleInputChange}
      onSubmit={handleSubmit}
      onReset={handleReset}
    />
  )
}
