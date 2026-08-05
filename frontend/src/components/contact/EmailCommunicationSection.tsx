import { motion } from "framer-motion";
import { Mail } from "lucide-react";

import { contactConfig } from "./contactConfig";

const useCases = [
  "Formal quotations and official documentation",
  "Vendor and partner collaboration requests",
  "Academy enrollment and training inquiries",
  "Media opportunities and business communication",
];

const EmailCommunicationSection = () => {
  return (
    <section className="bg-[#f7efe8] py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:items-center">
        <motion.img
          src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1300&q=80"
          alt="Professional bridal business communication planning"
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="h-[420px] w-full rounded-[1.8rem] object-cover shadow-md"
          loading="lazy"
        />

        <motion.div
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8b5e3c]">
            Email communication
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-stone-900 sm:text-4xl">
            Professional communication for formal and business requests.
          </h2>
          <p className="mt-5 text-base leading-8 text-stone-600">
            Email is ideal for partnerships, vendor collaborations, photography
            inquiries, academy applications, official quotations, and other
            detailed business discussions.
          </p>

          <div className="mt-6 rounded-[1.4rem] border border-stone-200 bg-white p-5">
            <p className="text-xs uppercase tracking-[0.12em] text-stone-500">
              Official email
            </p>
            <p className="mt-2 text-xl font-semibold text-stone-900">
              {contactConfig.email}
            </p>
            <a
              href={contactConfig.emailLink}
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-stone-300 bg-[#fdfaf7] px-5 py-2 text-sm font-semibold text-stone-800 transition hover:border-stone-400"
            >
              Send email <Mail className="h-4 w-4" />
            </a>
          </div>

          <ul className="mt-5 space-y-2 text-sm leading-7 text-stone-600">
            {useCases.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default EmailCommunicationSection;
