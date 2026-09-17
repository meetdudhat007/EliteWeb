import React from "react";
import { siteConfig } from "@/lib/constants/site";

export function Services() {
  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
            Core Capabilities
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl dark:text-white">
            Specialized engineering for complex requirements.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {siteConfig.services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col justify-between rounded-xl border border-zinc-200 p-8 transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:hover:border-zinc-700"
            >
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                  {service.category}
                </span>
                <h3 className="mt-3 text-xl font-semibold text-zinc-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {service.description}
                </p>
              </div>

              <ul className="mt-8 space-y-2 border-t border-zinc-100 pt-6 dark:border-zinc-800/80">
                {service.capabilities.map((item) => (
                  <li
                    key={item}
                    className="flex items-center text-xs text-zinc-600 dark:text-zinc-400"
                  >
                    <span className="mr-2 h-1 w-1 rounded-full bg-zinc-400 dark:bg-zinc-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
