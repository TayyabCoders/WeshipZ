export const email = "hello@weshipz.com";

/** Swap for the real reel; poster shows until it loads. */
export const showreel = {
  video:
    "/videos/sintel.mp4",
  poster: "/posters/brand-motion.svg",
};

/** International number, digits only. */
export const whatsappNumber = "923334122004";

export function whatsappHref(
  message = "Hi WeShipZ, I'd like to discuss a project.",
) {
  if (!whatsappNumber) return null;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}
