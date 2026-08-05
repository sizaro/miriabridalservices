export const contactConfig = {
  whatsappNumber: "+1 801 555 0147",
  whatsappUrl:
    "https://wa.me/18015550147?text=Hello%20Miriam%20Bridal%20Services%2C%20I%20would%20like%20to%20begin%20a%20consultation.%20My%20wedding%20date%20is%20%5Bdate%5D%2C%20location%20is%20%5Blocation%5D%2C%20services%20needed%20are%20%5Bservices%5D%2C%20and%20party%20size%20is%20%5Bsize%5D.",
  phoneNumber: "+1 (801) 555-0147",
  phoneDialer: "tel:+18015550147",
  email: "hello@miriabridalservices.com",
  emailLink: "mailto:hello@miriabridalservices.com",
  studioAddress: "145 Bridal Avenue, Provo, UT 84601",
  mapDirectionsUrl:
    "https://maps.google.com/?q=145+Bridal+Avenue+Provo+UT+84601",
  mapShareUrl: "https://maps.google.com/?q=145+Bridal+Avenue+Provo+UT+84601",
  mapSaveUrl: "https://maps.google.com/?q=145+Bridal+Avenue+Provo+UT+84601",
  facebookUrl: "https://facebook.com",
  instagramUrl: "https://instagram.com",
  tiktokUrl: "https://tiktok.com",
  youtubeUrl: "https://youtube.com",
  whatsappChannelUrl: "https://whatsapp.com/channel",
};

export const communicationMethods = [
  {
    key: "whatsapp",
    title: "WhatsApp",
    description:
      "Fastest way to begin consultations, share inspiration photos, and check wedding date availability.",
    actionLabel: "Chat on WhatsApp",
    actionUrl: contactConfig.whatsappUrl,
    info: contactConfig.whatsappNumber,
  },
  {
    key: "phone",
    title: "Phone Call",
    description:
      "Best for urgent bookings, complex discussions, or immediate bridal support.",
    actionLabel: "Call Now",
    actionUrl: contactConfig.phoneDialer,
    info: contactConfig.phoneNumber,
  },
  {
    key: "email",
    title: "Email",
    description:
      "Ideal for formal quotations, partnerships, academy inquiries, and business communication.",
    actionLabel: "Send Email",
    actionUrl: contactConfig.emailLink,
    info: contactConfig.email,
  },
  {
    key: "studio",
    title: "Studio Visit",
    description:
      "Schedule a visit for consultations, bridal trials, training discussions, and planning meetings.",
    actionLabel: "Plan a Visit",
    actionUrl: contactConfig.mapDirectionsUrl,
    info: contactConfig.studioAddress,
  },
] as const;

export const workingHours = [
  {
    label: "Weekdays",
    time: "Monday - Friday | 9:00 AM - 6:00 PM",
  },
  {
    label: "Saturday",
    time: "9:00 AM - 4:00 PM",
  },
  {
    label: "Sunday",
    time: "By pre-arranged bridal bookings only",
  },
  {
    label: "Consultation appointments",
    time: "Available with confirmed booking windows",
  },
  {
    label: "Academy sessions",
    time: "Intake schedule shared each training cycle",
  },
] as const;
