import { hairStylingMedia } from "./mediaData";
import GalleryMediaSection from "./GalleryMediaSection";
import type { GalleryMediaItem } from "./types";

type HairStylingGalleryProps = {
  onOpenMedia: (item: GalleryMediaItem) => void;
};

const HairStylingGallery = ({ onOpenMedia }: HairStylingGalleryProps) => {
  return (
    <GalleryMediaSection
      badge="Hair styling gallery"
      title="From preparation to final placement."
      description="Bridal updos, waves, traditional styling, and veil placement stories that prioritize longevity, comfort, and elegance."
      items={hairStylingMedia}
      onOpenMedia={onOpenMedia}
      background="cream"
    />
  );
};

export default HairStylingGallery;
