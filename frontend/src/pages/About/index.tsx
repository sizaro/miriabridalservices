import {
  AboutHeroSection,
  OurStorySection,
  MissionVisionValues,
  FounderSection,
  TeamSection,
  CompanyTimeline,
  TrustSection,
  StudioTourSection,
  ProfessionalStandardsSection,
  RecognitionSection,
  CommunityImpactSection,
  TrainingPreview,
  PartnersSection,
  BehindTheScenesSection,
  TestimonialsSection,
  FAQSection,
  OurPromiseSection,
  AboutCTA,
} from "../../components/about";

const About = () => {
  return (
    <main>
      {/* About hero */}
      <AboutHeroSection />

      {/* Our story */}
      <OurStorySection />

      {/* Mission, vision, and values */}
      <MissionVisionValues />

      {/* Founder */}
      <FounderSection />

      {/* Team */}
      <TeamSection />

      {/* Company journey */}
      <CompanyTimeline />

      {/* Why brides trust us */}
      <TrustSection />

      {/* Studio tour */}
      <StudioTourSection />

      {/* Products and standards */}
      <ProfessionalStandardsSection />

      {/* Awards and certifications */}
      <RecognitionSection />

      {/* Community impact */}
      <CommunityImpactSection />

      {/* Training preview */}
      <TrainingPreview />

      {/* Partners and collaborators */}
      <PartnersSection />

      {/* Behind the scenes */}
      <BehindTheScenesSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* About FAQs */}
      <FAQSection />

      {/* Our promise */}
      <OurPromiseSection />

      {/* Final CTA */}
      <AboutCTA />
    </main>
  );
};

export default About;
