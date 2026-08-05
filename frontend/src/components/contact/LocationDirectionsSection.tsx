import { motion } from "framer-motion";
import { ExternalLink, MapPin, Share2 } from "lucide-react";

import { contactConfig } from "./contactConfig";

const LocationDirectionsSection = () => {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.06fr_0.94fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8b5e3c]">
              Studio location and directions
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-stone-900 sm:text-4xl">
              Easy to find, simple to reach.
            </h2>
            <p className="mt-5 text-base leading-8 text-stone-600">
              The studio is located near key city routes with nearby transport
              options and accessible parking. Landmarks and visual cues will
              help first-time visitors identify the building quickly.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={contactConfig.mapDirectionsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-stone-700"
              >
                Open directions <ExternalLink className="h-4 w-4" />
              </a>
              <a
                href={contactConfig.mapShareUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-5 py-2 text-sm font-semibold text-stone-800 transition hover:border-stone-400"
              >
                Share location <Share2 className="h-4 w-4" />
              </a>
              <a
                href={contactConfig.mapSaveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-5 py-2 text-sm font-semibold text-stone-800 transition hover:border-stone-400"
              >
                Save address <MapPin className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <img
                src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1200&q=80"
                alt="Studio exterior landmark view"
                className="h-44 w-full rounded-xl object-cover"
                loading="lazy"
              />
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
                alt="Street-facing view near studio"
                className="h-44 w-full rounded-xl object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden rounded-[1.6rem] border border-stone-200 bg-[#fdfaf7]"
          >
            <img
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1600&q=80"
              alt="Map placeholder for Miriam Bridal Services studio location"
              className="h-[380px] w-full object-cover"
              loading="lazy"
            />
            <div className="p-4">
              <p className="text-sm font-semibold text-stone-900">
                Map embed placeholder
              </p>
              <p className="mt-2 text-sm leading-7 text-stone-600">
                Google Maps embed can be inserted here once final studio
                coordinates are confirmed.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationDirectionsSection;
