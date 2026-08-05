import { traditionalCeremonyMedia } from "./mediaData";
import GalleryMediaSection from "./GalleryMediaSection";
import type { GalleryMediaItem } from "./types";

type TraditionalGalleryProps = {
  onOpenMedia: (item: GalleryMediaItem) => void;
};

const TraditionalGallery = ({ onOpenMedia }: TraditionalGalleryProps) => {
  return (
    <GalleryMediaSection
      badge="Traditional ceremonies"
      title="Cultural bridal moments, family preparation, and ceremonial elegance."
      description="A visual mix of attire styling, accessory setup, bridal makeup, and preparation flow for traditional ceremonies."
      items={traditionalCeremonyMedia}
      onOpenMedia={onOpenMedia}
      background="white"
    />
  );
};

export default TraditionalGallery;
