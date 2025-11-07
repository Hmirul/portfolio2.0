// components/HeroSection.tsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { AnimatedBackground } from './AnimatedBackground'
import WelcomeAnimation from './WelcomeAnimation'
import { useWelcomeAnimation } from '@/hooks/useWelcomeAnimation'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
}

export function HeroSection() {
  const { animationCompleted, handleAnimationComplete } = useWelcomeAnimation()

  // Show nothing until animation completes
  if (!animationCompleted) {
    return (
      <>
        <WelcomeAnimation onComplete={handleAnimationComplete} />
        <div className="min-h-screen bg-white dark:bg-slate-900" />
      </>
    )
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <AnimatedBackground />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Your existing hero content */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-block px-4 py-2 rounded-full bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 text-sm font-medium">
              Welcome to my portfolio
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-slate-50 mb-6 leading-tight"
          >
            Crafting Digital
            <br />
            <span className="gradient-accent">Experiences</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Full-stack developer specializing in premium UI, modern design, and smooth animations.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/projects"
              className="px-8 py-3 rounded-lg bg-accent-500 hover:bg-accent-600 text-white font-medium transition-all duration-250 hover:shadow-lg flex items-center gap-2 group"
            >
              View My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-slate-50 font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-250"
            >
              Get in Touch
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}