import { motion } from "framer-motion";
import { Check } from "lucide-react";

const packagePlans = [
  {
    name: "Classic Bridal",
    price: "$650",
    summary:
      "Ideal for intimate celebrations with focused bridal styling support.",
    features: [
      "Bridal hair and makeup",
      "Pre-event style consultation",
      "Wedding morning timeline support",
      "Final touch-up before ceremony",
    ],
  },
  {
    name: "Signature Bridal",
    price: "$1,050",
    summary:
      "Our most selected package with expanded support and trial session.",
    features: [
      "Everything in Classic Bridal",
      "In-studio trial session",
      "One look adjustment after ceremony",
      "Bridesmaid glam for up to 2 people",
    ],
    featured: true,
  },
  {
    name: "Grande Bridal",
    price: "$1,600",
    summary:
      "Complete premium execution for full wedding-day beauty management.",
    features: [
      "Everything in Signature Bridal",
      "Dedicated on-site artist assistant",
      "Expanded bridal party coverage",
      "Reception transformation look",
    ],
  },
];

const PackagesPricingSection = () => {
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
            Investment options
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-stone-900 sm:text-4xl">
            Select the package that matches your wedding-day needs.
          </h2>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {packagePlans.map((plan, index) => (
            <motion.article
              key={plan.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className={`rounded-[1.75rem] border p-6 sm:p-7 ${
                plan.featured
                  ? "border-[#8b5e3c] bg-[#f7efe8] shadow-sm"
                  : "border-stone-200 bg-[#fdfaf7]"
              }`}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8b5e3c]">
                {plan.name}
              </p>
              <p className="mt-4 text-4xl font-semibold text-stone-900">
                {plan.price}
              </p>
              <p className="mt-4 text-sm leading-7 text-stone-600">
                {plan.summary}
              </p>
              <div className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3 text-sm text-stone-700"
                  >
                    <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#f1e1cf] text-[#8b5e3c]">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default PackagesPricingSection;
