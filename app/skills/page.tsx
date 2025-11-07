import { SkillsSection } from '@/components/SkillsSection'

export const metadata = {
  title: 'Skills | Portfolio',
  description: 'Explore my technical skills and expertise',
}

export default function SkillsPage() {
  return (
    <main className="min-h-screen pt-32 pb-20">
      <SkillsSection />
    </main>
  )
}
