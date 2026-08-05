import { motion } from "framer-motion";
import { Heart, ShieldCheck, Sparkles } from "lucide-react";

const values = [
  {
    title: "Intentional planning",
    description:
      "Every bridal detail is designed with a clear timeline, thoughtful pacing, and calm execution.",
    icon: ShieldCheck,
  },
  {
    title: "Refined artistry",
    description:
      "We blend modern trends with timeless bridal elegance to create looks that feel authentic and elevated.",
    icon: Sparkles,
  },
  {
    title: "Warm hospitality",
    description:
      "Our team creates an atmosphere where brides, families, and wedding parties feel supported from start to finish.",
    icon: Heart,
  },
];

const AboutCoreValuesSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55 }}
      className="bg-white py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8b5e3c]">
            What guides us
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-stone-900 sm:text-4xl">
            We design each bridal experience around trust, artistry, and
            structure.
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.article
                key={value.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="rounded-[1.75rem] border border-stone-200 bg-[#fdfaf7] p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f1e1cf] text-[#8b5e3c]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-stone-900">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-stone-600">
                  {value.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default AboutCoreValuesSection;
