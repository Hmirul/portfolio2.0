# Customization Guide

This guide will help you customize the portfolio to match your personal brand and content.

## 🎨 Branding & Colors

### Change Primary Color

Edit `tailwind.config.ts`:

```typescript
colors: {
  accent: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9',  // ← Change this to your brand color
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c3d66',
  },
}
```

### Change Fonts

1. Update font imports in `app/globals.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
```

2. Update `tailwind.config.ts`:

```typescript
fontFamily: {
  sans: ['Poppins', 'system-ui', 'sans-serif'],
  display: ['Poppins', 'system-ui', 'sans-serif'],
}
```

## 👤 Personal Information

### Update About Section

Edit `lib/about.ts`:

```typescript
export const aboutData = {
  bio: 'Your bio here...',
  longBio: 'Your longer bio here...',
  values: [
    {
      icon: '✨',
      title: 'Your Value',
      description: 'Description of your value...',
    },
    // Add more values
  ],
}
```

### Update Social Links

Edit `.env.local`:

```env
NEXT_PUBLIC_GITHUB_URL=https://github.com/yourusername
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/yourusername
NEXT_PUBLIC_TWITTER_URL=https://twitter.com/yourusername
NEXT_PUBLIC_EMAIL=your.email@example.com
```

## 💼 Projects

### Add a New Project

Edit `lib/projects.ts`:

```typescript
{
  id: '9',
  title: 'Your Project Title',
  description: 'Short description',
  longDescription: 'Longer description...',
  image: 'https://images.unsplash.com/...',
  demoUrl: 'https://your-project.com',
  githubUrl: 'https://github.com/yourusername/project',
  technologies: ['React', 'Node.js', 'MongoDB'],
  category: 'fullstack',
  featured: true,
}
```

### Project Categories

- `web` - Web applications
- `mobile` - Mobile applications
- `design` - Design projects
- `fullstack` - Full-stack projects

### Update Project Images

Replace image URLs with your own project screenshots. You can use:
- Unsplash: https://unsplash.com
- Pexels: https://pexels.com
- Your own hosted images

## 🎯 Skills

### Add Skills

Edit `lib/skills.ts`:

```typescript
{
  name: 'Your Skill',
  proficiency: 85,  // 0-100
  category: 'frontend',  // or 'backend', 'tools', 'design'
}
```

### Skill Categories

- `frontend` - Frontend technologies
- `backend` - Backend technologies
- `tools` - Tools and platforms
- `design` - Design skills

## 📅 Experience

### Add Work Experience

Edit `lib/experience.ts`:

```typescript
{
  id: '6',
  title: 'Your Job Title',
  company: 'Company Name',
  location: 'City, Country',
  startDate: '2023-01',
  endDate: null,  // null for current job
  description: 'Job description...',
  type: 'work',
  technologies: ['React', 'Node.js'],
}
```

### Add Education

```typescript
{
  id: '7',
  title: 'Degree Name',
  company: 'University Name',
  location: 'City, Country',
  startDate: '2019-09',
  endDate: '2023-05',
  description: 'Education description...',
  type: 'education',
}
```

## 📝 Blog

### Add Blog Post

Edit `lib/blog.ts`:

```typescript
{
  id: '4',
  slug: 'my-new-post',
  title: 'My New Blog Post',
  excerpt: 'Short excerpt...',
  date: '2024-01-20',
  author: 'Your Name',
  tags: ['React', 'Web Development'],
  readingTime: 5,
  content: `# My New Blog Post

Your markdown content here...

## Section 1
Content...

## Section 2
Content...
`,
}
```

### Markdown Support

The blog supports standard markdown:

```markdown
# Heading 1
## Heading 2
### Heading 3

**Bold text**
*Italic text*

- Bullet point
- Another point

1. Numbered item
2. Another item

[Link text](https://example.com)

\`\`\`javascript
// Code block
const hello = 'world'
\`\`\`

\`inline code\`
```

## 🎬 Animations

### Adjust Animation Speed

Edit `tailwind.config.ts`:

```typescript
animation: {
  'fade-in': 'fadeIn 0.6s ease-out',  // Change 0.6s to your preferred duration
  'slide-up': 'slideUp 0.6s ease-out',
  // ... other animations
}
```

### Disable Animations

Add to `app/globals.css`:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

## 🌙 Dark Mode

The portfolio automatically supports dark mode. To customize dark mode colors:

Edit `tailwind.config.ts`:

```typescript
darkMode: 'class',
theme: {
  extend: {
    colors: {
      // Light mode colors
      slate: { /* ... */ },
      // Dark mode colors are automatically generated
    }
  }
}
```

## 📱 Responsive Design

The portfolio is mobile-first. Breakpoints:

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

To customize responsive behavior, edit components and use Tailwind's responsive prefixes:

```tsx
<div className="text-sm md:text-base lg:text-lg">
  Responsive text
</div>
```

## 🔧 Advanced Customization

### Add New Page

1. Create new directory in `app/`:
```
app/new-page/page.tsx
```

2. Add to navigation in `lib/constants.ts`:
```typescript
{ href: '/new-page', label: 'New Page' }
```

### Add New Component

1. Create component in `components/`:
```
components/NewComponent.tsx
```

2. Import and use in pages:
```tsx
import { NewComponent } from '@/components/NewComponent'
```

### Modify Layout

Edit `app/layout.tsx` to change the global layout structure.

## 🚀 Performance Tips

1. **Optimize Images**: Use Next.js Image component
2. **Lazy Load**: Use `loading="lazy"` for images
3. **Code Splitting**: Use dynamic imports for heavy components
4. **Caching**: Configure cache headers in `netlify.toml`

## 🎓 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## 💡 Tips

- Keep your portfolio updated with your latest work
- Use high-quality images for projects
- Write meaningful blog posts to improve SEO
- Test on mobile devices regularly
- Monitor performance with Lighthouse

---

Need help? Check the [README.md](./README.md) or open an issue on GitHub.
