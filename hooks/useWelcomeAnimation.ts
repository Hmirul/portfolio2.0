// hooks/useWelcomeAnimation.ts
import { useCallback, useEffect, useState } from 'react'

export const useWelcomeAnimation = () => {
  const [showWelcome, setShowWelcome] = useState(false)
  const [animationCompleted, setAnimationCompleted] = useState(false)

  useEffect(() => {
    // Check if user has seen the animation before
    const hasSeenAnimation = localStorage.getItem('welcome-animation-seen')
    
    if (!hasSeenAnimation) {
      setShowWelcome(true)
    } else {
      setAnimationCompleted(true)
    }
  }, [])

  const handleAnimationComplete = useCallback(() => {
    setShowWelcome(false)
    setAnimationCompleted(true)
    localStorage.setItem('welcome-animation-seen', 'true')
  }, [])

  const skipAnimation = useCallback(() => {
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