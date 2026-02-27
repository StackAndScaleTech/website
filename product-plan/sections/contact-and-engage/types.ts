/**
 * EngagementType
 * Represents a type of engagement the prospect is interested in.
 */
export interface EngagementType {
  id: string
  label: string
}

/**
 * Inquiry
 * Represents a contact form submission.
 */
export interface Inquiry {
  id: string
  name: string
  email: string
  message: string
  engagementType: string | null
  submitted: boolean
}

/**
 * ContactAndEngageProps
 * Props for the Contact & Engage section component.
 */
export interface ContactAndEngageProps {
  /** Array of available engagement types for the dropdown */
  engagementTypes: EngagementType[]

  /** Current form state */
  inquiry: Inquiry

  /**
   * Called when form input changes.
   * @param field - The field being updated (name, email, message, engagementType)
   * @param value - The new value for the field
   */
  onInputChange?: (field: keyof Inquiry, value: string | null) => void

  /**
   * Called when the form is submitted.
   * @param inquiry - The completed inquiry object
   */
  onSubmit?: (inquiry: Inquiry) => void

  /**
   * Called when the user wants to reset the form and submit another inquiry.
   */
  onReset?: () => void
}
