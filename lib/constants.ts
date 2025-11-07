/**
 * Global constants and configuration
 */

export const SITE_NAME = 'Premium Portfolio'
export const SITE_DESCRIPTION =
  'A premium, minimalist portfolio website with iOS/Apple aesthetic'
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'

export const SOCIAL_LINKS = {
  github: process.env.NEXT_PUBLIC_GITHUB_URL || '#',
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || '#',
  twitter: process.env.NEXT_PUBLIC_TWITTER_URL || '#',
  email: process.env.NEXT_PUBLIC_EMAIL || 'contact@example.com',
}

export const NAVIGATION_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/skills', label: 'Skills' },
  { href: '/experience', label: 'Experience' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export const ANIMATION_DURATION = {
  fast: 150,
  base: 250,
  slow: 350,
  slower: 500,
}

export const BREAKPOINTS = {
  xs: 320,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
}

export const Z_INDEX = {
  hide: -1,
  auto: 'auto',
  base: 0,
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  backdrop: 1040,
  offcanvas: 1050,
  modal: 1060,
  popover: 1070,
  tooltip: 1080,
}
