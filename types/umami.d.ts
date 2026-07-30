/**
 * Global type declaration for Umami's browser-injected tracking object.
 * The Umami script sets window.umami after it loads.
 */
declare global {
  interface Window {
    umami?: {
      track: (event: string, data?: Record<string, string | number | boolean>) => void
    }
  }
}

export {}
