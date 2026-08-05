import { motion } from "framer-motion";
import { CalendarDays, Clock3 } from "lucide-react";

import { workingHours } from "./contactConfig";

const WorkingHoursSection = () => {
  return (
    <section className="bg-[#f7efe8] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8b5e3c]">
            Working hours
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-stone-900 sm:text-4xl">
            Structured availability for consultations and support.
          </h2>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {workingHours.map((slot, index) => (
            <motion.article
              key={slot.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.3, delay: index * 0.04 }}
              className="rounded-2xl border border-stone-200 bg-white p-4"
            >
              <p className="inline-flex items-center gap-2 text-sm font-semibold text-stone-900">
                {index % 2 === 0 ? (
                  <Clock3 className="h-4 w-4 text-[#8b5e3c]" />
                ) : (
                  <CalendarDays className="h-4 w-4 text-[#8b5e3c]" />
                )}
                {slot.label}
              </p>
              <p className="mt-2 text-sm leading-7 text-stone-600">
                {slot.time}
              </p>
            </motion.article>
          ))}
        </div>

        <p className="mt-6 text-sm leading-7 text-stone-600">
          WhatsApp and calls are typically answered fastest during working
          hours. Messages received outside working periods are responded to in
          the next active schedule.
        </p>
      </div>
    </section>
  );
};

export default WorkingHoursSection;
