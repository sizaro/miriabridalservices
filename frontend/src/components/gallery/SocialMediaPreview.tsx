import { motion } from "framer-motion";
import { ExternalLink, Play } from "lucide-react";

import { socialPreviewMedia } from "./mediaData";
import InlineVideoEmbed from "./InlineVideoEmbed";
import type { GalleryMediaItem } from "./types";

type SocialMediaPreviewProps = {
  onOpenMedia: (item: GalleryMediaItem) => void;
};

const SocialMediaPreview = ({ onOpenMedia }: SocialMediaPreviewProps) => {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8b5e3c]">
              Social media preview
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-stone-900 sm:text-4xl">
              A polished snapshot of recent visual activity.
            </h2>
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              className="inline-flex items-center gap-1 rounded-full border border-stone-300 bg-white px-4 py-2 text-sm font-semibold text-stone-700"
            >
              Instagram <ExternalLink className="h-4 w-4" />
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-1 rounded-full border border-stone-300 bg-white px-4 py-2 text-sm font-semibold text-stone-700"
            >
              TikTok <ExternalLink className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-10 grid gap-4 grid-cols-2 md:grid-cols-3">
          {socialPreviewMedia.map((item, index) => (
            <motion.button
              key={item.id}
              type="button"
              onClick={() => onOpenMedia(item)}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.28, delay: index * 0.03 }}
              className="group relative aspect-square overflow-hidden rounded-xl border border-stone-200 text-left"
            >
              {item.type === "image" ? (
                <img
                  src={item.imageUrl}
                  alt={item.alt}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              ) : (
                <div className="relative h-full w-full bg-black">
                  <InlineVideoEmbed
                    src={item.videoUrl ?? ""}
                    title={item.title}
                    wrapperClassName="h-full w-full"
                    iframeClassName="h-full w-full border-0"
                  />
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                    <span className="rounded-full bg-black/55 p-2 text-white">
                      <Play className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMediaPreview;
