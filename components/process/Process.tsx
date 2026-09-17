import React from "react";
import { siteConfig } from "@/lib/constants/site";

export function Process() {
  return (
    <section id="process" className="border-t border-zinc-200 py-24 sm:py-32 dark:border-zinc-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
            How We Work
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl dark:text-white">
            Disciplined delivery from conception to deployment.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {siteConfig.process.map((step) => (
            <div
              key={step.step}
              className="relative rounded-xl border border-zinc-200 p-8 dark:border-zinc-800"
            >
              <span className="font-mono text-xs font-bold text-zinc-400 dark:text-zinc-600">
                Phase {step.step}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-zinc-900 dark:text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
