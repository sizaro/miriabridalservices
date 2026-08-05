import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";

type ClientStory = {
  clientName: string;
  eventType: string;
  narrative: string;
  quote: string;
  portrait: string;
  weddingImage: string;
};

const clientStories: ClientStory[] = [
  {
    clientName: "Ruth A. (Placeholder)",
    eventType: "Traditional introduction",
    narrative:
      "Ruth wanted a refined look that honored tradition while feeling modern. The team created a calm plan for her multi-stage event and supported transitions smoothly.",
    quote:
      "I felt completely supported and looked like the best version of myself.",
    portrait:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=700&q=80",
    weddingImage:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1100&q=80",
  },
  {
    clientName: "Ada N. (Placeholder)",
    eventType: "Church wedding",
    narrative:
      "Ada's wedding schedule was tight, so preparation and punctuality were central to the plan. Trial refinements helped lock in a look that stayed fresh throughout the day.",
    quote:
      "Every detail felt organized, and my confidence stayed high all day.",
    portrait:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=700&q=80",
    weddingImage:
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1100&q=80",
  },
  {
    clientName: "Maya T. (Placeholder)",
    eventType: "Outdoor wedding",
    narrative:
      "Maya wanted soft elegance that would hold in outdoor conditions. Product strategy and timed touch-ups delivered a consistent finish through portraits and celebration.",
    quote: "The experience was personal, thoughtful, and truly professional.",
    portrait:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=700&q=80",
    weddingImage:
      "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1100&q=80",
  },
];

const ClientStoriesSection = () => {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8b5e3c]">
            Client stories
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-stone-900 sm:text-4xl">
            Bridal experiences told through real moments and outcomes.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {clientStories.map((story, index) => (
            <motion.article
              key={story.clientName}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="rounded-[1.6rem] border border-stone-200 bg-[#fdfaf7] p-4"
            >
              <img
                src={story.weddingImage}
                alt={`${story.clientName} wedding moment`}
                className="h-48 w-full rounded-xl object-cover"
                loading="lazy"
              />
              <div className="mt-4 flex items-center gap-3">
                <img
                  src={story.portrait}
                  alt={`${story.clientName} portrait`}
                  className="h-11 w-11 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="font-semibold text-stone-900">
                    {story.clientName}
                  </p>
                  <p className="text-xs uppercase tracking-[0.12em] text-stone-500">
                    {story.eventType}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-7 text-stone-600">
                {story.narrative}
              </p>
              <blockquote className="mt-4 rounded-xl border border-stone-200 bg-white px-3 py-3 text-sm italic text-stone-700">
                "{story.quote}"
              </blockquote>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 rounded-[1.5rem] border border-stone-200 bg-[#fdfaf7] p-5">
          <p className="inline-flex items-center gap-2 text-sm font-semibold text-stone-800">
            <PlayCircle className="h-4 w-4 text-[#8b5e3c]" />
            Video testimonial placeholders are ready for future client interview
            integration.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClientStoriesSection;
