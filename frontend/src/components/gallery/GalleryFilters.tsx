import { motion } from "framer-motion";

import { galleryFilters } from "./mediaData";

type GalleryFiltersProps = {
  activeFilter: string;
  onChange: (filter: string) => void;
};

const GalleryFilters = ({ activeFilter, onChange }: GalleryFiltersProps) => {
  return (
    <section className="bg-white py-12 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-3">
          {galleryFilters.map((filter, index) => {
            const isActive = activeFilter === filter;
            return (
              <motion.button
                key={filter}
                type="button"
                onClick={() => onChange(filter)}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.25, delay: index * 0.02 }}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  isActive
                    ? "border-[#8b5e3c] bg-[#8b5e3c] text-white"
                    : "border-stone-300 bg-white text-stone-700 hover:border-stone-400"
                }`}
              >
                {filter}
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GalleryFilters;
