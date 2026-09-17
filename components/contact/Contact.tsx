import React from "react";
import { siteConfig } from "@/lib/constants/site";

export function Contact() {
  return (
    <footer id="contact" className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
              Initiate Contact
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl dark:text-white">
              {siteConfig.contact.ctaHeading}
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              {siteConfig.contact.ctaDescription}
            </p>

            <div className="mt-8 space-y-3 text-sm">
              <p className="text-zinc-600 dark:text-zinc-400">
                <span className="font-semibold text-zinc-900 dark:text-white">Demo Email: </span>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="underline underline-offset-4 hover:text-zinc-900 dark:hover:text-white"
                >
                  {siteConfig.contact.email}
                </a>
              </p>
              <p className="text-zinc-600 dark:text-zinc-400">
                <span className="font-semibold text-zinc-900 dark:text-white">Positioning: </span>
                {siteConfig.contact.location}
              </p>
              <p className="text-zinc-600 dark:text-zinc-400">
                <span className="font-semibold text-zinc-900 dark:text-white">Hours: </span>
                {siteConfig.contact.workingHours}
              </p>
            </div>

            <div className="mt-6 rounded-lg border border-amber-500/20 bg-amber-50/50 p-3 text-xs text-amber-900 dark:border-amber-400/20 dark:bg-amber-950/30 dark:text-amber-300">
              {siteConfig.contact.isDemoNotice}
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900">
            <div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                Request an Initial Architectural Discussion
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                Direct inquiries to our team for custom platform builds, system modernizations, or technical advisement.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3">
              <a
                href={`mailto:${siteConfig.contact.email}?subject=Project%20Inquiry`}
                className="flex items-center justify-center rounded-lg border border-zinc-900 bg-zinc-900 px-6 py-3 text-xs font-medium uppercase tracking-wider text-white transition-colors hover:bg-zinc-800 dark:border-white dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
              >
                Send Message ({siteConfig.contact.email})
              </a>
            </div>

            <div className="mt-8 flex items-center justify-between border-t border-zinc-100 pt-6 text-xs text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
              <div className="flex gap-4">
                {siteConfig.socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-zinc-900 dark:hover:text-white"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
              <span>© {new Date().getFullYear()} {siteConfig.name}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
