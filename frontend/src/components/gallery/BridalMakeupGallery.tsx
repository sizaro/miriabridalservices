import { Link } from "react-router-dom";

import { bridalMakeupMedia } from "./mediaData";
import GalleryMediaSection from "./GalleryMediaSection";
import type { GalleryMediaItem } from "./types";

type BridalMakeupGalleryProps = {
  onOpenMedia: (item: GalleryMediaItem) => void;
};

const BridalMakeupGallery = ({ onOpenMedia }: BridalMakeupGalleryProps) => {
  return (
    <>
      <GalleryMediaSection
        badge="Bridal makeup gallery"
        title="Close-up finishes, preparation details, and final makeup confidence."
        description="From skin prep to final touch, these visuals highlight soft glam, natural radiance, traditional finish, and camera-ready makeup."
        items={bridalMakeupMedia}
        onOpenMedia={onOpenMedia}
        background="white"
      />
      <div className="-mt-10 bg-white pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            to="/services"
            className="inline-flex rounded-full border border-stone-300 bg-[#fdfaf7] px-5 py-2 text-sm font-semibold text-stone-800 transition hover:border-stone-400"
          >
            Explore makeup services
          </Link>
        </div>
      </div>
    </>
  );
};

export default BridalMakeupGallery;
