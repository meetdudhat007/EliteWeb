"use client";

import React, { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { gsap } from "@/lib/animations/gsap";
import { useGSAPAnimation } from "@/hooks/useGSAPAnimation";

export function Statement() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAPAnimation(
    (_ctx, prefersReduced) => {
      if (prefersReduced) return;

      const isDesktop =
        typeof window !== "undefined" &&
        window.matchMedia("(min-width: 1024px)").matches;

      if (isDesktop) {
        /*
         * Desktop: scrubbed editorial entrance.
         * The large typographic block "arrives" as the user scrolls into the section.
         * scrub: 1 adds 1 second of momentum for a smooth, deliberate scroll feel.
         */
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            end: "center 30%",
            scrub: 1,
          },
        });

        // Left rail metadata — slide in from left as section enters
        tl.from(
          "[data-statement='label']",
          { opacity: 0, x: -20, duration: 0.4 },
          0
        )
          .from(
            "[data-statement='meta-title']",
            { opacity: 0, x: -16, duration: 0.4 },
            0.1
          )
          .from(
            "[data-statement='meta-line']",
            {
              scaleY: 0,
              transformOrigin: "top center",
              duration: 0.4,
            },
            0.18
          )

          // Right column: large editorial paragraph
          .from(
            "[data-statement='editorial']",
            {
              opacity: 0,
              y: 44,
              duration: 0.65,
              ease: "power3.out",
            },
            0
          )

          // Supporting paragraph follows with small offset
          .from(
            "[data-statement='supporting']",
            {
              opacity: 0,
              y: 28,
              duration: 0.55,
            },
            0.32
          )

          // Tenet cards stagger in last
          .from(
            "[data-statement='tenet']",
            {
              opacity: 0,
              y: 28,
              stagger: 0.14,
              duration: 0.5,
            },
            0.55
          );
      } else {
        /*
         * Mobile / tablet: simple triggered entrance, no scrub.
         */
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });

        tl.from(
          "[data-statement='editorial']",
          {
            opacity: 0,
            y: 28,
            duration: 0.85,
            ease: "power3.out",
          },
          0
        )
          .from(
            "[data-statement='supporting']",
            {
              opacity: 0,
              y: 18,
              duration: 0.7,
            },
            0.2
          )
          .from(
            "[data-statement='tenet']",
            {
              opacity: 0,
              y: 20,
              stagger: 0.12,
              duration: 0.6,
            },
            0.38
          );
      }
    },
    { scopeRef: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative border-b border-zinc-200 bg-[#f7f7f7] py-32 sm:py-40 lg:py-48"
    >
      {/* Background Micro Grid Detail — very subtle on soft-white */}
      <div
        className="absolute inset-0 opacity-[0.4] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <Container size="wide">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Metadata Rail */}
          <div className="lg:col-span-3">
            <div className="sticky top-28 space-y-4">
              <span
                data-statement="label"
                className="font-mono text-[11px] uppercase tracking-[0.24em] text-zinc-500"
              >
                [ 02 // PERSPECTIVE ]
              </span>
              <p
                data-statement="meta-title"
                className="font-mono text-xs uppercase tracking-widest text-zinc-500"
              >
                System Philosophy
              </p>
              <div
                data-statement="meta-line"
                className="h-12 w-[1px] bg-zinc-300"
              />
            </div>
          </div>

          {/* Right Typographic Composition with Stylized Emphases */}
          <div className="lg:col-span-9">
            <p
              data-statement="editorial"
              className="text-3xl font-light leading-[1.22] tracking-[-0.03em] text-zinc-400 sm:text-4xl md:text-5xl lg:text-[3.25rem]"
            >
              We turn{" "}
              <span className="font-semibold text-[#202020] tracking-[-0.035em]">
                complex business requirements
              </span>{" "}
              into resilient, high-performance systems that{" "}
              <span className="font-semibold text-[#202020] tracking-[-0.035em]">
                people can actually use.
              </span>
            </p>

            <p
              data-statement="supporting"
              className="mt-8 text-lg font-normal leading-relaxed text-zinc-500 sm:text-xl max-w-3xl"
            >
              Software shouldn&apos;t feel like an administrative burden. We
              strip away organizational complexity to engineer software with
              deliberate structure, intuitive ergonomics, and zero superfluous
              bloat.
            </p>

            {/* Asymmetric Core Tenets */}
            <div className="mt-20 grid grid-cols-1 gap-12 border-t border-zinc-200 pt-12 sm:grid-cols-2">
              <div data-statement="tenet" className="space-y-3">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#E0A030]">
                  TENET // 01
                </span>
                <h2 className="text-lg font-semibold tracking-tight text-[#202020]">
                  Architectural Rigor
                </h2>
                <p className="text-sm leading-relaxed text-zinc-500">
                  Clean service boundaries, strict type contracts, and
                  deliberate data models that scale alongside expanding
                  organizational complexity.
                </p>
              </div>

              <div data-statement="tenet" className="space-y-3">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#E0A030]">
                  TENET // 02
                </span>
                <h2 className="text-lg font-semibold tracking-tight text-[#202020]">
                  Interface Precision
                </h2>
                <p className="text-sm leading-relaxed text-zinc-500">
                  Performant, zero-bloat web frontends engineered with fluid
                  visual rhythm, responsive ergonomics, and strict
                  accessibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
