import { motion } from "framer-motion";
import {
  Brush,
  Droplets,
  ShieldCheck,
  Sparkles,
  WandSparkles,
} from "lucide-react";

const standards = [
  {
    title: "Professional makeup products",
    description:
      "Professional-grade products selected for skin type, finish, and wear duration.",
    icon: Sparkles,
  },
  {
    title: "Hair styling tools",
    description:
      "Reliable styling tools matched to texture, structure, and weather conditions.",
    icon: Brush,
  },
  {
    title: "Skin preparation",
    description:
      "Skin prep aligned with sensitivity, hydration needs, and photography outcomes.",
    icon: Droplets,
  },
  {
    title: "Sanitation and hygiene",
    description:
      "Disciplined hygiene practices maintained before, during, and after sessions.",
    icon: ShieldCheck,
  },
  {
    title: "Accessories and touch-up kits",
    description:
      "Finishing accessories and touch-up materials prepared for long events.",
    icon: WandSparkles,
  },
];

const placeholderBrands = [
  "Brand Placeholder A",
  "Brand Placeholder B",
  "Brand Placeholder C",
  "Brand Placeholder D",
  "Brand Placeholder E",
  "Brand Placeholder F",
];

const ProfessionalStandardsSection = () => {
  return (
    <section className="bg-[#f7efe8] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8b5e3c]">
            Products and standards
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-stone-900 sm:text-4xl">
            Skill and product quality working together for lasting results.
          </h2>
          <p className="mt-5 text-base leading-8 text-stone-600">
            Results depend on artistry, tools, hygiene practices, and careful
            product selection based on skin needs, finish goals, weather,
            photography, and event duration.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {standards.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="rounded-2xl border border-stone-200 bg-white p-5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f1e1cf] text-[#8b5e3c]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-stone-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-stone-600">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-8 rounded-[1.5rem] border border-stone-200 bg-white p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8b5e3c]">
            Placeholder logo strip
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {placeholderBrands.map((brand) => (
              <div
                key={brand}
                className="rounded-xl border border-stone-200 bg-[#fdfaf7] px-3 py-4 text-center text-xs font-semibold uppercase tracking-[0.08em] text-stone-500"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalStandardsSection;
