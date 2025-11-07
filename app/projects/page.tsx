import { ProjectGrid } from '@/components/ProjectGrid'
import { projects } from '@/lib/projects'

export const metadata = {
  title: 'Projects | Portfolio',
  description: 'Explore my portfolio of web, mobile, and design projects',
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-5xl md:text-6xl font-bold font-display text-slate-900 dark:text-slate-50 mb-4">
            My Projects
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A collection of web, mobile, and design projects showcasing my skills and experience.
          </p>
        </div>

        {/* Projects grid */}
        <ProjectGrid projects={projects} />
      </div>
    </main>
  )
}
