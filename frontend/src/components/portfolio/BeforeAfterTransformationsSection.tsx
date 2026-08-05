import { motion } from "framer-motion";

type Transformation = {
  id: string;
  bride: string;
  desiredLook: string;
  preparation: string;
  decision: string;
  result: string;
  beforeImage: string;
  afterImage: string;
};

const transformations: Transformation[] = [
  {
    id: "tf-1",
    bride: "Bride Placeholder A",
    desiredLook:
      "Natural radiant finish with defined eyes for church lighting.",
    preparation: "Hydration-focused skin prep and balanced primer layering.",
    decision: "Soft contour and neutral lip for timeless portraits.",
    result:
      "Fresh, camera-ready beauty that lasted across ceremony and reception.",
    beforeImage:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "tf-2",
    bride: "Bride Placeholder B",
    desiredLook: "Elegant traditional styling with stronger eye definition.",
    preparation:
      "Oil-control prep and layered setting strategy for warm conditions.",
    decision:
      "Structured bun and accessory placement for long-event resilience.",
    result: "Polished, balanced transformation with stable finish all day.",
    beforeImage:
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1000&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "tf-3",
    bride: "Bride Placeholder C",
    desiredLook: "Outdoor glow look with soft texture and photo consistency.",
    preparation: "Weather-adaptive product matching and touch-up mapping.",
    decision: "Long-wear base and movement-friendly hairstyle.",
    result:
      "Consistent transformation from daytime ceremony to sunset portraits.",
    beforeImage:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1000&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1000&q=80",
  },
];

const BeforeAfterTransformationsSection = () => {
  return (
    <section className="bg-[#f7efe8] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8b5e3c]">
            Before and after transformations
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-stone-900 sm:text-4xl">
            Transformation stories that show consistent quality and care.
          </h2>
        </div>

        <div className="mt-10 space-y-8">
          {transformations.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="rounded-[1.8rem] border border-stone-200 bg-white p-5 sm:p-6"
            >
              <div className="grid gap-4 lg:grid-cols-2">
                <img
                  src={item.beforeImage}
                  alt={`${item.bride} before styling`}
                  className="h-64 w-full rounded-xl object-cover"
                  loading="lazy"
                />
                <img
                  src={item.afterImage}
                  alt={`${item.bride} after styling`}
                  className="h-64 w-full rounded-xl object-cover"
                  loading="lazy"
                />
              </div>

              <div className="mt-5">
                <h3 className="text-xl font-semibold text-stone-900">
                  {item.bride}
                </h3>
                <div className="mt-3 space-y-2 text-sm leading-7 text-stone-600">
                  <p>
                    <span className="font-semibold text-stone-800">
                      Desired look:
                    </span>{" "}
                    {item.desiredLook}
                  </p>
                  <p>
                    <span className="font-semibold text-stone-800">
                      Preparation:
                    </span>{" "}
                    {item.preparation}
                  </p>
                  <p>
                    <span className="font-semibold text-stone-800">
                      Styling decisions:
                    </span>{" "}
                    {item.decision}
                  </p>
                  <p>
                    <span className="font-semibold text-stone-800">
                      Final result:
                    </span>{" "}
                    {item.result}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterTransformationsSection;
