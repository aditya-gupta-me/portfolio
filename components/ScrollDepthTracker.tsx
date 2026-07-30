'use client'

import { useEffect, useRef } from 'react'
import { trackEvent } from '@/lib/analytics'

interface ScrollDepthTrackerProps {
  pageType: string
  slug?: string
}

const THRESHOLDS = [25, 50, 75, 100]

export function ScrollDepthTracker({ pageType, slug }: ScrollDepthTrackerProps) {
  const firedRef = useRef<Set<number>>(new Set())

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      if (docHeight <= 0) return

      const scrollPercent = Math.round((scrollTop / docHeight) * 100)

      for (const threshold of THRESHOLDS) {
        if (scrollPercent >= threshold && !firedRef.current.has(threshold)) {
          firedRef.current.add(threshold)
          trackEvent('scroll_depth_reached', {
            page_type: pageType,
            depth: threshold,
            ...(slug ? { slug } : {}),
          })
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [pageType, slug])

  return null
}
