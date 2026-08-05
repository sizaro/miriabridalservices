import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const founderData = {
  name: "Miriam A. N.",
  title: "Founder and Lead Bridal Stylist",
  bio: "Miriam leads Miriam Bridal Services with a refined blend of artistry, empathy, and disciplined execution. Her work centers on helping brides feel confident, calm, and authentically beautiful from preparation through celebration.",
  philosophy:
    "Bridal beauty should never feel rushed or generic. It should feel intentional, respectful, and deeply personal.",
  qualifications: [
    "Certified Bridal Makeup Specialist (Placeholder)",
    "Advanced Hair Styling Program (Placeholder)",
    "Workshop Facilitator for Aspiring Stylists (Placeholder)",
  ],
};

const FounderSection = () => {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.94fr_1.06fr] lg:px-8 lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="relative"
        >
          <img
            src="https://images.unsplash.com/photo-1594745561149-2211ca8c5d98?auto=format&fit=crop&w=1200&q=80"
            alt="Founder portrait for Miriam Bridal Services"
            className="h-[460px] w-full rounded-[2rem] object-cover shadow-md"
            loading="lazy"
          />
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-5 right-4 rounded-2xl border border-stone-200 bg-white px-4 py-3 shadow-sm"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8b5e3c]">
              Lead Bridal Stylist
            </p>
            <p className="mt-1 text-sm font-semibold text-stone-800">Founder</p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8b5e3c]">
            Meet the founder
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-stone-900 sm:text-4xl">
            {founderData.name}
          </h2>
          <p className="mt-2 text-sm font-semibold uppercase tracking-[0.14em] text-stone-500">
            {founderData.title}
          </p>
          <p className="mt-5 text-base leading-8 text-stone-600">
            {founderData.bio}
          </p>
          <p className="mt-4 text-base leading-8 text-stone-600">
            {founderData.philosophy}
          </p>

          <div className="mt-6 rounded-[1.5rem] border border-stone-200 bg-[#fdfaf7] p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8b5e3c]">
              Qualifications and development
            </p>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-stone-600">
              {founderData.qualifications.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6 rounded-[1.5rem] border border-stone-200 p-5">
            <p className="text-base leading-8 text-stone-600">
              "To every bride and student we serve: our commitment is simple. We
              prepare thoroughly, communicate clearly, and show up with care so
              your experience feels confident from beginning to end."
            </p>
            <p className="mt-5 font-semibold text-stone-900">Miriam A. N.</p>
            <p className="text-sm italic text-stone-500">
              Signature placeholder
            </p>
          </div>

          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-stone-700"
            >
              Start a consultation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FounderSection;
