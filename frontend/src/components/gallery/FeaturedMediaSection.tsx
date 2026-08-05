import { motion } from "framer-motion";
import { Play } from "lucide-react";

import { featuredMedia } from "./mediaData";
import InlineVideoEmbed from "./InlineVideoEmbed";
import type { GalleryMediaItem } from "./types";

type FeaturedMediaSectionProps = {
  onOpenMedia: (item: GalleryMediaItem) => void;
};

const FeaturedMediaSection = ({ onOpenMedia }: FeaturedMediaSectionProps) => {
  const mainItem = featuredMedia[0];
  const sideItems = featuredMedia.slice(1);

  return (
    <section className="bg-[#f7efe8] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8b5e3c]">
            Featured media
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-stone-900 sm:text-4xl">
            Strong bridal moments from preparation to final reveal.
          </h2>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.button
            type="button"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
            onClick={() => onOpenMedia(mainItem)}
            className="group relative overflow-hidden rounded-[1.8rem] border border-stone-200 text-left"
          >
            {mainItem.type === "video" ? (
              <InlineVideoEmbed
                src={mainItem.videoUrl ?? ""}
                title={mainItem.title}
                wrapperClassName="aspect-[4/3] w-full"
                iframeClassName="h-full w-full border-0"
              />
            ) : (
              <img
                src={mainItem.imageUrl}
                alt={mainItem.alt}
                className="h-[460px] w-full object-cover"
                loading="lazy"
              />
            )}

            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-stone-950/80 via-stone-950/35 to-transparent p-6 text-white">
              <p className="text-xs uppercase tracking-[0.14em] text-stone-200">
                {mainItem.category}
              </p>
              <h3 className="mt-2 text-2xl font-semibold">{mainItem.title}</h3>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-stone-200">
                {mainItem.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/50 px-4 py-2 text-sm font-semibold">
                <Play className="h-4 w-4" />
                Watch story
              </span>
            </div>
          </motion.button>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            {sideItems.map((item, index) => (
              <motion.button
                key={item.id}
                type="button"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                onClick={() => onOpenMedia(item)}
                className="group relative overflow-hidden rounded-[1.4rem] border border-stone-200 text-left"
              >
                <img
                  src={item.imageUrl ?? item.thumbnail}
                  alt={item.alt}
                  className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-stone-900/80 to-transparent px-4 py-3 text-white">
                  <p className="text-xs uppercase tracking-[0.12em] text-stone-200">
                    {item.category}
                  </p>
                  <p className="mt-1 text-base font-semibold">{item.title}</p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMediaSection;
