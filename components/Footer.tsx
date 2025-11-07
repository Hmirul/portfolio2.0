'use client'

import Link from 'next/link'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

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

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold font-display text-slate-900 dark:text-slate-50 mb-2">
              Portfolio
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Premium portfolio website built with Next.js and Tailwind CSS.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-50 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { href: '/', label: 'Home' },
                { href: '/projects', label: 'Projects' },
                { href: '/about', label: 'About' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-50 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-50 mb-4">
              Connect
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-900 dark:text-slate-50 transition-colors"
                    aria-label={link.label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-200 dark:border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-600 dark:text-slate-400">
            <p>
              &copy; {currentYear} Premium Portfolio. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-slate-900 dark:hover:text-slate-50 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-slate-900 dark:hover:text-slate-50 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
