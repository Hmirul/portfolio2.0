'use client'

import { useEffect, useState } from 'react'

/**
 * Hook for responsive breakpoint detection
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }

    const listener = () => setMatches(media.matches)
    media.addEventListener('change', listener)

    return () => media.removeEventListener('change', listener)
  }, [matches, query])

  return matches
}

/**
 * Hook for mobile detection
 */
export function useIsMobile(): boolean {
  return useMediaQuery('(max-width: 640px)')
}

/**
 * Hook for tablet detection
 */
export function useIsTablet(): boolean {
  return useMediaQuery('(max-width: 1024px)')
}

/**
 * Hook for desktop detection
 */
export function useIsDesktop(): boolean {
  return useMediaQuery('(min-width: 1025px)')
}

/**
 * Hook for dark mode detection
 */
export function useIsDarkMode(): boolean {
  return useMediaQuery('(prefers-color-scheme: dark)')
}

/**
 * Hook for reduced motion preference
 */
export function usePrefersReducedMotion(): boolean {
  return useMediaQuery('(prefers-reduced-motion: reduce)')
}
