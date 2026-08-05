import { motion } from "framer-motion";
import { Play } from "lucide-react";

import { beforeAfterMedia } from "./mediaData";
import InlineVideoEmbed from "./InlineVideoEmbed";
import type { GalleryMediaItem } from "./types";

type BeforeAfterGalleryProps = {
  onOpenMedia: (item: GalleryMediaItem) => void;
};

const BeforeAfterGallery = ({ onOpenMedia }: BeforeAfterGalleryProps) => {
  const before = beforeAfterMedia[0];
  const after = beforeAfterMedia[1];
  const revealVideo = beforeAfterMedia[2];

  return (
    <section className="bg-[#f7efe8] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8b5e3c]">
            Before and after
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-stone-900 sm:text-4xl">
            Visible transformations with preparation-to-reveal storytelling.
          </h2>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <motion.button
            type="button"
            onClick={() => onOpenMedia(before)}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35 }}
            className="overflow-hidden rounded-[1.5rem] border border-stone-200 bg-white text-left"
          >
            <img
              src={before.imageUrl}
              alt={before.alt}
              className="h-72 w-full object-cover"
              loading="lazy"
            />
            <p className="px-4 py-3 text-sm font-semibold text-stone-700">
              Before preparation
            </p>
          </motion.button>

          <motion.button
            type="button"
            onClick={() => onOpenMedia(after)}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: 0.04 }}
            className="overflow-hidden rounded-[1.5rem] border border-stone-200 bg-white text-left"
          >
            <img
              src={after.imageUrl}
              alt={after.alt}
              className="h-72 w-full object-cover"
              loading="lazy"
            />
            <p className="px-4 py-3 text-sm font-semibold text-stone-700">
              After final reveal
            </p>
          </motion.button>
        </div>

        <motion.button
          type="button"
          onClick={() => onOpenMedia(revealVideo)}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.35, delay: 0.08 }}
          className="group relative mt-6 block w-full overflow-hidden rounded-[1.5rem] border border-stone-200 bg-white text-left"
        >
          <InlineVideoEmbed
            src={revealVideo.videoUrl ?? ""}
            title={revealVideo.title}
            wrapperClassName="aspect-video w-full overflow-hidden bg-black"
            iframeClassName="h-full w-full border-0"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-stone-900/80 to-transparent px-4 py-4 text-white">
            <p className="text-xs uppercase tracking-[0.12em] text-stone-200">
              Final reveal
            </p>
            <p className="mt-1 text-base font-semibold">{revealVideo.title}</p>
            <p className="mt-1 text-xs text-stone-200">
              {revealVideo.description}
            </p>
          </div>
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <span className="rounded-full bg-black/55 p-3 text-white">
              <Play className="h-5 w-5" />
            </span>
          </div>
        </motion.button>
      </div>
    </section>
  );
};

export default BeforeAfterGallery;
