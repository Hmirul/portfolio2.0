import { Timeline } from '@/components/Timeline'
import { sortedExperiences } from '@/lib/experience'

export const metadata = {
  title: 'Experience | Portfolio',
  description: 'My professional experience and educational background',
}

export default function ExperiencePage() {
  return (
    <main className="min-h-screen pt-32 pb-20">
      <Timeline experiences={sortedExperiences} />
    </main>
  )
}
