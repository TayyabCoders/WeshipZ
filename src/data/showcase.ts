import { heroClips } from "@/data/site";

export type Reel = {
  title: string;
  tag: string;
  duration: string;
  video: string;
  poster: string;
};

/** 4:5 Quippy cut for tall frames (hover, format demo, service visual). */
export const craftClip = {
  video: "/work/quippy/preview-4x5.mp4",
  poster: "/work/quippy/poster-4x5.jpg",
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
