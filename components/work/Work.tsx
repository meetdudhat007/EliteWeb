import React from "react";
import { siteConfig } from "@/lib/constants/site";

export function Work() {
  return (
    <section id="work" className="border-t border-zinc-200 py-24 sm:py-32 dark:border-zinc-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
              Selected Work
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl dark:text-white">
              Demonstration Project Showcase
            </h2>
          </div>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            [Sample portfolio items — Replaceable via centralized config]
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-3">
          {siteConfig.projects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col justify-between rounded-xl border border-zinc-200 bg-zinc-50/50 p-6 transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/30 dark:hover:border-zinc-700"
            >
              <div>
                <div className="mb-4 aspect-video w-full rounded-lg border border-zinc-200/80 bg-zinc-100 flex items-center justify-center text-xs text-zinc-400 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-500">
                  <span>Project Interface Preview</span>
                </div>
                <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
                  <span className="font-mono">{project.category}</span>
                </div>
                <h3 className="mt-3 text-lg font-semibold text-zinc-900 group-hover:text-zinc-600 dark:text-white dark:group-hover:text-zinc-300">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {project.summary}
                </p>
              </div>

              <div className="mt-6 border-t border-zinc-200/60 pt-4 dark:border-zinc-800">
                <p className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400 mb-2">
                  Scope: {project.scope}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded bg-zinc-200/70 px-2 py-0.5 text-[10px] font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
