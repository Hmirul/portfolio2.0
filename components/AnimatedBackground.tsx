'use client'

import { motion } from 'framer-motion'

export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient blob 1 */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-accent-400/20 to-accent-600/10 rounded-full blur-3xl"
      />

      {/* Gradient blob 2 */}
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-accent-500/10 to-accent-400/5 rounded-full blur-3xl"
      />

      {/* Gradient blob 3 */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, 100, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-slate-400/5 to-accent-400/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  )
}
