import { BlogCard } from '@/components/BlogCard'
import { getAllPosts } from '@/lib/blog'

export const metadata = {
  title: 'Blog | Portfolio',
  description: 'Read my latest articles about web development, design, and technology',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <main className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-5xl md:text-6xl font-bold font-display text-slate-900 dark:text-slate-50 mb-4">
            Blog
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Thoughts, tutorials, and insights about web development, design, and technology.
          </p>
        </div>

        {/* Blog posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>

        {/* Empty state */}
        {posts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-600 dark:text-slate-400">
              No blog posts yet. Check back soon!
            </p>
          </div>
        )}
      </div>
    </main>
  )
}
