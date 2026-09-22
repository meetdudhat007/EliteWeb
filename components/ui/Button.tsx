import React from "react";
import { cn } from "@/lib/utils/cn";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  isExternal,
  className,
  children,
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-medium uppercase tracking-wider transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E0A030]/60 cursor-pointer disabled:opacity-50 disabled:pointer-events-none select-none";

  const variantClasses = {
    // Primary: deep-black background, white text — strongest CTA
    primary:
      "bg-[#202020] text-white hover:bg-[#000000] active:bg-[#000000] font-semibold",
    // Secondary: white background, dark border, dark text — clear hierarchy below primary
    secondary:
      "bg-white text-[#202020] border border-zinc-300 hover:border-[#202020] hover:bg-zinc-50",
    // Outline: transparent with dark border
    outline:
      "bg-transparent text-[#202020] border border-zinc-300 hover:border-[#202020] hover:bg-zinc-50",
    // Ghost: text-only with subtle underline
    ghost:
      "bg-transparent text-zinc-500 hover:text-[#202020] px-0 py-0 tracking-widest text-xs border-b border-transparent hover:border-zinc-400",
  };

  const sizeClasses = {
    sm: "text-[11px] px-3.5 py-1.5 rounded-[2px]",
    md: "text-xs px-5 py-2.5 rounded-[2px]",
    lg: "text-xs px-7 py-3.5 rounded-[2px]",
  };

  const combinedClasses = cn(
    baseClasses,
    variantClasses[variant],
    variant !== "ghost" && sizeClasses[size],
    className
  );

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
