import {
  PortfolioHeroSection,
  FeaturedBridalStorySection,
  RecentBridalProjectsSection,
  WeddingCategoriesSection,
  BeforeAfterTransformationsSection,
  BridalProcessInActionSection,
  BehindEveryBrideSection,
  ProjectServicesSection,
  PortfolioStatisticsSection,
  ClientStoriesSection,
  PortfolioGalleryPreviewSection,
  RecognitionMediaSection,
  LessonsLearnedSection,
  RelatedPackagesSection,
  PortfolioFaqSection,
  InspirationSection,
  PortfolioBookingCtaSection,
} from "../../components/portfolio";

const Portfolio = () => {
  return (
    <main>
      {/* Portfolio hero */}
      <PortfolioHeroSection />

      {/* Featured bridal story */}
      <FeaturedBridalStorySection />

      {/* Recent bridal projects */}
      <RecentBridalProjectsSection />

      {/* Wedding categories */}
      <WeddingCategoriesSection />

      {/* Before and after transformations */}
      <BeforeAfterTransformationsSection />

      {/* Bridal process in action */}
      <BridalProcessInActionSection />

      {/* Behind every bride */}
      <BehindEveryBrideSection />

      {/* Services used in each project */}
      <ProjectServicesSection />

      {/* Portfolio statistics */}
      <PortfolioStatisticsSection />

      {/* Client stories */}
      <ClientStoriesSection />

      {/* Portfolio gallery preview */}
      <PortfolioGalleryPreviewSection />

      {/* Recognition and media */}
      <RecognitionMediaSection />

      {/* Lessons learned */}
      <LessonsLearnedSection />

      {/* Related packages */}
      <RelatedPackagesSection />

      {/* Portfolio FAQs */}
      <PortfolioFaqSection />

      {/* Inspiration section */}
      <InspirationSection />

      {/* Final booking CTA */}
      <PortfolioBookingCtaSection />
    </main>
  );
};

export default Portfolio;
