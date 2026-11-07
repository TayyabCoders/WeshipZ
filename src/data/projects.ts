import type { ServiceSlug } from "@/data/services";

export type ProjectCategory =
  | "all"
  | "motion-graphics"
  | "creative-ads"
  | "video-editing";

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
    slug: "creator-content-system",
    title: "Creator Content System",
    category: "video-editing",
    serviceSlug: "video-editing",
    year: "2026",
    client: "Concept project",
    summary:
      "A monthly short-form engine: hook-first reels, captions and a look viewers recognize.",
    challenge:
      "Ship content at creator speed without every video looking different.",
    approach:
      "Built caption and motion templates once, then edited every short for retention.",
    deliverables: [
      "Monthly reels package",
      "Caption & motion templates",
      "YouTube long-form edit",
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
