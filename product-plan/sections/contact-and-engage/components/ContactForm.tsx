import type { ContactAndEngageProps } from '../types'
import { Mail, MessageSquare, CheckCircle } from 'lucide-react'

export function ContactForm({
  engagementTypes,
  inquiry,
  onInputChange,
  onSubmit,
  onReset,
}: ContactAndEngageProps) {
  const isValid = inquiry.name.trim() && inquiry.email.trim()
  const hasSubmitted = inquiry.submitted

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (isValid) {
      onSubmit?.(inquiry)
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Get In Touch
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Have questions about working together? Fill out this form and I'll get back to you soon.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white dark:bg-slate-900 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 p-8">
          {hasSubmitted ? (
            /* Success State */
            <div className="text-center py-12">
              <div className="flex justify-center mb-6">
                <CheckCircle className="w-16 h-16 text-green-500" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                Thank You!
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-8">
                I've received your inquiry and will get back to you within 24 hours.
              </p>
              <button
                onClick={() => onReset?.()}
                className="inline-flex items-center justify-center px-6 py-2.5 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 font-medium rounded-md hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            /* Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={inquiry.name}
                  onChange={(e) => onInputChange?.('name', e.target.value)}
                  placeholder="Your full name"
                  disabled={hasSubmitted}
                  className="w-full px-4 py-2.5 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                  <input
                    type="email"
                    value={inquiry.email}
                    onChange={(e) => onInputChange?.('email', e.target.value)}
                    placeholder="your.email@example.com"
                    disabled={hasSubmitted}
                    className="w-full pl-10 pr-4 py-2.5 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                  Message
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                  <textarea
                    value={inquiry.message}
                    onChange={(e) => onInputChange?.('message', e.target.value)}
                    placeholder="Tell me about your project and what you're looking for..."
                    disabled={hasSubmitted}
                    rows={5}
                    className="w-full pl-10 pr-4 py-2.5 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed resize-none transition-colors"
                  />
                </div>
              </div>

              {/* Engagement Type Field */}
              <div>
                <label className="block text-sm font-medium text-slate-900 dark:text-white mb-2">
                  Interested In
                </label>
                <select
                  value={inquiry.engagementType || ''}
                  onChange={(e) =>
                    onInputChange?.('engagementType', e.target.value || null)
                  }
                  disabled={hasSubmitted}
                  className="w-full px-4 py-2.5 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <option value="">Select an engagement type...</option>
                  {engagementTypes.map((type) => (
                    <option key={type.id} value={type.id}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Submit Button */}
              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  disabled={!isValid || hasSubmitted}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium py-2.5 px-4 rounded-md disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Send Message
                </button>
              </div>

              {/* Validation Message */}
              {!isValid && (
                <p className="text-sm text-orange-500 dark:text-orange-400">
                  Please fill in your name and email to continue.
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
