import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

type RelatedPackage = {
  name: string;
  description: string;
  usedIn: string;
};

const relatedPackages: RelatedPackage[] = [
  {
    name: "Silver",
    description:
      "Essential bridal styling for simple and focused wedding schedules.",
    usedIn: "Used in selected church wedding stories",
  },
  {
    name: "Gold",
    description: "Balanced bridal package with trial and preparation support.",
    usedIn: "Used in traditional introduction projects",
  },
  {
    name: "Premium",
    description: "Comprehensive support for full-day wedding experiences.",
    usedIn: "Used in featured portfolio case studies",
  },
  {
    name: "Luxury",
    description:
      "High-touch service for multi-look and premium event execution.",
    usedIn: "Used in luxury and destination-style projects",
  },
];

const RelatedPackagesSection = () => {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8b5e3c]">
            Related packages
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-stone-900 sm:text-4xl">
            Package options aligned with portfolio story outcomes.
          </h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {relatedPackages.map((pkg, index) => (
            <motion.article
              key={pkg.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              className="rounded-[1.4rem] border border-stone-200 bg-[#fdfaf7] p-5"
            >
              <h3 className="text-2xl font-semibold text-stone-900">
                {pkg.name}
              </h3>
              <p className="mt-3 text-sm leading-7 text-stone-600">
                {pkg.description}
              </p>
              <p className="mt-3 text-xs uppercase tracking-[0.1em] text-[#8b5e3c]">
                {pkg.usedIn}
              </p>
              <div className="mt-5">
                <Link
                  to="/packages"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-[#8b5e3c] transition hover:text-[#6f462b]"
                >
                  View packages <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedPackagesSection;
