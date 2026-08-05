import {
  GalleryHeroSection,
  GalleryCategoriesSection,
  GalleryImageGridSection,
  GalleryCtaSection,
} from "../../components/gallery";

const Gallery = () => {
  return (
    <main>
      {/* Gallery hero */}
      <GalleryHeroSection />

      {/* Category chips */}
      <GalleryCategoriesSection />

      {/* Image grid */}
      <GalleryImageGridSection />

      {/* Gallery CTA */}
      <GalleryCtaSection />
    </main>
  );
};

export default Gallery;
