"use client";

import React, { useRef } from "react";
import { siteConfig } from "@/lib/constants/site";
import { Container } from "@/components/ui/Container";
import { ProjectVisual } from "@/components/work/ProjectVisual";
import { gsap } from "@/lib/animations/gsap";
import { useGSAPAnimation } from "@/hooks/useGSAPAnimation";

export function Work() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAPAnimation(
    (_ctx, prefersReduced) => {
      const isDesktop =
        typeof window !== "undefined" &&
        window.matchMedia("(min-width: 1024px)").matches;

      /*
       * Section header entrance — always runs.
       * Fires when the section top hits 80% of the viewport.
       */
      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      })
        .from("[data-work='header-label']", {
          opacity: 0,
          y: 16,
          duration: 0.6,
          ease: "power3.out",
        }, 0)
        .from("[data-work='header-heading']", {
          opacity: 0,
          y: 24,
          duration: 0.8,
          ease: "power3.out",
        }, 0.1)
        .from("[data-work='header-badge']", {
          opacity: 0,
          y: 12,
          duration: 0.6,
          ease: "power2.out",
        }, 0.22);

      if (prefersReduced) {
        /*
         * Reduced motion: ensure header is visible (the timeline above runs).
         * Skip all per-article entrance and parallax.
         */
        return;
      }

      /*
       * Per-article entrance — each project triggers independently as it enters.
       * This creates the "each project emerges as you scroll to it" feel.
       * Visual and metadata column enter together with a small offset.
       *
       * On desktop: visual uses opacity+scale only (parallax handles y movement).
       * On mobile: visual uses opacity+scale+y (no parallax).
       */
      gsap.utils.toArray<Element>("[data-work='article']").forEach((article) => {
        const visual = (article as HTMLElement).querySelector<HTMLElement>(
          "[data-work='visual']"
        );
        const meta = (article as HTMLElement).querySelector<HTMLElement>(
          "[data-work='meta']"
        );

        if (!visual || !meta) return;

        gsap
          .timeline({
            scrollTrigger: {
              trigger: article,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          })
          .from(
            visual,
            {
              opacity: 0,
              scale: 0.97,
              ...(isDesktop ? {} : { y: 24 }),
              duration: 0.95,
              ease: "power2.out",
            },
            0
          )
          .from(
            meta,
            {
              opacity: 0,
              y: 20,
              duration: 0.8,
              ease: "power2.out",
            },
            0.12
          );
      });

      /*
       * Desktop-only subtle parallax on ProjectVisual.
       * Each visual moves 20px upward as it scrolls through the viewport.
       * Maximum total displacement: 40px — kept deliberately small.
       * Kept separate from entrance to avoid y-property conflicts.
       */
      if (isDesktop) {
        gsap.utils.toArray<Element>("[data-work='visual']").forEach((visual) => {
          gsap.fromTo(
            visual,
            { y: 20 },
            {
              y: -20,
              ease: "none",
              scrollTrigger: {
                trigger: visual,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            }
          );
        });
      }
    },
    { scopeRef: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative border-b border-white/[0.07] py-32 sm:py-40 lg:py-48"
    >
      <Container size="wide">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 border-b border-white/[0.07] pb-16 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <span
              data-work="header-label"
              className="font-mono text-[11px] uppercase tracking-[0.24em] text-zinc-400"
            >
              [ 04 // SELECTED WORK ]
            </span>
            <h2
              data-work="header-heading"
              className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl"
            >
              Demonstration Project Showcase
            </h2>
          </div>
          <div
            data-work="header-badge"
            className="flex items-center gap-2 rounded-[2px] border border-white/10 bg-white/[0.02] px-3.5 py-2 font-mono text-[10px] uppercase tracking-widest text-zinc-400"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-zinc-400" />
            <span>Modular Demo Artifacts</span>
          </div>
        </div>

        {/* Immersive Project Showcase with Visual Rhythm */}
        <div className="mt-20 space-y-32">
          {siteConfig.projects.map((project, index) => {
            const isEven = index % 2 === 1;

            return (
              <article
                key={project.id}
                data-work="article"
                className="grid grid-cols-1 items-center gap-12 border-b border-white/[0.07] pb-24 lg:grid-cols-12 lg:gap-16"
              >
                {/* Visual Artifact Column (Alternating on Desktop) */}
                <div
                  data-work="visual"
                  className={`lg:col-span-7 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <ProjectVisual
                    projectId={project.id}
                    projectTitle={project.title}
                    category={project.category}
                  />
                </div>

                {/* Project Metadata & Narrative Column */}
                <div
                  data-work="meta"
                  className={`flex flex-col justify-between lg:col-span-5 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div>
                    {/* Index & Category */}
                    <div className="flex items-center gap-3 font-mono text-xs text-zinc-500">
                      <span className="text-zinc-400">[ CASE 0{index + 1} ]</span>
                      <span>·</span>
                      <span className="uppercase tracking-widest text-zinc-400">
                        {project.category}
                      </span>
                    </div>

                    {/* Headline */}
                    <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl">
                      {project.title}
                    </h3>

                    {/* Narrative */}
                    <p className="mt-6 text-base leading-relaxed text-zinc-400">
                      {project.summary}
                    </p>
                  </div>

                  {/* Scope & Tech Stack Metadata */}
                  <div className="mt-10 border-t border-white/[0.07] pt-8">
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400">
                        Engineering Scope
                      </span>
                      <p className="mt-1.5 text-xs font-medium uppercase tracking-wider text-zinc-200">
                        {project.scope}
                      </p>
                    </div>

                    <div className="mt-6">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400">
                        Technology Stack
                      </span>
                      <div className="mt-2.5 flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-[2px] border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[10px] uppercase text-zinc-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
