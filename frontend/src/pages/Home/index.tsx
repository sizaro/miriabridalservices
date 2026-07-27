import {
  HeroSection,
  PromotionBanner,
  AboutPreview,
  ServicesPreview,
  HowWeWorkSection,
  ConsultationPreview,
  PackagesPreview,
  PaymentOptionsPreview,
  RecentWorkSection,
  PortfolioPreview,
  GalleryPreview,
  WhyChooseUs,
  TestimonialsSection,
  TrainingPreview,
  TeamPreview,
  UpcomingEventsSection,
  AvailabilitySection,
  BlogPreview,
  CommunicationSection,
  BookingCTA,
} from "../../components/home";

const Home = () => {
  return (
    <main>
      {/* First Impression */}
      <HeroSection />

      {/* Current Offers / Marketing */}
      <PromotionBanner />

      {/* Brand Introduction */}
      <AboutPreview />

      {/* What We Offer */}
      <ServicesPreview />

      {/* Customer Journey */}
      <HowWeWorkSection />

      {/* Consultation Process */}
      <ConsultationPreview />

      {/* Pricing & Packages */}
      <PackagesPreview />

      {/* Payment Information */}
      <PaymentOptionsPreview />

      {/* Proof of Work */}
      <RecentWorkSection />

      <PortfolioPreview />

      <GalleryPreview />

      {/* Trust Building */}
      <WhyChooseUs />

      <TestimonialsSection />

      {/* Additional Business Arm */}
      <TrainingPreview />

      {/* People Behind The Brand */}
      <TeamPreview />

      {/* Events & Availability */}
      <UpcomingEventsSection />

      <AvailabilitySection />

      {/* Content Marketing */}
      <BlogPreview />

      {/* Communication Channels */}
      <CommunicationSection />

      {/* Final Conversion */}
      <BookingCTA />
    </main>
  );
};

export default Home;
