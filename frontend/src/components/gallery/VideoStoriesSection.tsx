import { motion } from "framer-motion";
import { Play } from "lucide-react";

import { videoStoriesMedia } from "./mediaData";
import InlineVideoEmbed from "./InlineVideoEmbed";
import type { GalleryMediaItem } from "./types";

type VideoStoriesSectionProps = {
  onOpenMedia: (item: GalleryMediaItem) => void;
};

const VideoStoriesSection = ({ onOpenMedia }: VideoStoriesSectionProps) => {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8b5e3c]">
            Video stories
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-stone-900 sm:text-4xl">
            Motion-first moments across bridal work and training activity.
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {videoStoriesMedia.map((video, index) => (
            <motion.button
              key={video.id}
              type="button"
              onClick={() => onOpenMedia(video)}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.03 }}
              className="group relative overflow-hidden rounded-[1.4rem] border border-stone-200 bg-[#fdfaf7] text-left"
            >
              <InlineVideoEmbed
                src={video.videoUrl ?? ""}
                title={video.title}
                wrapperClassName="aspect-video w-full overflow-hidden bg-black"
                iframeClassName="h-full w-full border-0"
              />
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <span className="rounded-full bg-black/55 p-3 text-white">
                  <Play className="h-5 w-5" />
                </span>
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-stone-900/80 to-transparent px-4 py-4 text-white">
                <p className="text-xs uppercase tracking-[0.12em] text-stone-200">
                  {video.category}
                </p>
                <h3 className="mt-1 text-base font-semibold">{video.title}</h3>
                <p className="mt-1 text-xs text-stone-200">
                  {video.description}
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoStoriesSection;
