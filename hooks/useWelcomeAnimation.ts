// hooks/useWelcomeAnimation.ts
'use client'

import { useCallback, useEffect, useState } from 'react'

export const useWelcomeAnimation = () => {
  const [showWelcome, setShowWelcome] = useState(false)
  const [animationCompleted, setAnimationCompleted] = useState(false)

  useEffect(() => {
    // Check if user has seen the animation before
    const hasSeenAnimation = localStorage.getItem('welcome-animation-seen')
    
    console.log('🎬 Welcome Animation - Check:', { hasSeenAnimation })
    
    if (!hasSeenAnimation) {
      console.log('🆕 First time visitor - showing animation')
      setShowWelcome(true)
    } else {
      console.log('🔁 Returning visitor - skipping animation')
      setAnimationCompleted(true)
    }
  }, [])

  const handleAnimationComplete = useCallback(() => {
    console.log('✅ Animation completed')
    setShowWelcome(false)
    setAnimationCompleted(true)
    localStorage.setItem('welcome-animation-seen', 'true')
  }, [])

  const skipAnimation = useCallback(() => {
    console.log('⏭️ Animation skipped by user')
    setShowWelcome(false)
    setAnimationCompleted(true)
    localStorage.setItem('welcome-animation-seen', 'true')
  }, [])

  return {
    showWelcome,
    animationCompleted,
    handleAnimationComplete,
    skipAnimation,
  }
}