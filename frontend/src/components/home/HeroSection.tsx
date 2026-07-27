import { motion, type Variants } from "framer-motion";
import { ArrowRight, CalendarDays, Sparkles, Star } from "lucide-react";

const highlights = [
  "Luxury bridal styling",
  "Personalized consultations",
  "Stress-free planning",
];

const trustCards = [
  {
    icon: Star,
    title: "500+",
    description: "Happy Brides",
  },
  {
    icon: CalendarDays,
    title: "2026",
    description: "Bookings Open",
  },
];

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(200,169,126,0.18),_transparent_40%),linear-gradient(135deg,_#fffdf9_0%,_#f7efe8_100%)]"
    >
      {/* Decorative Background */}
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-[#c8a97e]/10 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#8b5e3c]/10 blur-3xl" />

      <div className="relative mx-auto grid min-h-[auto] max-w-7xl items-center gap-12 px-4 py-12 sm:px-6 md:min-h-[90vh] lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-0">
        {/* Left Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-2xl"
        >
          <motion.div
            variants={itemVariants}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#e7d4bf] bg-white/80 px-4 py-2 text-sm font-medium text-[#8b5e3c] shadow-sm backdrop-blur"
          >
            <Sparkles className="h-4 w-4" />
            Bridal styling with grace and modern elegance
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl font-semibold leading-tight tracking-tight text-stone-900 sm:text-5xl lg:text-6xl"
          >
            Creating timeless bridal moments where beauty, elegance, and
            confidence meet.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 text-lg leading-8 text-stone-600"
          >
            From your first consultation to the final reveal, Miriam Bridal
            Services creates personalized wedding experiences designed to make
            every bride feel confident, beautiful, and unforgettable.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-[#8b5e3c] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#6f462b]"
            >
              Book a consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>

            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-stone-300 bg-white px-7 py-3.5 text-sm font-semibold text-stone-700 transition hover:border-[#c8a97e] hover:text-[#8b5e3c]"
            >
              Explore services
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap gap-3"
          >
            {highlights.map((item) => (
              <span
                key={item}
                className="rounded-full border border-stone-200 bg-white/80 px-4 py-2 text-sm text-stone-600 shadow-sm backdrop-blur"
              >
                {item}
              </span>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex items-center gap-2 text-sm text-stone-500"
          >
            <span className="h-px w-10 bg-[#c8a97e]" />
            Discover our bridal experience
          </motion.div>
        </motion.div>

        {/* Right Image Area */}
        <motion.div
          initial={{
            opacity: 0,
            x: 50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
          }}
          className="relative"
        >
          <div className="rounded-[2.5rem] border border-stone-200 bg-white p-3 shadow-[0_25px_70px_rgba(17,24,39,0.12)]">
            <img
              src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80"
              alt="Bride getting ready"
              className="h-[400px] w-full rounded-[2rem] object-cover sm:h-[480px] lg:h-[560px]"
            />

            <div className="absolute bottom-8 left-8 right-8 rounded-[1.5rem] bg-gradient-to-br from-[#f6e9dc] to-[#e7caa6] p-6 shadow-lg">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8b5e3c]">
                Featured Experience
              </p>

              <h2 className="mt-3 text-2xl font-semibold text-stone-900">
                Signature Bridal Styling
              </h2>

              <p className="mt-3 text-sm leading-7 text-stone-700">
                Hair, makeup, styling, and finishing touches designed around
                your personality and wedding vision.
              </p>
            </div>
          </div>

          {/* Floating Trust Cards */}
          <div className="absolute -left-6 top-20 hidden space-y-4 lg:block">
            {trustCards.map((card) => {
              const Icon = card.icon;

              return (
                <motion.div
                  key={card.title}
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="flex w-44 items-center gap-3 rounded-2xl border border-stone-200 bg-white p-4 shadow-lg"
                >
                  <div className="rounded-full bg-[#f6e9dc] p-2 text-[#8b5e3c]">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="font-semibold text-stone-900">{card.title}</p>

                    <p className="text-xs text-stone-500">{card.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
