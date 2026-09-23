"use client";

/**
 * ZAPSTACK Hero DotField Background
 *
 * ARCHITECTURE:
 * - Canvas-based interactive dot field scoped strictly to the Hero container.
 * - Smooth cursor-relative bulging with cosine falloff and organic relaxation.
 * - Subtle ZAPSTACK luxury gold cursor glow (#E0A030).
 * - Restrained black/gold dot gradient on white canvas (no purple, no neon).
 * - Zero React state updates during animation frames (all loop state in refs).
 * - Reduced-motion and mobile (<768px) render static dot grid without animation loops.
 * - pointer-events: none ensures zero interference with Hero CTAs, text, and 3D visual.
 */

import React, { useRef, useEffect } from "react";
import { getPrefersReducedMotion } from "@/lib/animations/reducedMotion";

export interface DotFieldProps {
  className?: string;
  dotRadius?: number;
  dotSpacing?: number;
  cursorRadius?: number;
  bulgeStrength?: number;
  glowRadius?: number;
  glowColor?: string;
  glowOpacity?: number;
  gradientFrom?: string;
  gradientTo?: string;
  sparkle?: boolean;
  waveAmplitude?: number;
  bulgeOnly?: boolean;
}

interface Dot {
  x0: number;
  y0: number;
  x: number;
  y: number;
}

