"use client";

import React, { useRef } from "react";
import { siteConfig } from "@/lib/constants/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HeroVisual } from "@/components/3d/HeroVisual";
import { DotField } from "@/components/hero/DotField";
import { useGSAPAnimation } from "@/hooks/useGSAPAnimation";
import { gsap } from "@/lib/animations/gsap";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const visualBoxRef = useRef<HTMLDivElement>(null);

  useGSAPAnimation(
    (ctx, prefersReduced) => {
      // 1. Accessibility: When reduced motion is preferred, keep static presentation
      if (prefersReduced) {
        return;
      }

      // 2. Master Coordinated Entrance Timeline
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      // Phase B: Technical Header Strip
      tl.from(
        "[data-hero='top-strip']",
        {
          opacity: 0,
          y: -12,
          duration: 0.6,
        },
        0.05
      );

      // Phase C: Headline Lines Staggered Vertical Reveal
      tl.from(
        "[data-hero='headline-line']",
        {
          opacity: 0,
          y: 32,
          duration: 0.85,
          stagger: 0.12,
          ease: "power3.out",
        },
        0.18
      );

      // Phase F1: Hero Visual Outer Frame & Ambient Glow
      tl.from(
        "[data-hero='visual'] [data-visual='frame']",
        {
          opacity: 0,
          scale: 0.95,
          duration: 0.9,
          ease: "power2.out",
        },
        0.28
      );

      tl.from(
        "[data-hero='visual'] [data-visual='ambient']",
        {
          opacity: 0,
          scale: 0.85,
          duration: 1.1,
          ease: "power2.out",
        },
        0.32
      );

      // Phase F2: Internal Technical SVG Online Activation
      tl.from(
        "[data-hero='visual'] [data-visual='grid']",
        {
          opacity: 0,
          duration: 0.6,
          ease: "power1.out",
        },
        0.48
      );

      tl.from(
        "[data-hero='visual'] [data-visual='axes'] line",
        {
          opacity: 0,
          scaleX: 0.2,
          scaleY: 0.2,
          transformOrigin: "center center",
          duration: 0.7,
          stagger: 0.1,
          ease: "power2.out",
        },
        0.52
      );

      tl.from(
        "[data-hero='visual'] [data-visual='rings'] ellipse",
        {
          opacity: 0,
          scale: 0.7,
          transformOrigin: "center center",
          duration: 0.8,
          stagger: 0.12,
          ease: "power2.out",
        },
        0.6
      );

      tl.from(
        "[data-hero='visual'] [data-visual='calibration'] circle",
        {
          opacity: 0,
          scale: 0.85,
          transformOrigin: "center center",
          duration: 0.6,
          stagger: 0.08,
          ease: "power2.out",
        },
        0.7
      );

      tl.from(
        "[data-hero='visual'] [data-visual='core']",
        {
          opacity: 0,
          scale: 0.75,
          transformOrigin: "center center",
          duration: 0.8,
          ease: "back.out(1.35)",
        },
        0.76
      );

      tl.from(
        "[data-hero='visual'] [data-visual='satellites'] *",
        {
          opacity: 0,
          duration: 0.5,
          stagger: 0.04,
          ease: "power1.out",
        },
        0.9
      );

      tl.from(
        "[data-hero='visual'] [data-visual='status']",
        {
          opacity: 0,
          y: 6,
          duration: 0.45,
          ease: "power2.out",
        },
        1.0
      );

      // Phase D: Supporting Paragraph & CTA Actions
      tl.from(
        "[data-hero='description']",
        {
          opacity: 0,
          y: 18,
          duration: 0.7,
          ease: "power2.out",
        },
        0.62
      );

      tl.from(
        "[data-hero='actions'] > *",
        {
          opacity: 0,
          y: 14,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
        },
        0.82
      );

      // Phase E: Technical Sub-annotation
      tl.from(
        "[data-hero='annotation']",
        {
          opacity: 0,
          y: 10,
          duration: 0.5,
          ease: "power2.out",
        },
        0.98
      );

      // Phase G: Bottom Technical Metadata Matrix
      tl.from(
        "[data-hero='metadata-col']",
        {
          opacity: 0,
          y: 16,
          duration: 0.6,
          stagger: 0.08,
          ease: "power2.out",
        },
        1.12
      );

      // 3. Desktop Pointer Parallax on HeroVisual (Desktop / Fine Pointer Only)
      const heroEl = heroRef.current;
      const visualBox = visualBoxRef.current;

      if (
        heroEl &&
        visualBox &&
        typeof window !== "undefined" &&
        window.matchMedia("(pointer: fine)").matches
      ) {
        const xTo = gsap.quickTo(visualBox, "x", {
          duration: 0.7,
          ease: "power2.out",
        });
        const yTo = gsap.quickTo(visualBox, "y", {
          duration: 0.7,
          ease: "power2.out",
        });
        const rotXTo = gsap.quickTo(visualBox, "rotationX", {
          duration: 0.9,
          ease: "power2.out",
        });
        const rotYTo = gsap.quickTo(visualBox, "rotationY", {
          duration: 0.9,
          ease: "power2.out",
        });

        const handleMouseMove = (e: MouseEvent) => {
          const rect = heroEl.getBoundingClientRect();
          const relX = (e.clientX - rect.left) / rect.width - 0.5;
          const relY = (e.clientY - rect.top) / rect.height - 0.5;

          // Maximum 20px displacement and 4deg tilt
          xTo(relX * 24);
          yTo(relY * 24);
          rotXTo(-relY * 5);
          rotYTo(relX * 5);
        };

        const handleMouseLeave = () => {
          xTo(0);
          yTo(0);
          rotXTo(0);
          rotYTo(0);
        };

        heroEl.addEventListener("mousemove", handleMouseMove, { passive: true });
        heroEl.addEventListener("mouseleave", handleMouseLeave, { passive: true });

        return () => {
          heroEl.removeEventListener("mousemove", handleMouseMove);
          heroEl.removeEventListener("mouseleave", handleMouseLeave);
        };
      }
    },
    { scopeRef: heroRef }
  );

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative flex min-h-[92vh] flex-col justify-center border-b border-zinc-200 bg-white py-16 sm:py-24 lg:py-28 overflow-hidden"
    >
      {/* ── React Bits DotField Cursor Background Layer (scoped strictly to Hero) ── */}
      <DotField />

      {/* Background Subtle Ambient — very light radial on white */}
      <div className="absolute top-1/4 left-1/2 -z-10 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(224,160,48,0.04)_0%,transparent_70%)] pointer-events-none" />

      <Container size="wide" className="relative z-10">
        {/* Top Technical Header Strip */}
        <div
          data-hero="top-strip"
          className="mb-12 flex flex-wrap items-center justify-between gap-4 border-b border-zinc-200 pb-6"
        >
          <div className="flex items-center gap-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-zinc-500">
              [ 01 // STUDIO OVERVIEW ]
            </span>
            <span className="h-3 w-[1px] bg-zinc-300" />
            <div className="inline-flex items-center gap-2 rounded-[2px] border border-zinc-300 bg-zinc-100 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-zinc-600">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span>{siteConfig.positioning}</span>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-6 font-mono text-[10px] uppercase tracking-widest text-zinc-400">
            <span>DISCIPLINE: BESPOKE_SYSTEMS</span>
            <span>·</span>
            <span>CAPACITY: 4–5 ENG_CORE</span>
          </div>
        </div>

        {/* Asymmetric Hero Composition */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Monumental Headline & Narrative */}
          <div className="lg:col-span-7">
            <h1 className="text-4xl font-semibold tracking-[-0.038em] text-[#202020] sm:text-6xl md:text-7xl lg:text-[5.4rem] lg:leading-[0.98]">
              <span data-hero="headline-line" className="inline-block">
                Software Built
              </span>{" "}
              <br className="hidden sm:inline" />
              <span data-hero="headline-line" className="inline-block">
                Around Your
              </span>{" "}
              <br className="hidden sm:inline" />
              <span
                data-hero="headline-line"
                className="inline-block text-zinc-400"
              >
                Business.
              </span>
            </h1>

            <p
              data-hero="description"
              className="mt-8 max-w-xl text-base font-normal leading-relaxed text-zinc-500 sm:text-lg"
            >
              {siteConfig.description}
            </p>

            {/* CTAs */}
            <div
              data-hero="actions"
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Button
                href="#work"
                variant="primary"
                size="lg"
                className="tracking-[0.18em]"
              >
                Selected Work
              </Button>
              <Button
                href="#services"
                variant="secondary"
                size="lg"
                className="tracking-[0.18em]"
              >
                Capabilities
              </Button>
            </div>

            {/* Technical Sub-annotation */}
            <div
              data-hero="annotation"
              className="mt-8 flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-zinc-400"
            >
              <span className="h-1 w-1 rounded-full bg-[#E0A030]" />
              <span>
                Tailored engineering architecture · Zero template compromises
              </span>
            </div>
          </div>

          {/* Right Column: Isolated Visual Centerpiece */}
          <div
            data-hero="visual"
            className="flex items-center justify-center lg:col-span-5"
          >
            <HeroVisual ref={visualBoxRef} />
          </div>
        </div>

        {/* Bottom Technical Metadata Matrix */}
        <div className="mt-20 grid grid-cols-2 gap-6 border-t border-zinc-200 pt-8 md:grid-cols-4">
          <div data-hero="metadata-col">
            <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400">
              01 // Discipline
            </span>
            <p className="mt-1.5 text-xs font-medium uppercase tracking-wider text-[#202020]">
              Custom Engineering
            </p>
          </div>
          <div data-hero="metadata-col">
            <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400">
              02 // Focus
            </span>
            <p className="mt-1.5 text-xs font-medium uppercase tracking-wider text-[#202020]">
              Business Systems &amp; Portals
            </p>
          </div>
          <div data-hero="metadata-col">
            <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400">
              03 // Execution
            </span>
            <p className="mt-1.5 text-xs font-medium uppercase tracking-wider text-[#202020]">
              Full Lifecycle Ownership
            </p>
          </div>
          <div data-hero="metadata-col">
            <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400">
              04 // Structure
            </span>
            <p className="mt-1.5 text-xs font-medium uppercase tracking-wider text-[#202020]">
              Senior-Led Core Team
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
