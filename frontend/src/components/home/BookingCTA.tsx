import { motion } from "framer-motion";
import { ArrowRight, CalendarCheck, MessageCircle } from "lucide-react";

const BookingCTA = () => {
  return (
    <section className="relative overflow-hidden bg-[#8b5e3c] py-20">
      {/* Decorative Elements */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#c8a97e]/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="rounded-[2.5rem] bg-white/10 p-8 text-center backdrop-blur md:p-12"
        >
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#8b5e3c]">
            <CalendarCheck className="h-7 w-7" />
          </div>

          <h2 className="mt-6 text-3xl font-semibold text-white sm:text-4xl">
            Ready to Begin Your Bridal Journey?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/80">
            Your wedding day deserves thoughtful preparation, beautiful details,
            and a bridal experience designed around you. Schedule a consultation
            with Miriam Bridal Services today.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#8b5e3c] transition hover:bg-[#f6e9dc]"
            >
              Book Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>

            <a
              href="#whatsapp"
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Chat With Us
            </a>
          </div>

          <p className="mt-8 text-sm text-white/70">
            Limited wedding dates available each season. Reserve your preferred
            date early.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BookingCTA;
