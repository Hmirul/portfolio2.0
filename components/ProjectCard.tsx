'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '@/lib/projects'

interface ProjectCardProps {
  project: Project
  index?: number
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:shadow-lg hover:shadow-accent-500/10"
    >
      {/* Image container */}
      <div className="relative h-48 md:h-56 overflow-hidden bg-slate-100 dark:bg-slate-900">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category badge */}
        <div className="mb-3">
          <span className="inline-block px-3 py-1 rounded-full bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 text-xs font-medium capitalize">
            {project.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold font-display text-slate-900 dark:text-slate-50 mb-2 line-clamp-2">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mb-4 flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-1 rounded bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-xs px-2 py-1 rounded bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {/* CTA Button */}
        <Link
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-accent-500 hover:text-accent-600 group/link"
        >
          View Demo
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
        </Link>
      </div>
    </motion.div>
  )
}
