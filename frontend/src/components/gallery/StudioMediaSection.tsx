import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { studioMedia } from "./mediaData";
import GalleryMediaSection from "./GalleryMediaSection";
import type { GalleryMediaItem } from "./types";

type StudioMediaSectionProps = {
  onOpenMedia: (item: GalleryMediaItem) => void;
};

const StudioMediaSection = ({ onOpenMedia }: StudioMediaSectionProps) => {
  return (
    <>
      <GalleryMediaSection
        badge="Studio and location media"
        title="Consultation spaces, workstations, and studio tour moments."
        description="Visual highlights of the studio environment, training room, waiting area, and preparation workflow."
        items={studioMedia}
        onOpenMedia={onOpenMedia}
        background="cream"
      />
      <div className="-mt-10 bg-[#f7efe8] pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-stone-700"
          >
            Plan your visit <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default StudioMediaSection;
