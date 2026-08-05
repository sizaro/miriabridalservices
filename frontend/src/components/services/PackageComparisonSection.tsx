import { motion } from "framer-motion";
import { Check } from "lucide-react";

const packages = [
  {
    tier: "Silver",
    price: "$650+",
    duration: "Up to 4 hrs",
    idealFor: "Intimate weddings",
    included: [
      "Bridal makeup",
      "Bridal hair styling",
      "Final touch-up",
      "Basic timeline guidance",
    ],
  },
  {
    tier: "Gold",
    price: "$1,050+",
    duration: "Up to 6 hrs",
    idealFor: "Classic full wedding day",
    included: [
      "Everything in Silver",
      "Bridal trial session",
      "Bridesmaid styling (2)",
      "On-site support",
    ],
    recommended: true,
  },
  {
    tier: "Premium",
    price: "$1,450+",
    duration: "Up to 8 hrs",
    idealFor: "Large bridal parties",
    included: [
      "Everything in Gold",
      "Extended party glam",
      "Second look transition",
      "Priority scheduling",
    ],
  },
  {
    tier: "Luxury",
    price: "$2,100+",
    duration: "Full day",
    idealFor: "Multi-event celebrations",
    included: [
      "Everything in Premium",
      "Dedicated assistant artist",
      "Traditional ceremony support",
      "Custom concierge planning",
    ],
  },
];

const PackageComparisonSection = () => {
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
            Package comparison
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-stone-900 sm:text-4xl">
            Compare Silver, Gold, Premium, and Luxury options.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-4">
          {packages.map((pkg, index) => (
            <motion.article
              key={pkg.tier}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className={`rounded-[1.5rem] border p-6 ${
                pkg.recommended
                  ? "border-[#8b5e3c] bg-white shadow-[0_16px_34px_rgba(139,94,60,0.18)]"
                  : "border-stone-200 bg-white"
              }`}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#8b5e3c]">
                {pkg.tier}
              </p>
              {pkg.recommended ? (
                <p className="mt-2 inline-flex rounded-full bg-[#f1e1cf] px-3 py-1 text-xs font-semibold text-[#8b5e3c]">
                  Recommended
                </p>
              ) : null}
              <p className="mt-4 text-3xl font-semibold text-stone-900">
                {pkg.price}
              </p>

              <div className="mt-4 space-y-1 text-sm text-stone-700">
                <p>
                  <span className="font-semibold text-stone-900">
                    Duration:
                  </span>{" "}
                  {pkg.duration}
                </p>
                <p>
                  <span className="font-semibold text-stone-900">
                    Ideal for:
                  </span>{" "}
                  {pkg.idealFor}
                </p>
              </div>

              <div className="mt-5 space-y-2">
                {pkg.included.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-2 text-sm text-stone-700"
                  >
                    <Check className="mt-0.5 h-4 w-4 text-[#8b5e3c]" />
                    <span>{item}</span>
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

export default PackageComparisonSection;
