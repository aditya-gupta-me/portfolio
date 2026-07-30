/**
 * Umami Analytics event tracking utility.
 * Wraps window.umami.track() with a safe guard for SSR and
 * cases where the Umami script has not yet loaded.
 */

export type EventData = Record<string, string | number | boolean>

export function trackEvent(name: string, data?: EventData): void {
  if (typeof window === 'undefined') return
  if (!window.umami?.track) return
  window.umami.track(name, data)
}
