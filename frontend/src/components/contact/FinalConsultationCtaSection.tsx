import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { contactConfig } from "./contactConfig";

const FinalConsultationCtaSection = () => {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <img
        src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1800&q=80"
        alt="Bridal consultation close with warm studio atmosphere"
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-stone-900/60" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55 }}
        className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#f1e1cf]">
          Final consultation call to action
        </p>
        <h2 className="mt-4 text-3xl font-semibold text-white sm:text-5xl">
          Your Bridal Journey Begins With One Conversation.
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-stone-200">
          Brides, students, and partners are welcome. We provide personalized
          care, professional service, and intentional support for memorable
          bridal experiences.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={contactConfig.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-stone-900 transition hover:bg-stone-200"
          >
            Chat on WhatsApp <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href={contactConfig.phoneDialer}
            className="inline-flex items-center rounded-full border border-white/60 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Call the studio
          </a>
          <a
            href={contactConfig.emailLink}
            className="inline-flex items-center rounded-full border border-white/60 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Send an email
          </a>
          <Link
            to="/services"
            className="inline-flex items-center rounded-full border border-white/60 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Explore services
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default FinalConsultationCtaSection;
