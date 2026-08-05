import { motion } from "framer-motion";
import { Building2, Mail, MessageCircle, PhoneCall } from "lucide-react";

const expectations = [
  {
    title: "WhatsApp",
    description:
      "Preferred for quick questions, inspiration sharing, booking discussions, and consultation flow.",
    icon: MessageCircle,
  },
  {
    title: "Phone Calls",
    description:
      "Best for urgent matters and detailed conversations requiring immediate feedback.",
    icon: PhoneCall,
  },
  {
    title: "Email",
    description:
      "Best for official business communication, documentation, partnerships, and academy applications.",
    icon: Mail,
  },
  {
    title: "Studio Visits",
    description:
      "Available by appointment for consultations, bridal trials, and training discussions.",
    icon: Building2,
  },
];

const CommunicationExpectationsSection = () => {
  return (
    <section className="bg-[#f7efe8] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8b5e3c]">
            Communication expectations
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-stone-900 sm:text-4xl">
            Clear channel guidance for faster and better support.
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {expectations.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="rounded-[1.4rem] border border-stone-200 bg-white p-4"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f1e1cf] text-[#8b5e3c]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-stone-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-stone-600">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CommunicationExpectationsSection;
