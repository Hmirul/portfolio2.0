'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import { formatDate } from '@/lib/markdown'
import type { BlogPost } from '@/lib/blog'

interface BlogCardProps {
  post: BlogPost
  index?: number
}

export function BlogCard({ post, index = 0 }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className="group p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-accent-500/50 dark:hover:border-accent-500/50 transition-all duration-300"
    >
      {/* Meta info */}
      <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400 mb-3">
        <div className="flex items-center gap-1">
          <Calendar className="w-4 h-4" />
          {formatDate(post.date)}
        </div>
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          {post.readingTime} min read
        </div>
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold font-display text-slate-900 dark:text-slate-50 mb-2 line-clamp-2 group-hover:text-accent-500 transition-colors">
        {post.title}
      </h3>

      {/* Excerpt */}
      <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
        {post.excerpt}
      </p>

      {/* Tags */}
      <div className="mb-4 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-1 rounded bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Read more link */}
      <Link
        href={`/blog/${post.slug}`}
        className="inline-flex items-center gap-2 text-sm font-medium text-accent-500 hover:text-accent-600 group/link"
      >
        Read Article
        <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
      </Link>
    </motion.div>
  )
}
