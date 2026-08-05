import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqItems = [
  {
    question: "Are the gallery visuals real client experiences?",
    answer:
      "This gallery is structured for real media publishing. Current records use placeholders until approved client and team visuals are uploaded.",
  },
  {
    question: "Do clients provide consent before appearing in gallery media?",
    answer:
      "Yes. Client consent and usage permissions are required before public media publication.",
  },
  {
    question: "Can I request a bridal look similar to one in the gallery?",
    answer:
      "Yes. During consultation we can reference gallery looks and personalize the result to your features and event style.",
  },
  {
    question: "Are videos professionally produced?",
    answer:
      "Video quality can vary by project type, but all clips are selected to document process, transformation, and final results clearly.",
  },
  {
    question: "Can clients request privacy and not be shown publicly?",
    answer:
      "Absolutely. Privacy preferences are respected, and clients can opt out of gallery publication.",
  },
  {
    question: "Can training students appear in academy gallery content?",
    answer:
      "Yes, where consent is provided and academy media policies are met.",
  },
];

const GalleryFAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8b5e3c]">
            Gallery FAQs
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-stone-900 sm:text-4xl">
            Questions about consent, privacy, and gallery content.
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

export default GalleryFAQSection;
