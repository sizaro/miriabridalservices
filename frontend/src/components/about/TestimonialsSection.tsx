import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Chiamaka E.",
    type: "Bride testimonial",
    event: "Traditional and white wedding",
    year: "2025",
    rating: "5.0",
    review:
      "From consultation to wedding morning, the team was calm, professional, and deeply supportive. I felt confident and beautiful all day.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Nadia T.",
    type: "Training student testimonial",
    event: "Bridal beauty training cohort",
    year: "2024",
    rating: "5.0",
    review:
      "The practical sessions were structured and realistic. I gained confidence in both technical skills and client communication.",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "A. Events Collective",
    type: "Partner feedback",
    event: "Planner collaboration",
    year: "2025",
    rating: "5.0",
    review:
      "Their timing discipline and preparation standards make event coordination smoother and stress-free.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-[#f7efe8] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8b5e3c]">
            Testimonials
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-stone-900 sm:text-4xl">
            Stories from brides and students we have served.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="rounded-[1.5rem] border border-stone-200 bg-white p-5"
            >
              <div className="flex items-center gap-3">
                <img
                  src={item.image}
                  alt={`${item.name} placeholder portrait`}
                  className="h-12 w-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="font-semibold text-stone-900">{item.name}</p>
                  <p className="text-xs uppercase tracking-[0.12em] text-stone-500">
                    {item.type}
                  </p>
                </div>
              </div>

              <p className="mt-4 inline-flex items-center gap-1 text-sm text-amber-600">
                <Star className="h-4 w-4 fill-current" />
                {item.rating} rating placeholder
              </p>
              <p className="mt-2 text-sm text-stone-500">
                {item.event} | {item.year}
              </p>
              <p className="mt-4 text-sm leading-7 text-stone-600">
                {item.review}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
