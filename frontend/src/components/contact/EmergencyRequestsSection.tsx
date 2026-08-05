import { motion } from "framer-motion";
import { MessageCircle, PhoneCall, TriangleAlert } from "lucide-react";

import { contactConfig } from "./contactConfig";

const EmergencyRequestsSection = () => {
  return (
    <section className="bg-[#f7efe8] py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.article
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.35 }}
          className="rounded-[1.8rem] border border-[#d8b89a] bg-[#fff7ef] p-6 sm:p-8"
        >
          <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-[#8b5e3c]">
            <TriangleAlert className="h-4 w-4" />
            Emergency and last-minute requests
          </p>
          <p className="mt-4 text-base leading-8 text-stone-700">
            For urgent weddings or last-minute needs, please contact us directly
            by phone or WhatsApp instead of email. Availability cannot always be
            guaranteed, but we make every reasonable effort to support urgent
            cases whenever possible.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={contactConfig.phoneDialer}
              className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-stone-700"
            >
              Call immediately <PhoneCall className="h-4 w-4" />
            </a>
            <a
              href={contactConfig.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-semibold text-stone-800 transition hover:border-stone-400"
            >
              Open WhatsApp <MessageCircle className="h-4 w-4" />
            </a>
          </div>
        </motion.article>
      </div>
    </section>
  );
};

export default EmergencyRequestsSection;
