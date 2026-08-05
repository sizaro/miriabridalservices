import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { contactConfig } from "./contactConfig";

const studioImages = [
  {
    src: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=80",
    alt: "Studio reception and waiting area",
  },
  {
    src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1200&q=80",
    alt: "Makeup and consultation stations",
  },
  {
    src: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80",
    alt: "Training and planning room",
  },
];

const VisitStudioSection = () => {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8b5e3c]">
              Visit our studio
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-stone-900 sm:text-4xl">
              A welcoming environment for consultations, trials, and planning.
            </h2>
            <p className="mt-5 text-base leading-8 text-stone-600">
              Our studio is designed for comfort, privacy, and professional
              preparation. Appointments are recommended so every visitor
              receives dedicated support and focused consultation time.
            </p>
            <div className="mt-6 rounded-[1.4rem] border border-stone-200 bg-[#fdfaf7] p-5">
              <p className="text-sm font-semibold text-stone-900">
                {contactConfig.studioAddress}
              </p>
              <p className="mt-2 text-sm leading-7 text-stone-600">
                Near Bridal Avenue Square, with nearby parking and accessible
                entry for consultations and academy visits.
              </p>
              <a
                href={contactConfig.mapDirectionsUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-stone-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-stone-700"
              >
                Get directions <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            <img
              src={studioImages[0].src}
              alt={studioImages[0].alt}
              className="col-span-2 h-64 w-full rounded-[1.4rem] object-cover"
              loading="lazy"
            />
            <img
              src={studioImages[1].src}
              alt={studioImages[1].alt}
              className="h-40 w-full rounded-xl object-cover"
              loading="lazy"
            />
            <img
              src={studioImages[2].src}
              alt={studioImages[2].alt}
              className="h-40 w-full rounded-xl object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisitStudioSection;
