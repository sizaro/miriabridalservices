import { motion } from "framer-motion";
import { Gem } from "lucide-react";

const AboutPromiseSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55 }}
      className="bg-white py-20"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:items-center">
        <img
          src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1100&q=80"
          alt="Luxury bridal dress details"
          className="h-[400px] w-full rounded-[2rem] object-cover shadow-md"
        />
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8b5e3c]">
            Our promise
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-stone-900 sm:text-4xl">
            A premium experience where every decision supports your peace of
            mind.
          </h2>
          <div className="mt-8 space-y-3">
            {[
              "Clear communication from inquiry to event day",
              "Professional artists and coordinators with wedding expertise",
              "Refined execution that respects your timeline and vision",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-stone-200 bg-[#fdfaf7] px-4 py-4 text-sm font-medium text-stone-700"
              >
                {item}
              </div>
            ))}
          </div>
          <p className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#8b5e3c]">
            <Gem className="h-4 w-4" />
            Luxury is in the details, and details are our signature.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutPromiseSection;
