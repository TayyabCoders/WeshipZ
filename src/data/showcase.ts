import { heroClips } from "@/data/site";

export type Reel = {
  title: string;
  tag: string;
  duration: string;
  video: string;
  poster: string;
};

/** Clip for the before/after and format demos on the home page. */
export const craftClip = {
  video: "/work/dunkin/preview.mp4",
  poster: "/work/dunkin/poster.jpg",
};

/** Vertical edits only; the stack renders 9:16 cards. Same three as the hero. */
export const reels: Reel[] = [
  { clip: heroClips[0], tag: "Narration edit", duration: "0:29" },
  { clip: heroClips[1], tag: "Talking-head edit", duration: "0:32" },
  { clip: heroClips[2], tag: "Caption edit", duration: "0:53" },
].map(({ clip, tag, duration }) => ({
  title: clip.title,
  tag,
  duration,
  video: clip.video,
  poster: clip.poster,
}));
