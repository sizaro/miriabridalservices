import { motion } from "framer-motion";
import { Clock3, PhoneCall, TriangleAlert } from "lucide-react";

import { contactConfig } from "./contactConfig";

const notes = [
  "Best for urgent bookings or time-sensitive changes",
  "Recommended for large bridal parties and destination planning",
  "Calls returned during working hours when missed",
];

const PhoneConsultationSection = () => {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.98fr_1.02fr] lg:px-8 lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8b5e3c]">
            Phone consultation
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-stone-900 sm:text-4xl">
            Direct conversations for urgent and detailed planning.
          </h2>
          <p className="mt-5 text-base leading-8 text-stone-600">
            Some discussions are best over the phone, especially urgent
            bookings, destination events, large bridal parties, and last-minute
            scheduling updates.
          </p>

          <p className="mt-6 text-2xl font-semibold text-stone-900">
            {contactConfig.phoneNumber}
          </p>
          <a
            href={contactConfig.phoneDialer}
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-stone-700"
          >
            Call now <PhoneCall className="h-4 w-4" />
          </a>

          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            <article className="rounded-xl border border-stone-200 bg-[#fdfaf7] p-3 text-sm text-stone-700">
              <p className="inline-flex items-center gap-2 font-semibold text-stone-800">
                <Clock3 className="h-4 w-4 text-[#8b5e3c]" />
                Response hours
              </p>
            </article>
            <article className="rounded-xl border border-stone-200 bg-[#fdfaf7] p-3 text-sm text-stone-700">
              <p className="font-semibold text-stone-800">
                Have date and location ready
              </p>
            </article>
            <article className="rounded-xl border border-stone-200 bg-[#fdfaf7] p-3 text-sm text-stone-700">
              <p className="inline-flex items-center gap-2 font-semibold text-stone-800">
                <TriangleAlert className="h-4 w-4 text-[#8b5e3c]" />
                Urgent support
              </p>
            </article>
          </div>

          <ul className="mt-4 space-y-2 text-sm leading-7 text-stone-600">
            {notes.map((note) => (
              <li key={note}>- {note}</li>
            ))}
          </ul>
        </motion.div>

        <motion.img
          src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1300&q=80"
          alt="Friendly bridal consultation phone conversation"
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="h-[420px] w-full rounded-[1.8rem] object-cover shadow-md"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default PhoneConsultationSection;
