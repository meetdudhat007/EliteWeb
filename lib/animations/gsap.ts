import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Centralized GSAP & ScrollTrigger Initialization
 * 
 * ARCHITECTURAL RULES:
 * 1. Register plugins only once centrally in browser environments.
 * 2. Never attempt to access window or register plugins during SSR.
 * 3. All animation components should import `gsap` and `ScrollTrigger` from this module.
 */

let isRegistered = false;

export function getGSAP() {
  if (typeof window !== "undefined" && !isRegistered) {
    gsap.registerPlugin(ScrollTrigger);
    
    // Configure default ScrollTrigger behavior
    ScrollTrigger.config({
      limitCallbacks: true,
      ignoreMobileResize: true,
    });
    
    isRegistered = true;
  }
  return { gsap, ScrollTrigger };
}

// Auto-register when imported in browser environment
if (typeof window !== "undefined" && !isRegistered) {
  gsap.registerPlugin(ScrollTrigger);
  isRegistered = true;
}

export { gsap, ScrollTrigger };
