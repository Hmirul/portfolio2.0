import { Mail, Linkedin, Github, Twitter } from 'lucide-react'
import { ContactForm } from '@/components/ContactForm'

// framer-motion is a client-side library; avoid importing it in a server component
export const metadata = {
  title: 'Contact | Portfolio',
  description: 'Get in touch with me. I\'d love to hear from you!',
}

const socialLinks = [
  {
    icon: Github,
    href: process.env.NEXT_PUBLIC_GITHUB_URL || '#',
    label: 'GitHub',
  },
  {
    icon: Linkedin,
    href: process.env.NEXT_PUBLIC_LINKEDIN_URL || '#',
    label: 'LinkedIn',
  },
  {
    icon: Twitter,
    href: process.env.NEXT_PUBLIC_TWITTER_URL || '#',
    label: 'Twitter',
  },
  {
    icon: Mail,
    href: `mailto:${process.env.NEXT_PUBLIC_EMAIL || 'contact@example.com'}`,
    label: 'Email',
  },
]

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold font-display text-slate-900 dark:text-slate-50 mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? Feel free to reach out. I&apos;m always interested in hearing about new opportunities and collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          {/* Contact info */}
          <div className="space-y-8">
            {/* Email */}
            <div>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50 mb-2 uppercase tracking-wide">
                Email
              </h3>
              <a
                href={`mailto:${process.env.NEXT_PUBLIC_EMAIL || 'contact@example.com'}`}
                className="text-accent-500 hover:text-accent-600 transition-colors break-all"
              >
                {process.env.NEXT_PUBLIC_EMAIL || 'contact@example.com'}
              </a>
            </div>

            {/* Social links */}
            <div>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-50 mb-4 uppercase tracking-wide">
                Connect
              </h3>
              <div className="flex gap-3">
                {socialLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-slate-50 transition-colors"
                      aria-label={link.label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Response time */}
            <div className="p-4 rounded-lg bg-accent-50 dark:bg-accent-900/20 border border-accent-200 dark:border-accent-800">
              <p className="text-sm text-accent-900 dark:text-accent-100">
                <strong>Response time:</strong> I typically respond within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
