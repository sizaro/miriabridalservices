import { motion } from "framer-motion";
import {
  ArrowRight,
  LampDesk,
  LocateFixed,
  Sofa,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const studioImages = [
  {
    src: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1400&q=80",
    alt: "Bridal studio reception and waiting area",
  },
  {
    src: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80",
    alt: "Professional makeup stations with mirrors and lighting",
  },
  {
    src: "https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=1200&q=80",
    alt: "Hair styling and preparation corner",
  },
  {
    src: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80",
    alt: "Consultation and training space in studio",
  },
];

const features = [
  { title: "Private consultations", icon: Sofa },
  { title: "Professional lighting", icon: LampDesk },
  { title: "Hygienic tools and workflow", icon: Sparkles },
  { title: "Accessible location", icon: LocateFixed },
];

const StudioTourSection = () => {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8b5e3c]">
            Our studio
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-stone-900 sm:text-4xl">
            A professional environment designed for comfort and confidence.
          </h2>
          <p className="mt-5 text-base leading-8 text-stone-600">
            The studio supports consultations, preparation, fittings, and
            training with privacy, cleanliness, and a calm bridal atmosphere.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {studioImages.map((image, index) => (
            <motion.img
              key={image.src}
              src={image.src}
              alt={image.alt}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`w-full rounded-[1.4rem] object-cover ${
                index === 0 ? "h-[300px] sm:h-[360px]" : "h-56 sm:h-[260px]"
              } ${index === 0 ? "sm:col-span-2" : ""}`}
              loading="lazy"
            />
          ))}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <article
                key={feature.title}
                className="rounded-2xl border border-stone-200 bg-[#fdfaf7] p-4"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#8b5e3c]">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="mt-3 text-sm font-semibold text-stone-800">
                  {feature.title}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-8">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-stone-700"
          >
            Plan your visit <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StudioTourSection;
