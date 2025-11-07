export interface Skill {
  name: string
  proficiency: number // 0-100
  category: 'frontend' | 'backend' | 'tools' | 'design'
}

export const skills: Skill[] = [
  // Frontend
  {
    name: 'React',
    proficiency: 95,
    category: 'frontend',
  },
  {
    name: 'Next.js',
    proficiency: 90,
    category: 'frontend',
  },
  {
    name: 'TypeScript',
    proficiency: 88,
    category: 'frontend',
  },
  {
    name: 'Tailwind CSS',
    proficiency: 92,
    category: 'frontend',
  },
  {
    name: 'Framer Motion',
    proficiency: 85,
    category: 'frontend',
  },
  {
    name: 'HTML/CSS',
    proficiency: 95,
    category: 'frontend',
  },
  {
    name: 'JavaScript',
    proficiency: 93,
    category: 'frontend',
  },
  {
    name: 'Vue.js',
    proficiency: 75,
    category: 'frontend',
  },

  // Backend
  {
    name: 'Node.js',
    proficiency: 88,
    category: 'backend',
  },
  {
    name: 'Express.js',
    proficiency: 85,
    category: 'backend',
  },
  {
    name: 'PostgreSQL',
    proficiency: 82,
    category: 'backend',
  },
  {
    name: 'MongoDB',
    proficiency: 80,
    category: 'backend',
  },
  {
    name: 'GraphQL',
    proficiency: 78,
    category: 'backend',
  },
  {
    name: 'REST APIs',
    proficiency: 90,
    category: 'backend',
  },
  {
    name: 'Python',
    proficiency: 75,
    category: 'backend',
  },

  // Tools
  {
    name: 'Git',
    proficiency: 92,
    category: 'tools',
  },
  {
    name: 'Docker',
    proficiency: 80,
    category: 'tools',
  },
  {
    name: 'AWS',
    proficiency: 75,
    category: 'tools',
  },
  {
    name: 'Figma',
    proficiency: 85,
    category: 'tools',
  },
  {
    name: 'VS Code',
    proficiency: 95,
    category: 'tools',
  },
  {
    name: 'Webpack',
    proficiency: 78,
    category: 'tools',
  },

  // Design
  {
    name: 'UI Design',
    proficiency: 88,
    category: 'design',
  },
  {
    name: 'UX Design',
    proficiency: 82,
    category: 'design',
  },
  {
    name: 'Responsive Design',
    proficiency: 95,
    category: 'design',
  },
  {
    name: 'Animation Design',
    proficiency: 85,
    category: 'design',
  },
]

export const skillsByCategory = {
  frontend: skills.filter((s) => s.category === 'frontend'),
  backend: skills.filter((s) => s.category === 'backend'),
  tools: skills.filter((s) => s.category === 'tools'),
  design: skills.filter((s) => s.category === 'design'),
}
