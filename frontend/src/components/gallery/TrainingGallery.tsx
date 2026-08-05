import { trainingGalleryMedia } from "./mediaData";
import GalleryMediaSection from "./GalleryMediaSection";
import type { GalleryMediaItem } from "./types";

type TrainingGalleryProps = {
  onOpenMedia: (item: GalleryMediaItem) => void;
};

const TrainingGallery = ({ onOpenMedia }: TrainingGalleryProps) => {
  return (
    <GalleryMediaSection
      badge="Training academy gallery"
      title="Teaching, practical assignments, assessments, and student growth."
      description="A focused visual record of academy activities from demonstration to student portfolio sessions."
      items={trainingGalleryMedia}
      onOpenMedia={onOpenMedia}
      background="cream"
    />
  );
};

export default TrainingGallery;