export function DotField({
  className = "",
  dotRadius = 1.35,
  dotSpacing = 18,
  cursorRadius = 220,
  bulgeStrength = 38,
  glowRadius = 150,
  glowColor = "#E0A030",
  glowOpacity = 0.16,
  gradientFrom = "rgba(32, 32, 32, 0.16)",
  gradientTo = "rgba(224, 160, 48, 0.12)",
}: DotFieldProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const parent = container.parentElement;
    if (!parent) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced = getPrefersReducedMotion();
    const isMobile = window.innerWidth < 768 || window.matchMedia("(pointer: coarse)").matches;

    let animFrameId: number | null = null;
    let dots: Dot[] = [];
    let width = 0;
    let height = 0;

    // Mouse state kept in local closure variables (zero React re-renders)
    let mouseX = -9999;
    let mouseY = -9999;
    let targetMouseX = -9999;
    let targetMouseY = -9999;
    let isInside = false;
    let currentGlowOpacity = 0;

    /**
     * Build the grid of dots based on the current parent container dimensions.
     */
    const rebuildGrid = (w: number, h: number) => {
      width = w;
      height = h;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      // Sizing & grid columns/rows
      const cols = Math.floor(w / dotSpacing);
      const rows = Math.floor(h / dotSpacing);
      const offsetX = (w - (cols - 1) * dotSpacing) / 2;
      const offsetY = (h - (rows - 1) * dotSpacing) / 2;

      dots = [];
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = offsetX + c * dotSpacing;
          const y = offsetY + r * dotSpacing;
          dots.push({ x0: x, y0: y, x, y });
        }
      }

      // If reduced motion or mobile, draw static representation once and exit
      if (prefersReduced || isMobile) {
        drawStatic();
      }
    };

    /**
     * Renders a static dot grid without animation loops (for reduced motion & mobile)
     */
    const drawStatic = () => {
      ctx.clearRect(0, 0, width, height);

      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, gradientFrom);
      gradient.addColorStop(1, gradientTo);

      ctx.fillStyle = gradient;
      ctx.beginPath();
      for (let i = 0; i < dots.length; i++) {
        const d = dots[i];
        ctx.moveTo(d.x0 + dotRadius, d.y0);
        ctx.arc(d.x0, d.y0, dotRadius, 0, Math.PI * 2);
      }
      ctx.fill();
    };

    /**
     * Main animation loop (desktop & active motion only)
     */
    const render = () => {
      // Smoothly track cursor coordinates
      mouseX += (targetMouseX - mouseX) * 0.18;
      mouseY += (targetMouseY - mouseY) * 0.18;

      // Smoothly fade glow in/out
      const targetGlow = isInside ? glowOpacity : 0;
      currentGlowOpacity += (targetGlow - currentGlowOpacity) * 0.1;

      ctx.clearRect(0, 0, width, height);

      // 1. Draw subtle cursor glow if active
      if (currentGlowOpacity > 0.005) {
        const glow = ctx.createRadialGradient(
          mouseX,
          mouseY,
          0,
          mouseX,
          mouseY,
          glowRadius
        );
        glow.addColorStop(0, `rgba(224, 160, 48, ${currentGlowOpacity})`);
        glow.addColorStop(0.5, `rgba(224, 160, 48, ${currentGlowOpacity * 0.35})`);
        glow.addColorStop(1, "rgba(224, 160, 48, 0)");

        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, glowRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      // 2. Compute dot displacement and batch draw
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, gradientFrom);
      gradient.addColorStop(1, gradientTo);

      ctx.fillStyle = gradient;
      ctx.beginPath();

      const ease = 0.14;
      const cRadius = cursorRadius;
      const bStrength = bulgeStrength;

      for (let i = 0; i < dots.length; i++) {
        const d = dots[i];
        let targetX = d.x0;
        let targetY = d.y0;

        if (isInside) {
          const dx = d.x0 - mouseX;
          const dy = d.y0 - mouseY;
          const dist = Math.hypot(dx, dy);

          if (dist < cRadius && dist > 0.001) {
            // Cosine falloff creates a smooth organic dome displacement
            const falloff = Math.cos((dist / cRadius) * (Math.PI / 2));
            const disp = bStrength * falloff;
            targetX = d.x0 + (dx / dist) * disp;
            targetY = d.y0 + (dy / dist) * disp;
          }
        }

        // Smooth relaxation toward target
        d.x += (targetX - d.x) * ease;
        d.y += (targetY - d.y) * ease;

        // Path creation in single batch
        ctx.moveTo(d.x + dotRadius, d.y);
        ctx.arc(d.x, d.y, dotRadius, 0, Math.PI * 2);
      }

      ctx.fill();

      animFrameId = requestAnimationFrame(render);
    };

    // Scoped Pointer Event Handlers on parent (#hero)
    const handlePointerMove = (e: PointerEvent) => {
      const rect = parent.getBoundingClientRect();
      targetMouseX = e.clientX - rect.left;
      targetMouseY = e.clientY - rect.top;
      isInside = true;
    };

    const handlePointerEnter = (e: PointerEvent) => {
      const rect = parent.getBoundingClientRect();
      targetMouseX = e.clientX - rect.left;
      targetMouseY = e.clientY - rect.top;
      if (mouseX < -1000) {
        mouseX = targetMouseX;
        mouseY = targetMouseY;
      }
      isInside = true;
    };

    const handlePointerLeave = () => {
      isInside = false;
      targetMouseX = -9999;
      targetMouseY = -9999;
    };

    // Initialize dimensions & observer
    const rect = parent.getBoundingClientRect();
    rebuildGrid(rect.width, rect.height);

    if (!prefersReduced && !isMobile) {
      parent.addEventListener("pointermove", handlePointerMove, { passive: true });
      parent.addEventListener("pointerenter", handlePointerEnter, { passive: true });
      parent.addEventListener("pointerleave", handlePointerLeave, { passive: true });
      animFrameId = requestAnimationFrame(render);
    }

    // ResizeObserver watches for Hero dimension changes
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: newW, height: newH } = entry.contentRect;
        if (newW > 0 && newH > 0) {
          rebuildGrid(newW, newH);
        }
      }
    });

    resizeObserver.observe(parent);

    return () => {
      if (animFrameId) {
        cancelAnimationFrame(animFrameId);
      }
      resizeObserver.disconnect();
      parent.removeEventListener("pointermove", handlePointerMove);
      parent.removeEventListener("pointerenter", handlePointerEnter);
      parent.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [
    dotRadius,
    dotSpacing,
    cursorRadius,
    bulgeStrength,
    glowRadius,
    glowColor,
    glowOpacity,
    gradientFrom,
    gradientTo,
  ]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={`absolute inset-0 pointer-events-none overflow-hidden z-0 select-none ${className}`}
    >
      <canvas ref={canvasRef} className="block w-full h-full pointer-events-none" />
    </div>
  );
}
