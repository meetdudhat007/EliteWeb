import React from "react";
import { siteConfig } from "@/lib/constants/site";

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium uppercase tracking-widest text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span>{siteConfig.positioning}</span>
          </div>

          <h1 className="text-4xl font-semibold tracking-tight text-zinc-950 sm:text-6xl lg:text-7xl dark:text-white">
            {siteConfig.tagline}
          </h1>

          <p className="mt-8 text-lg leading-8 text-zinc-600 sm:text-xl dark:text-zinc-400">
            {siteConfig.description}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="rounded-full border border-zinc-900 bg-zinc-900 px-6 py-3 text-xs font-medium uppercase tracking-wider text-white transition-colors hover:bg-zinc-800 dark:border-white dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
            >
              Explore Selected Work
            </a>
            <a
              href="#services"
              className="rounded-full border border-zinc-300 px-6 py-3 text-xs font-medium uppercase tracking-wider text-zinc-800 transition-colors hover:border-zinc-400 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-600 dark:hover:bg-zinc-800"
            >
              Capabilities
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
