import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  CalendarCheck2,
  HeartHandshake,
} from "lucide-react";
import { Link } from "react-router-dom";

type HeroImage = {
  src: string;
  alt: string;
};

const heroImages: HeroImage[] = [
  {
    src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1300&q=80",
    alt: "Bride in modern wedding styling",
  },
  {
    src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=80",
    alt: "Traditional ceremony bridal preparation",
  },
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80",
    alt: "Church wedding bridal portrait",
  },
  {
    src: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=900&q=80",
    alt: "Outdoor wedding bridal smile",
  },
];

const trustItems = [
  { icon: CalendarCheck2, label: "Weddings completed", value: "420+" },
  { icon: Award, label: "Years of experience", value: "8+" },
  { icon: HeartHandshake, label: "Client satisfaction", value: "98%" },
];

const PortfolioHeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#f7efe8] py-20 sm:py-24">
      <div className="pointer-events-none absolute -left-12 top-10 h-44 w-44 rounded-full bg-[#efd9c2]/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 bottom-4 h-56 w-56 rounded-full bg-[#e5ccb4]/55 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex rounded-full border border-[#cfab89] bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[#8b5e3c]">
            Portfolio
          </span>
          <h1 className="mt-5 text-4xl font-semibold leading-tight text-stone-900 sm:text-5xl">
            Real Brides. Real Stories. Beautiful Experiences.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
            Every bridal journey is unique. This portfolio highlights real
            transformations, personalized consultations, styling experiences,
            and memorable wedding moments from preparation to celebration.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-stone-700"
            >
              View gallery <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-semibold text-stone-800 transition hover:border-stone-400"
            >
              Book consultation
            </Link>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {trustItems.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.label}
                  className="rounded-xl border border-stone-200 bg-white/85 px-3 py-3"
                >
                  <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-stone-500">
                    <Icon className="h-4 w-4 text-[#8b5e3c]" />
                    {item.label}
                  </p>
                  <p className="mt-2 text-lg font-semibold text-stone-900">
                    {item.value}
                  </p>
                </article>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65 }}
          className="grid grid-cols-2 gap-4"
        >
          <motion.img
            src={heroImages[0].src}
            alt={heroImages[0].alt}
            className="col-span-2 h-[280px] w-full rounded-[1.9rem] object-cover shadow-md sm:h-[340px]"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />
          {heroImages.slice(1).map((image) => (
            <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              className="h-40 w-full rounded-[1.2rem] object-cover shadow-sm sm:h-48"
              loading="lazy"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioHeroSection;
