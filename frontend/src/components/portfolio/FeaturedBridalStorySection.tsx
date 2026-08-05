import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, MapPin, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

type StoryImage = {
  src: string;
  alt: string;
};

type FeaturedStory = {
  brideName: string;
  eventType: string;
  location: string;
  date: string;
  packageName: string;
  vision: string;
  consultation: string;
  preparation: string;
  stylingApproach: string;
  challenge: string;
  outcome: string;
  testimonial: string;
  images: StoryImage[];
};

const featuredStory: FeaturedStory = {
  brideName: "Ariana M. (Placeholder)",
  eventType: "Church wedding and reception",
  location: "Salt Lake City, Utah",
  date: "June 2026",
  packageName: "Premium Bridal Experience",
  vision:
    "A timeless bridal look with luminous skin, elegant eyes, and a hairstyle that remained polished throughout a full wedding schedule.",
  consultation:
    "During consultation, we aligned makeup finish with ceremony lighting, selected complementary hair structure for veil placement, and mapped the preparation timeline.",
  preparation:
    "Skin prep and product selection were customized for long wear, camera flash, and the bride's comfort across ceremony and reception transitions.",
  stylingApproach:
    "The team balanced modern softness with traditional elegance, using layered blending techniques and resilient set methods for all-day consistency.",
  challenge:
    "A tight transition window between ceremony and portraits required proactive sequencing, fast touch-up planning, and coordinated teamwork.",
  outcome:
    "The final result was calm execution, consistent beauty in every frame, and a bride who felt confident and fully supported throughout her day.",
  testimonial:
    "I felt seen from our first consultation. The final look was exactly what I hoped for, and the support on wedding morning made every moment feel easier.",
  images: [
    {
      src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
      alt: "Featured bride final portrait",
    },
    {
      src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80",
      alt: "Consultation and product planning",
    },
    {
      src: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80",
      alt: "Trial session hairstyle preparation",
    },
    {
      src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80",
      alt: "Wedding morning styling process",
    },
  ],
};

const FeaturedBridalStorySection = () => {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.98fr_1.02fr] lg:px-8 lg:items-start">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={featuredStory.images[0].src}
            alt={featuredStory.images[0].alt}
            className="h-[520px] w-full rounded-[2rem] object-cover shadow-md"
            loading="lazy"
          />
          <div className="mt-4 grid grid-cols-3 gap-3">
            {featuredStory.images.slice(1).map((image) => (
              <img
                key={image.src}
                src={image.src}
                alt={image.alt}
                className="h-28 w-full rounded-xl object-cover"
                loading="lazy"
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8b5e3c]">
            Featured bridal story
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-stone-900 sm:text-4xl">
            A complete case study from vision to final reveal.
          </h2>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <article className="rounded-xl border border-stone-200 bg-[#fdfaf7] px-4 py-3">
              <p className="text-xs uppercase tracking-[0.14em] text-stone-500">
                Bride
              </p>
              <p className="mt-1 font-semibold text-stone-900">
                {featuredStory.brideName}
              </p>
            </article>
            <article className="rounded-xl border border-stone-200 bg-[#fdfaf7] px-4 py-3">
              <p className="text-xs uppercase tracking-[0.14em] text-stone-500">
                Event
              </p>
              <p className="mt-1 font-semibold text-stone-900">
                {featuredStory.eventType}
              </p>
            </article>
            <article className="rounded-xl border border-stone-200 bg-[#fdfaf7] px-4 py-3">
              <p className="inline-flex items-center gap-1 text-xs uppercase tracking-[0.14em] text-stone-500">
                <MapPin className="h-3 w-3" />
                Location
              </p>
              <p className="mt-1 font-semibold text-stone-900">
                {featuredStory.location}
              </p>
            </article>
            <article className="rounded-xl border border-stone-200 bg-[#fdfaf7] px-4 py-3">
              <p className="inline-flex items-center gap-1 text-xs uppercase tracking-[0.14em] text-stone-500">
                <CalendarDays className="h-3 w-3" />
                Date
              </p>
              <p className="mt-1 font-semibold text-stone-900">
                {featuredStory.date}
              </p>
            </article>
          </div>

          <p className="mt-6 rounded-full border border-[#d8b89a] bg-[#f7efe8] px-4 py-2 text-sm font-semibold text-[#8b5e3c]">
            Package selected: {featuredStory.packageName}
          </p>

          <div className="mt-6 space-y-4 text-sm leading-7 text-stone-600">
            <p>
              <span className="font-semibold text-stone-800">Vision:</span>{" "}
              {featuredStory.vision}
            </p>
            <p>
              <span className="font-semibold text-stone-800">
                Consultation:
              </span>{" "}
              {featuredStory.consultation}
            </p>
            <p>
              <span className="font-semibold text-stone-800">Preparation:</span>{" "}
              {featuredStory.preparation}
            </p>
            <p>
              <span className="font-semibold text-stone-800">
                Styling approach:
              </span>{" "}
              {featuredStory.stylingApproach}
            </p>
            <p>
              <span className="font-semibold text-stone-800">
                Challenge addressed:
              </span>{" "}
              {featuredStory.challenge}
            </p>
            <p>
              <span className="font-semibold text-stone-800">
                Final outcome:
              </span>{" "}
              {featuredStory.outcome}
            </p>
          </div>

          <blockquote className="mt-6 rounded-2xl border border-stone-200 bg-[#fdfaf7] p-5">
            <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-[#8b5e3c]">
              <Sparkles className="h-4 w-4" />
              Client testimonial
            </p>
            <p className="mt-3 text-base italic leading-8 text-stone-700">
              "{featuredStory.testimonial}"
            </p>
          </blockquote>

          <div className="mt-7">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-stone-700"
            >
              Book a similar experience <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedBridalStorySection;
