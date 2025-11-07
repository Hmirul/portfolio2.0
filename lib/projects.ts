export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  demoUrl: string
  githubUrl?: string
  technologies: string[]
  category: 'web' | 'mobile' | 'design' | 'fullstack'
  featured: boolean
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform with real-time inventory management',
    longDescription:
      'Built a full-stack e-commerce platform with Next.js, featuring real-time inventory management, payment processing with Stripe, and an admin dashboard for product management.',
    image: 'https://images.unsplash.com/photo-1460925895917-adf4e565db18?w=800&q=80',
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Stripe', 'PostgreSQL'],
    category: 'fullstack',
    featured: true,
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'Collaborative task management with real-time updates',
    longDescription:
      'A collaborative task management application with real-time updates using WebSockets, drag-and-drop functionality, and team collaboration features.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Tailwind CSS'],
    category: 'fullstack',
    featured: true,
  },
  {
    id: '3',
    title: 'Design System',
    description: 'Comprehensive component library and design system',
    longDescription:
      'Created a comprehensive design system with 50+ reusable components, documentation, and Storybook integration for consistent UI across projects.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
    demoUrl: 'https://example.com',
    technologies: ['React', 'Storybook', 'Tailwind CSS', 'TypeScript'],
    category: 'design',
    featured: true,
  },
  {
    id: '4',
    title: 'Analytics Dashboard',
    description: 'Real-time analytics dashboard with data visualization',
    longDescription:
      'Built a real-time analytics dashboard with interactive charts, data filtering, and export capabilities using D3.js and React.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    demoUrl: 'https://example.com',
    technologies: ['React', 'D3.js', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    category: 'web',
    featured: false,
  },
  {
    id: '5',
    title: 'Mobile Fitness App',
    description: 'Cross-platform fitness tracking application',
    longDescription:
      'Developed a cross-platform fitness app with workout tracking, progress analytics, and social features using React Native.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80',
    demoUrl: 'https://example.com',
    technologies: ['React Native', 'Firebase', 'Redux', 'Expo'],
    category: 'mobile',
    featured: false,
  },
  {
    id: '6',
    title: 'Content Management System',
    description: 'Headless CMS with API-first architecture',
    longDescription:
      'Created a headless CMS with API-first architecture, supporting multiple content types, versioning, and scheduled publishing.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80',
    demoUrl: 'https://example.com',
    technologies: ['Next.js', 'GraphQL', 'PostgreSQL', 'Prisma', 'Tailwind CSS'],
    category: 'fullstack',
    featured: false,
  },
  {
    id: '7',
    title: 'Social Media Analytics',
    description: 'Social media metrics aggregation and analysis tool',
    longDescription:
      'Built a tool to aggregate and analyze social media metrics across multiple platforms with automated reporting and insights.',
    image: 'https://images.unsplash.com/photo-1460925895917-adf4e565db18?w=800&q=80',
    demoUrl: 'https://example.com',
    technologies: ['React', 'Python', 'PostgreSQL', 'Celery', 'Tailwind CSS'],
    category: 'web',
    featured: false,
  },
  {
    id: '8',
    title: 'Video Streaming Platform',
    description: 'Scalable video streaming platform with adaptive bitrate',
    longDescription:
      'Developed a scalable video streaming platform with adaptive bitrate streaming, user authentication, and content management.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80',
    demoUrl: 'https://example.com',
    technologies: ['Next.js', 'HLS.js', 'AWS S3', 'Node.js', 'PostgreSQL'],
    category: 'fullstack',
    featured: false,
  },
]
