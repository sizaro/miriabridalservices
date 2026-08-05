import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1400&q=80",
    alt: "Bride smiling during bridal styling session",
  },
  {
    src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80",
    alt: "Bridal makeup artist applying finishing touches",
  },
  {
    src: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80",
    alt: "Studio team preparing tools before wedding appointment",
  },
];

const AboutHeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#f7efe8] py-20 sm:py-24">
      <div className="pointer-events-none absolute -left-16 top-8 h-44 w-44 rounded-full bg-[#f1e1cf]/70 blur-2xl" />
      <div className="pointer-events-none absolute -right-10 bottom-0 h-52 w-52 rounded-full bg-[#e9d4bf]/60 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <span className="inline-flex rounded-full border border-[#cda786] bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[#8b5e3c]">
            About Miriam Bridal Services
          </span>
          <h1 className="mt-5 text-4xl font-semibold leading-tight text-stone-900 sm:text-5xl">
            More Than Bridal Beauty. We Create Experiences Filled with
            Confidence, Care, and Elegance.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
            Miriam Bridal Services blends professional styling, personal care,
            guided consultations, bridal training, and reliable wedding-day
            support to help every client feel calm, prepared, and beautifully
            confident.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-stone-700"
            >
              Explore services <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-semibold text-stone-800 transition hover:border-stone-400"
            >
              Book a consultation
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
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

export default AboutHeroSection;
