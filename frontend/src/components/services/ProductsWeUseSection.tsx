import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const brands = [
  {
    name: "Radiant Atelier",
    summary:
      "Complexion-focused formulas designed for bridal longevity and texture refinement.",
    trustReason:
      "Trusted for high-definition finish and all-day wear under varying lighting.",
  },
  {
    name: "Velvet Luxe",
    summary:
      "Professional pigments for balanced skin tones and smooth color blending.",
    trustReason: "Chosen for camera-friendly tones and comfortable wear.",
  },
  {
    name: "Glow Signature",
    summary:
      "Hydration-first prep and finishing range for luminous bridal skin.",
    trustReason: "Reliable performance during long ceremonies and receptions.",
  },
  {
    name: "Crown Studio Pro",
    summary:
      "Styling and fixing products for movement-resistant bridal hairstyles.",
    trustReason: "Supports hold, softness, and humidity resistance.",
  },
];

const ProductsWeUseSection = () => {
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
            Products we use
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-stone-900 sm:text-4xl">
            Professional-grade product choices that support bridal excellence.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {brands.map((brand, index) => (
            <motion.article
              key={brand.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="rounded-[1.5rem] border border-stone-200 bg-white p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f1e1cf] text-[#8b5e3c]">
                <Sparkles className="h-5 w-5" />
              </div>
              <p className="mt-4 text-lg font-semibold text-stone-900">
                {brand.name}
              </p>
              <p className="mt-2 text-sm leading-7 text-stone-600">
                {brand.summary}
              </p>
              <p className="mt-3 text-sm text-stone-700">
                <span className="font-semibold text-stone-900">
                  Why trusted:
                </span>{" "}
                {brand.trustReason}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ProductsWeUseSection;
