import Link from 'next/link'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'
import { getPostBySlug, getAllPosts } from '@/lib/blog'
import { formatDate } from '@/lib/markdown'
import { notFound } from 'next/navigation'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} | Blog`,
    description: post.excerpt,
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen pt-32 pb-20">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-accent-500 hover:text-accent-600 mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Blog
        </Link>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-6xl font-bold font-display text-slate-900 dark:text-slate-50 mb-4">
            {post.title}
          </h1>

          {/* Meta info */}
          <div className="flex flex-wrap items-center gap-6 text-slate-600 dark:text-slate-400 mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {formatDate(post.date)}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.readingTime} min read
            </div>
            <div>By {post.author}</div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300"
              >
                {tag}
              </span>
            ))}
          </div>
  </div>

        {/* Content */}
        <div className="prose dark:prose-invert max-w-none">
          <div className="text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-wrap">
            {post.content}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-200 dark:border-slate-700 my-12" />

        {/* Author info */}
        <div className="p-6 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
          <h3 className="text-lg font-bold font-display text-slate-900 dark:text-slate-50 mb-2">
            About the Author
          </h3>
          <p className="text-slate-600 dark:text-slate-400">
            {post.author} is a full-stack developer passionate about creating beautiful web experiences.
          </p>
        </div>
      </article>
    </main>
  )
}
