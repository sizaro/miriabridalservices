import { motion } from "framer-motion";

const stats = [
  { label: "Weddings completed", value: "420+" },
  { label: "Bridal consultations", value: "760+" },
  { label: "Returning clients", value: "185+" },
  { label: "Bridal parties styled", value: "300+" },
  { label: "Photoshoots completed", value: "140+" },
  { label: "Training graduates", value: "120+" },
];

const PortfolioStatisticsSection = () => {
  return (
    <section className="bg-[#f7efe8] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8b5e3c]">
            Portfolio statistics
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-stone-900 sm:text-4xl">
            Consistency measured across projects and client outcomes.
          </h2>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.article
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="rounded-2xl border border-stone-200 bg-white p-5 text-center"
            >
              <p className="text-4xl font-semibold text-stone-900">
                {stat.value}
              </p>
              <p className="mt-2 text-sm uppercase tracking-[0.12em] text-stone-500">
                {stat.label}
              </p>
            </motion.article>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-7 text-stone-600">
          These placeholder figures represent the long-term consistency,
          professional structure, and client-focused quality standards that
          define Miriam Bridal Services across bridal and training work.
        </p>
      </div>
    </section>
  );
};

export default PortfolioStatisticsSection;
