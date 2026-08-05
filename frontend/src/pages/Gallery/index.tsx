import { useMemo, useState } from "react";

import {
  GalleryHeroSection,
  FeaturedMediaSection,
  GalleryFilters,
  MixedMediaGallery,
  BridalMakeupGallery,
  HairStylingGallery,
  TraditionalGallery,
  ModernWeddingGallery,
  BridalPartyGallery,
  TrainingGallery,
  BehindTheScenesGallery,
  BeforeAfterGallery,
  VideoStoriesSection,
  ClientStoriesSection,
  SocialMediaPreview,
  StudioMediaSection,
  GalleryFAQSection,
  MediaLightbox,
  GalleryCTA,
} from "../../components/gallery";
import type { GalleryMediaItem } from "../../components/gallery/types";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [selectedMedia, setSelectedMedia] = useState<GalleryMediaItem | null>(
    null,
  );

  const openMedia = useMemo(
    () => (item: GalleryMediaItem) => {
      setSelectedMedia(item);
    },
    [],
  );

  return (
    <main>
      {/* Gallery hero */}
      <GalleryHeroSection />

      {/* Featured media */}
      <FeaturedMediaSection onOpenMedia={openMedia} />

      {/* Category filters */}
      <GalleryFilters activeFilter={activeFilter} onChange={setActiveFilter} />

      {/* Main mixed media gallery */}
      <MixedMediaGallery activeFilter={activeFilter} onOpenMedia={openMedia} />

      {/* Bridal makeup gallery */}
      <BridalMakeupGallery onOpenMedia={openMedia} />

      {/* Hair styling gallery */}
      <HairStylingGallery onOpenMedia={openMedia} />

      {/* Traditional ceremonies */}
      <TraditionalGallery onOpenMedia={openMedia} />

      {/* Modern weddings */}
      <ModernWeddingGallery onOpenMedia={openMedia} />

      {/* Bridesmaids and bridal party */}
      <BridalPartyGallery onOpenMedia={openMedia} />

      {/* Training academy gallery */}
      <TrainingGallery onOpenMedia={openMedia} />

      {/* Behind the scenes */}
      <BehindTheScenesGallery onOpenMedia={openMedia} />

      {/* Before and after */}
      <BeforeAfterGallery onOpenMedia={openMedia} />

      {/* Video stories */}
      <VideoStoriesSection onOpenMedia={openMedia} />

      {/* Client story highlights */}
      <ClientStoriesSection onOpenMedia={openMedia} />

      {/* Social media preview */}
      <SocialMediaPreview onOpenMedia={openMedia} />

      {/* Studio and location media */}
      <StudioMediaSection onOpenMedia={openMedia} />

      {/* Gallery FAQs */}
      <GalleryFAQSection />

      {/* Final booking CTA */}
      <GalleryCTA />

      {/* Shared media lightbox */}
      <MediaLightbox
        item={selectedMedia}
        onClose={() => setSelectedMedia(null)}
      />
    </main>
  );
};

export default Gallery;
