import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Are the weddings shown in this portfolio real?",
    answer:
      "This page is structured for real project storytelling. Current names and details include placeholders until approved client records are published.",
  },
  {
    question: "Is every bridal look customized?",
    answer:
      "Yes. Every look is tailored to the bride's facial features, wedding style, timeline, and preferences.",
  },
  {
    question: "Can I request a look similar to one in the portfolio?",
    answer:
      "Yes. Similar references can guide your consultation, then we adapt details to your unique features and event context.",
  },
  {
    question: "Is consultation required before recreating a style?",
    answer:
      "Consultation is strongly recommended so we can evaluate skin needs, schedule, and styling feasibility.",
  },
  {
    question: "Do you accept destination wedding bookings?",
    answer:
      "Yes, destination support is available based on schedule, travel planning, and package scope.",
  },
];

const PortfolioFaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#f7efe8] py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8b5e3c]">
            Portfolio FAQs
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-stone-900 sm:text-4xl">
            Common questions about the portfolio and bridal styling requests.
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
                transition={{ duration: 0.3, delay: index * 0.04 }}
                className="rounded-2xl border border-stone-200 bg-white"
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8b5e3c]"
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

export default PortfolioFaqSection;
