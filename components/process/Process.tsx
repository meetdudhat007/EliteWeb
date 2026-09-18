"use client";

import React, { useRef } from "react";
import { siteConfig } from "@/lib/constants/site";
import { Container } from "@/components/ui/Container";
import { gsap } from "@/lib/animations/gsap";
import { useGSAPAnimation } from "@/hooks/useGSAPAnimation";

export function Process() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAPAnimation(
    (_ctx, prefersReduced) => {
      if (prefersReduced) return;

      const isDesktop =
        typeof window !== "undefined" &&
        window.matchMedia("(min-width: 1024px)").matches;

      /*
       * Single triggered timeline for the entire Process section.
       * Starts when the section header enters 80% into the viewport.
       *
       * Sequence:
       *   1. Section label + heading
       *   2. Horizontal progression rail (desktop) — fills from left
       *   3. Step cards stagger in sequentially — Discover → Define → ... → Deploy
       *   4. Step numbers appear with slight overshoot for emphasis
       */
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Section label
      tl.from("[data-process='header-label']", {
        opacity: 0,
        y: 14,
        duration: 0.6,
      }, 0);

      // Section heading
      tl.from("[data-process='heading']", {
        opacity: 0,
        y: 24,
        duration: 0.8,
      }, 0.08);

      // Meta text (right side)
      tl.from("[data-process='header-meta']", {
        opacity: 0,
        y: 14,
        duration: 0.6,
      }, 0.18);

      // Horizontal progression rail — reveals left → right on desktop only
      if (isDesktop) {
        tl.from("[data-process='rail']", {
          scaleX: 0,
          transformOrigin: "left center",
          duration: 1.25,
          ease: "power2.inOut",
        }, 0.14);
      }

      // Step node numbers — subtle scale entrance slightly ahead of text
      tl.from("[data-process='step-number']", {
        opacity: 0,
        scale: 0.8,
        transformOrigin: "center center",
        stagger: 0.09,
        duration: 0.55,
        ease: "back.out(1.3)",
      }, 0.22);

      // Step cards — full card stagger, follows rail
      tl.from("[data-process='step']", {
        opacity: 0,
        y: isDesktop ? 32 : 20,
        stagger: 0.09,
        duration: 0.75,
        ease: "power2.out",
      }, 0.28);
    },
    { scopeRef: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative border-b border-white/[0.07] py-32 sm:py-40 lg:py-48"
    >
      <Container size="wide">
        {/* Header */}
        <div className="flex flex-col justify-between gap-6 border-b border-white/[0.07] pb-16 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span
              data-process="header-label"
              className="font-mono text-[11px] uppercase tracking-[0.24em] text-zinc-400"
            >
              [ 05 // METHODOLOGY ]
            </span>
            <h2
              data-process="heading"
              className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl"
            >
              Disciplined delivery from conception to deployment.
            </h2>
          </div>
          <p
            data-process="header-meta"
            className="max-w-xs text-xs uppercase tracking-wider text-zinc-400"
          >
            6-stage engineering lifecycle engineered for predictable, transparent
            execution.
          </p>
        </div>

        {/* 6-Stage Timeline */}
        <div className="relative mt-20">
          {/* Horizontal Progression Axis (Desktop) */}
          <div
            data-process="rail"
            className="hidden lg:block absolute top-[52px] left-0 right-0 h-[1px] bg-white/[0.1] -z-0"
          />

          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16">
            {siteConfig.process.map((step, index) => (
              <div
                key={step.step}
                data-process="step"
                className="relative flex flex-col justify-between border-t border-white/[0.07] pt-8 lg:border-t-0 lg:pt-0"
              >
                <div>
                  {/* Step Node Marker with Progression Tag */}
                  <div className="flex items-center justify-between mb-8">
                    <span
                      data-process="step-number"
                      className="font-mono text-3xl font-extralight tracking-tighter text-white/40 sm:text-4xl"
                    >
                      {step.step}
                    </span>
                    <div className="flex items-center gap-1.5 rounded-[2px] border border-white/10 bg-white/[0.02] px-2 py-0.5 font-mono text-[8px] uppercase tracking-widest text-zinc-400">
                      <span className="h-1 w-1 rounded-full bg-white/40" />
                      <span>STAGE_0{index + 1}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                    {step.description}
                  </p>
                </div>

                <div className="mt-10 border-t border-white/[0.05] pt-4 font-mono text-[9px] uppercase tracking-widest text-zinc-400">
                  Deliverable // {step.title.toUpperCase()}_SPEC
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
