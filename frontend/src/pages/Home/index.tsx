import {
  AboutSection,
  ContactSection,
  GallerySection,
  HeroSection,
  PackagesSection,
  ProcessSection,
  ServicesSection,
  StatsSection,
  TestimonialsSection,
  TrainingPreview,
  WhyChooseUs,
} from '../../components/home';

const Home = () => {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs />
      <GallerySection />
      <TrainingPreview />
      <ProcessSection />
      <StatsSection />
      <PackagesSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
};

export default Home;