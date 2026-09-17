import React from "react";
import { siteConfig } from "@/lib/constants/site";
import { Container } from "@/components/ui/Container";

export function Services() {
  return (
    <section
      id="services"
      className="relative border-b border-white/[0.07] py-32 sm:py-40 lg:py-48"
    >
      <Container size="wide">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 border-b border-white/[0.07] pb-16 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-zinc-400">
              [ 03 // CORE CAPABILITIES ]
            </span>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
              Specialized engineering for complex requirements.
            </h2>
          </div>
          <div className="max-w-xs text-right">
            <p className="font-mono text-[11px] uppercase tracking-widest text-zinc-400">
              DOMAINS // 03 CORE PRACTICES
            </p>
            <p className="mt-1 text-xs text-zinc-400">
              Bespoke architecture, scalable systems & modern digital products.
            </p>
          </div>
        </div>

        {/* Monolithic Service Domains (Interaction & Pinned-Scroll Ready) */}
        <div className="divide-y divide-white/[0.07]">
          {siteConfig.services.map((service, index) => (
            <div
              key={service.id}
              data-service-index={index + 1}
              className="group grid grid-cols-1 gap-8 py-16 transition-colors lg:grid-cols-12 lg:gap-12 lg:py-24"
            >
              {/* Prominent Index & Domain Code */}
              <div className="flex items-baseline gap-4 lg:col-span-3 lg:flex-col lg:justify-between">
                <span className="font-mono text-5xl font-extralight tracking-tighter text-white/30 transition-colors group-hover:text-white/60 sm:text-7xl lg:text-8xl">
                  0{index + 1}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-400">
                  DOMAIN // {service.category}
                </span>
              </div>

              {/* Title & Core Narrative */}
              <div className="flex flex-col justify-between lg:col-span-5">
                <div>
                  <h3 className="text-2xl font-semibold tracking-[-0.025em] text-white sm:text-3xl lg:text-4xl">
                    {service.title}
                  </h3>
                  <p className="mt-6 text-base leading-relaxed text-zinc-400 sm:text-lg">
                    {service.description}
                  </p>
                </div>

                <div className="mt-8 font-mono text-[10px] uppercase tracking-widest text-zinc-400">
                  Full lifecycle development & maintenance
                </div>
              </div>

              {/* Secondary Capability Metadata Matrix */}
              <div className="flex flex-col justify-center border-t border-white/[0.07] pt-8 lg:col-span-4 lg:border-t-0 lg:border-l lg:border-white/[0.07] lg:pl-10 lg:pt-0">
                <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400">
                  Specialized Capabilities
                </span>
                <ul className="mt-6 space-y-4">
                  {service.capabilities.map((capability) => (
                    <li
                      key={capability}
                      className="flex items-center text-xs font-medium uppercase tracking-wider text-zinc-300"
                    >
                      <span className="mr-3 h-[1px] w-3 bg-white/40" />
                      <span>{capability}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
