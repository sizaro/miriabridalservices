import { motion } from "framer-motion";
import { CalendarDays, Clock, MapPin, Sparkles } from "lucide-react";

const events = [
  {
    title: "Bridal Beauty Showcase",
    date: "August 24, 2026",
    time: "10:00 AM - 4:00 PM",
    location: "Miriam Bridal Studio",
    description:
      "Experience our latest bridal styles, makeup trends, wedding packages, and meet our professional styling team.",
    image:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Bridal Consultation Weekend",
    date: "September 12, 2026",
    time: "9:00 AM - 5:00 PM",
    location: "Main Studio",
    description:
      "A special consultation event where brides can discuss their wedding vision, styling preferences, and packages.",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Professional Bridal Training",
    date: "October 5, 2026",
    time: "8:00 AM - 3:00 PM",
    location: "Training Academy",
    description:
      "Hands-on beauty and bridal styling training designed for aspiring makeup artists and beauty professionals.",
    image:
      "https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&w=900&q=80",
  },
];

const UpcomingEventsSection = () => {
  return (
    <section className="bg-[#fffdf9] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#f6e9dc] px-4 py-2 text-sm font-medium text-[#8b5e3c]">
            <Sparkles className="h-4 w-4" />
            Upcoming Experiences
          </div>

          <h2 className="text-3xl font-semibold text-stone-900 sm:text-4xl">
            Join our bridal events and special experiences
          </h2>

          <p className="mt-5 text-stone-600">
            Stay connected with our latest bridal showcases, consultation
            sessions, training programs, and wedding inspiration events.
          </p>
        </motion.div>

        {/* Events */}
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {events.map((event, index) => (
            <motion.article
              key={event.title}
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
              className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-64 w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-stone-900">
                  {event.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-stone-600">
                  {event.description}
                </p>

                <div className="mt-6 space-y-3 text-sm text-stone-600">
                  <div className="flex items-center gap-3">
                    <CalendarDays className="h-4 w-4 text-[#8b5e3c]" />

                    {event.date}
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="h-4 w-4 text-[#8b5e3c]" />

                    {event.time}
                  </div>

                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-[#8b5e3c]" />

                    {event.location}
                  </div>
                </div>

                <button className="mt-6 w-full rounded-full border border-[#c8a97e] px-5 py-3 text-sm font-semibold text-[#8b5e3c] transition hover:bg-[#8b5e3c] hover:text-white">
                  Reserve Your Spot
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Future Calendar Connection */}
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
          className="mt-12 rounded-[2rem] bg-gradient-to-r from-[#f6e9dc] to-[#ead0ad] p-8 text-center"
        >
          <h3 className="text-2xl font-semibold text-stone-900">
            Planning your wedding date?
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-stone-700">
            Our availability calendar helps brides check open dates,
            consultations, and booking schedules before starting their bridal
            journey.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default UpcomingEventsSection;
