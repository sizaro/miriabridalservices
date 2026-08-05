import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "How far in advance should I book bridal services?",
    answer:
      "Most brides book 4-8 months in advance. Peak season dates can fill earlier, so we recommend securing your date as soon as your venue is confirmed.",
  },
  {
    question: "Do you offer travel and destination services?",
    answer:
      "Yes. We provide destination and on-location services with custom travel quotes based on event location and schedule requirements.",
  },
  {
    question: "What products do you use for bridal makeup?",
    answer:
      "We use professional-grade, long-wear products selected for skin compatibility, flash photography performance, and all-day comfort.",
  },
  {
    question: "What is your cancellation and rescheduling policy?",
    answer:
      "Deposits secure your date and are non-refundable. Rescheduling requests are reviewed based on availability and event proximity.",
  },
  {
    question: "What payment options are available?",
    answer:
      "We accept secure digital payments and staged payment options depending on package type and booking timeline.",
  },
  {
    question: "Can bridesmaids and family members be included?",
    answer:
      "Absolutely. Bridal party styling can be added to any package and is scheduled to maintain smooth prep timing.",
  },
  {
    question: "How does the consultation process work?",
    answer:
      "We begin with a discovery consultation to understand your goals, recommend services, and create your event beauty plan.",
  },
  {
    question: "How can I enroll in the training academy?",
    answer:
      "Choose a training track, submit an application, and our team will provide intake guidance and upcoming cohort dates.",
  },
];

const FaqSection = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.55 }}
      className="bg-white py-20"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8b5e3c]">
            Frequently asked questions
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-stone-900 sm:text-4xl">
            Quick answers to common bridal service and training questions.
          </h2>
        </div>

        <div className="mt-8 space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openFaqIndex === index;

            return (
              <div
                key={faq.question}
                className="rounded-2xl border border-stone-200 bg-[#fdfaf7]"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="text-sm font-semibold text-stone-900">
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="h-4 w-4 text-stone-500" />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm leading-7 text-stone-600">
                        {faq.answer}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default FaqSection;
