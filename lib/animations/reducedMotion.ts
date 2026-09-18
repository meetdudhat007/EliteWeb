/**
 * Reduced-Motion Accessibility Utilities
 * 
 * ARCHITECTURAL RULES:
 * 1. Must never access window/matchMedia during SSR.
 * 2. When prefers-reduced-motion: reduce is enabled, components must gracefully
 *    bypass large transforms and scroll-linked translations while keeping
 *    all content fully visible and accessible.
 */

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

/**
 * Synchronous check for prefers-reduced-motion preference.
 * Safe to call during SSR (returns false).
 */
export function getPrefersReducedMotion(): boolean {
  if (typeof window === "undefined" || !window.matchMedia) {
    return false;
  }
  return window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

/**
 * Subscribe to changes in the operating system's reduced-motion preference.
 * Compatible with React's useSyncExternalStore.
 * Returns an unsubscribe cleanup function.
 */
export function subscribeToReducedMotion(
  onStoreChange: () => void
): () => void {
  if (typeof window === "undefined" || !window.matchMedia) {
    return () => {};
  }

  const mediaQueryList = window.matchMedia(REDUCED_MOTION_QUERY);
  const listener = () => {
    onStoreChange();
  };

  if (mediaQueryList.addEventListener) {
    mediaQueryList.addEventListener("change", listener);
    return () => mediaQueryList.removeEventListener("change", listener);
  } else if ("addListener" in mediaQueryList) {
    mediaQueryList.addListener(listener);
    return () => mediaQueryList.removeListener(listener);
  }
  return () => {};
}
