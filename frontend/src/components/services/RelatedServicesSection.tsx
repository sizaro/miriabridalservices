import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const related = [
  {
    title: "Hair Styling Enhancements",
    description: "Perfect companion service after bridal makeup selection.",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Bridesmaids Styling Bundle",
    description: "Recommended next step after wedding package exploration.",
    image:
      "https://images.unsplash.com/photo-1477506350614-fcdc29a3b157?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Professional Beauty Training",
    description:
      "For visitors interested in growing as bridal beauty professionals.",
    image:
      "https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=1000&q=80",
  },
];

const RelatedServicesSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.55 }}
      className="bg-white py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8b5e3c]">
            Related services
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-stone-900 sm:text-4xl">
            Recommended next services based on visitor interests.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {related.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="overflow-hidden rounded-[1.5rem] border border-stone-200 bg-[#fdfaf7]"
            >
              <img
                src={service.image}
                alt={service.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-stone-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-stone-600">
                  {service.description}
                </p>
                <button
                  type="button"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-stone-900 px-4 py-2 text-xs font-semibold text-white"
                >
                  Learn More <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default RelatedServicesSection;
