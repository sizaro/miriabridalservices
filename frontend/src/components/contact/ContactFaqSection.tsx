import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqItems = [
  {
    question: "How quickly are WhatsApp messages answered?",
    answer:
      "Most WhatsApp inquiries are answered during working hours, with priority for active bridal consultations.",
  },
  {
    question: "Do I need an appointment before visiting the studio?",
    answer:
      "Yes, appointments are strongly recommended to ensure dedicated consultation time.",
  },
  {
    question: "Are WhatsApp bookings accepted?",
    answer:
      "Yes, WhatsApp is our preferred booking conversation channel for most bridal clients.",
  },
  {
    question: "Can consultations be conducted remotely?",
    answer:
      "Yes, remote consultation is available through WhatsApp and phone for eligible bookings.",
  },
  {
    question: "Do you travel outside the local area?",
    answer:
      "Yes, destination and out-of-area support can be arranged depending on schedule and package scope.",
  },
  {
    question: "How are deposits handled?",
    answer:
      "Deposit guidance is shared during consultation once service scope and date availability are confirmed.",
  },
  {
    question: "Are last-minute bookings accepted?",
    answer:
      "Where possible, yes. Urgent requests should be sent by phone or WhatsApp for fastest response.",
  },
  {
    question: "Which payment methods are available?",
    answer:
      "Available payment options are provided during booking confirmation and can vary by service type.",
  },
];

const ContactFaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8b5e3c]">
            Contact FAQs
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-stone-900 sm:text-4xl">
            Helpful answers before you begin your consultation.
          </h2>
        </div>

        <div className="mt-10 space-y-4">
          {faqItems.map((item, index) => {
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

export default ContactFaqSection;
