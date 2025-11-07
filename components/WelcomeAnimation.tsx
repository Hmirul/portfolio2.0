// components/WelcomeAnimation.tsx
'use client'

import { motion, useAnimation, AnimatePresence } from 'framer-motion'
import { useEffect, useState, useCallback } from 'react'
import { X } from 'lucide-react'

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.8,
      ease: 'easeInOut',
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
}

const logoVariants = {
  hidden: { 
    scale: 0, 
    rotateY: -180,
    opacity: 0 
  },
  visible: {
    scale: 1,
    rotateY: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 12,
      duration: 1.5,
    },
  },
  floating: {
    y: [-10, 10, -10],
    rotateZ: [-1, 1, -1],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

const textRevealVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.6,
      ease: 'backOut',
    },
  }),
}

const typewriterVariants = {
  hidden: { width: 0 },
  visible: {
    width: '100%',
    transition: {
      duration: 1.5,
      ease: 'easeInOut',
    },
  },
}

const cursorVariants = {
  blinking: {
    opacity: [1, 0, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
    },
  },
}

const particleVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: (i: number) => ({
    opacity: [0.3, 0.8, 0.3],
    scale: [0.8, 1.2, 0.8],
    transition: {
      delay: i * 0.1,
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  }),
}

const geometricShapeVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: (i: number) => ({
    opacity: 0.1,
    scale: 1,
    rotate: [0, 360],
    transition: {
      delay: i * 0.2,
      duration: 8,
      repeat: Infinity,
      ease: 'linear',
    },
  }),
}

interface WelcomeAnimationProps {
  onComplete?: () => void
}

