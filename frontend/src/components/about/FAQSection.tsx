import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "How long has Miriam Bridal Services been operating?",
    answer:
      "The company has grown through multiple years of bridal and training experience. Exact milestones and dates are shared in the timeline section.",
  },
  {
    question: "Where is your studio located?",
    answer:
      "Our studio is based in Provo, Utah, and visits are arranged by appointment to ensure dedicated time and privacy.",
  },
  {
    question: "Can we visit the studio before booking?",
    answer:
      "Yes. Prospective clients can request a consultation visit to review expectations, process, and package fit.",
  },
  {
    question: "Do you travel for weddings and events?",
    answer:
      "Yes, travel support is available based on schedule, location, and service requirements.",
  },
  {
    question: "Who leads the company?",
    answer:
      "Miriam, the founder and lead bridal stylist, directs service quality, team standards, and training development.",
  },
  {
    question: "Do you train complete beginners?",
    answer:
      "Yes. Training tracks can support beginners and developing professionals through practical, guided learning.",
  },
  {
    question: "How large a bridal party can your team support?",
    answer:
      "Support capacity depends on date, package structure, and timeline. Larger teams are planned through coordinated staffing.",
  },
  {
    question: "Are consultations required before final booking?",
    answer:
      "Consultations are strongly recommended because they improve planning clarity and help align services with your goals.",
  },
  {
    question: "How can we contact Miriam Bridal Services?",
    answer:
      "Use the contact page form, email channel, or phone details to begin your consultation process.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8b5e3c]">
            About FAQs
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-stone-900 sm:text-4xl">
            Questions about our company and approach.
          </h2>
        </div>

        <div className="mt-10 space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.article
                key={item.question}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                className="rounded-2xl border border-stone-200 bg-[#fdfaf7]"
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8b5e3c]"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm font-semibold text-stone-800">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 text-stone-500 transition ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </h3>
                {isOpen && (
                  <div className="border-t border-stone-200 px-5 py-4">
                    <p className="text-sm leading-7 text-stone-600">
                      {item.answer}
                    </p>
                  </div>
                )}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
