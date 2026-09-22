"use client";

import React, { useRef } from "react";
import { siteConfig } from "@/lib/constants/site";
import { Container } from "@/components/ui/Container";
import { gsap } from "@/lib/animations/gsap";
import { useGSAPAnimation } from "@/hooks/useGSAPAnimation";

export function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAPAnimation(
    (_ctx, prefersReduced) => {
      if (prefersReduced) return;

      /*
       * Single section-level timeline.
       * Section header establishes first, then service rows stagger in below it.
       * toggleActions: "play none none none" — content settles permanently.
       * Prevents jarring re-animation when user scrolls back past the section.
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
      tl.from("[data-services='label']", {
        opacity: 0,
        y: 16,
        duration: 0.6,
      }, 0);

      // Section heading — slight delay so label lands first
      tl.from("[data-services='heading']", {
        opacity: 0,
        y: 28,
        duration: 0.85,
      }, 0.08);

      // Right-side meta text
      tl.from("[data-services='meta']", {
        opacity: 0,
        y: 16,
        duration: 0.65,
      }, 0.18);

      // Service rows stagger in — each row is its own visual entity
      tl.from("[data-services='item']", {
        opacity: 0,
        y: 36,
        stagger: 0.14,
        duration: 0.85,
        ease: "power2.out",
      }, 0.28);
    },
    { scopeRef: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative border-b border-zinc-200 bg-white py-32 sm:py-40 lg:py-48"
    >
      <Container size="wide">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 border-b border-zinc-200 pb-16 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span
              data-services="label"
              className="font-mono text-[11px] uppercase tracking-[0.24em] text-zinc-500"
            >
              [ 03 // CORE CAPABILITIES ]
            </span>
            <h2
              data-services="heading"
              className="mt-4 text-3xl font-semibold tracking-[-0.035em] text-[#202020] sm:text-5xl lg:text-6xl"
            >
              Specialized engineering for complex requirements.
            </h2>
          </div>
          <div data-services="meta" className="max-w-xs text-right">
            <p className="font-mono text-[11px] uppercase tracking-widest text-zinc-500">
              DOMAINS // 03 CORE PRACTICES
            </p>
            <p className="mt-1 text-xs text-zinc-400">
              Bespoke architecture, scalable systems &amp; modern digital
              products.
            </p>
          </div>
        </div>

        {/* Monolithic Service Domains */}
        <div className="divide-y divide-zinc-200">
          {siteConfig.services.map((service, index) => (
            <div
              key={service.id}
              data-services="item"
              data-service-index={index + 1}
              className="group grid grid-cols-1 gap-8 py-16 transition-colors lg:grid-cols-12 lg:gap-12 lg:py-24"
            >
              {/* Prominent Index & Domain Code */}
              <div className="flex items-baseline gap-4 lg:col-span-3 lg:flex-col lg:justify-between">
                <span className="font-mono text-5xl font-extralight tracking-tighter text-zinc-200 transition-colors group-hover:text-zinc-400 sm:text-7xl lg:text-8xl">
                  0{index + 1}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500">
                  DOMAIN // {service.category}
                </span>
              </div>

              {/* Title & Core Narrative */}
              <div className="flex flex-col justify-between lg:col-span-5">
                <div>
                  <h3 className="text-2xl font-semibold tracking-[-0.025em] text-[#202020] sm:text-3xl lg:text-4xl">
                    {service.title}
                  </h3>
                  <p className="mt-6 text-base leading-relaxed text-zinc-500 sm:text-lg">
                    {service.description}
                  </p>
                </div>

                <div className="mt-8 font-mono text-[10px] uppercase tracking-widest text-zinc-400">
                  Full lifecycle development &amp; maintenance
                </div>
              </div>

              {/* Secondary Capability Metadata Matrix */}
              <div className="flex flex-col justify-center border-t border-zinc-200 pt-8 lg:col-span-4 lg:border-t-0 lg:border-l lg:border-zinc-200 lg:pl-10 lg:pt-0">
                <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                  Specialized Capabilities
                </span>
                <ul className="mt-6 space-y-4">
                  {service.capabilities.map((capability) => (
                    <li
                      key={capability}
                      className="flex items-center text-xs font-medium uppercase tracking-wider text-[#202020]"
                    >
                      <span className="mr-3 h-[1px] w-3 bg-[#E0A030]" />
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
