import { motion } from "framer-motion";

const OurPromiseSection = () => {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <img
        src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1600&q=80"
        alt="Bride and stylist sharing a final reassurance moment"
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-stone-900/55" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55 }}
        className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#f1e1cf]">
          Our promise
        </p>
        <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
          We promise professionalism, communication, punctuality, preparation,
          respect, hygiene, honesty, and personal attention.
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-stone-200">
          Every booking is approached with the same commitment: to make your
          experience feel calm, clear, and beautifully supported from first
          inquiry to final touch.
        </p>
        <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-[#f1e1cf]">
          The Miriam Bridal Services Promise
        </p>
      </motion.div>
    </section>
  );
};

export default OurPromiseSection;
