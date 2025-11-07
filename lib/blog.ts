export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  author: string
  tags: string[]
  readingTime: number
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started with Next.js 14',
    excerpt:
      'Learn how to build modern web applications with Next.js 14 and the App Router. A comprehensive guide for beginners.',
    date: '2024-01-15',
    author: 'Your Name',
    tags: ['Next.js', 'React', 'Web Development'],
    readingTime: 8,
    content: `# Getting Started with Next.js 14

Next.js 14 is a powerful React framework that makes building web applications easier and faster. In this guide, we'll explore the key features and get you started with your first project.

## What is Next.js?

Next.js is a React framework that provides a great developer experience with features like:

- **File-based routing** - Automatically create routes based on your file structure
- **Server-side rendering** - Render pages on the server for better performance
- **Static generation** - Pre-render pages at build time
- **API routes** - Build API endpoints without a separate backend
- **Image optimization** - Automatic image optimization and lazy loading

## Installation

To create a new Next.js project, run:

\`\`\`bash
npx create-next-app@latest my-app
cd my-app
npm run dev
\`\`\`

## Creating Your First Page

Pages are created in the \`app\` directory. Create a new file \`app/about/page.tsx\`:

\`\`\`tsx
export default function About() {
  return (
    <div>
      <h1>About Me</h1>
      <p>Welcome to my about page!</p>
    </div>
  )
}
\`\`\`

## Conclusion

Next.js 14 makes it easy to build modern web applications. Start exploring and building amazing projects today!`,
  },
  {
    id: '2',
    slug: 'mastering-tailwind-css',
    title: 'Mastering Tailwind CSS',
    excerpt:
      'Deep dive into Tailwind CSS and learn how to build beautiful, responsive designs with utility-first CSS.',
    date: '2024-01-10',
    author: 'Your Name',
    tags: ['Tailwind CSS', 'CSS', 'Design'],
    readingTime: 10,
    content: `# Mastering Tailwind CSS

Tailwind CSS is a utility-first CSS framework that helps you build modern designs without leaving your HTML.

## Why Tailwind CSS?

- **Rapid development** - Build designs without writing custom CSS
- **Consistency** - Use a predefined design system
- **Responsive design** - Mobile-first approach built-in
- **Customizable** - Extend and customize the framework

## Getting Started

Install Tailwind CSS in your project:

\`\`\`bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
\`\`\`

## Using Tailwind Classes

Apply styles using utility classes:

\`\`\`html
<div class="bg-blue-500 text-white p-4 rounded-lg">
  Hello, Tailwind!
</div>
\`\`\`

## Responsive Design

Use breakpoints for responsive design:

\`\`\`html
<div class="text-sm md:text-base lg:text-lg">
  Responsive text
</div>
\`\`\`

## Conclusion

Tailwind CSS is a powerful tool for building modern web interfaces. Master it and level up your design skills!`,
  },
  {
    id: '3',
    slug: 'animation-best-practices',
    title: 'Animation Best Practices',
    excerpt:
      'Learn how to create smooth, performant animations that enhance user experience without being distracting.',
    date: '2024-01-05',
    author: 'Your Name',
    tags: ['Animation', 'Performance', 'UX'],
    readingTime: 7,
    content: `# Animation Best Practices

Animations can greatly enhance user experience when done right. Here are best practices for creating smooth, performant animations.

## Performance First

Always prioritize performance:

- Use \`transform\` and \`opacity\` for animations
- Avoid animating \`width\`, \`height\`, or \`position\`
- Use \`will-change\` sparingly
- Test on real devices

## Timing and Easing

Choose appropriate timing:

- **Fast animations** (200-300ms) for interactions
- **Medium animations** (300-500ms) for transitions
- **Slow animations** (500ms+) for attention-grabbing

## User Preferences

Respect user preferences:

\`\`\`css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
\`\`\`

## Conclusion

Great animations enhance UX. Always test, measure, and optimize for the best results!`,
  },
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getAllPosts(): BlogPost[] {
  return blogPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}
