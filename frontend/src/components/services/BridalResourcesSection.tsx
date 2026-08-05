import { motion } from "framer-motion";
import { BookOpen, Download } from "lucide-react";

const resources = [
  {
    title: "Bridal Preparation Checklist",
    description:
      "A step-by-step preparation guide for appointments, skin prep, and event essentials.",
  },
  {
    title: "Wedding Day Timeline",
    description:
      "A sample beauty and dressing timeline to keep your day organized and stress-free.",
  },
  {
    title: "Skin Preparation Guide",
    description:
      "Pre-wedding skincare recommendations for a smooth and luminous bridal base.",
  },
  {
    title: "Makeup Tips for Photos",
    description:
      "Camera-conscious beauty tips to maintain natural dimension in portraits.",
  },
  {
    title: "Wedding Planning Checklist",
    description:
      "A broad planning aid connecting beauty milestones with key wedding decisions.",
  },
];

const BridalResourcesSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.55 }}
      className="bg-[#f7efe8] py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8b5e3c]">
            Bridal resources
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-stone-900 sm:text-4xl">
            Downloadable planning assets prepared for future file integration.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {resources.map((resource, index) => (
            <motion.article
              key={resource.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.03 }}
              className="rounded-[1.25rem] border border-stone-200 bg-white p-5"
            >
              <BookOpen className="h-5 w-5 text-[#8b5e3c]" />
              <h3 className="mt-3 text-base font-semibold text-stone-900">
                {resource.title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-stone-600">
                {resource.description}
              </p>
              <button
                type="button"
                className="mt-4 inline-flex items-center gap-2 rounded-full border border-stone-300 px-4 py-2 text-xs font-semibold text-stone-700"
              >
                Download <Download className="h-3.5 w-3.5" />
              </button>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default BridalResourcesSection;
