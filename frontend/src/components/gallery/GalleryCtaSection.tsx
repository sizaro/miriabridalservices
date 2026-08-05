import { motion } from "framer-motion";
import { ArrowRight, Camera, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const GalleryCtaSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55 }}
      className="bg-white py-20"
    >
      <div className="mx-auto max-w-4xl rounded-[2rem] border border-stone-200 bg-[#fdfaf7] px-6 py-12 text-center sm:px-10">
        <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.24em] text-[#8b5e3c]">
          <Camera className="h-4 w-4" />
          Your Next Featured Look
        </p>
        <h2 className="mt-4 text-3xl font-semibold text-stone-900 sm:text-4xl">
          Let us create bridal images you will love revisiting for years.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-stone-600">
          Our team aligns beauty styling with your photography schedule so every
          portrait captures your look at its best.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-stone-700"
          >
            Start your booking <ArrowRight className="h-4 w-4" />
          </Link>
          <p className="inline-flex items-center gap-2 text-sm font-semibold text-[#8b5e3c]">
            <Sparkles className="h-4 w-4" />
            Elegant details in every frame.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default GalleryCtaSection;
