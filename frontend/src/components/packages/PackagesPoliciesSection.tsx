import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const notes = [
  "Custom travel fees may apply for destination events.",
  "A non-refundable deposit secures your wedding date.",
  "Final balances are due seven days before the event.",
  "Packages can be customized for cultural or multi-day ceremonies.",
];

const PackagesPoliciesSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55 }}
      className="bg-[#f7efe8] py-20"
    >
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="rounded-[1.75rem] border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8b5e3c]">
            Booking notes
          </p>
          <h3 className="mt-3 text-2xl font-semibold text-stone-900">
            What to know before confirming
          </h3>
          <div className="mt-6 space-y-3">
            {notes.map((note) => (
              <div
                key={note}
                className="rounded-2xl border border-stone-200 bg-[#fdfaf7] px-4 py-4 text-sm font-medium text-stone-700"
              >
                {note}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8b5e3c]">
            Need a bespoke quote?
          </p>
          <h3 className="mt-3 text-2xl font-semibold text-stone-900">
            We can build a custom package for your event format.
          </h3>
          <p className="mt-4 text-sm leading-7 text-stone-600">
            For multi-day celebrations, larger bridal parties, or destination
            weddings, our team can prepare a personalized proposal based on
            timeline, location, and service scope.
          </p>
          <div className="mt-6 space-y-3">
            {[
              "Response within 24-48 hours",
              "Clear timeline recommendations",
              "Transparent itemized pricing",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-stone-200 bg-[#fdfaf7] px-4 py-4 text-sm font-medium text-stone-700"
              >
                {item}
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-stone-700"
            >
              Request custom proposal <ArrowRight className="h-4 w-4" />
            </Link>
            <p className="inline-flex items-center gap-2 text-sm font-semibold text-[#8b5e3c]">
              <ShieldCheck className="h-4 w-4" />
              No hidden fees.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default PackagesPoliciesSection;
