import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";

import type { GalleryMediaItem } from "./types";

type MediaLightboxProps = {
  item: GalleryMediaItem | null;
  onClose: () => void;
};

const MediaLightbox = ({ item, onClose }: MediaLightboxProps) => {
  useEffect(() => {
    if (!item) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [item, onClose]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[120] flex items-center justify-center bg-stone-950/80 px-4 py-6"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={item.title}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-5xl rounded-2xl bg-stone-900 p-3 sm:p-4"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-3 top-3 z-10 rounded-full bg-stone-100 p-2 text-stone-900 transition hover:bg-white"
              aria-label="Close media preview"
            >
              <X className="h-5 w-5" />
            </button>

            {item.type === "image" ? (
              <img
                src={item.imageUrl}
                alt={item.alt}
                className="max-h-[78vh] w-full rounded-xl object-contain"
              />
            ) : (
              <div className="aspect-video w-full overflow-hidden rounded-xl bg-black">
                <iframe
                  src={item.videoUrl}
                  title={item.title}
                  className="h-full w-full border-0"
                  allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}

            <div className="px-2 pb-2 pt-4 text-white">
              <p className="text-sm uppercase tracking-[0.14em] text-stone-300">
                {item.category}
              </p>
              <h3 className="mt-1 text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-stone-300">
                {item.description}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MediaLightbox;
