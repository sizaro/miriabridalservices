import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const PackagesHeroSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-[#f7efe8] py-20"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8b5e3c]">
            Packages
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-stone-900 sm:text-5xl">
            Flexible bridal packages designed for different wedding styles and
            scales.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
            Choose a package that fits your celebration, then tailor it with
            optional add-ons. Every plan includes thoughtful coordination,
            premium artistry, and transparent communication.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-stone-700"
            >
              Reserve your date <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-semibold text-stone-800 transition hover:border-stone-400"
            >
              Compare services
            </Link>
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1460978812857-470ed1c77af0?auto=format&fit=crop&w=1200&q=80"
          alt="Wedding invitation and bridal details"
          className="h-[460px] w-full rounded-[2rem] object-cover shadow-md"
        />
      </div>
    </motion.section>
  );
};

export default PackagesHeroSection;
