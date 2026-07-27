import { motion } from "framer-motion";
import { Mail, MessageCircle, Camera, Phone, Sparkles } from "lucide-react";
const communicationChannels = [
  {
    icon: MessageCircle,
    title: "WhatsApp Consultation",
    description:
      "Chat directly with our bridal team, ask questions, share your ideas, and begin planning your dream bridal experience.",
    action: "Chat on WhatsApp",
  },
  {
    icon: Mail,
    title: "Email Inquiry",
    description:
      "Send us your wedding details, preferred dates, and service requirements for a personalized response.",
    action: "Send Email",
  },
  {
    icon: Camera,
    title: "Social Inspiration",
    description:
      "Follow our latest bridal transformations, styling ideas, behind-the-scenes moments, and wedding inspiration.",
    action: "Follow Us",
  },
];

const CommunicationSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#f6e9dc] px-4 py-2 text-sm font-medium text-[#8b5e3c]">
            <Sparkles className="h-4 w-4" />
            Stay Connected
          </div>

          <h2 className="text-3xl font-semibold text-stone-900 sm:text-4xl">
            We are always ready to hear your bridal vision
          </h2>

          <p className="mt-5 text-stone-600">
            From your first question to your wedding day preparation, our team
            stays connected and supports you throughout your bridal journey.
          </p>
        </motion.div>

        {/* Communication Cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {communicationChannels.map((channel, index) => {
            const Icon = channel.icon;

            return (
              <motion.div
                key={channel.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                className="rounded-[2rem] border border-stone-200 bg-[#fffdf9] p-8 transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f6e9dc] text-[#8b5e3c]">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-stone-900">
                  {channel.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-stone-600">
                  {channel.description}
                </p>

                <button className="mt-6 rounded-full border border-[#c8a97e] px-5 py-3 text-sm font-semibold text-[#8b5e3c] transition hover:bg-[#8b5e3c] hover:text-white">
                  {channel.action}
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Direct Contact Banner */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mt-14 flex flex-col items-center justify-between gap-6 rounded-[2rem] bg-gradient-to-r from-[#f6e9dc] to-[#e7caa6] p-8 md:flex-row"
        >
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-white p-4 text-[#8b5e3c] shadow-sm">
              <Phone className="h-6 w-6" />
            </div>

            <div>
              <h3 className="font-semibold text-stone-900">
                Prefer speaking directly?
              </h3>

              <p className="mt-1 text-sm text-stone-700">
                Our bridal consultants are available to answer your questions.
              </p>
            </div>
          </div>

          <button className="rounded-full bg-[#8b5e3c] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#6f462b]">
            Contact Our Team
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunicationSection;
