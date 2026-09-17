import React from "react";
import { siteConfig } from "@/lib/constants/site";
import { Container } from "@/components/ui/Container";

export function Process() {
  return (
    <section
      id="process"
      className="relative border-b border-white/[0.07] py-32 sm:py-40 lg:py-48"
    >
      <Container size="wide">
        {/* Header */}
        <div className="flex flex-col justify-between gap-6 border-b border-white/[0.07] pb-16 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-zinc-400">
              [ 05 // METHODOLOGY ]
            </span>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
              Disciplined delivery from conception to deployment.
            </h2>
          </div>
          <p className="max-w-xs text-xs uppercase tracking-wider text-zinc-400">
            6-stage engineering lifecycle engineered for predictable, transparent execution.
          </p>
        </div>

        {/* 6-Stage Timeline Foundation (Ready for Animated Scroll Progress Rail in Phase 4) */}
        <div className="relative mt-20">
          {/* Subtle Horizontal Progression Axis (Visible on Desktop) */}
          <div className="hidden lg:block absolute top-[52px] left-0 right-0 h-[1px] bg-white/[0.1] -z-0" />

          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16">
            {siteConfig.process.map((step, index) => (
              <div
                key={step.step}
                className="relative flex flex-col justify-between border-t border-white/[0.07] pt-8 lg:border-t-0 lg:pt-0"
              >
                <div>
                  {/* Step Node Marker with Progression Tag */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-3xl font-extralight tracking-tighter text-white/40 sm:text-4xl">
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
