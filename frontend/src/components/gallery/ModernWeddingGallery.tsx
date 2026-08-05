import { modernWeddingMedia } from "./mediaData";
import GalleryMediaSection from "./GalleryMediaSection";
import type { GalleryMediaItem } from "./types";

type ModernWeddingGalleryProps = {
  onOpenMedia: (item: GalleryMediaItem) => void;
};

const ModernWeddingGallery = ({ onOpenMedia }: ModernWeddingGalleryProps) => {
  return (
    <GalleryMediaSection
      badge="Modern weddings"
      title="Church weddings, garden portraits, and cinematic bridal moments."
      description="Wide visual storytelling from preparation through ceremony and reception with motion-friendly modern styling."
      items={modernWeddingMedia}
      onOpenMedia={onOpenMedia}
      background="cream"
    />
  );
};

export default ModernWeddingGallery;
