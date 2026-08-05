import { motion } from "framer-motion";
import { MessageCircle, PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";

import { contactConfig } from "./contactConfig";

const ContactHeroSection = () => {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <img
        src="https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=1800&q=80"
        alt="Bridal consultation at Miriam Bridal Services studio"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-stone-950/75 via-stone-950/55 to-stone-950/30" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[#f1e1cf]">
            Contact hub
          </span>
          <h1 className="mt-5 text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Let&apos;s Begin Your Bridal Journey Together.
          </h1>
          <p className="mt-6 text-lg leading-8 text-stone-200">
            Every beautiful bridal experience begins with a conversation.
            Whether you need wedding styling, packages, training support,
            partnerships, or planning advice, our team is ready to help.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={contactConfig.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-stone-900 transition hover:bg-stone-200"
            >
              Chat on WhatsApp <MessageCircle className="h-4 w-4" />
            </a>
            <a
              href={contactConfig.phoneDialer}
              className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Call the studio <PhoneCall className="h-4 w-4" />
            </a>
            <Link
              to="/services"
              className="inline-flex items-center rounded-full border border-white/60 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Explore services
            </Link>
          </div>

          <p className="mt-5 text-sm font-medium text-stone-200">
            Professional responses. Personal care. Every inquiry is valued.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactHeroSection;
