/**
 * Centralized Animation Tokens & Timing Foundation
 * 
 * ARCHITECTURAL NOTE:
 * These tokens define standard durations, easings, distances, and staggers
 * to prepare the architecture for upcoming GSAP/Motion animation phases.
 * Standardizing these prevents individual components from inventing inconsistent motion.
 */

export const animationTokens = {
  durations: {
    instant: 0.15,
    fast: 0.25,
    normal: 0.45,
    slow: 0.85,
    cinematic: 1.4,
  },

  easings: {
    // Premium editorial ease (fast acceleration, smooth deceleration)
    editorial: "cubic-bezier(0.16, 1, 0.3, 1)",
    // Smooth standard transition
    smooth: "cubic-bezier(0.25, 0.1, 0.25, 1)",
    // Subtle snappy entrance
    snappy: "cubic-bezier(0.2, 0.8, 0.2, 1)",
    // Anticipate curve
    anticipate: "cubic-bezier(0.38, 0.005, 0.215, 1)",
  },

  distances: {
    revealSmall: 16,
    revealStandard: 32,
    revealLarge: 64,
  },

  staggers: {
    tight: 0.04,
    standard: 0.08,
    relaxed: 0.15,
  },

  scrollTriggerDefaults: {
    // Standard entrance trigger positions
    entranceStart: "top 85%",
    entranceEnd: "bottom 20%",
    // Pinned section scrub positions
    pinnedStart: "top top",
    pinnedEnd: "+=150%",
    // Standard toggle actions (play when entering, reverse when scrolling back up past start)
    toggleActions: "play none none none",
    // Standard scrub inertia (in seconds)
    scrub: 0.6,
    // Editorial scrub for Statement section (1s inertia = smooth, deliberate scroll feel)
    scrubStatement: 1,
  },
} as const;

export type AnimationTokens = typeof animationTokens;
