/**
 * Contact form validation and utilities
 */

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export interface ValidationError {
  field: string
  message: string
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function validateContactForm(
  data: ContactFormData
): ValidationError[] {
  const errors: ValidationError[] = []

  if (!data.name.trim()) {
    errors.push({ field: 'name', message: 'Name is required' })
  }

  if (!data.email.trim()) {
    errors.push({ field: 'email', message: 'Email is required' })
  } else if (!validateEmail(data.email)) {
    errors.push({ field: 'email', message: 'Please enter a valid email' })
  }

  if (!data.subject.trim()) {
    errors.push({ field: 'subject', message: 'Subject is required' })
  }

  if (!data.message.trim()) {
    errors.push({ field: 'message', message: 'Message is required' })
  } else if (data.message.trim().length < 10) {
    errors.push({
      field: 'message',
      message: 'Message must be at least 10 characters',
    })
  }

  return errors
}

export async function sendContactEmail(data: ContactFormData): Promise<void> {
  // This is a placeholder for email sending logic
  // In production, you would integrate with a service like:
  // - Netlify Forms (built-in)
  // - SendGrid
  // - Mailgun
  // - AWS SES
  // - EmailJS

  // For now, we'll just log the data
  console.log('Contact form submitted:', data)

  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, 1000)
  })
}
