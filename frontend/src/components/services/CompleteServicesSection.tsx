import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const services = [
  {
    id: "classic-bridal-makeup",
    name: "Classic Bridal Makeup",
    description:
      "A complete bridal complexion and eye look with skin prep, contouring, and premium finishing for camera-ready confidence.",
    duration: "2 hrs",
    startingPrice: "$220+",
    availability: "Limited weekend slots",
    promo: "Promo placeholder: seasonal bridal glow add-on",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80",
    cta: "Book Now",
  },
  {
    id: "signature-bridal-hair",
    name: "Signature Bridal Hair Styling",
    description:
      "Custom updos, soft waves, or modern sculpted styles designed around your dress neckline, veil, and accessories.",
    duration: "1.5 hrs",
    startingPrice: "$200+",
    availability: "Open weekdays",
    promo: "Promo placeholder: complimentary veil fitting",
    image:
      "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?auto=format&fit=crop&w=1000&q=80",
    cta: "Learn More",
  },
  {
    id: "bridal-trial-session",
    name: "Bridal Trial Session",
    description:
      "A pre-wedding beauty rehearsal to refine your final look, test products, and lock in your wedding-day styling plan.",
    duration: "2.5 hrs",
    startingPrice: "$280+",
    availability: "By appointment",
    promo: "Promo placeholder: trial credit on select packages",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1000&q=80",
    cta: "Book Now",
  },
  {
    id: "wedding-day-coordination",
    name: "Wedding Day Styling Coordination",
    description:
      "Timeline-aware prep support to ensure smooth transitions for beauty, dressing, portraits, and ceremony readiness.",
    duration: "Half day",
    startingPrice: "$450+",
    availability: "Peak dates fill early",
    promo: "Promo placeholder: weekday coordination rates",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1000&q=80",
    cta: "Learn More",
  },
  {
    id: "bridesmaids-glam",
    name: "Bridesmaids Glam Session",
    description:
      "Cohesive beauty styling for bridesmaids and close family with coordinated tones and efficient prep flow.",
    duration: "45-60 min/person",
    startingPrice: "$110+",
    availability: "Team-based scheduling",
    promo: "Promo placeholder: group booking discounts",
    image:
      "https://images.unsplash.com/photo-1477506350614-fcdc29a3b157?auto=format&fit=crop&w=1000&q=80",
    cta: "Book Now",
  },
  {
    id: "traditional-ceremony-looks",
    name: "Traditional Ceremony Beauty",
    description:
      "Specialized makeup and hair for cultural events requiring outfit transitions and ceremonial styling precision.",
    duration: "3-4 hrs",
    startingPrice: "$380+",
    availability: "Consultation required",
    promo: "Promo placeholder: multi-look event bundle",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1000&q=80",
    cta: "Learn More",
  },
];

const CompleteServicesSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.55 }}
      className="bg-[#f7efe8] py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8b5e3c]">
            Complete services
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-stone-900 sm:text-4xl">
            Premium service cards designed for future backend-driven content.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              whileHover={{ y: -6 }}
              className="overflow-hidden rounded-[1.75rem] border border-stone-200 bg-white shadow-sm"
            >
              <img
                src={service.image}
                alt={service.name}
                className="h-56 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold text-stone-900">
                  {service.name}
                </h3>
                <p className="mt-3 text-sm leading-7 text-stone-600">
                  {service.description}
                </p>

                <div className="mt-5 grid gap-2 text-sm text-stone-700">
                  <p>
                    <span className="font-semibold text-stone-900">
                      Estimated duration:
                    </span>{" "}
                    {service.duration}
                  </p>
                  <p>
                    <span className="font-semibold text-stone-900">
                      Starting price:
                    </span>{" "}
                    {service.startingPrice}
                  </p>
                  <p>
                    <span className="font-semibold text-stone-900">
                      Availability:
                    </span>{" "}
                    {service.availability}
                  </p>
                  <p>
                    <span className="font-semibold text-stone-900">
                      Promotion:
                    </span>{" "}
                    {service.promo}
                  </p>
                </div>

                <button
                  type="button"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-stone-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-stone-700"
                >
                  {service.cta} <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default CompleteServicesSection;
