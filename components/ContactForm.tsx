'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import {
  validateContactForm,
  sendContactEmail,
  type ContactFormData,
  type ValidationError,
} from '@/lib/contact'

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [errors, setErrors] = useState<ValidationError[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear error for this field
    setErrors((prev) =>
      prev.filter((error) => error.field !== name)
    )
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setErrors([])
    setSubmitStatus('idle')

    // Validate form
    const validationErrors = validateContactForm(formData)
    if (validationErrors.length > 0) {
      setErrors(validationErrors)
      return
    }

    // Submit form
    setIsSubmitting(true)
    try {
      await sendContactEmail(formData)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
    } catch (error) {
      setSubmitStatus('error')
      console.error('Error sending email:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const getFieldError = (fieldName: string) => {
    return errors.find((error) => error.field === fieldName)?.message
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      {/* Name field */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-slate-900 dark:text-slate-50 mb-2"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          className={`w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border transition-colors ${
            getFieldError('name')
              ? 'border-red-500 dark:border-red-500'
              : 'border-slate-200 dark:border-slate-700 focus:border-accent-500'
          } text-slate-900 dark:text-slate-50 placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none`}
        />
        {getFieldError('name') && (
          <p className="mt-1 text-sm text-red-500">{getFieldError('name')}</p>
        )}
      </div>

      {/* Email field */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-slate-900 dark:text-slate-50 mb-2"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your.email@example.com"
          className={`w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border transition-colors ${
            getFieldError('email')
              ? 'border-red-500 dark:border-red-500'
              : 'border-slate-200 dark:border-slate-700 focus:border-accent-500'
          } text-slate-900 dark:text-slate-50 placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none`}
        />
        {getFieldError('email') && (
          <p className="mt-1 text-sm text-red-500">{getFieldError('email')}</p>
        )}
      </div>

      {/* Subject field */}
      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-slate-900 dark:text-slate-50 mb-2"
        >
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="What is this about?"
          className={`w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border transition-colors ${
            getFieldError('subject')
              ? 'border-red-500 dark:border-red-500'
              : 'border-slate-200 dark:border-slate-700 focus:border-accent-500'
          } text-slate-900 dark:text-slate-50 placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none`}
        />
        {getFieldError('subject') && (
          <p className="mt-1 text-sm text-red-500">
            {getFieldError('subject')}
          </p>
        )}
      </div>

      {/* Message field */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-slate-900 dark:text-slate-50 mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your message here..."
          rows={6}
          className={`w-full px-4 py-3 rounded-lg bg-white dark:bg-slate-800 border transition-colors resize-none ${
            getFieldError('message')
              ? 'border-red-500 dark:border-red-500'
              : 'border-slate-200 dark:border-slate-700 focus:border-accent-500'
          } text-slate-900 dark:text-slate-50 placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none`}
        />
        {getFieldError('message') && (
          <p className="mt-1 text-sm text-red-500">
            {getFieldError('message')}
          </p>
        )}
      </div>

      {/* Status messages */}
      {submitStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 flex items-center gap-3"
        >
          <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
          <p className="text-sm text-green-700 dark:text-green-300">
            Message sent successfully! I&apos;ll get back to you soon.
          </p>
        </motion.div>
      )}

      {submitStatus === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 flex items-center gap-3"
        >
          <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
          <p className="text-sm text-red-700 dark:text-red-300">
            Error sending message. Please try again.
          </p>
        </motion.div>
      )}

      {/* Submit button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        disabled={isSubmitting}
        className="w-full px-6 py-3 rounded-lg bg-accent-500 hover:bg-accent-600 disabled:bg-slate-400 text-white font-medium transition-all duration-250 flex items-center justify-center gap-2 shadow-lg shadow-accent-500/30 hover:shadow-lg hover:shadow-accent-500/40"
      >
        {isSubmitting ? (
          <>
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Send Message
          </>
        )}
      </motion.button>
    </motion.form>
  )
}
