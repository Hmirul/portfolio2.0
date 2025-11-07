// components/WelcomeAnimation.tsx
'use client'

import { motion, useAnimation, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useEffect, useState, useCallback, useRef } from 'react'
import { X } from 'lucide-react'

// Particle system types
interface Particle {
  id: number
  x: number
  y: number
  size: number
  color: string
  vx: number
  vy: number
}

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
      duration: 1.2,
      ease: [0.4, 0, 0.2, 1],
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
}

const logoVariants = {
  hidden: { 
    scale: 0, 
    rotateY: -180,
    opacity: 0,
  },
  visible: {
    scale: 1,
    rotateY: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
      duration: 1.8,
    },
  },
  floating: {
    y: [-8, 8, -8],
    rotateZ: [-0.5, 0.5, -0.5],
    scale: [1, 1.02, 1],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
}

const typewriterVariants = {
  hidden: { width: 0 },
  visible: {
    width: "100%",
    transition: {
      duration: 1.8,
      ease: [0.65, 0, 0.35, 1],
    },
  },
}

const cursorVariants = {
  blinking: {
    opacity: [0, 1, 0],
    transition: {
      duration: 0.8,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
}

const letterVariants = {
  hidden: { 
    opacity: 0, 
    y: 40,
    scale: 0.8,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.08,
      duration: 0.6,
      type: "spring",
      stiffness: 150,
      damping: 10,
    },
  }),
}

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

const underlineVariants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: {
      duration: 1,
      ease: [0.65, 0, 0.35, 1],
      delay: 0.5,
    },
  },
}

const morphVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
}

