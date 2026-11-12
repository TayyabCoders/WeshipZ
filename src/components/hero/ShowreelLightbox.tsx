"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useLenis } from "lenis/react";
import { X } from "lucide-react";

type ShowreelLightboxProps = {
  open: boolean;
  onClose: () => void;
  src: string;
  poster: string;
  label: string;
};

export function ShowreelLightbox({
  open,
  onClose,
  src,
  poster,
  label,
}: ShowreelLightboxProps) {
  const lenis = useLenis();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (open) lenis?.stop();
    else lenis?.start();
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open, lenis]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (open) {
      video.currentTime = 0;
      void video.play().catch(() => undefined);
    } else {
      video.pause();
    }
  }, [open]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4 md:p-10"
          role="dialog"
          aria-modal="true"
          aria-label={label}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
        >
          <div className="flex h-full w-full max-w-6xl flex-col" onClick={(event) => event.stopPropagation()}>
            <div className="flex justify-end pb-4">
              <button
                type="button"
                onClick={onClose}
                className="inline-flex size-12 items-center justify-center rounded-full bg-white text-midnight"
                aria-label={`Close ${label}`}
              >
                <X className="size-5" />
              </button>
            </div>
            <motion.video
              ref={videoRef}
              className="min-h-0 w-full flex-1 rounded-2xl object-contain"
              src={src}
              poster={poster}
              controls
              playsInline
              autoPlay
              initial={{ scale: 0.96, y: 16 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 16 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
