'use client'

import { motion } from 'framer-motion'
import { Briefcase, GraduationCap } from 'lucide-react'
import type { Experience } from '@/lib/experience'

interface TimelineItemProps {
  experience: Experience
  index: number
  isLeft: boolean
}

export function TimelineItem({
  experience,
  index,
  isLeft,
}: TimelineItemProps) {
  const Icon = experience.type === 'work' ? Briefcase : GraduationCap

  const formatDate = (dateString: string) => {
    const [year, month] = dateString.split('-')
    const date = new Date(parseInt(year), parseInt(month) - 1)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' })
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`flex gap-6 md:gap-12 ${isLeft ? 'md:flex-row-reverse' : ''}`}
    >
      {/* Content */}
      <div className={`flex-1 ${isLeft ? 'md:text-right' : ''}`}>
        <motion.div
          whileHover={{ y: -4 }}
          className="p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-accent-500/50 dark:hover:border-accent-500/50 transition-all duration-300"
        >
          {/* Date */}
          <div className="text-sm font-medium text-accent-500 mb-2">
            {formatDate(experience.startDate)} -{' '}
            {experience.endDate ? formatDate(experience.endDate) : 'Present'}
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold font-display text-slate-900 dark:text-slate-50 mb-1">
            {experience.title}
          </h3>

          {/* Company */}
          <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-3">
            {experience.company}
            {experience.location && ` • ${experience.location}`}
          </p>

          {/* Description */}
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
            {experience.description}
          </p>

          {/* Technologies */}
          {experience.technologies && experience.technologies.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2 py-1 rounded bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </motion.div>
      </div>

      {/* Timeline dot */}
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
          viewport={{ once: true }}
          className="w-12 h-12 rounded-full bg-accent-500 flex items-center justify-center text-white shadow-lg shadow-accent-500/30 flex-shrink-0"
        >
          <Icon className="w-6 h-6" />
        </motion.div>

        {/* Connecting line */}
        <div className="w-1 h-24 bg-gradient-to-b from-accent-500 to-slate-200 dark:to-slate-700 flex-grow" />
      </div>

      {/* Spacer for desktop layout */}
      <div className="hidden md:flex flex-1" />
    </motion.div>
  )
}
