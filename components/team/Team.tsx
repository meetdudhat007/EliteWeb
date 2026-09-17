import React from "react";
import { siteConfig } from "@/lib/constants/site";

export function Team() {
  return (
    <section id="team" className="border-t border-zinc-200 py-24 sm:py-32 dark:border-zinc-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
            Core Engineering Team
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl dark:text-white">
            Small, focused, senior-led.
          </h2>
          <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">
            [Demo roster — Replaceable with final member profiles]
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.team.map((member) => (
            <div
              key={member.id}
              className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800"
            >
              <div className="mb-4 aspect-square w-full rounded-lg border border-zinc-200/80 bg-zinc-100 flex items-center justify-center text-xs text-zinc-400 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-500">
                <span>Profile Photo Placeholder</span>
              </div>
              <h3 className="text-base font-semibold text-zinc-900 dark:text-white">
                {member.name}
              </h3>
              <p className="mt-1 text-xs font-medium text-zinc-600 dark:text-zinc-300">
                {member.role}
              </p>
              <p className="mt-2 text-[11px] text-zinc-500 dark:text-zinc-400">
                {member.discipline}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
