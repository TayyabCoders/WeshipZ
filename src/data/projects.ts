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
    slug: "amd-perfumes-murmur",
    title: "Murmur",
    brand: "AMD Perfumes",
    spec: true,
    category: "creative-ads",
    serviceSlug: "creative-ads",
    orientation: "vertical",
    duration: "0:40",
    summary: "A dark, sensory fragrance launch that shows the notes before it shows the bottle.",
    challenge: "Sell a scent, something nobody can see, in a vertical feed.",
    approach:
      "Visualised each note as smoke, spice and liquid, built tension with slow macro moments, then revealed the bottle and gift box in a premium end frame.",
    deliverables: ["Vertical launch ad", "Note visualisations", "Product reveal", "Packshot end frame"],
    ...media("amd"),
    featured: true,
  },
  {
    slug: "invo-pk-explainer",
    title: "Run your shop from one screen",
    brand: "Invo.pk",
    category: "motion-graphics",
    serviceSlug: "motion-graphics",
    orientation: "vertical",
    duration: "0:35",
    summary: "A SaaS explainer that walks a shop owner from paper chaos to a POS that works offline.",
    challenge: "Explain sales, stock and invoicing software to shop owners who have never used any.",
    approach:
      "Opened on the pain everyone recognises, then animated the real product UI in short, punchy beats: sign up, add stock, sell, print and share.",
    deliverables: ["2D explainer", "Animated UI walkthrough", "Kinetic captions", "Vertical master"],
    ...media("invopk"),
    featured: true,
  },
  {
    slug: "dot-and-key-strawberry-bright",
    title: "Strawberry Bright Serum",
    brand: "Dot & Key",
    category: "creative-ads",
    serviceSlug: "creative-ads",
    orientation: "landscape",
    duration: "0:24",
    summary: "A juicy product film for a skincare serum, with the brand's claims built into the motion.",
    challenge: "Make a skincare bottle feel as fresh as the fruit it is made from.",
    approach:
      "Surrounded the serum with strawberries and liquid motion, then animated the key product claims as clean callouts before the launch end card.",
    deliverables: ["Product commercial", "Animated claim callouts", "Launch end card"],
    ...media("dot-and-key"),
    featured: true,
  },
  {
    slug: "mehran-ice-cream",
    title: "Flavours worth the trip",
    brand: "Mehran Ice Cream",
    category: "creative-ads",
    serviceSlug: "creative-ads",
    orientation: "vertical",
    duration: "1:06",
    summary: "Each flavour gets its own world: cookie mountains, mango splashes and brownie rivers.",
    challenge: "Show a whole range without it feeling like a catalogue.",
    approach:
      "Started in the freezer, then dropped into a surreal landscape for each flavour, closing on the full line-up as a hero packshot.",
    deliverables: ["Vertical brand film", "Flavour worlds", "Range packshot"],
    ...media("mehran-ice-cream"),
    featured: true,
  },
  {
    slug: "crystal-light",
    title: "Four flavours. Zero sugar.",
    brand: "Crystal Light",
    category: "creative-ads",
    serviceSlug: "creative-ads",
    orientation: "landscape",
    duration: "0:22",
    summary: "A sun-soaked product ad that introduces four flavours in under 25 seconds.",
    challenge: "Make a powdered drink mix look as refreshing as the real fruit.",
    approach:
      "Paired each pack with its fruit in a tropical set, then lined up the range for one clear message.",
    deliverables: ["Product commercial", "Flavour line-up", "Super & end card"],
    ...media("crystal-light"),
  },
  {
    slug: "cola-one",
    title: "Ice cold, city warm",
    brand: "Cola One",
    spec: true,
    category: "creative-ads",
    serviceSlug: "creative-ads",
    orientation: "vertical",
    duration: "0:29",
    summary: "Splash-heavy product shots mixed with illustrated city moments for a soft-drink spot.",
    challenge: "Give a new cola personality next to brands everyone already knows.",
    approach:
      "Cut between hyper-real can shots, ice and fizz, and a warm illustrated rooftop scene that sells the moment, not just the drink.",
    deliverables: ["Vertical ad", "Illustrated scenes", "Product splash shots"],
    ...media("cola-one"),
  },
  {
    slug: "sugar-latte",
    title: "Sugar, in motion",
    brand: "Sugar",
    category: "motion-graphics",
    serviceSlug: "motion-graphics",
    orientation: "vertical",
    duration: "0:37",
    summary: "A playful motion menu: every drink flies in with its ingredients and a local twist.",
    challenge: "Launch several drinks in one ad without losing the brand's character.",
    approach:
      "Gave each drink its own colour world, floated the ingredients around the cup, and added hand-drawn city icons for a local feel.",
    deliverables: ["Motion menu ad", "Illustrated overlays", "Drink-by-drink reveals"],
    ...media("sugar-latte"),
  },
  {
    slug: "mehran-sajji-story",
    title: "38 saal, aik zaiqa",
    brand: "Mehran Sajji",
    spec: true,
    category: "video-editing",
    serviceSlug: "video-editing",
    orientation: "vertical",
    duration: "0:57",
    summary: "A story-led ad about a restaurant that has been serving the same taste since 1987.",
    challenge: "Turn decades of heritage into a story a scrolling viewer will finish.",
    approach:
      "Followed one character through the night streets to the table, paced the edit around the food moments, and closed on the heritage line in Urdu.",
    deliverables: ["Story ad", "Bilingual typography", "Heritage end card"],
    ...media("mehran-story"),
  },
  {
    slug: "yours-bakery-cafe",
    title: "Made to crave",
    brand: "Yours",
    spec: true,
    category: "creative-ads",
    serviceSlug: "creative-ads",
    orientation: "landscape",
    duration: "0:27",
    summary: "High-speed food shots for a cafe: pours, crumbs and a cheesecake you can almost taste.",
    challenge: "Make a menu look premium enough to stop the scroll.",
    approach:
      "Built the ad on slow-motion pours, splashes and close-ups, timing every cut to the next texture.",
    deliverables: ["Food commercial", "Slow-motion product shots"],
    ...media("yours"),
  },
  {
    slug: "mamasako-coffee",
    title: "Coffee & cookies",
    brand: "Mamasako",
    spec: true,
    category: "creative-ads",
    serviceSlug: "creative-ads",
    orientation: "landscape",
    duration: "0:27",
    summary: "A moody coffee-and-cookie spot built on steam, cream and caramel drizzles.",
    challenge: "Make a small coffee brand feel like a destination.",
    approach:
      "Lit everything low and warm, then built the edit around the satisfying moments: the pour, the drizzle and the cookie break.",
    deliverables: ["Product commercial", "Brand packshots"],
    ...media("mamasako"),
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
