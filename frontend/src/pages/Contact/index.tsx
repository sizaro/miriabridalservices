import {
  ContactHeroSection,
  PreferredMethodsSection,
  WhatsAppConsultationSection,
  PhoneConsultationSection,
  EmailCommunicationSection,
  VisitStudioSection,
  WorkingHoursSection,
  LocationDirectionsSection,
  SocialConnectionsSection,
  BeforeContactSection,
  CommunicationExpectationsSection,
  ContactFaqSection,
  EmergencyRequestsSection,
  FinalConsultationCtaSection,
} from "../../components/contact";

const Contact = () => {
  return (
    <main>
      {/* Contact hero */}
      <ContactHeroSection />

      {/* Preferred communication methods */}
      <PreferredMethodsSection />

      {/* WhatsApp consultation */}
      <WhatsAppConsultationSection />

      {/* Phone consultation */}
      <PhoneConsultationSection />

      {/* Email communication */}
      <EmailCommunicationSection />

      {/* Visit studio */}
      <VisitStudioSection />

      {/* Working hours */}
      <WorkingHoursSection />

      {/* Location and directions */}
      <LocationDirectionsSection />

      {/* Social connections */}
      <SocialConnectionsSection />

      {/* Before contact checklist */}
      <BeforeContactSection />

      {/* Communication expectations */}
      <CommunicationExpectationsSection />

      {/* Contact FAQs */}
      <ContactFaqSection />

      {/* Emergency requests */}
      <EmergencyRequestsSection />

      {/* Final consultation CTA */}
      <FinalConsultationCtaSection />
    </main>
  );
};

export default Contact;
