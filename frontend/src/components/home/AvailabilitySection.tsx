import { motion } from "framer-motion";
import { CalendarCheck, Clock, Phone, CheckCircle2 } from "lucide-react";

const availableDates = [
  {
    date: "August 15",
    day: "Saturday",
    status: "Available",
  },
  {
    date: "August 22",
    day: "Saturday",
    status: "Limited Slots",
  },
  {
    date: "September 5",
    day: "Saturday",
    status: "Available",
  },
];

const workingHours = [
  "Monday - Friday: 8:00 AM - 6:00 PM",
  "Saturday: 8:00 AM - 4:00 PM",
  "Sunday: Consultation Only",
];

const AvailabilitySection = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
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
            <CalendarCheck className="h-4 w-4" />
            Availability Calendar
          </div>

          <h2 className="text-3xl font-semibold text-stone-900 sm:text-4xl">
            Check your preferred wedding date
          </h2>

          <p className="mt-5 text-stone-600">
            Every bride deserves a dedicated experience. Check our available
            dates and reserve your consultation before your wedding day.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Calendar Preview */}
          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="rounded-[2rem] border border-stone-200 bg-[#fffdf9] p-8"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-semibold text-stone-900">
                Upcoming Availability
              </h3>

              <CalendarCheck className="h-7 w-7 text-[#8b5e3c]" />
            </div>

            <div className="mt-8 space-y-4">
              {availableDates.map((item, index) => (
                <motion.div
                  key={item.date}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="flex flex-col gap-4 rounded-2xl bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <h4 className="font-semibold text-stone-900">
                      {item.date}
                    </h4>

                    <p className="text-sm text-stone-500">{item.day}</p>
                  </div>

                  <div className="flex items-center gap-2 text-sm font-medium text-[#8b5e3c]">
                    <CheckCircle2 className="h-4 w-4" />

                    {item.status}
                  </div>
                </motion.div>
              ))}
            </div>

            <button className="mt-8 w-full rounded-full bg-[#8b5e3c] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#6f462b]">
              Request Date Availability
            </button>
          </motion.div>

          {/* Working Hours */}
          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="rounded-[2rem] bg-gradient-to-br from-[#f6e9dc] to-[#e7caa6] p-8"
          >
            <Clock className="h-10 w-10 text-[#8b5e3c]" />

            <h3 className="mt-6 text-2xl font-semibold text-stone-900">
              Our Working Hours
            </h3>

            <p className="mt-3 text-stone-700">
              We work around your schedule to provide consultations, fittings,
              styling sessions, and wedding day support.
            </p>

            <div className="mt-8 space-y-4">
              {workingHours.map((hour) => (
                <div
                  key={hour}
                  className="rounded-xl bg-white/70 px-5 py-4 text-sm text-stone-700"
                >
                  {hour}
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-3 rounded-2xl bg-white/70 p-5">
              <Phone className="h-5 w-5 text-[#8b5e3c]" />

              <div>
                <p className="text-sm font-semibold text-stone-900">
                  Need urgent assistance?
                </p>

                <p className="text-sm text-stone-600">
                  Contact us directly for special arrangements.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AvailabilitySection;
