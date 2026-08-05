import { motion } from "framer-motion";

const categories = [
  "Bridal morning portraits",
  "Hair and makeup close-ups",
  "Ceremony-ready final looks",
  "Bridesmaid and family glam",
  "Reception transformation moments",
  "Styled editorial bridal sessions",
];

const GalleryCategoriesSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55 }}
      className="bg-white py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8b5e3c]">
            Browse highlights
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-stone-900 sm:text-4xl">
            Popular gallery categories
          </h2>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          {categories.map((category) => (
            <span
              key={category}
              className="rounded-full border border-stone-200 bg-[#fdfaf7] px-4 py-2 text-sm font-medium text-stone-700"
            >
              {category}
            </span>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default GalleryCategoriesSection;
