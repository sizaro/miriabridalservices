import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const BookingCtaSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.55 }}
      className="relative overflow-hidden py-20"
    >
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1800&q=80"
          alt="Luxury bridal CTA background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-stone-900/65" />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#f1e1cf]">
          Start your bridal journey
        </p>
        <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-5xl">
          Reserve your date and create a timeless bridal experience.
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-stone-100">
          Personalized service, limited booking availability, and a dedicated
          team committed to your confidence from the first consultation.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-stone-900 transition hover:bg-stone-100"
          >
            Book Consultation <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href="https://wa.me/18015550147"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/60 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Chat on WhatsApp <MessageCircle className="h-4 w-4" />
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/60 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Request a Quote <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <p className="mt-8 text-sm leading-7 text-stone-200">
          Our mission is to create timeless bridal experiences filled with
          elegance, confidence, and unforgettable memories.
        </p>
      </div>
    </motion.section>
  );
};

export default BookingCtaSection;
