'use client'

import { motion } from 'framer-motion'
import { SkillBar } from './SkillBar'
import { skillsByCategory } from '@/lib/skills'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const categoryVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export function SkillsSection() {
  const categories = [
    { key: 'frontend', label: 'Frontend Development' },
    { key: 'backend', label: 'Backend Development' },
    { key: 'tools', label: 'Tools & Platforms' },
    { key: 'design', label: 'Design' },
  ]

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display text-slate-900 dark:text-slate-50 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels across different areas.
          </p>
        </motion.div>

        {/* Skills by category */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {categories.map((category) => (
            <motion.div
              key={category.key}
              variants={categoryVariants}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold font-display text-slate-900 dark:text-slate-50">
                {category.label}
              </h3>

              <div className="space-y-4">
                {skillsByCategory[category.key as keyof typeof skillsByCategory].map(
                  (skill, index) => (
                    <SkillBar
                      key={skill.name}
                      skill={skill}
                      index={index}
                    />
                  )
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
