import { motion } from "framer-motion";
import { ArrowRight, CalendarCheck2, Clock3, Phone } from "lucide-react";

const availabilityDays = [
  "available",
  "available",
  "limited",
  "available",
  "booked",
  "booked",
  "available",
  "limited",
  "available",
  "available",
  "booked",
  "available",
  "limited",
  "available",
  "booked",
  "available",
  "available",
  "limited",
  "booked",
  "available",
  "available",
  "limited",
  "booked",
  "available",
  "available",
  "limited",
  "available",
  "booked",
  "available",
  "limited",
];

const AvailabilityPreviewSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.55 }}
      className="bg-[#f7efe8] py-20"
    >
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div className="rounded-[1.5rem] border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8b5e3c]">
            Availability preview
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-stone-900">
            Simplified booking calendar placeholder
          </h2>
          <div className="mt-6 grid grid-cols-7 gap-2">
            {availabilityDays.map((status, index) => {
              const colorClass =
                status === "available"
                  ? "bg-emerald-100 text-emerald-700"
                  : status === "limited"
                    ? "bg-amber-100 text-amber-700"
                    : "bg-rose-100 text-rose-700";

              return (
                <div
                  key={`${status}-${index}`}
                  className={`flex h-9 items-center justify-center rounded-lg text-xs font-semibold ${colorClass}`}
                >
                  {index + 1}
                </div>
              );
            })}
          </div>

          <div className="mt-5 flex flex-wrap gap-3 text-xs font-semibold">
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-emerald-700">
              Available
            </span>
            <span className="rounded-full bg-amber-100 px-3 py-1 text-amber-700">
              Limited
            </span>
            <span className="rounded-full bg-rose-100 px-3 py-1 text-rose-700">
              Booked
            </span>
          </div>
        </div>

        <div className="rounded-[1.5rem] border border-stone-200 bg-white p-6 sm:p-8">
          <h3 className="text-xl font-semibold text-stone-900">
            Hours and support
          </h3>
          <div className="mt-4 space-y-3 text-sm text-stone-700">
            <p className="inline-flex items-center gap-2">
              <Clock3 className="h-4 w-4 text-[#8b5e3c]" />
              Working hours: Mon-Sat, 9:00 AM - 6:00 PM
            </p>
            <p className="inline-flex items-center gap-2">
              <CalendarCheck2 className="h-4 w-4 text-[#8b5e3c]" />
              Consultation hours: Mon-Fri, 10:00 AM - 4:00 PM
            </p>
            <p className="inline-flex items-center gap-2">
              <Phone className="h-4 w-4 text-[#8b5e3c]" />
              Emergency booking line: +1 (801) 555-0147
            </p>
          </div>

          <button
            type="button"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-stone-700"
          >
            Check Availability <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default AvailabilityPreviewSection;
