import { getProject, type Project } from "@/data/projects";

export type Reel = {
  title: string;
  tag: string;
  duration: string;
  video: string;
  poster: string;
};

const pick = (slug: string) => getProject(slug) as Project;

/** Clip for the before/after and format demos on the home page. */
export const craftClip = { video: pick("dot-and-key-strawberry-bright").preview, poster: pick("dot-and-key-strawberry-bright").poster };

/** Vertical edits only; the stack renders 9:16 cards. */
export const reels: Reel[] = [
  { slug: "amd-perfumes-murmur", tag: "Fragrance launch · Spec" },
  { slug: "mehran-ice-cream", tag: "Flavour worlds · Brand film" },
  { slug: "sugar-latte", tag: "Motion menu · Illustration" },
].map(({ slug, tag }) => {
  const project = pick(slug);
  return { title: project.brand, tag, duration: project.duration, video: project.preview, poster: project.poster };
});
