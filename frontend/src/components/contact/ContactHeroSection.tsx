import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ContactHeroSection = () => {
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
            Contact us
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-stone-900 sm:text-5xl">
            Let us plan your bridal beauty experience with clarity and care.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
            Tell us about your celebration and we will guide you to the right
            service plan. Whether you need full bridal beauty support or a
            custom event package, our team is ready to help.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="mailto:hello@miriabridalservices.com"
              className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-stone-700"
            >
              Send an email <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              to="/packages"
              className="inline-flex items-center rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-semibold text-stone-800 transition hover:border-stone-400"
            >
              Review package options
            </Link>
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80"
          alt="Bridal consultation notes and planning"
          className="h-[460px] w-full rounded-[2rem] object-cover shadow-md"
        />
      </div>
    </motion.section>
  );
};

export default ContactHeroSection;
