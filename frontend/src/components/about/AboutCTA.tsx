import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const AboutCTA = () => {
  return (
    <section className="bg-gradient-to-br from-[#f7efe8] via-[#f1e1cf] to-[#e6cfb8] py-20 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55 }}
        className="mx-auto max-w-5xl rounded-[2rem] border border-stone-200 bg-white/80 px-6 py-12 text-center shadow-sm backdrop-blur sm:px-10"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8b5e3c]">
          Final call to action
        </p>
        <h2 className="mt-4 text-3xl font-semibold text-stone-900 sm:text-4xl">
          Let us be part of your bridal story.
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-stone-600">
          Brides, students, partners, and event professionals are welcome to
          connect with us for thoughtful collaboration and premium service.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-stone-700"
          >
            Book a consultation <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-semibold text-stone-800 transition hover:border-stone-400"
          >
            Explore services
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-semibold text-stone-800 transition hover:border-stone-400"
          >
            Contact the team
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-semibold text-stone-800 transition hover:border-stone-400"
          >
            View training programs
          </Link>
        </div>

        <p className="mt-6 text-sm font-medium text-stone-500">
          Wedding dates and training spaces may be limited during peak periods.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutCTA;
