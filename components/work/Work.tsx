import React from "react";
import { siteConfig } from "@/lib/constants/site";
import { Container } from "@/components/ui/Container";
import { ProjectVisual } from "@/components/work/ProjectVisual";

export function Work() {
  return (
    <section
      id="work"
      className="relative border-b border-white/[0.07] py-32 sm:py-40 lg:py-48"
    >
      <Container size="wide">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 border-b border-white/[0.07] pb-16 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-zinc-400">
              [ 04 // SELECTED WORK ]
            </span>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
              Demonstration Project Showcase
            </h2>
          </div>
          <div className="flex items-center gap-2 rounded-[2px] border border-white/10 bg-white/[0.02] px-3.5 py-2 font-mono text-[10px] uppercase tracking-widest text-zinc-400">
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
                className="grid grid-cols-1 items-center gap-12 border-b border-white/[0.07] pb-24 lg:grid-cols-12 lg:gap-16"
              >
                {/* Visual Artifact Column (Alternating on Desktop) */}
                <div
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
