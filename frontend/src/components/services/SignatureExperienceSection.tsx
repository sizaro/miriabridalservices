import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

const stages = [
  "Private style consultation and vision mapping",
  "Personalized beauty and timeline blueprint",
  "In-depth bridal trial and look refinement",
  "Wedding-week preparation and checklist support",
  "On-site wedding-day execution and final reveal",
];

const SignatureExperienceSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.55 }}
      className="bg-white py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 rounded-[2rem] border border-stone-200 bg-[#fdfaf7] p-6 sm:p-8 lg:grid-cols-[1fr_1fr]">
          <img
            src="https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1500&q=80"
            alt="Signature bridal experience"
            className="h-[420px] w-full rounded-[1.5rem] object-cover"
          />

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8b5e3c]">
              Featured signature experience
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-stone-900">
              The Miriam Luxury Bridal Signature
            </h2>
            <p className="mt-4 text-sm leading-7 text-stone-600">
              This flagship package combines consultation, trial artistry,
              complete wedding-day beauty execution, and on-site support to give
              brides a seamless, elevated, and confidence-centered experience.
            </p>
            <p className="mt-4 text-sm leading-7 text-stone-600">
              Included: advanced skin prep, custom makeup design, bridal hair
              architecture, veil styling, photo readiness checks, and structured
              transitions from preparation to reception.
            </p>

            <div className="mt-6 space-y-3">
              {stages.map((stage, index) => (
                <motion.div
                  key={stage}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-start gap-3 rounded-xl border border-stone-200 bg-white px-4 py-3"
                >
                  <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#f1e1cf] text-[#8b5e3c]">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <p className="text-sm text-stone-700">{stage}</p>
                </motion.div>
              ))}
            </div>

            <button
              type="button"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-stone-700"
            >
              Book This Experience <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default SignatureExperienceSection;
