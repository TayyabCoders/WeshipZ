export type Reel = {
  title: string;
  tag: string;
  duration: string;
  video: string;
  poster: string;
};

/** Vertical edits work best; landscape clips are center-cropped to 9:16. */
export const reels: Reel[] = [
  {
    title: "Podcast cutdown",
    tag: "Captions · Grade",
    duration: "0:42",
    video:
      "/videos/friday.mp4",
    poster: "/posters/editorial-post.svg",
  },
  {
    title: "Editing breakdown",
    tag: "Motion · Sound design",
    duration: "0:30",
    video:
      "/videos/flower.mp4",
    poster: "/posters/brand-motion.svg",
  },
  {
    title: "Founder story",
    tag: "Kinetic type · Reel",
    duration: "0:55",
    video:
      "/videos/jellyfish.mp4",
    poster: "/posters/social-system.svg",
  },
];
