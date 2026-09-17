import React from "react";
import { siteConfig } from "@/lib/constants/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BrandMark } from "@/components/ui/BrandMark";

export function Contact() {
  return (
    <footer
      id="contact"
      className="relative bg-[#060709] pt-32 sm:pt-40 lg:pt-48 overflow-hidden"
    >
      {/* Subtle Ambient Glow */}
      <div className="absolute top-0 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.025)_0%,transparent_70%)] pointer-events-none" />

      <Container size="wide">
        {/* The Big Conclusion: Massive Typographic Lockup */}
        <div className="border-b border-white/[0.07] pb-24 lg:pb-32">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-zinc-400">
              [ 07 // INITIATE CONVERSATION ]
            </span>
            <span className="h-3 w-[1px] bg-white/15" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400">
              OPEN INQUIRIES
            </span>
          </div>

          <div className="mt-10 max-w-5xl">
            <h2 className="text-4xl font-semibold tracking-[-0.04em] text-zinc-400 sm:text-6xl md:text-7xl lg:text-[5.5rem] lg:leading-[0.96]">
              {siteConfig.contact.ctaHeading} <br />
              <span className="text-white font-bold">
                {siteConfig.contact.ctaAccent}
              </span>
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl font-normal">
              {siteConfig.contact.ctaDescription}
            </p>

            <div className="mt-12 flex flex-wrap items-center gap-4">
              <Button
                href={`mailto:${siteConfig.contact.email}?subject=Project%20Inquiry`}
                variant="primary"
                size="lg"
                className="tracking-[0.18em]"
              >
                Send Inquiry ({siteConfig.contact.email})
              </Button>
            </div>
          </div>
        </div>

        {/* Communication Channels & Operational Details */}
        <div className="grid grid-cols-1 gap-12 py-16 border-b border-white/[0.07] md:grid-cols-3">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400">
              Direct Contact
            </span>
            <p className="mt-2 text-sm font-medium text-white">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="underline underline-offset-4 hover:text-zinc-300"
              >
                {siteConfig.contact.email}
              </a>
            </p>
          </div>

          <div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400">
              Studio Positioning
            </span>
            <p className="mt-2 text-sm font-medium text-white">
              {siteConfig.contact.location}
            </p>
          </div>

          <div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400">
              Operating Hours
            </span>
            <p className="mt-2 text-sm font-medium text-white">
              {siteConfig.contact.workingHours}
            </p>
          </div>
        </div>

        {/* Demo Disclaimer Notice */}
        <div className="my-10 rounded-[2px] border border-amber-400/20 bg-amber-500/[0.03] p-4">
          <p className="font-mono text-[10px] uppercase tracking-wider text-amber-300/80">
            {siteConfig.contact.isDemoNotice}
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-6 py-10 sm:flex-row">
          <BrandMark showBadge={false} />

          <div className="flex items-center gap-6">
            {siteConfig.socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[11px] uppercase tracking-widest text-zinc-400 transition-colors hover:text-white"
              >
                {social.name}
              </a>
            ))}
          </div>

          <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-400">
            © {new Date().getFullYear()} {siteConfig.name} · Prototype Build
          </p>
        </div>
      </Container>
    </footer>
  );
}
