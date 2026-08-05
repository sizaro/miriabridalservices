import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1400&q=80",
    alt: "Bride final reveal portrait",
  },
  {
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=80",
    alt: "Wedding preparation behind the scenes",
  },
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80",
    alt: "Traditional and modern bridal styling blend",
  },
];

const GalleryHeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#f7efe8] py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#f7efe8] via-[#f3e3d1] to-[#ead3bd]" />
      <div className="pointer-events-none absolute -left-8 top-16 h-44 w-44 rounded-full bg-[#f1e1cf]/70 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 bottom-0 h-56 w-56 rounded-full bg-[#e8cfb8]/65 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex rounded-full border border-[#cda786] bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#8b5e3c]">
            Our visual story
          </span>
          <h1 className="mt-5 text-4xl font-semibold leading-tight text-stone-900 sm:text-5xl">
            Beauty, Preparation, Movement, and Unforgettable Bridal Moments.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700">
            Explore bridal transformations, traditional ceremonies, modern
            weddings, training sessions, behind-the-scenes work, and real client
            experiences in one living visual showcase.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-stone-700"
            >
              Explore portfolio <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-semibold text-stone-800 transition hover:border-stone-400"
            >
              Book consultation
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65 }}
          className="grid grid-cols-2 gap-4"
        >
          <motion.img
            src={heroImages[0].src}
            alt={heroImages[0].alt}
            className="col-span-2 h-[300px] w-full rounded-[1.9rem] object-cover shadow-md sm:h-[360px]"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />
          <img
            src={heroImages[1].src}
            alt={heroImages[1].alt}
            className="h-40 w-full rounded-[1.2rem] object-cover shadow-sm sm:h-48"
            loading="lazy"
          />
          <img
            src={heroImages[2].src}
            alt={heroImages[2].alt}
            className="h-40 w-full rounded-[1.2rem] object-cover shadow-sm sm:h-48"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default GalleryHeroSection;
