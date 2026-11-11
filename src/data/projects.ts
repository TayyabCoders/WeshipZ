import type { ServiceSlug } from "@/data/services";

export type ProjectCategory =
  | "all"
  | "motion-graphics"
  | "creative-ads"
  | "video-editing";

export type Project = {
  slug: string;
  title: string;
  brand: string;
  /** Self-initiated piece, not a paid commission. */
  spec?: boolean;
  category: Exclude<ProjectCategory, "all">;
  serviceSlug: ServiceSlug;
  orientation: "vertical" | "landscape";
  duration: string;
  summary: string;
  challenge: string;
  approach: string;
  deliverables: string[];
  poster: string;
  /** Muted 12s loop for cards and autoplay spots. */
  preview: string;
  /** Full cut with sound, loaded on demand. */
  video: string;
  /** Shown in the home page selected-work rail. */
  featured?: boolean;
};

export const projectFilters: { id: ProjectCategory; label: string }[] = [
  { id: "all", label: "All Work" },
  { id: "motion-graphics", label: "Motion Graphics" },
  { id: "creative-ads", label: "Creative Ads" },
  { id: "video-editing", label: "Video Editing" },
];

const media = (slug: string) => ({
  poster: `/work/${slug}/poster.jpg`,
  preview: `/work/${slug}/preview.mp4`,
  video: `/work/${slug}/full.mp4`,
});

export const projects: Project[] = [
  {
    slug: "dunkin-sweet-summer",
    title: "Sweet Summer Deal",
    brand: "Dunkin'",
    category: "motion-graphics",
    serviceSlug: "motion-graphics",
    orientation: "landscape",
    duration: "0:44",
    summary: "A 3D character film that turns a summer box deal into a story people watch to the end.",
    challenge: "Make a price promotion feel like entertainment, not a discount banner.",
    approach:
      "Built two donut characters, gave them a walk to the store and a scene at the counter, then landed the offer with a bold product reveal and price lock-up.",
    deliverables: ["3D character film", "Teaser trailer", "Offer end card", "Social cutdowns"],
    ...media("dunkin"),
    featured: true,
  },
  {
    slug: "arthur-brooks",
    title: "Watch roll",
    brand: "Arthur Brooks",
    spec: true,
    category: "video-editing",
    serviceSlug: "video-editing",
    orientation: "vertical",
    duration: "0:32",
    summary: "A talking-head product edit, captioned and paced for a watch-roll pitch.",
    challenge: "Keep a talking-head sell tight enough that nobody skips.",
    approach:
      "Cut on the line, punched captions in as the hook lands, then dropped to the product beat so the watch roll feels inevitable.",
    deliverables: ["Talking-head edit", "Captions", "Product insert"],
    ...media("arthur-brooks"),
    featured: true,
  },
  {
    slug: "editors-cant-read",
    title: "Can't read",
    brand: "Editors can't read",
    spec: true,
    category: "video-editing",
    serviceSlug: "video-editing",
    orientation: "vertical",
    duration: "0:53",
    summary: "A caption-led talking-head about briefs that never get opened.",
    challenge: "Make an inside-baseball editor joke land with people who are not editors.",
    approach:
      "Built the joke in type first, then cut the performance around the captions so the punchline hits on the frame, not the voiceover.",
    deliverables: ["Talking-head edit", "Caption design", "Type-led pacing"],
    ...media("editors-cant-read"),
  },
  {
    slug: "narration-style",
    title: "Everyone's posting",
    brand: "Narration style",
    spec: true,
    category: "video-editing",
    serviceSlug: "video-editing",
    orientation: "vertical",
    duration: "0:29",
    summary: "A pixel-art narration about the scroll, the hours, and making something people actually watch.",
    challenge: "Tell a studio story in 30 seconds without it feeling like an about page.",
    approach:
      "Wrote it as narration first, then built a pixel world around each line so the pictures carry the argument.",
    deliverables: ["Narrated short", "Pixel-art worlds", "Kinetic captions"],
    ...media("narration-style"),
    featured: true,
  },
  {
    slug: "quippy",
    title: "Concept launch",
    brand: "Quippy",
    spec: true,
    category: "motion-graphics",
    serviceSlug: "motion-graphics",
    orientation: "landscape",
    duration: "0:21",
    summary: "A character-led motion explainer for a social-skills app: the freeze, the prompt, the better reply.",
    challenge: "Make an awkward social problem feel solvable in twenty seconds.",
    approach:
      "Opened on the freeze everyone knows, then walked the penguin through the product so the UI is the payoff, not a screenshot.",
    deliverables: ["Motion explainer", "Character animation", "UI walkthrough"],
    ...media("quippy"),
  },
  {
    slug: "must-watch",
    title: "Storyboard to final",
    brand: "This is a must watch",
    spec: true,
    category: "video-editing",
    serviceSlug: "video-editing",
    orientation: "vertical",
    duration: "0:29",
    summary: "Storyboard versus final, taped to the wall: the same cut, before and after the edit.",
    challenge: "Show what an edit actually adds, without a before/after slider.",
    approach:
      "Pinned the boards next to the finished frames and let the motion sell the jump from sketch to picture.",
    deliverables: ["Storyboard-to-final edit", "On-screen type", "Studio end card"],
    ...media("must-watch"),
  },
];

export function categoryLabel(project: Project) {
  return projectFilters.find((filter) => filter.id === project.category)?.label ?? "";
}

export const formatLabel = (project: Project) => (project.orientation === "vertical" ? "9:16" : "16:9");

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
