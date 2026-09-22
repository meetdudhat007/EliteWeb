"use client";

import React, { useRef } from "react";
import { siteConfig } from "@/lib/constants/site";
import { Container } from "@/components/ui/Container";
import { gsap } from "@/lib/animations/gsap";
import { useGSAPAnimation } from "@/hooks/useGSAPAnimation";

export function Team() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAPAnimation(
    (_ctx, prefersReduced) => {
      if (prefersReduced) return;

      /*
       * Restrained, calm reveal — intentional decompression after the more
       * technical Work and Process sections.
       *
       * Header settles first. Member cards stagger in with a modest y offset.
       * Portrait placeholders also scale gently — subtler than card movement.
       * No parallax, no complex scrubbing. Simply: calm, human arrival.
       */
      const tl = gsap.timeline({
        defaults: { ease: "power2.out" },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 82%",
          toggleActions: "play none none none",
        },
      });

      // Section label
      tl.from("[data-team='header-label']", {
        opacity: 0,
        y: 14,
        duration: 0.6,
      }, 0);

      // Section heading
      tl.from("[data-team='heading']", {
        opacity: 0,
        y: 20,
        duration: 0.75,
        ease: "power3.out",
      }, 0.08);

      // Demo roster badge
      tl.from("[data-team='header-badge']", {
        opacity: 0,
        y: 12,
        duration: 0.55,
      }, 0.18);

      // Portrait placeholder — scale from slightly smaller; calm, not dramatic
      tl.from("[data-team='portrait']", {
        opacity: 0,
        scale: 0.96,
        transformOrigin: "center top",
        stagger: 0.1,
        duration: 0.8,
      }, 0.26);

      // Member cards — y stagger, follows portraits
      tl.from("[data-team='member']", {
        opacity: 0,
        y: 28,
        stagger: 0.1,
        duration: 0.8,
      }, 0.26);
    },
    { scopeRef: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="team"
      className="relative border-b border-zinc-200 bg-white py-32 sm:py-40 lg:py-48"
    >
      <Container size="wide">
        {/* Header */}
        <div className="flex flex-col justify-between gap-6 border-b border-zinc-200 pb-16 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span
              data-team="header-label"
              className="font-mono text-[11px] uppercase tracking-[0.24em] text-zinc-500"
            >
              [ 06 // CORE ENGINEERING TEAM ]
            </span>
            <h2
              data-team="heading"
              className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-[#202020] sm:text-5xl lg:text-6xl"
            >
              Small, focused, senior-led.
            </h2>
          </div>
          <div
            data-team="header-badge"
            className="rounded-[2px] border border-zinc-200 bg-zinc-100 px-3.5 py-2 font-mono text-[10px] uppercase tracking-widest text-zinc-500"
          >
            Internal Demo Roster · 4–5 Members
          </div>
        </div>

        {/* Asymmetric, Staggered Editorial Roster */}
        <div className="mt-20 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {siteConfig.team.map((member, index) => {
            const isStaggered = index % 2 === 1;

            return (
              <div
                key={member.id}
                data-team="member"
                className={`group flex flex-col justify-between rounded-[4px] border border-zinc-200 bg-white p-6 transition-all hover:border-zinc-400 hover:shadow-sm ${
                  isStaggered ? "lg:translate-y-10" : ""
                }`}
              >
                <div>
                  {/* Geometric Abstract Portrait Placeholder */}
                  <div
                    data-team="portrait"
                    className={`relative mb-6 w-full overflow-hidden rounded-[2px] border border-zinc-200 bg-[#f5f5f5] select-none ${
                      isStaggered ? "aspect-[3/4]" : "aspect-[4/5]"
                    }`}
                  >
                    {/* Architectural Mesh Texture */}
                    <div
                      className="absolute inset-0 opacity-40"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle, rgba(0,0,0,0.08) 1px, transparent 1px)",
                        backgroundSize: "20px 20px",
                      }}
                    />

                    <div className="relative flex h-full flex-col justify-between p-5">
                      <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-widest text-zinc-400">
                        <span>CORE_0{index + 1}</span>
                        <span>DEV_ID</span>
                      </div>

                      <div className="flex flex-col items-center justify-center my-auto opacity-20 group-hover:opacity-40 transition-opacity">
                        <svg
                          viewBox="0 0 80 80"
                          className="w-16 h-16 text-[#202020]"
                          fill="none"
                        >
                          <polygon
                            points="40,10 70,30 70,60 40,75 10,60 10,30"
                            stroke="currentColor"
                            strokeWidth="1"
                          />
                          <circle
                            cx="40"
                            cy="42"
                            r="12"
                            stroke="currentColor"
                            strokeWidth="1"
                          />
                        </svg>
                        <span className="mt-2 font-mono text-[8px] uppercase tracking-widest text-zinc-400">
                          Placeholder Portrait
                        </span>
                      </div>

                      <div className="font-mono text-[8px] uppercase tracking-widest text-zinc-400">
                        LOC: GLOBAL / IST
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold tracking-tight text-[#202020]">
                    {member.name}
                  </h3>

                  <p className="mt-1 text-xs font-medium uppercase tracking-wider text-zinc-500">
                    {member.role}
                  </p>
                </div>

                <div className="mt-8 border-t border-zinc-200 pt-4">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-400">
                    Discipline
                  </span>
                  <p className="mt-1 text-xs text-zinc-500">
                    {member.discipline}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
