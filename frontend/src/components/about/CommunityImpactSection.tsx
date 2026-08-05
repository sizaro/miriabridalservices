import { motion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  GraduationCap,
  Handshake,
  Lightbulb,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

const impactCards = [
  { title: "Skills development", icon: GraduationCap },
  { title: "Mentorship", icon: Users },
  { title: "Employment pathways", icon: Briefcase },
  { title: "Beauty entrepreneurship", icon: Lightbulb },
  { title: "Community workshops", icon: Handshake },
  { title: "Confidence building", icon: Users },
];

const images = [
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1100&q=80",
  "https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&w=1100&q=80",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1100&q=80",
];

const CommunityImpactSection = () => {
  return (
    <section className="bg-[#f7efe8] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8b5e3c]">
              Community impact
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-stone-900 sm:text-4xl">
              Beauty can create confidence, opportunity, and sustainable
              careers.
            </h2>
            <p className="mt-5 text-base leading-8 text-stone-600">
              Beyond commercial services, Miriam Bridal Services supports
              aspiring professionals through mentorship, practical coaching, and
              skill-building activities that strengthen both artistry and
              business readiness.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {impactCards.map((card) => {
                const Icon = card.icon;
                return (
                  <article
                    key={card.title}
                    className="rounded-xl border border-stone-200 bg-white px-4 py-3"
                  >
                    <p className="inline-flex items-center gap-2 text-sm font-semibold text-stone-800">
                      <Icon className="h-4 w-4 text-[#8b5e3c]" />
                      {card.title}
                    </p>
                  </article>
                );
              })}
            </div>

            <div className="mt-8">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-stone-700"
              >
                Learn about training support <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <motion.img
              src={images[0]}
              alt="Mentorship session with beauty students"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4 }}
              className="col-span-2 h-56 w-full rounded-[1.4rem] object-cover"
              loading="lazy"
            />
            <img
              src={images[1]}
              alt="Community workshop practical demonstration"
              className="h-44 w-full rounded-[1.2rem] object-cover"
              loading="lazy"
            />
            <img
              src={images[2]}
              alt="Students collaborating during training"
              className="h-44 w-full rounded-[1.2rem] object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityImpactSection;
