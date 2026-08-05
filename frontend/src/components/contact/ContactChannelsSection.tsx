import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

const channels = [
  {
    title: "Phone consultation",
    detail: "+1 (801) 555-0147",
    note: "Mon-Sat, 9:00 AM - 6:00 PM",
    icon: Phone,
  },
  {
    title: "Email inquiries",
    detail: "hello@miriabridalservices.com",
    note: "Responses within 24-48 hours",
    icon: Mail,
  },
  {
    title: "Studio location",
    detail: "Provo, Utah",
    note: "By appointment only",
    icon: MapPin,
  },
];

const ContactChannelsSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55 }}
      className="bg-white py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8b5e3c]">
            Ways to reach us
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-stone-900 sm:text-4xl">
            Choose the channel that works best for your planning style.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {channels.map((channel, index) => {
            const Icon = channel.icon;
            return (
              <motion.article
                key={channel.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="rounded-[1.75rem] border border-stone-200 bg-[#fdfaf7] p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f1e1cf] text-[#8b5e3c]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-stone-900">
                  {channel.title}
                </h3>
                <p className="mt-3 text-sm font-medium text-stone-800">
                  {channel.detail}
                </p>
                <p className="mt-2 text-sm leading-7 text-stone-600">
                  {channel.note}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default ContactChannelsSection;
