import { AboutSection } from '@/components/AboutSection'

export const metadata = {
  title: 'About | Portfolio',
  description: 'Learn more about me, my values, and my approach to web development',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-32 pb-20">
      <AboutSection />
    </main>
  )
}
