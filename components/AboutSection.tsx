'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { aboutData } from '@/lib/about'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export function AboutSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
        >
          {/* Image */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-accent-400/20 to-accent-600/10">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop"
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div variants={containerVariants} className="space-y-6">
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl font-bold font-display text-slate-900 dark:text-slate-50 mb-4">
                About Me
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                {aboutData.bio}
              </p>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-slate-600 dark:text-slate-400 leading-relaxed whitespace-pre-line"
            >
              {aboutData.longBio}
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Values */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold font-display text-slate-900 dark:text-slate-50 mb-12 text-center"
          >
            My Values
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aboutData.values.map((value, _) => (
              <motion.div
                key={value.title}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="p-6 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-accent-500/50 dark:hover:border-accent-500/50 transition-all duration-300"
              >
                <div className="text-4xl mb-3">{value.icon}</div>
                <h4 className="text-xl font-bold font-display text-slate-900 dark:text-slate-50 mb-2">
                  {value.title}
                </h4>
                <p className="text-slate-600 dark:text-slate-400">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
