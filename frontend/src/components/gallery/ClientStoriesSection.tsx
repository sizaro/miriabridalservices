import { motion } from "framer-motion";

import { clientHighlightsMedia } from "./mediaData";
import type { GalleryMediaItem } from "./types";

type ClientStoriesSectionProps = {
  onOpenMedia: (item: GalleryMediaItem) => void;
};

const ClientStoriesSection = ({ onOpenMedia }: ClientStoriesSectionProps) => {
  const mediaItem = clientHighlightsMedia[0];
  const videoItem = clientHighlightsMedia[1];

  return (
    <section className="bg-[#f7efe8] py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.04fr_0.96fr] lg:px-8 lg:items-center">
        <motion.button
          type="button"
          onClick={() => onOpenMedia(mediaItem)}
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
          className="overflow-hidden rounded-[1.6rem] border border-stone-200 bg-white text-left"
        >
          <img
            src={mediaItem.imageUrl}
            alt={mediaItem.alt}
            className="h-[360px] w-full object-cover"
            loading="lazy"
          />
        </motion.button>

        <motion.div
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8b5e3c]">
            Client story highlights
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-stone-900 sm:text-4xl">
            "I felt calm, beautiful, and fully supported from start to finish."
          </h2>
          <p className="mt-5 text-sm leading-7 text-stone-600">
            Client Name Placeholder | Church Wedding | Services: Bridal Makeup,
            Hair Styling, Trial Session, Wedding-Day Support.
          </p>
          <p className="mt-4 text-base leading-8 text-stone-600">
            This story reflects how consultation, planning, and teamwork combine
            to deliver a complete bridal experience beyond the final look.
          </p>

          <button
            type="button"
            onClick={() => onOpenMedia(videoItem)}
            className="mt-6 rounded-full border border-stone-300 bg-white px-5 py-2 text-sm font-semibold text-stone-800 transition hover:border-stone-400"
          >
            Watch highlight clip
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientStoriesSection;
