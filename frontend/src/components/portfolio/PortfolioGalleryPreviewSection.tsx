import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const galleryPreviewImages = [
  "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1100&q=80",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1100&q=80",
  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1100&q=80",
  "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1100&q=80",
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1100&q=80",
  "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1100&q=80",
];

const PortfolioGalleryPreviewSection = () => {
  return (
    <section className="bg-[#f7efe8] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8b5e3c]">
              Portfolio gallery preview
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-stone-900 sm:text-4xl">
              Curated visuals across wedding styles and moments.
            </h2>
            <p className="mt-4 text-base leading-8 text-stone-600">
              Explore the full image collection on the dedicated gallery page.
            </p>
          </div>
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-stone-700"
          >
            View full gallery <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryPreviewImages.map((image, index) => (
            <motion.img
              key={image}
              src={image}
              alt={`Portfolio gallery preview ${index + 1}`}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              className="h-56 w-full rounded-[1.2rem] object-cover"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGalleryPreviewSection;
