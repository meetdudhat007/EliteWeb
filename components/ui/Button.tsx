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
    "inline-flex items-center justify-center font-medium uppercase tracking-wider transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 cursor-pointer disabled:opacity-50 disabled:pointer-events-none select-none";

  const variantClasses = {
    primary:
      "bg-white text-zinc-950 hover:bg-zinc-200 active:bg-zinc-300 font-semibold",
    secondary:
      "bg-zinc-900 text-zinc-200 border border-white/10 hover:bg-zinc-800 hover:border-white/20 hover:text-white",
    outline:
      "bg-transparent text-zinc-300 border border-white/15 hover:border-white/40 hover:text-white",
    ghost:
      "bg-transparent text-zinc-400 hover:text-white px-0 py-0 tracking-widest text-xs border-b border-transparent hover:border-white/40",
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
