import { behindScenesMedia } from "./mediaData";
import GalleryMediaSection from "./GalleryMediaSection";
import type { GalleryMediaItem } from "./types";

type BehindTheScenesGalleryProps = {
  onOpenMedia: (item: GalleryMediaItem) => void;
};

const BehindTheScenesGallery = ({
  onOpenMedia,
}: BehindTheScenesGalleryProps) => {
  return (
    <GalleryMediaSection
      badge="Behind the scenes"
      title="Preparation, planning, setup, and wedding-morning coordination."
      description="These moments show the teamwork and discipline behind every polished bridal result."
      items={behindScenesMedia}
      onOpenMedia={onOpenMedia}
      background="white"
    />
  );
};

export default BehindTheScenesGallery;
