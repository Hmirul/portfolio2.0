'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ProjectCard } from './ProjectCard'
import type { Project } from '@/lib/projects'

interface ProjectGridProps {
  projects: Project[]
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = ['web', 'mobile', 'design', 'fullstack']

  const filteredProjects = selectedCategory
    ? projects.filter((p) => p.category === selectedCategory)
    : projects

  return (
    <div>
      {/* Category filters */}
      <div className="mb-12 flex flex-wrap gap-3 justify-center">
        <button
          onClick={() => setSelectedCategory(null)}
          className={`px-4 py-2 rounded-lg font-medium transition-all duration-250 ${
            selectedCategory === null
              ? 'bg-accent-500 text-white'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-50 hover:bg-slate-200 dark:hover:bg-slate-700'
          }`}
        >
          All Projects
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-250 capitalize ${
              selectedCategory === category
                ? 'bg-accent-500 text-white'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-50 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ProjectCard project={project} index={index} />
          </motion.div>
        ))}
      </motion.div>

      {/* Empty state */}
      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <p className="text-slate-600 dark:text-slate-400">
            No projects found in this category.
          </p>
        </motion.div>
      )}
    </div>
  )
}
