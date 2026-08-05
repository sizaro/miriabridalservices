import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const trustIndicators = [
  "500+ Brides Styled",
  "Professional Bridal Artists",
  "Wedding Day Support",
  "Personalized Experience",
];

const ServiceHero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-[#f7efe8] py-20"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8 lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8b5e3c]">
            Premium Services
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-stone-900 sm:text-5xl">
            Professional Bridal Beauty &amp; Wedding Styling Services
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
            Miriam Bridal Services is committed to making every bride feel
            beautiful, confident, and fully supported. Our team delivers luxury
            styling, thoughtful planning, and polished execution from
            consultation to wedding day.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-stone-700"
            >
              Book Consultation <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/packages"
              className="inline-flex items-center rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-semibold text-stone-800 transition hover:border-stone-400"
            >
              View Bridal Packages
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {trustIndicators.map((indicator) => (
              <span
                key={indicator}
                className="rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-medium text-stone-700"
              >
                {indicator}
              </span>
            ))}
          </div>
        </div>

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1600&q=80"
            alt="Bridal beauty placeholder"
            className="h-[500px] w-full rounded-[2rem] object-cover shadow-md"
          />
          <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/90 p-4 backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8b5e3c]">
              Trusted bridal partner
            </p>
            <p className="mt-2 text-sm text-stone-700">
              Backend-ready placeholders: trust metrics, rating data, and
              monthly booking trends can be injected here.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ServiceHero;
