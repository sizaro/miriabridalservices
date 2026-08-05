import { motion } from "framer-motion";
import { CalendarClock, MessageCircle, Send } from "lucide-react";

const bookingSteps = [
  "Share event date, venue, and bridal party size.",
  "Receive package guidance or a tailored proposal.",
  "Secure your date with a deposit and agreement.",
  "Attend your consultation and trial if included.",
];

const ContactInquirySection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55 }}
      className="bg-[#f7efe8] py-20"
    >
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div className="rounded-[1.75rem] border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8b5e3c]">
            Inquiry form
          </p>
          <h3 className="mt-3 text-2xl font-semibold text-stone-900">
            Tell us about your event
          </h3>
          <form className="mt-6 grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-medium text-stone-700">
              Full name
              <input
                type="text"
                placeholder="Your name"
                className="mt-2 w-full rounded-xl border border-stone-300 bg-[#fdfaf7] px-4 py-3 text-sm text-stone-800 outline-none transition focus:border-stone-500"
              />
            </label>

            <label className="text-sm font-medium text-stone-700">
              Email address
              <input
                type="email"
                placeholder="you@example.com"
                className="mt-2 w-full rounded-xl border border-stone-300 bg-[#fdfaf7] px-4 py-3 text-sm text-stone-800 outline-none transition focus:border-stone-500"
              />
            </label>

            <label className="text-sm font-medium text-stone-700">
              Phone number
              <input
                type="tel"
                placeholder="(000) 000-0000"
                className="mt-2 w-full rounded-xl border border-stone-300 bg-[#fdfaf7] px-4 py-3 text-sm text-stone-800 outline-none transition focus:border-stone-500"
              />
            </label>

            <label className="text-sm font-medium text-stone-700">
              Event date
              <input
                type="date"
                className="mt-2 w-full rounded-xl border border-stone-300 bg-[#fdfaf7] px-4 py-3 text-sm text-stone-800 outline-none transition focus:border-stone-500"
              />
            </label>

            <label className="text-sm font-medium text-stone-700 sm:col-span-2">
              Service interest
              <select className="mt-2 w-full rounded-xl border border-stone-300 bg-[#fdfaf7] px-4 py-3 text-sm text-stone-800 outline-none transition focus:border-stone-500">
                <option>Bridal hair and makeup</option>
                <option>Wedding day coordination</option>
                <option>Full bridal package</option>
                <option>Custom quote</option>
              </select>
            </label>

            <label className="text-sm font-medium text-stone-700 sm:col-span-2">
              Event details
              <textarea
                rows={4}
                placeholder="Share venue, party size, and any details we should know"
                className="mt-2 w-full rounded-xl border border-stone-300 bg-[#fdfaf7] px-4 py-3 text-sm text-stone-800 outline-none transition focus:border-stone-500"
              />
            </label>

            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-stone-700 sm:col-span-2 sm:w-fit"
            >
              Submit inquiry <Send className="h-4 w-4" />
            </button>
          </form>
        </div>

        <div className="rounded-[1.75rem] border border-stone-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8b5e3c]">
            What happens next
          </p>
          <h3 className="mt-3 text-2xl font-semibold text-stone-900">
            Our response and booking process
          </h3>

          <div className="mt-6 space-y-4">
            {bookingSteps.map((step, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                className="rounded-2xl border border-stone-200 bg-[#fdfaf7] px-4 py-4"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8b5e3c]">
                  Step {index + 1}
                </p>
                <p className="mt-2 text-sm leading-7 text-stone-600">{step}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-stone-200 bg-[#fdfaf7] px-4 py-4">
            <p className="inline-flex items-center gap-2 text-sm font-semibold text-stone-800">
              <CalendarClock className="h-4 w-4 text-[#8b5e3c]" />
              Consultation slots are limited during peak season.
            </p>
          </div>

          <div className="mt-4 rounded-2xl border border-stone-200 bg-[#fdfaf7] px-4 py-4">
            <p className="inline-flex items-center gap-2 text-sm font-semibold text-stone-800">
              <MessageCircle className="h-4 w-4 text-[#8b5e3c]" />
              Fastest response: include event date and location in your message.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactInquirySection;