const pulseGlowVariants = {
  pulse: {
    scale: [1, 1.05, 1],
    opacity: [1, 0.8, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
}

interface WelcomeAnimationProps {
  onComplete?: () => void
}

const WelcomeAnimation = ({ onComplete }: WelcomeAnimationProps) => {
  const [showSkip, setShowSkip] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [currentPhase, setCurrentPhase] = useState(0)
  const controls = useAnimation()
  const logoControls = useAnimation()
  const textControls = useAnimation()
  const backgroundControls = useAnimation()
  const phase4Controls = useAnimation()

  const [particles, setParticles] = useState<Particle[]>([])
  const animationRef = useRef<number>()
  const containerRef = useRef<HTMLDivElement>(null)

  // Check if user has seen the animation before
  const [hasSeenAnimation, setHasSeenAnimation] = useState(true)

  // Initialize particles based on screen size
  const initParticles = useCallback(() => {
    const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false
    const isTablet = typeof window !== 'undefined' ? window.innerWidth >= 768 && window.innerWidth < 1024 : false
    
    const count = isMobile ? 20 : isTablet ? 30 : 45
    const newParticles: Particle[] = []

    for (let i = 0; i < count; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        color: `rgba(148, 163, 184, ${Math.random() * 0.4 + 0.1})`,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
      })
    }

    setParticles(newParticles)
  }, [])

  // Animate particles
  const animateParticles = useCallback(() => {
    setParticles(prev => prev.map(p => ({
      ...p,
      x: (p.x + p.vx + 100) % 100,
      y: (p.y + p.vy + 100) % 100,
    })))
  }, [])

  useEffect(() => {
    if (currentPhase >= 2) { // Start particles in phase 3
      animationRef.current = requestAnimationFrame(function animate() {
        animateParticles()
        animationRef.current = requestAnimationFrame(animate)
      })

      return () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current)
        }
      }
    }
  }, [currentPhase, animateParticles])

  useEffect(() => {
    initParticles()
    
    const handleResize = () => {
      initParticles()
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [initParticles])

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
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current)
    }
    setTimeout(() => {
      onComplete?.()
    }, 1200)
  }, [onComplete])

  // Main animation sequence
  const runAnimationSequence = useCallback(async () => {
    try {
      // PHASE 1: Grand Entrance (0-3s)
      setCurrentPhase(1)
      await controls.start('visible')
      await logoControls.start('visible')
      await new Promise(resolve => setTimeout(resolve, 800))
      await logoControls.start('floating')
      await backgroundControls.start('visible')
      
      // Show skip button after 3 seconds
      setTimeout(() => setShowSkip(true), 3000)

      // PHASE 2: Text Revelation (3-6s)
      setCurrentPhase(2)
      await new Promise(resolve => setTimeout(resolve, 1000))
      await textControls.start('visible')
      await new Promise(resolve => setTimeout(resolve, 2000))

      // PHASE 3: Professional Identity (6-9s)
      setCurrentPhase(3)
      await new Promise(resolve => setTimeout(resolve, 3000))

      // PHASE 4: Finale & Transition (9-12s)
      setCurrentPhase(4)
      await phase4Controls.start('pulse')
      await new Promise(resolve => setTimeout(resolve, 2000))

      // Complete animation
      skipAnimation()

    } catch (error) {
      console.error('Animation error:', error)
      skipAnimation()
    }
  }, [controls, logoControls, textControls, backgroundControls, phase4Controls, skipAnimation])

  useEffect(() => {
    if (!hasSeenAnimation) {
      runAnimationSequence()
    } else {
      skipAnimation()
    }
  }, [hasSeenAnimation, runAnimationSequence, skipAnimation])

  // Geometric shapes data
  const geometricShapes = Array.from({ length: 12 }, (_, i) => i)

  if (hasSeenAnimation && !isVisible) {
    return null
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          ref={containerRef}
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
              className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-slate-700 transition-all duration-300 shadow-lg border border-slate-200 dark:border-slate-600"
              onClick={skipAnimation}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <X className="w-5 h-5 text-slate-700 dark:text-slate-300" />
            </motion.button>
          )}

          {/* Advanced Animated Background */}
          <div className="absolute inset-0">
            {/* Animated Gradient Mesh */}
            <motion.div
              className="absolute inset-0 opacity-40"
              animate={{
                background: [
                  'radial-gradient(circle at 10% 20%, rgba(120, 119, 198, 0.1) 0%, transparent 40%)',
                  'radial-gradient(circle at 90% 30%, rgba(255, 119, 198, 0.1) 0%, transparent 40%)',
                  'radial-gradient(circle at 50% 80%, rgba(120, 219, 255, 0.1) 0%, transparent 40%)',
                  'radial-gradient(circle at 10% 20%, rgba(120, 119, 198, 0.1) 0%, transparent 40%)',
                ],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Floating Geometric Shapes */}
            {geometricShapes.map((i) => (
              <motion.div
                key={i}
                className={`absolute border-2 border-slate-200/30 dark:border-slate-600/30 ${
                  i % 4 === 0 ? 'w-24 h-24 rounded-full' : 
                  i % 4 === 1 ? 'w-20 h-20 rotate-45' : 
                  i % 4 === 2 ? 'w-16 h-16 rotate-12' : 'w-28 h-28 rounded-3xl'
                }`}
                style={{
                  left: `${15 + (i * 7) % 70}%`,
                  top: `${5 + (i * 5) % 85}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 180, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 8 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.3,
                }}
                initial="hidden"
                animate={backgroundControls}
              />
            ))}

            {/* Particle System */}
            {particles.map((particle) => (
              <motion.div
                key={particle.id}
                className="absolute rounded-full"
                style={{
                  left: `${particle.x}%`,
                  top: `${particle.y}%`,
                  width: particle.size,
                  height: particle.size,
                  backgroundColor: particle.color,
                }}
                animate={{
                  opacity: [0.3, 0.8, 0.3],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          {/* Main Content */}
          <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
            {/* Logo with 3D Effect */}
            <motion.div
              className="mb-12"
              variants={logoVariants}
              initial="hidden"
              animate={logoControls}
            >
              <motion.div
                className="w-28 h-28 mx-auto bg-gradient-to-br from-black to-slate-800 dark:from-white dark:to-slate-200 rounded-3xl flex items-center justify-center shadow-2xl"
                whileHover={{ scale: 1.05, rotateY: 10 }}
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                <span className="text-white dark:text-black text-3xl font-bold font-['SF_Pro_Display'] tracking-tight">
                  MAH
                </span>
                <div className="absolute inset-0 rounded-3xl border border-white/10 dark:border-black/10 shadow-inner" />
              </motion.div>
            </motion.div>

            {/* Greeting Text with Typewriter Effect */}
            <motion.div className="mb-8" initial="hidden" animate={textControls}>
              <motion.div
                className="inline-block overflow-hidden whitespace-nowrap"
                variants={typewriterVariants}
              >
                <span className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-light font-['SF_Pro_Text'] tracking-wide">
                  Hi, I&apos;m
                </span>
                <motion.span
                  variants={cursorVariants}
                  animate="blinking"
                  className="ml-1 w-0.5 h-8 bg-slate-600 dark:bg-slate-400 inline-block align-middle"
                />
              </motion.div>
            </motion.div>

            {/* Name with Letter-by-Letter Animation */}
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-slate-900 dark:text-slate-50 mb-12 tracking-tight font-['SF_Pro_Display']"
              initial="hidden"
              animate={textControls}
            >
              {'MUHAMMAD AMIRUL HADI'.split('').map((char, index) => (
                <motion.span
                  key={index}
                  custom={index}
                  variants={letterVariants}
                  className="inline-block hover:scale-110 transition-transform duration-300"
                  whileHover={{ 
                    y: -5,
                    color: "#3B82F6",
                    transition: { duration: 0.2 }
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </motion.h1>

            {/* Welcome Text with Underline Animation */}
            <motion.div
              className="mb-8"
              variants={fadeInUpVariants}
              initial="hidden"
              animate={currentPhase >= 3 ? "visible" : "hidden"}
            >
              <h2 className="text-2xl md:text-3xl text-slate-700 dark:text-slate-300 font-light font-['SF_Pro_Text'] tracking-wide mb-4">
                Welcome to My Portfolio
              </h2>
              <motion.div
                className="w-48 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
                variants={underlineVariants}
                initial="hidden"
                animate={currentPhase >= 3 ? "visible" : "hidden"}
              />
            </motion.div>

            {/* Tagline with Morph Effect */}
            <motion.div
              variants={morphVariants}
              initial="hidden"
              animate={currentPhase >= 3 ? "visible" : "hidden"}
            >
              <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-medium font-['SF_Pro_Text'] bg-gradient-to-r from-slate-600 to-slate-800 dark:from-slate-400 dark:to-slate-200 bg-clip-text text-transparent">
                Engineering Digital Excellence
              </p>
            </motion.div>

            {/* Phase 4 Glow Effects */}
            <motion.div
              className="absolute inset-0 rounded-3xl"
              variants={pulseGlowVariants}
              initial={false}
              animate={phase4Controls}
              style={{
                background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
                filter: 'blur(20px)',
              }}
            />
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