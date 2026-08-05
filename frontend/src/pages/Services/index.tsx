import {
  ServiceHero,
  ServiceCategoriesSection,
  CompleteServicesSection,
  SignatureExperienceSection,
  PackageComparisonSection,
  AddOnServicesSection,
  ProductsWeUseSection,
  BridalJourneyTimelineSection,
  BeforeAfterGallerySection,
  PortfolioShowcaseSection,
  MeetBridalExpertsSection,
  TrainingAcademySection,
  AvailabilityPreviewSection,
  FaqSection,
  BridalResourcesSection,
  RelatedServicesSection,
  BookingCtaSection,
} from "../../components/services";

const Services = () => {
  return (
    <main>
      {/* First impression */}
      <ServiceHero />

      {/* Service discovery */}
      <ServiceCategoriesSection />

      {/* Full offer listing */}
      <CompleteServicesSection />

      {/* Premium highlight */}
      <SignatureExperienceSection />

      {/* Package decisions */}
      <PackageComparisonSection />

      {/* Customizations */}
      <AddOnServicesSection />

      {/* Product credibility */}
      <ProductsWeUseSection />

      {/* Customer journey */}
      <BridalJourneyTimelineSection />

      {/* Transformation proof */}
      <BeforeAfterGallerySection />

      {/* Portfolio */}
      <PortfolioShowcaseSection />

      {/* Team trust */}
      <MeetBridalExpertsSection />

      {/* Training arm */}
      <TrainingAcademySection />

      {/* Booking logistics */}
      <AvailabilityPreviewSection />

      {/* FAQ support */}
      <FaqSection />

      {/* Planning resources */}
      <BridalResourcesSection />

      {/* Suggestions */}
      <RelatedServicesSection />

      {/* Final conversion */}
      <BookingCtaSection />
    </main>
  );
};

export default Services;
