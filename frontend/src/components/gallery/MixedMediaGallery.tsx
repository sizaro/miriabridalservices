import { AnimatePresence, motion } from "framer-motion";
import { Play } from "lucide-react";

import { mixedMediaItems } from "./mediaData";
import InlineVideoEmbed from "./InlineVideoEmbed";
import type { GalleryMediaItem } from "./types";

type MixedMediaGalleryProps = {
  activeFilter: string;
  onOpenMedia: (item: GalleryMediaItem) => void;
};

const matchesFilter = (item: GalleryMediaItem, filter: string) => {
  if (filter === "All") {
    return true;
  }
  if (filter === "Videos") {
    return item.type === "video";
  }
  return item.category === filter;
};

const MixedMediaGallery = ({
  activeFilter,
  onOpenMedia,
}: MixedMediaGalleryProps) => {
  const filteredItems = mixedMediaItems.filter((item) =>
    matchesFilter(item, activeFilter),
  );

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8b5e3c]">
            Main mixed media gallery
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-stone-900 sm:text-4xl">
            Editorial-style visual stories across images and video.
          </h2>
        </div>

        <motion.div
          layout
          className="mt-10 columns-1 gap-5 sm:columns-2 xl:columns-3"
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.button
                layout
                key={item.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
                type="button"
                onClick={() => onOpenMedia(item)}
                className="group relative mb-5 block w-full break-inside-avoid overflow-hidden rounded-[1.4rem] border border-stone-200 bg-[#fdfaf7] text-left"
              >
                {item.type === "image" ? (
                  <img
                    src={item.imageUrl}
                    alt={item.alt}
                    className={`w-full object-cover transition duration-500 group-hover:scale-105 ${
                      index % 3 === 0
                        ? "h-[320px]"
                        : index % 3 === 1
                          ? "h-[240px]"
                          : "h-[280px]"
                    }`}
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
                        <Play className="h-6 w-6" />
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
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default MixedMediaGallery;
