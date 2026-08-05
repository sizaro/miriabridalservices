import { motion } from "framer-motion";
import {
  BookOpenCheck,
  CalendarDays,
  GraduationCap,
  MapPin,
  Users,
} from "lucide-react";

const bridalChecklist = [
  "Wedding date and ceremony location",
  "Services required and preferred package",
  "Approximate bridal party size",
  "Inspiration photographs",
  "Travel or venue-specific requirements",
];

const studentChecklist = [
  "Course of interest",
  "Current experience level",
  "Preferred intake period",
  "Availability schedule",
  "Training questions or career goals",
];

const BeforeContactSection = () => {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8b5e3c]">
            Before you contact us
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-stone-900 sm:text-4xl">
            Prepare a few details for faster and more accurate assistance.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <motion.article
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35 }}
            className="rounded-[1.5rem] border border-stone-200 bg-[#fdfaf7] p-6"
          >
            <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-[#8b5e3c]">
              <Users className="h-4 w-4" />
              Bridal clients checklist
            </p>
            <ul className="mt-4 space-y-2 text-sm leading-7 text-stone-600">
              {bridalChecklist.map((item, index) => (
                <li key={item} className="inline-flex items-start gap-2">
                  {index % 2 === 0 ? (
                    <CalendarDays className="mt-1 h-4 w-4 text-[#8b5e3c]" />
                  ) : (
                    <MapPin className="mt-1 h-4 w-4 text-[#8b5e3c]" />
                  )}
                  {item}
                </li>
              ))}
            </ul>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: 0.05 }}
            className="rounded-[1.5rem] border border-stone-200 bg-[#fdfaf7] p-6"
          >
            <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-[#8b5e3c]">
              <GraduationCap className="h-4 w-4" />
              Students checklist
            </p>
            <ul className="mt-4 space-y-2 text-sm leading-7 text-stone-600">
              {studentChecklist.map((item) => (
                <li key={item} className="inline-flex items-start gap-2">
                  <BookOpenCheck className="mt-1 h-4 w-4 text-[#8b5e3c]" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.article>
        </div>
      </div>
    </section>
  );
};

export default BeforeContactSection;
