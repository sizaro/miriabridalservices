import { motion } from "framer-motion";

const storyImages = {
  main: {
    src: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1400&q=80",
    alt: "Founder preparing bridal makeup during a consultation",
  },
  sideA: {
    src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80",
    alt: "Close-up of bridal accessories and preparation tools",
  },
  sideB: {
    src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80",
    alt: "Bride reviewing final look with stylist",
  },
};

const OurStorySection = () => {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.02fr] lg:px-8 lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65 }}
          className="grid grid-cols-2 gap-4"
        >
          <img
            src={storyImages.main.src}
            alt={storyImages.main.alt}
            className="col-span-2 h-[360px] w-full rounded-[1.8rem] object-cover shadow-md"
            loading="lazy"
          />
          <img
            src={storyImages.sideA.src}
            alt={storyImages.sideA.alt}
            className="h-40 w-full rounded-[1.2rem] object-cover"
            loading="lazy"
          />
          <img
            src={storyImages.sideB.src}
            alt={storyImages.sideB.alt}
            className="h-40 w-full rounded-[1.2rem] object-cover"
            loading="lazy"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8b5e3c]">
            Our story
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-stone-900 sm:text-4xl">
            Built from purpose, passion, and real bridal care.
          </h2>
          <p className="mt-5 text-base leading-8 text-stone-600">
            Miriam Bridal Services began with one clear desire: to help brides
            feel calm, supported, and beautifully confident on one of the most
            meaningful days of their lives. What started as personal beauty
            support grew into a full professional studio experience rooted in
            listening, preparation, and thoughtful service.
          </p>
          <p className="mt-4 text-base leading-8 text-stone-600">
            Today, the company offers more than makeup or styling. It delivers
            complete bridal experiences through detailed consultations,
            personalized plans, trained professionals, and intentional wedding
            day execution.
          </p>

          <div className="mt-7 rounded-[1.5rem] border border-stone-200 bg-[#fdfaf7] p-6">
            <p className="text-lg italic leading-8 text-stone-700">
              "Every bride deserves to feel seen, understood, and beautifully
              herself."
            </p>
            <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#8b5e3c]">
              Founder, Miriam Bridal Services
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurStorySection;
