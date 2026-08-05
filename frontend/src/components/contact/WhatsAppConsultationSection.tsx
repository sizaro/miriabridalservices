import { motion } from "framer-motion";
import { Clock3, Image, MessageCircle } from "lucide-react";

import { contactConfig } from "./contactConfig";

const infoCards = [
  "Quick responses during working hours",
  "Easy inspiration photo sharing",
  "Convenient planning follow-ups",
];

const WhatsAppConsultationSection = () => {
  return (
    <section className="bg-[#f7efe8] py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:items-center">
        <motion.img
          src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1300&q=80"
          alt="Stylist discussing inspiration images through WhatsApp"
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="h-[420px] w-full rounded-[1.8rem] object-cover shadow-md"
          loading="lazy"
        />

        <motion.div
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8b5e3c]">
            WhatsApp consultation
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-stone-900 sm:text-4xl">
            Our primary and fastest booking conversation channel.
          </h2>
          <p className="mt-5 text-base leading-8 text-stone-600">
            Use WhatsApp to ask questions, discuss wedding plans, request
            package options, share inspiration photos, and confirm date
            availability. It is the quickest way to begin personalized support.
          </p>

          <a
            href={contactConfig.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-stone-700"
          >
            Start WhatsApp consultation <MessageCircle className="h-4 w-4" />
          </a>

          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            <article className="rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-700">
              <p className="inline-flex items-center gap-2 font-semibold text-stone-800">
                <Clock3 className="h-4 w-4 text-[#8b5e3c]" />
                Fast responses
              </p>
            </article>
            <article className="rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-700">
              <p className="inline-flex items-center gap-2 font-semibold text-stone-800">
                <Image className="h-4 w-4 text-[#8b5e3c]" />
                Photo sharing
              </p>
            </article>
            <article className="rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-700">
              <p className="font-semibold text-stone-800">
                Planning continuity
              </p>
            </article>
          </div>

          <ul className="mt-4 space-y-2 text-sm leading-7 text-stone-600">
            {infoCards.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatsAppConsultationSection;