const WelcomeAnimation = ({ onComplete }: WelcomeAnimationProps) => {
  const [showSkip, setShowSkip] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const controls = useAnimation()
  const logoControls = useAnimation()
  const textControls = useAnimation()
  const backgroundControls = useAnimation()

  // Check if user has seen the animation before
  const [hasSeenAnimation, setHasSeenAnimation] = useState(true)

  useEffect(() => {
    const hasSeen = localStorage.getItem('welcome-animation-seen')
    setHasSeenAnimation(!!hasSeen)
    
    if (!hasSeen) {
      localStorage.setItem('welcome-animation-seen', 'true')
    }
  }, [])

  // Skip functionality
  const skipAnimation = useCallback(() => {
    setIsVisible(false)
    setTimeout(() => {
      onComplete?.()
    }, 800)
  }, [onComplete])

  // Main animation sequence
  const runAnimationSequence = useCallback(async () => {
    try {
      // Phase 1: Grand Entrance (0-3s)
      await controls.start('visible')
      await logoControls.start('visible')
      await new Promise(resolve => setTimeout(resolve, 1000))
      await logoControls.start('floating')
      
      // Show skip button after 3 seconds
      setTimeout(() => setShowSkip(true), 3000)

      // Phase 2: Text Revelation (3-6s)
      await textControls.start('visible')
      await new Promise(resolve => setTimeout(resolve, 2000))

      // Phase 3: Professional Identity (6-9s)
      await backgroundControls.start('visible')
      await new Promise(resolve => setTimeout(resolve, 2000))

      // Phase 4: Finale & Transition (9-12s)
      await controls.start('pulse')
      await new Promise(resolve => setTimeout(resolve, 2000))

      // Complete animation
      skipAnimation()

    } catch (error) {
      console.error('Animation error:', error)
      skipAnimation()
    }
  }, [controls, logoControls, textControls, backgroundControls, skipAnimation])

  useEffect(() => {
    if (!hasSeenAnimation) {
      runAnimationSequence()
    } else {
      skipAnimation()
    }
  }, [hasSeenAnimation, runAnimationSequence, skipAnimation])

  // Particle system
  const particles = Array.from({ length: 30 }, (_, i) => i)
  const geometricShapes = Array.from({ length: 8 }, (_, i) => i)

  if (hasSeenAnimation && !isVisible) {
    return null
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-slate-900 overflow-hidden"
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
              className="absolute top-6 right-6 z-50 p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors duration-250"
              onClick={skipAnimation}
            >
              <X className="w-5 h-5 text-slate-700 dark:text-slate-300" />
            </motion.button>
          )}

          {/* Animated Background */}
          <div className="absolute inset-0">
            {/* Gradient Mesh */}
            <motion.div
              className="absolute inset-0 opacity-30"
              animate={{
                background: [
                  'radial-gradient(circle at 20% 20%, #f0f0f0 0%, transparent 50%)',
                  'radial-gradient(circle at 80% 20%, #e0e0e0 0%, transparent 50%)',
                  'radial-gradient(circle at 40% 80%, #d0d0d0 0%, transparent 50%)',
                  'radial-gradient(circle at 20% 20%, #f0f0f0 0%, transparent 50%)',
                ],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            {/* Particles */}
            {particles.map((i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-slate-300 dark:bg-slate-600 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                custom={i}
                variants={particleVariants}
                initial="hidden"
                animate={backgroundControls}
              />
            ))}

            {/* Geometric Shapes */}
            {geometricShapes.map((i) => (
              <motion.div
                key={i}
                className={`absolute border border-slate-200 dark:border-slate-700 opacity-20 ${
                  i % 3 === 0 ? 'w-20 h-20 rounded-full' : 
                  i % 3 === 1 ? 'w-16 h-16 rotate-45' : 'w-12 h-12'
                }`}
                style={{
                  left: `${20 + (i * 10) % 60}%`,
                  top: `${10 + (i * 7) % 80}%`,
                }}
                custom={i}
                variants={geometricShapeVariants}
                initial="hidden"
                animate={backgroundControls}
              />
            ))}
          </div>

          {/* Main Content */}
          <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
            {/* Logo */}
            <motion.div
              className="mb-8"
              variants={logoVariants}
              initial="hidden"
              animate={logoControls}
            >
              <div className="w-24 h-24 mx-auto bg-black dark:bg-white rounded-2xl flex items-center justify-center shadow-2xl">
                <span className="text-white dark:text-black text-2xl font-bold font-display">
                  MAH
                </span>
              </div>
            </motion.div>

            {/* Greeting Text */}
            <motion.div className="mb-6" initial="hidden" animate={textControls}>
              <motion.div
                className="inline-block overflow-hidden whitespace-nowrap"
                variants={typewriterVariants}
              >
                <span className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-light">
                  Hi, I&apos;m
                </span>
                <motion.span
                  variants={cursorVariants}
                  animate="blinking"
                  className="ml-1 w-0.5 h-6 bg-slate-600 dark:bg-slate-400 inline-block align-middle"
                />
              </motion.div>
            </motion.div>

            {/* Name */}
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold font-display text-slate-900 dark:text-slate-50 mb-8 tracking-tight"
              initial="hidden"
              animate={textControls}
            >
              {'MUHAMMAD AMIRUL HADI'.split('').map((char, index) => (
                <motion.span
                  key={index}
                  custom={index}
                  variants={textRevealVariants}
                  className="inline-block"
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </motion.h1>

            {/* Welcome Text */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 6, duration: 0.8 }}
            >
              <h2 className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 font-light mb-2">
                Welcome to My Portfolio
              </h2>
              <motion.div
                className="w-24 h-0.5 bg-accent-500 mx-auto"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 6.5, duration: 0.8 }}
              />
            </motion.div>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                delay: 7, 
                duration: 1,
                type: 'spring',
                stiffness: 100
              }}
            >
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-medium">
                Engineering Digital Excellence
              </p>
            </motion.div>
          </div>

          {/* Click anywhere to skip (invisible overlay) */}
          {showSkip && (
            <div 
              className="absolute inset-0 z-40 cursor-pointer"
              onClick={skipAnimation}
              aria-label="Skip animation"
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default WelcomeAnimation