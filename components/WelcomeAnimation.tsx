// components/WelcomeAnimation.tsx
'use client'

import { motion, useAnimation, AnimatePresence } from 'framer-motion'
import { useEffect, useState, useCallback } from 'react'
import { X } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.8,
      ease: 'easeInOut',
    },
  },
}

const logoVariants = {
  hidden: { 
    scale: 0, 
    opacity: 0 
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 12,
    },
  },
}

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

interface WelcomeAnimationProps {
  onComplete?: () => void
}

const WelcomeAnimation = ({ onComplete }: WelcomeAnimationProps) => {
  const [isVisible, setIsVisible] = useState(true)
  const [showSkip, setShowSkip] = useState(false)
  const controls = useAnimation()

  const skipAnimation = useCallback(() => {
    setIsVisible(false)
    setTimeout(() => {
      onComplete?.()
    }, 500)
  }, [onComplete])

  useEffect(() => {
    const runAnimation = async () => {
      // Start animation
      await controls.start('visible')
      
      // Show skip button after 3 seconds
      setTimeout(() => setShowSkip(true), 3000)
      
      // Auto-complete after 8 seconds
      setTimeout(() => {
        skipAnimation()
      }, 8000)
    }

    runAnimation()
  }, [controls, skipAnimation])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-slate-900"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          exit="exit"
        >
          {/* Skip Button */}
          {showSkip && (
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-6 right-6 z-50 p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              onClick={skipAnimation}
            >
              <X className="w-5 h-5 text-slate-700 dark:text-slate-300" />
            </motion.button>
          )}

          {/* Simple Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800" />

          {/* Main Content */}
          <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
            {/* Logo */}
            <motion.div
              className="mb-8"
              variants={logoVariants}
            >
              <div className="w-24 h-24 mx-auto bg-black dark:bg-white rounded-2xl flex items-center justify-center shadow-2xl">
                <span className="text-white dark:text-black text-2xl font-bold">
                  MAH
                </span>
              </div>
            </motion.div>

            {/* Greeting */}
            <motion.div
              className="mb-6"
              variants={textVariants}
            >
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-light">
                Hi, I&apos;m
              </p>
            </motion.div>

            {/* Name */}
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-slate-50 mb-8"
              variants={textVariants}
            >
              MUHAMMAD AMIRUL HADI
            </motion.h1>

            {/* Welcome */}
            <motion.div
              className="mb-6"
              variants={textVariants}
            >
              <h2 className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 font-light">
                Welcome to My Portfolio
              </h2>
            </motion.div>

            {/* Tagline */}
            <motion.div
              variants={textVariants}
            >
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-medium">
                Engineering Digital Excellence
              </p>
            </motion.div>
          </div>

          {/* Click anywhere to skip */}
          {showSkip && (
            <div 
              className="absolute inset-0 z-40 cursor-pointer"
              onClick={skipAnimation}
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default WelcomeAnimation