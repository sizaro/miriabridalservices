import { bridalPartyMedia } from "./mediaData";
import GalleryMediaSection from "./GalleryMediaSection";
import type { GalleryMediaItem } from "./types";

type BridalPartyGalleryProps = {
  onOpenMedia: (item: GalleryMediaItem) => void;
};

const BridalPartyGallery = ({ onOpenMedia }: BridalPartyGalleryProps) => {
  return (
    <GalleryMediaSection
      badge="Bridesmaids and bridal party"
      title="Individual bride focus with full-party coordination support."
      description="Group preparation, coordinated styling, and wedding-party visuals that show our multi-client event workflow."
      items={bridalPartyMedia}
      onOpenMedia={onOpenMedia}
      background="white"
    />
  );
};

export default BridalPartyGallery;
