"use client";

import { useEffect, useLayoutEffect } from "react";
import { gsap, getGSAP } from "@/lib/animations/gsap";
import { getPrefersReducedMotion } from "@/lib/animations/reducedMotion";

// In browser environments useLayoutEffect runs synchronously before paint to avoid visual flash,
// while useEffect runs safely on the server without SSR warnings.
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export interface UseGSAPAnimationOptions {
  scopeRef?: React.RefObject<HTMLElement | null>;
  dependencies?: React.DependencyList;
  revertOnUnmount?: boolean;
}

export type GSAPAnimationCallback = (
  context: gsap.Context,
  prefersReducedMotion: boolean
) => void | (() => void);

/**
 * Idiomatic React Hook for GSAP Animations
 * 
 * GUARANTEES:
 * 1. Scopes selector queries to `scopeRef` to prevent cross-component leakage.
 * 2. Automatically cleans up via `ctx.revert()` on unmount or re-render, destroying
 *    all associated ScrollTriggers, tweens, and timelines without memory leaks.
 * 3. Safely handles React 18/19 StrictMode and Fast Refresh cycles.
 * 4. Integrates prefers-reduced-motion detection out of the box.
 * 5. Strictly SSR-safe.
 */
export function useGSAPAnimation(
  callback: GSAPAnimationCallback,
  options: UseGSAPAnimationOptions = {}
) {
  const { scopeRef, dependencies = [], revertOnUnmount = true } = options;

  useIsomorphicLayoutEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    // Ensure GSAP plugins are registered in browser
    getGSAP();

    const prefersReduced = getPrefersReducedMotion();
    const scopeElement = scopeRef?.current ?? undefined;

    // Create scoped GSAP context
    const ctx = gsap.context((self) => {
      callback(self, prefersReduced);
    }, scopeElement);

    return () => {
      if (revertOnUnmount) {
        ctx.revert();
      }
    };
  }, dependencies);
}
