import { motion } from "framer-motion";
import { Building2, Mail, MessageCircle, PhoneCall } from "lucide-react";

import { communicationMethods } from "./contactConfig";

const methodIcons = {
  whatsapp: MessageCircle,
  phone: PhoneCall,
  email: Mail,
  studio: Building2,
};

const PreferredMethodsSection = () => {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8b5e3c]">
            Choose your preferred communication method
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-stone-900 sm:text-4xl">
            Connect with us in the way that fits your planning style.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {communicationMethods.map((method, index) => {
            const Icon = methodIcons[method.key];
            return (
              <motion.article
                key={method.key}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="group rounded-[1.6rem] border border-stone-200 bg-[#fdfaf7] p-5 transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f1e1cf] text-[#8b5e3c]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-stone-900">
                  {method.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-stone-600">
                  {method.description}
                </p>
                <p className="mt-3 text-sm font-semibold text-stone-800">
                  {method.info}
                </p>
                <a
                  href={method.actionUrl}
                  target={
                    method.key === "whatsapp" || method.key === "studio"
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    method.key === "whatsapp" || method.key === "studio"
                      ? "noreferrer"
                      : undefined
                  }
                  className="mt-4 inline-flex rounded-full border border-stone-300 bg-white px-4 py-2 text-sm font-semibold text-stone-800 transition hover:border-stone-400"
                >
                  {method.actionLabel}
                </a>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PreferredMethodsSection;
