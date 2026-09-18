"use client";

import { useSyncExternalStore } from "react";
import {
  getPrefersReducedMotion,
  subscribeToReducedMotion,
} from "@/lib/animations/reducedMotion";

const getServerSnapshot = () => false;

/**
 * Reactive React hook to observe prefers-reduced-motion accessibility preference.
 * Implemented using useSyncExternalStore for concurrent-safe, zero-cascade rendering
 * and hydration-safe default.
 */
export function useReducedMotion(): boolean {
  return useSyncExternalStore(
    subscribeToReducedMotion,
    getPrefersReducedMotion,
    getServerSnapshot
  );
}
