import { gsap } from "@/lib/animations/gsap";

/**
 * Responsive Animation Breakpoints & GSAP matchMedia Helper
 * 
 * Standard breakpoints corresponding with the project's layout system:
 * - desktop: min-width 1024px
 * - mobile: max-width 1023px
 * - reducedMotion: prefers-reduced-motion: reduce
 */
export const animationBreakpoints = {
  desktop: "(min-width: 1024px)",
  mobile: "(max-width: 1023px)",
  reducedMotion: "(prefers-reduced-motion: reduce)",
  noReducedMotion: "(prefers-reduced-motion: no-preference)",
} as const;

export type AnimationBreakpointKey = keyof typeof animationBreakpoints;

/**
 * Create a responsive GSAP matchMedia context.
 * Automatically cleans up triggers and timelines when breakpoints change or on teardown.
 */
export function createResponsiveContext() {
  if (typeof window === "undefined") {
    return null;
  }
  return gsap.matchMedia();
}
