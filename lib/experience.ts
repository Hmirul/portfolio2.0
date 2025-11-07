export interface Experience {
  id: string
  title: string
  company: string
  location?: string
  startDate: string
  endDate: string | null
  description: string
  type: 'work' | 'education'
  technologies?: string[]
}

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Senior Full-Stack Developer',
    company: 'Tech Innovations Inc.',
    location: 'San Francisco, CA',
    startDate: '2022-01',
    endDate: null,
    description:
      'Leading the development of scalable web applications using Next.js and Node.js. Mentoring junior developers and establishing best practices for the team.',
    type: 'work',
    technologies: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'AWS'],
  },
  {
    id: '2',
    title: 'Full-Stack Developer',
    company: 'Digital Solutions Ltd.',
    location: 'New York, NY',
    startDate: '2020-06',
    endDate: '2021-12',
    description:
      'Developed and maintained multiple client projects using React and Express.js. Implemented responsive designs and optimized application performance.',
    type: 'work',
    technologies: ['React', 'Express.js', 'MongoDB', 'Tailwind CSS'],
  },
  {
    id: '3',
    title: 'Frontend Developer',
    company: 'Creative Agency Co.',
    location: 'Los Angeles, CA',
    startDate: '2019-03',
    endDate: '2020-05',
    description:
      'Built interactive web interfaces for various clients. Focused on UI/UX implementation and cross-browser compatibility.',
    type: 'work',
    technologies: ['React', 'Vue.js', 'Tailwind CSS', 'JavaScript'],
  },
  {
    id: '4',
    title: 'Bachelor of Science in Computer Science',
    company: 'University of Technology',
    location: 'Boston, MA',
    startDate: '2015-09',
    endDate: '2019-05',
    description:
      'Graduated with honors. Focused on web development, software engineering, and computer science fundamentals.',
    type: 'education',
  },
  {
    id: '5',
    title: 'Junior Web Developer',
    company: 'StartUp Hub',
    location: 'Remote',
    startDate: '2018-06',
    endDate: '2019-02',
    description:
      'First professional role working on web development projects. Learned best practices and collaborated with experienced developers.',
    type: 'work',
    technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
  },
]

export const sortedExperiences = experiences.sort((a, b) => {
  const aDate = new Date(a.startDate)
  const bDate = new Date(b.startDate)
  return bDate.getTime() - aDate.getTime()
})
