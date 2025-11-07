// lib/animationVariants.ts
export const welcomeAnimationVariants = {
  container: {
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
  },
  
  logo: {
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
  },
  
  textReveal: (delay: number = 0) => ({
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay,
        duration: 0.6,
        ease: 'backOut',
      },
    },
  }),
}

export const reducedMotionVariants = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.5 },
    },
  },
}