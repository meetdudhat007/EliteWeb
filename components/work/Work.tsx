"use client";

import React, { useRef } from "react";
import { siteConfig } from "@/lib/constants/site";
import { animationTokens } from "@/lib/constants/animation";
import { Container } from "@/components/ui/Container";
import { ProjectVisual } from "@/components/work/ProjectVisual";
import { gsap } from "@/lib/animations/gsap";
import { useGSAPAnimation } from "@/hooks/useGSAPAnimation";
import { createResponsiveContext } from "@/lib/animations/responsive";

export function Work() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  useGSAPAnimation(
    (ctx, prefersReduced) => {
      /*
       * Section header entrance — fires when the section top hits 80% of viewport.
       * Runs on both desktop and mobile to introduce the section.
       */
      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        })
        .from(
          "[data-work='header-label']",
          {
            opacity: 0,
            y: 16,
            duration: 0.6,
            ease: "power3.out",
          },
          0
        )
        .from(
          "[data-work='header-heading']",
          {
            opacity: 0,
            y: 24,
            duration: 0.8,
            ease: "power3.out",
          },
          0.1
        )
        .from(
          "[data-work='header-badge']",
          {
            opacity: 0,
            y: 12,
            duration: 0.6,
            ease: "power2.out",
          },
          0.22
        );

      if (prefersReduced) {
        /*
         * Reduced motion: keep normal static layout without pinning or scrub.
         */
        return;
      }

      const mm = createResponsiveContext();
      if (!mm) return;

      // Register responsive context cleanup with parent GSAP context
      ctx.add(() => () => mm.revert());

      /*
       * Desktop (≥1024px): Pinned Stage Storytelling
       * The stage pins at 80px (directly below the sticky navigation bar).
       * User scrubs through the 3 demonstration projects with cinematic transitions.
       */
      mm.add("(min-width: 1024px)", () => {
        const panels = gsap.utils.toArray<HTMLElement>("[data-work-panel]");
        const visualWrappers = gsap.utils.toArray<HTMLElement>(
          "[data-work-visual-wrapper]"
        );

        if (!panels.length || !stageRef.current) return;

        // Establish initial states
        gsap.set(panels[0], { autoAlpha: 1, y: 0 });
        gsap.set(panels.slice(1), { autoAlpha: 0, y: 24 });
        gsap.set(visualWrappers[0], { scale: 1 });
        gsap.set(visualWrappers.slice(1), { scale: 0.97 });

        gsap.set("[data-work-counter='0']", { autoAlpha: 1, y: 0 });
        gsap.set("[data-work-counter='1'], [data-work-counter='2']", {
          autoAlpha: 0,
          y: 6,
        });

        // Master pinned storytelling timeline scrubbed by scroll
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: stageRef.current,
            start: "top 80px",
            end: animationTokens.work.pinnedScrollDistance,
            pin: true,
            scrub: animationTokens.work.scrub,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        // Hold Project 0 (0.0 to 0.8)

        // --- Transition: Case 01 -> Case 02 (0.8 to 1.2) ---
        tl.to(
          panels[0],
          { autoAlpha: 0, y: -20, duration: 0.4, ease: "power1.inOut" },
          0.8
        )
          .to(
            panels[1],
            { autoAlpha: 1, y: 0, duration: 0.4, ease: "power1.inOut" },
            0.85
          )
          .to(
            visualWrappers[1],
            { scale: 1, duration: 0.4, ease: "power1.inOut" },
            0.85
          )
          .to(
            "[data-work-step='0']",
            { width: 16, backgroundColor: "rgba(32,32,32,0.2)", duration: 0.35 },
            0.8
          )
          .to(
            "[data-work-step='1']",
            { width: 40, backgroundColor: "#202020", duration: 0.35 },
            0.85
          )
          .to(
            "[data-work-counter='0']",
            { autoAlpha: 0, y: -6, duration: 0.3 },
            0.8
          )
          .to(
            "[data-work-counter='1']",
            { autoAlpha: 1, y: 0, duration: 0.3 },
            0.85
          );

        // Hold Project 1 (1.2 to 2.0)

        // --- Transition: Case 02 -> Case 03 (2.0 to 2.4) ---
        tl.to(
          panels[1],
          { autoAlpha: 0, y: -20, duration: 0.4, ease: "power1.inOut" },
          2.0
        )
          .to(
            panels[2],
            { autoAlpha: 1, y: 0, duration: 0.4, ease: "power1.inOut" },
            2.05
          )
          .to(
            visualWrappers[2],
            { scale: 1, duration: 0.4, ease: "power1.inOut" },
            2.05
          )
          .to(
            "[data-work-step='1']",
            { width: 16, backgroundColor: "rgba(32,32,32,0.2)", duration: 0.35 },
            2.0
          )
          .to(
            "[data-work-step='2']",
            { width: 40, backgroundColor: "#202020", duration: 0.35 },
            2.05
          )
          .to(
            "[data-work-counter='1']",
            { autoAlpha: 0, y: -6, duration: 0.3 },
            2.0
          )
          .to(
            "[data-work-counter='2']",
            { autoAlpha: 1, y: 0, duration: 0.3 },
            2.05
          );

        // Hold final Project 2 until scroll release
        tl.to({}, { duration: 0.8 }, 2.45);
      });

      /*
       * Mobile / Tablet (<1024px): Normal Vertical Flow
       * Each project appears in normal document flow with a smooth entrance trigger.
       */
      mm.add("(max-width: 1023px)", () => {
        const mobilePanels = gsap.utils.toArray<HTMLElement>("[data-work-panel]");
        mobilePanels.forEach((panel) => {
          gsap.from(panel, {
            opacity: 0,
            y: 28,
            duration: 0.85,
            ease: "power2.out",
            scrollTrigger: {
              trigger: panel,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          });
        });
      });
    },
    { scopeRef: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative border-b border-zinc-200 bg-white pt-24 pb-28 sm:pt-32 sm:pb-36 lg:pt-36 lg:pb-40"
    >
      <Container size="wide">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 border-b border-zinc-200 pb-12 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <span
              data-work="header-label"
              className="font-mono text-[11px] uppercase tracking-[0.24em] text-zinc-500"
            >
              [ 04 // SELECTED WORK ]
            </span>
            <h2
              data-work="header-heading"
              className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-[#202020] sm:text-5xl lg:text-6xl"
            >
              Demonstration Project Showcase
            </h2>
          </div>
          <div
            data-work="header-badge"
            className="flex items-center gap-2 rounded-[2px] border border-zinc-200 bg-zinc-100 px-3.5 py-2 font-mono text-[10px] uppercase tracking-widest text-zinc-500"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-zinc-400" />
            <span>Modular Demo Artifacts</span>
          </div>
        </div>

        {/* Pinned Stage on Desktop / Flow Container on Mobile */}
        <div
          ref={stageRef}
          data-work="stage"
          className="mt-10 lg:mt-14"
        >
          {/* Editorial Stage Sequence Rail (Desktop only) */}
          <div
            data-work="progress-rail"
            className="hidden items-center justify-between border-b border-zinc-200 pb-4 mb-8 lg:flex"
          >
            <div className="flex items-center gap-6">
              <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-zinc-500">
                [ SEQUENCE // ARCHIVE ]
              </span>
              {/* Stepper indicators */}
              <div className="flex items-center gap-2">
                {siteConfig.projects.map((proj, idx) => (
                  <span
                    key={proj.id}
                    data-work-step={idx}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      idx === 0 ? "w-10 bg-[#202020]" : "w-4 bg-zinc-300"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Step Counter */}
            <div className="flex items-center gap-2 font-mono text-xs text-zinc-500">
              <span className="text-[10px] uppercase tracking-widest text-zinc-400">
                CASE
              </span>
              <div className="relative inline-flex h-4 w-6 items-center justify-center overflow-hidden">
                {siteConfig.projects.map((_, idx) => (
                  <span
                    key={idx}
                    data-work-counter={idx}
                    className={`absolute font-mono text-xs font-semibold text-[#202020] ${
                      idx === 0 ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    0{idx + 1}
                  </span>
                ))}
              </div>
              <span className="text-zinc-300">/</span>
              <span>0{siteConfig.projects.length}</span>
            </div>
          </div>

          {/* Project Panels Container */}
          <div
            data-work="stage-panels"
            className="space-y-24 lg:space-y-0 lg:relative lg:h-[min(640px,calc(100vh-190px))] lg:min-h-[520px] motion-reduce:lg:h-auto motion-reduce:lg:min-h-0 motion-reduce:lg:space-y-24"
          >
            {siteConfig.projects.map((project, index) => (
              <article
                key={project.id}
                data-work-panel={index}
                className="relative w-full border-b border-zinc-200 pb-20 last:border-b-0 last:pb-0 lg:absolute lg:inset-0 lg:h-full lg:border-b-0 lg:pb-0 motion-reduce:lg:relative motion-reduce:lg:inset-auto motion-reduce:lg:h-auto"
              >
                <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14 lg:h-full">
                  {/* Project Metadata & Narrative Column */}
                  <div className="flex flex-col justify-between lg:col-span-5">
                    <div>
                      {/* Index & Category */}
                      <div className="flex items-center gap-3 font-mono text-xs text-zinc-400">
                        <span className="text-zinc-500">[ CASE 0{index + 1} ]</span>
                        <span>·</span>
                        <span className="uppercase tracking-widest text-zinc-500">
                          {project.category}
                        </span>
                      </div>

                      {/* Headline */}
                      <h3 className="mt-4 text-2xl font-semibold tracking-tight text-[#202020] sm:text-3xl lg:text-4xl">
                        {project.title}
                      </h3>

                      {/* Narrative */}
                      <p className="mt-5 text-sm sm:text-base leading-relaxed text-zinc-500">
                        {project.summary}
                      </p>
                    </div>

                    {/* Scope & Tech Stack Metadata */}
                    <div className="mt-8 border-t border-zinc-200 pt-6">
                      <div>
                        <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400">
                          Engineering Scope
                        </span>
                        <p className="mt-1.5 text-xs font-medium uppercase tracking-wider text-[#202020]">
                          {project.scope}
                        </p>
                      </div>

                      <div className="mt-5">
                        <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400">
                          Technology Stack
                        </span>
                        <div className="mt-2.5 flex flex-wrap gap-2">
                          {project.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-[2px] border border-zinc-200 bg-zinc-100 px-2.5 py-1 font-mono text-[10px] uppercase text-zinc-600"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Visual Artifact Column */}
                  <div
                    data-work-visual-wrapper
                    className="w-full lg:col-span-7"
                  >
                    <ProjectVisual
                      projectId={project.id}
                      projectTitle={project.title}
                      category={project.category}
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
