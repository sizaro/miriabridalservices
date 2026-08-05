import {
  ContactHeroSection,
  ContactChannelsSection,
  ContactInquirySection,
  ContactAssuranceStrip,
} from "../../components/contact";

const Contact = () => {
  return (
    <main>
      {/* Contact hero */}
      <ContactHeroSection />

      {/* Contact channels */}
      <ContactChannelsSection />

      {/* Inquiry and process */}
      <ContactInquirySection />

      {/* Assurance strip */}
      <ContactAssuranceStrip />
    </main>
  );
};

export default Contact;
