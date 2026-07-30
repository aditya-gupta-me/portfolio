'use client'

import Link from 'next/link'
import { trackEvent, type EventData } from '@/lib/analytics'

interface TrackedLinkProps {
  href: string
  eventName: string
  eventData?: EventData
  children: React.ReactNode
  className?: string
}

export function TrackedLink({ href, eventName, eventData, children, className }: TrackedLinkProps) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() => trackEvent(eventName, eventData)}
    >
      {children}
    </Link>
  )
}
