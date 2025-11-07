'use client'

import { motion } from 'framer-motion'
import type { Skill } from '@/lib/skills'

interface SkillBarProps {
  skill: Skill
  index?: number
}

export function SkillBar({ skill, index = 0 }: SkillBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="space-y-2"
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-slate-900 dark:text-slate-50">
          {skill.name}
        </span>
        <span className="text-xs text-slate-600 dark:text-slate-400">
          {skill.proficiency}%
        </span>
      </div>

      {/* Progress bar background */}
      <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
        {/* Animated progress bar */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.proficiency}%` }}
          transition={{ duration: 1, delay: index * 0.05 + 0.2, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="h-full bg-gradient-to-r from-accent-400 to-accent-600 rounded-full"
        />
      </div>
    </motion.div>
  )
}
