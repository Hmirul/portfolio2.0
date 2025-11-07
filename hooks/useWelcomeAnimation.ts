// hooks/useWelcomeAnimation.ts
'use client'

import { useCallback, useEffect, useState } from 'react'

export const useWelcomeAnimation = () => {
  const [animationCompleted, setAnimationCompleted] = useState(true)

  useEffect(() => {
    const hasSeen = localStorage.getItem('welcome-animation-seen')
    console.log('Checking localStorage:', hasSeen)
    
    if (!hasSeen) {
      console.log('First visit - show animation')
      setAnimationCompleted(false)
    }
  }, [])

  const handleAnimationComplete = useCallback(() => {
    console.log('Animation completed')
    setAnimationCompleted(true)
    localStorage.setItem('welcome-animation-seen', 'true')
  }, [])

  const skipAnimation = useCallback(() => {
    console.log('Animation skipped')
    setAnimationCompleted(true)
    localStorage.setItem('welcome-animation-seen', 'true')
  }, [])

  return {
    showWelcome: !animationCompleted,
    animationCompleted,
    handleAnimationComplete,
    skipAnimation,
  }
}