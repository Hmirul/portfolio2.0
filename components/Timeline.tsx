'use client'

import { motion } from 'framer-motion'
import { TimelineItem } from './TimelineItem'
import type { Experience } from '@/lib/experience'

interface TimelineProps {
  experiences: Experience[]
}

export function Timeline({ experiences }: TimelineProps) {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display text-slate-900 dark:text-slate-50 mb-4">
            Experience & Education
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            My professional journey and educational background
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <TimelineItem
              key={experience.id}
              experience={experience}
              index={index}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>

        {/* End marker */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: experiences.length * 0.1 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center text-white shadow-lg shadow-accent-500/30">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
