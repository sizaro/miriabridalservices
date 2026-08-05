import { motion } from "framer-motion";
import {
  ExternalLink,
  Megaphone,
  PlayCircle,
  Sparkles,
  Users,
  Video,
} from "lucide-react";

import { contactConfig } from "./contactConfig";

const platforms = [
  {
    name: "Facebook",
    description: "Company updates, announcements, and community interaction.",
    url: contactConfig.facebookUrl,
    icon: Users,
    image:
      "https://images.unsplash.com/photo-1611262588024-d12430b98920?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Instagram",
    description:
      "Bridal inspiration, finished looks, and behind-the-scenes moments.",
    url: contactConfig.instagramUrl,
    icon: Sparkles,
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "TikTok",
    description: "Short styling demonstrations and fun transformation clips.",
    url: contactConfig.tiktokUrl,
    icon: PlayCircle,
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "YouTube",
    description: "Tutorials, academy videos, and bridal story features.",
    url: contactConfig.youtubeUrl,
    icon: Video,
    image:
      "https://images.unsplash.com/photo-1574717024453-3540567f3f89?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "WhatsApp Channel",
    description: "Promotions, booking updates, and direct service notices.",
    url: contactConfig.whatsappChannelUrl,
    icon: Megaphone,
    image:
      "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=900&q=80",
  },
];

const SocialConnectionsSection = () => {
  return (
    <section className="bg-[#f7efe8] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8b5e3c]">
            Social media connections
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-stone-900 sm:text-4xl">
            Follow us where each platform adds a different kind of value.
          </h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {platforms.map((platform, index) => {
            const Icon = platform.icon;
            return (
              <motion.article
                key={platform.name}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                className="overflow-hidden rounded-[1.5rem] border border-stone-200 bg-white"
              >
                <img
                  src={platform.image}
                  alt={`${platform.name} visual preview`}
                  className="h-40 w-full object-cover"
                  loading="lazy"
                />
                <div className="p-4">
                  <p className="inline-flex items-center gap-2 text-sm font-semibold text-stone-900">
                    <Icon className="h-4 w-4 text-[#8b5e3c]" />
                    {platform.name}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-stone-600">
                    {platform.description}
                  </p>
                  <a
                    href={platform.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#8b5e3c] transition hover:text-[#6f462b]"
                  >
                    Visit profile <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SocialConnectionsSection;
