import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const GalleryCTA = () => {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <img
        src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1800&q=80"
        alt="Bridal story final chapter visual"
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-stone-900/60" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55 }}
        className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#f1e1cf]">
          Final booking call to action
        </p>
        <h2 className="mt-4 text-3xl font-semibold text-white sm:text-5xl">
          Let your bridal story become part of our next beautiful chapter.
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-stone-200">
          Every bridal look is personalized to your wedding style, personality,
          and vision. Booking early helps reserve your preferred date.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-stone-900 transition hover:bg-stone-200"
          >
            Book consultation <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center rounded-full border border-white/60 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            View services
          </Link>
          <Link
            to="/packages"
            className="inline-flex items-center rounded-full border border-white/60 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Explore packages
          </Link>
          <a
            href="https://wa.me/10000000000"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full border border-white/60 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Chat on WhatsApp
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default GalleryCTA;
