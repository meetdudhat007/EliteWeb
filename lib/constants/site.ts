/**
 * Centralized Demo Site Configuration
 * 
 * IMPORTANT ARCHITECTURAL NOTE:
 * All business, branding, team, and project values defined here are DEMO/PROTOTYPE values.
 * They are centralized in this single file so the team can replace them when permanent
 * branding and content are decided, without modifying component code.
 * 
 * ZERO-FABRICATION POLICY:
 * Do not add fake client names, fake statistics, fake testimonials, or fake credentials.
 */

export interface NavItem {
  readonly label: string;
  readonly href: string;
}

export interface ServiceItem {
  readonly id: string;
  readonly title: string;
  readonly category: string;
  readonly description: string;
  readonly capabilities: readonly string[];
}

export interface ProjectItem {
  readonly id: string;
  readonly title: string;
  readonly category: string;
  readonly summary: string;
  readonly scope: string;
  readonly techStack: readonly string[];
}

export interface ProcessStep {
  readonly step: string;
  readonly title: string;
  readonly description: string;
}

export interface TeamMember {
  readonly id: string;
  readonly name: string;
  readonly role: string;
  readonly discipline: string;
}

export interface ContactConfig {
  readonly ctaHeading: string;
  readonly ctaAccent: string;
  readonly ctaDescription: string;
  readonly email: string;
  readonly location: string;
  readonly workingHours: string;
  readonly isDemoNotice: string;
}

export interface SiteConfig {
  readonly isPrototype: boolean;
  readonly name: string;
  readonly tagline: string;
  readonly positioning: string;
  readonly description: string;
  readonly metadata: {
    readonly title: string;
    readonly description: string;
    readonly keywords: readonly string[];
  };
  readonly navigation: readonly NavItem[];
  readonly services: readonly ServiceItem[];
  readonly projects: readonly ProjectItem[];
  readonly process: readonly ProcessStep[];
  readonly team: readonly TeamMember[];
  readonly contact: ContactConfig;
  readonly socialLinks: readonly { readonly name: string; readonly href: string }[];
}

export const siteConfig: SiteConfig = {
  isPrototype: true,
  name: "NEXORA",
  tagline: "Software Built Around Your Business",
  positioning: "India · Working Globally",
  description:
    "We design and build custom digital products, business systems and intelligent software.",
  metadata: {
    title: "NEXORA — Software Built Around Your Business",
    description:
      "Design and engineering team building custom digital products, business systems, and intelligent software.",
    keywords: [
      "Custom Software Development",
      "Digital Products",
      "Business Systems",
      "Software Engineering",
    ],
  },
  navigation: [
    { label: "Overview", href: "#hero" },
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Process", href: "#process" },
    { label: "Team", href: "#team" },
    { label: "Contact", href: "#contact" },
  ],
  services: [
    {
      id: "service-1",
      title: "Business Systems",
      category: "Enterprise Engineering",
      description:
        "Purpose-built enterprise platforms, operational portals, and internal workflows engineered to scale with organizational complexity.",
      capabilities: [
        "Internal Enterprise Tooling",
        "Operations Automation",
        "Data & Reporting Engines",
        "Multi-Tenant Architecture",
      ],
    },
    {
      id: "service-2",
      title: "Digital Products",
      category: "Product Development",
      description:
        "High-performance web applications and digital interfaces built with rigorous attention to architecture, speed, and usability.",
      capabilities: [
        "Web Applications & Portals",
        "Interactive Digital Experiences",
        "Responsive Cloud Frontends",
        "Design Systems & Component Libraries",
      ],
    },
    {
      id: "service-3",
      title: "Intelligent Software",
      category: "Systems & Integration",
      description:
        "Custom automation, integration pipelines, and intelligent processing systems that connect disconnected business workflows.",
      capabilities: [
        "API & Systems Integration",
        "Document Processing Pipelines",
        "Automated Verification Workflows",
        "Custom Business Logic Services",
      ],
    },
  ],
  projects: [
    {
      id: "project-1",
      title: "Enterprise Business Platform",
      category: "Custom Business System",
      summary:
        "A unified operational platform consolidating resource coordination, workflow management, and operational analytics.",
      scope: "Full-Stack Architecture & Development",
      techStack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    },
    {
      id: "project-2",
      title: "Digital Operations Platform",
      category: "Operations & Logistics",
      summary:
        "A real-time field status tracking and dispatch system enabling synchronized collaboration between dispatchers and remote units.",
      scope: "Frontend Architecture & API Integration",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "REST/WebSockets"],
    },
    {
      id: "project-3",
      title: "Intelligent Document System",
      category: "Process Automation",
      summary:
        "Automated document processing and verification engine reducing manual entry cycles and standardizing validation pipelines.",
      scope: "System Architecture & Processing Engine",
      techStack: ["TypeScript", "Python", "Cloud Infrastructure"],
    },
  ],
  process: [
    {
      step: "01",
      title: "Discover",
      description:
        "Technical audits, data requirements mapping, and operational constraint identification to establish project fundamentals.",
    },
    {
      step: "02",
      title: "Define",
      description:
        "Formalizing system boundaries, architectural blueprints, database schemas, and service contract specifications.",
    },
    {
      step: "03",
      title: "Design",
      description:
        "Synthesizing user workflow diagrams, design system tokens, interface layouts, and ergonomic interaction models.",
    },
    {
      step: "04",
      title: "Build",
      description:
        "Modular full-stack engineering with strict type safety, clean abstractions, and continuous milestone verification.",
    },
    {
      step: "05",
      title: "Test",
      description:
        "Rigorous cross-device validation, end-to-end load testing, failure mode resilience checks, and edge-case auditing.",
    },
    {
      step: "06",
      title: "Deploy",
      description:
        "Automated deployment infrastructure, zero-downtime provisioning, logging observability, and operational handover.",
    },
  ],
  team: [
    {
      id: "member-1",
      name: "Team Member 01",
      role: "Lead Architect / Systems Engineer",
      discipline: "Software Architecture & Scalability",
    },
    {
      id: "member-2",
      name: "Team Member 02",
      role: "Senior Frontend & Interaction Engineer",
      discipline: "Modern Web Interfaces & Performance",
    },
    {
      id: "member-3",
      name: "Team Member 03",
      role: "Backend & Cloud Engineer",
      discipline: "APIs, Databases & Infrastructure",
    },
    {
      id: "member-4",
      name: "Team Member 04",
      role: "Product & UI/UX Specialist",
      discipline: "Design Systems & User Experience",
    },
  ],
  contact: {
    ctaHeading: "Have a complex problem?",
    ctaAccent: "Let's build it.",
    ctaDescription:
      "We partner with ambitious teams to plan, architect, and deliver reliable custom software solutions.",
    email: "hello@nexora-demo.com",
    location: "India · Working Globally",
    workingHours: "Mon – Fri · IST & Global Overlap",
    isDemoNotice:
      "Notice: This is an internal prototype demonstration. Values shown are modular demo placeholders.",
  },
  socialLinks: [
    { name: "GitHub", href: "https://github.com" },
    { name: "LinkedIn", href: "https://linkedin.com" },
  ],
};
