import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const courseAreas = [
  "Bridal makeup",
  "Hair styling",
  "Client care",
  "Hygiene standards",
  "Product knowledge",
  "Business skills",
  "Photography preparation",
  "Portfolio development",
];

const stats = [
  { label: "Students trained", value: "120+" },
  { label: "Practical sessions", value: "300+" },
  { label: "Certificates issued", value: "95+" },
];

const TrainingPreview = () => {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.98fr_1.02fr] lg:px-8 lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="grid grid-cols-2 gap-4"
        >
          <img
            src="https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=1200&q=80"
            alt="Training class practical beauty session"
            className="col-span-2 h-[300px] w-full rounded-[1.8rem] object-cover"
            loading="lazy"
          />
          <img
            src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=80"
            alt="Student hairstyling practical work"
            className="h-40 w-full rounded-[1.2rem] object-cover"
            loading="lazy"
          />
          <img
            src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80"
            alt="Beauty tools and preparation during training"
            className="h-40 w-full rounded-[1.2rem] object-cover"
            loading="lazy"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8b5e3c]">
            Training academy preview
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-stone-900 sm:text-4xl">
            Training is part of our identity and long-term purpose.
          </h2>
          <p className="mt-5 text-base leading-8 text-stone-600">
            We transfer practical knowledge and professional standards so
            aspiring artists build confidence, discipline, and career readiness.
          </p>

          <div className="mt-6 grid gap-2 sm:grid-cols-2">
            {courseAreas.map((area) => (
              <p
                key={area}
                className="rounded-xl border border-stone-200 bg-[#fdfaf7] px-3 py-2 text-sm text-stone-700"
              >
                {area}
              </p>
            ))}
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {stats.map((stat) => (
              <article
                key={stat.label}
                className="rounded-xl border border-stone-200 bg-[#fdfaf7] p-3"
              >
                <p className="text-2xl font-semibold text-stone-900">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.1em] text-stone-500">
                  {stat.label}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-stone-700"
            >
              Explore the training academy <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-semibold text-stone-800 transition hover:border-stone-400"
            >
              Ask about the next intake
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrainingPreview;
