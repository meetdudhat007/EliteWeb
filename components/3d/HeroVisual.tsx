import React, { forwardRef } from "react";
import { cn } from "@/lib/utils/cn";

export interface HeroVisualProps {
  className?: string;
}

/**
 * Isolated Static Hero Visual Centerpiece
 * 
 * ARCHITECTURAL PURPOSE:
 * This component acts as the visual centerpiece for the hero section.
 * Contains semantic data-visual attributes for GSAP timeline targeting.
 * Accepts a forwarded ref on the inner framing box for desktop pointer parallax.
 */
export const HeroVisual = forwardRef<HTMLDivElement, HeroVisualProps>(
  function HeroVisual({ className }, ref) {
    return (
      <div
        className={cn(
          "relative mx-auto flex aspect-square w-full max-w-[520px] items-center justify-center select-none [perspective:1000px]",
          className
        )}
        aria-hidden="true"
      >
        {/* Subtle Ambient Radial Light Field */}
        <div
          data-visual="ambient"
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_0%,rgba(16,18,22,0.5)_50%,transparent_75%)] blur-2xl pointer-events-none"
        />

        {/* Outer Dimensional Framing Box (Parallax target) */}
        <div
          ref={ref}
          data-visual="frame"
          className="relative h-full w-full rounded-[4px] border border-white/[0.08] bg-[#0c0e12]/60 p-6 backdrop-blur-sm sm:p-8 will-change-transform"
        >
          {/* Technical Corner Brackets */}
          <div className="absolute top-2 left-2 font-mono text-[9px] uppercase tracking-widest text-zinc-600">
            ┌ SYS_COORD
          </div>
          <div className="absolute top-2 right-2 font-mono text-[9px] uppercase tracking-widest text-zinc-600">
            NODE_MATRIX ┐
          </div>
          <div className="absolute bottom-2 left-2 font-mono text-[9px] uppercase tracking-widest text-zinc-600">
            └ LAT_REF: 48.2
          </div>
          <div className="absolute bottom-2 right-2 font-mono text-[9px] uppercase tracking-widest text-zinc-600">
            STAT: STABLE ┘
          </div>

          {/* Central Geometric & Architectural Orbital System */}
          <div className="relative flex h-full w-full items-center justify-center">
            <svg
              viewBox="0 0 400 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-full w-full"
            >
              {/* Background Alignment Grid */}
              <defs>
                <pattern
                  id="hero-grid-pattern"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 20 0 L 0 0 0 20"
                    fill="none"
                    stroke="rgba(255,255,255,0.04)"
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <rect
                data-visual="grid"
                width="400"
                height="400"
                fill="url(#hero-grid-pattern)"
              />

              {/* Central Horizon & Orthogonal Axes */}
              <g data-visual="axes">
                <line
                  x1="20"
                  y1="200"
                  x2="380"
                  y2="200"
                  stroke="rgba(255,255,255,0.12)"
                  strokeWidth="1"
                  strokeDasharray="4 6"
                />
                <line
                  x1="200"
                  y1="20"
                  x2="200"
                  y2="380"
                  stroke="rgba(255,255,255,0.12)"
                  strokeWidth="1"
                  strokeDasharray="4 6"
                />
              </g>

              {/* Isometric Rings / Layered Planes */}
              <g data-visual="rings">
                <ellipse
                  cx="200"
                  cy="200"
                  rx="150"
                  ry="75"
                  stroke="rgba(255,255,255,0.18)"
                  strokeWidth="1.2"
                  transform="rotate(-25 200 200)"
                />
                <ellipse
                  cx="200"
                  cy="200"
                  rx="130"
                  ry="60"
                  stroke="rgba(255,255,255,0.10)"
                  strokeWidth="1"
                  strokeDasharray="6 6"
                  transform="rotate(35 200 200)"
                />
                <ellipse
                  cx="200"
                  cy="200"
                  rx="100"
                  ry="45"
                  stroke="rgba(255,255,255,0.22)"
                  strokeWidth="1"
                  transform="rotate(-10 200 200)"
                />
              </g>

              {/* Concentric Calibration Circles */}
              <g data-visual="calibration">
                <circle
                  cx="200"
                  cy="200"
                  r="170"
                  stroke="rgba(255,255,255,0.06)"
                  strokeWidth="1"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="110"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="1"
                  strokeDasharray="2 4"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="50"
                  stroke="rgba(255,255,255,0.18)"
                  strokeWidth="1.2"
                />
              </g>

              {/* Central Isometric Core Cube Wireframe */}
              <g
                data-visual="core"
                transform="translate(200, 200) scale(1.15)"
                className="origin-center"
              >
                {/* Top Face */}
                <polygon
                  points="0,-32 28,-16 0,0 -28,-16"
                  stroke="rgba(255,255,255,0.85)"
                  strokeWidth="1.5"
                  fill="rgba(255,255,255,0.03)"
                />
                {/* Left Face */}
                <polygon
                  points="-28,-16 0,0 0,32 -28,16"
                  stroke="rgba(255,255,255,0.6)"
                  strokeWidth="1.5"
                  fill="rgba(255,255,255,0.01)"
                />
                {/* Right Face */}
                <polygon
                  points="0,0 28,-16 28,16 0,32"
                  stroke="rgba(255,255,255,0.4)"
                  strokeWidth="1.5"
                  fill="rgba(255,255,255,0.02)"
                />
                {/* Core Node */}
                <circle cx="0" cy="0" r="3" fill="#ffffff" />
              </g>

              {/* Orbital Satellite Data Points */}
              <g data-visual="satellites">
                <circle cx="75" cy="140" r="3" fill="rgba(255,255,255,0.8)" />
                <line
                  x1="75"
                  y1="140"
                  x2="110"
                  y2="120"
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth="1"
                />
                <text
                  x="115"
                  y="124"
                  fill="rgba(255,255,255,0.6)"
                  fontSize="9"
                  fontFamily="monospace"
                >
                  NODE_ALPHA
                </text>

                <circle cx="320" cy="245" r="3" fill="rgba(255,255,255,0.8)" />
                <line
                  x1="320"
                  y1="245"
                  x2="340"
                  y2="270"
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth="1"
                />
                <text
                  x="290"
                  y="285"
                  fill="rgba(255,255,255,0.6)"
                  fontSize="9"
                  fontFamily="monospace"
                >
                  VECTOR_DELTA
                </text>

                <circle cx="150" cy="310" r="2.5" fill="rgba(255,255,255,0.5)" />
                <circle cx="280" cy="90" r="2.5" fill="rgba(255,255,255,0.5)" />
              </g>
            </svg>
          </div>

          {/* Technical Data Annotation Bar */}
          <div
            data-visual="status"
            className="mt-2 flex items-center justify-between border-t border-white/[0.08] pt-3 font-mono text-[9px] uppercase tracking-widest text-zinc-500"
          >
            <span>SPEC {"//"} 3D_CANVAS_READY</span>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80 animate-pulse" />
              <span>CORE_ACTIVE</span>
            </span>
          </div>
        </div>
      </div>
    );
  }
);
