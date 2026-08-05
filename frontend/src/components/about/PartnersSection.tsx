import { motion } from "framer-motion";

const partnerCategories = [
  "Photography partners",
  "Wedding planners",
  "Decorators",
  "Fashion designers",
  "Venues",
  "Florists",
  "Event suppliers",
  "Transport providers",
];

const PartnersSection = () => {
  return (
    <section className="bg-[#f7efe8] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8b5e3c]">
            Partners and collaborators
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-stone-900 sm:text-4xl">
            Collaboration that supports smoother wedding experiences.
          </h2>
          <p className="mt-5 text-base leading-8 text-stone-600">
            This framework is ready for verified names and logos as official
            partnerships are confirmed. Strong collaboration improves timing,
            coordination, and overall quality.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {partnerCategories.map((category, index) => (
            <motion.article
              key={category}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="rounded-2xl border border-stone-200 bg-white p-5 text-center"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.1em] text-stone-700">
                {category}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
