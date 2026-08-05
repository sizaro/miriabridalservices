import { motion } from "framer-motion";
import { Play } from "lucide-react";

import InlineVideoEmbed from "./InlineVideoEmbed";
import type { GalleryMediaItem } from "./types";

type GalleryMediaSectionProps = {
  badge: string;
  title: string;
  description: string;
  items: GalleryMediaItem[];
  onOpenMedia: (item: GalleryMediaItem) => void;
  background?: "white" | "cream";
};

const GalleryMediaSection = ({
  badge,
  title,
  description,
  items,
  onOpenMedia,
  background = "white",
}: GalleryMediaSectionProps) => {
  return (
    <section
      className={`${background === "cream" ? "bg-[#f7efe8]" : "bg-white"} py-20 sm:py-24`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8b5e3c]">
            {badge}
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-stone-900 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-5 text-base leading-8 text-stone-600">
            {description}
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <motion.button
              key={item.id}
              type="button"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              onClick={() => onOpenMedia(item)}
              className="group relative overflow-hidden rounded-[1.4rem] border border-stone-200 bg-[#fdfaf7] text-left"
            >
              {item.type === "image" ? (
                <img
                  src={item.imageUrl}
                  alt={item.alt}
                  className="h-60 w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              ) : (
                <div className="relative">
                  <InlineVideoEmbed
                    src={item.videoUrl ?? ""}
                    title={item.title}
                    wrapperClassName="aspect-[4/3] w-full overflow-hidden bg-black"
                    iframeClassName="h-full w-full border-0"
                  />
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                    <span className="rounded-full bg-black/55 p-3 text-white">
                      <Play className="h-5 w-5" />
                    </span>
                  </div>
                </div>
              )}

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-stone-900/80 to-transparent px-4 py-3 text-white">
                <p className="text-xs uppercase tracking-[0.12em] text-stone-200">
                  {item.category}
                </p>
                <h3 className="mt-1 text-base font-semibold">{item.title}</h3>
                <p className="mt-1 text-xs text-stone-200">
                  {item.description}
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryMediaSection;
