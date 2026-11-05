import type { ServiceSlug } from "@/data/services";

export type ProjectCategory =
  | "all"
  | "motion-graphics"
  | "creative-ads"
  | "video-editing"
  | "web-development"
  | "ai-automation"
  | "social-media";

export type Project = {
  slug: string;
  title: string;
  category: Exclude<ProjectCategory, "all">;
  serviceSlug: ServiceSlug;
  year: string;
  client: string;
  summary: string;
  challenge: string;
  approach: string;
  deliverables: string[];
  poster: string;
  video?: string;
  featured?: boolean;
  accent: string;
  isDemo: true;
};

export const projectFilters: { id: ProjectCategory; label: string }[] = [
  { id: "all", label: "All Work" },
  { id: "motion-graphics", label: "Motion Graphics" },
  { id: "creative-ads", label: "Creative Ads" },
  { id: "video-editing", label: "Video Editing" },
  { id: "web-development", label: "Websites" },
  { id: "ai-automation", label: "AI Automation" },
  { id: "social-media", label: "Social Media" },
];

export const projects: Project[] = [
  {
    slug: "brand-motion-campaign",
    title: "Brand Motion Campaign",
    category: "motion-graphics",
    serviceSlug: "motion-graphics",
    year: "2026",
    client: "Concept project",
    summary:
      "A kinetic brand system built for launch films, product reveals and social cutdowns.",
    challenge:
      "Create a motion language that feels premium across long-form and short-form placements.",
    approach:
      "Designed style frames, built a reusable motion kit, then animated hero sequences and platform cutdowns.",
    deliverables: [
      "Hero motion film",
      "Social cutdowns",
      "Motion brand kit",
      "3D product moments",
    ],
    poster: "/posters/brand-motion.svg",
    video:
      "/videos/jellyfish.mp4",
    featured: true,
    accent: "#296BE5",
    isDemo: true,
  },
  {
    slug: "product-commercial",
    title: "Product Commercial",
    category: "creative-ads",
    serviceSlug: "creative-ads",
    year: "2026",
    client: "Concept project",
    summary:
      "A cinematic product spot designed to communicate value in the first three seconds.",
    challenge:
      "Translate a dense product story into a clear, high-impact commercial.",
    approach:
      "Tight script, bold visual hooks, and multi-format exports for paid and organic.",
    deliverables: [
      "Master commercial",
      "Paid social cutdowns",
      "Still campaign frames",
    ],
    poster: "/posters/product-commercial.svg",
    video:
      "/videos/flower.mp4",
    featured: true,
    accent: "#1F56BD",
    isDemo: true,
  },
  {
    slug: "editorial-post-suite",
    title: "Editorial Post Suite",
    category: "video-editing",
    serviceSlug: "video-editing",
    year: "2026",
    client: "Concept project",
    summary:
      "A polished edit suite with pacing, color and sound designed for premium storytelling.",
    challenge:
      "Turn raw footage into a cohesive narrative without losing energy.",
    approach:
      "Selects, rhythm edit, grade and mix — finished for web and vertical platforms.",
    deliverables: [
      "Long-form master",
      "Vertical reels",
      "Color & sound finish",
    ],
    poster: "/posters/editorial-post.svg",
    video:
      "/videos/friday.mp4",
    featured: true,
    accent: "#22252D",
    isDemo: true,
  },
  {
    slug: "studio-website",
    title: "Studio Website",
    category: "web-development",
    serviceSlug: "web-development",
    year: "2026",
    client: "Concept project",
    summary:
      "An expressive marketing site with editorial layouts and performance-minded builds.",
    challenge:
      "Make a digital presence that feels as crafted as the studio’s work.",
    approach:
      "Editorial design system, motion where it matters, and a maintainable Next.js build.",
    deliverables: [
      "Design system",
      "Responsive website",
      "CMS-ready structure",
    ],
    poster: "/posters/studio-website.svg",
    video:
      "/videos/bunny.mp4",
    accent: "#296BE5",
    isDemo: true,
  },
  {
    slug: "ops-automation-kit",
    title: "Ops Automation Kit",
    category: "ai-automation",
    serviceSlug: "ai-automation",
    year: "2026",
    client: "Concept project",
    summary:
      "Connected workflows that move leads, docs and updates without manual busywork.",
    challenge:
      "Reduce repetitive operations across tools without fragile one-off scripts.",
    approach:
      "Mapped the process, integrated the stack, and shipped monitored automations.",
    deliverables: [
      "Workflow map",
      "Tool integrations",
      "AI-assisted routing",
    ],
    poster: "/posters/ops-automation.svg",
    video:
      "/videos/sintel.mp4",
    accent: "#6C63FF",
    isDemo: true,
  },
  {
    slug: "social-content-system",
    title: "Social Content System",
    category: "social-media",
    serviceSlug: "social-media",
    year: "2026",
    client: "Concept project",
    summary:
      "A recognizable content system for posts, reels and campaign bursts.",
    challenge:
      "Keep a brand visually consistent while shipping content at speed.",
    approach:
      "Defined pillars, templates and motion-ready formats for ongoing production.",
    deliverables: [
      "Content templates",
      "Reel packages",
      "Campaign creatives",
    ],
    poster: "/posters/social-system.svg",
    video:
      "/videos/bunny.mp4",
    accent: "#1F56BD",
    isDemo: true,
  },
];

export function categoryLabel(project: Project) {
  return projectFilters.find((filter) => filter.id === project.category)?.label ?? "";
}

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getProjectsByCategory(category: ProjectCategory) {
  if (category === "all") return projects;
  return projects.filter((project) => project.category === category);
}

export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: projects[(index - 1 + projects.length) % projects.length],
    next: projects[(index + 1) % projects.length],
  };
}
