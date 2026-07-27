import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const highlights = ['Luxury bridal styling', 'Personalized consultations', 'Stress-free planning'];

const HeroSection = () => {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(200,169,126,0.18),_transparent_40%),linear-gradient(135deg,_#fffdf9_0%,_#f7efe8_100%)]"
    >
      <div className="mx-auto grid min-h-[90vh] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-0">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-2xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#e7d4bf] bg-white/80 px-3 py-1 text-sm font-medium text-[#8b5e3c] shadow-sm">
            <Sparkles className="h-4 w-4" />
            Bridal styling with grace and modern elegance
          </div>

          <h1 className="text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl lg:text-6xl">
            Beautiful bridal experiences, crafted with intention.
          </h1>

          <p className="mt-6 text-lg leading-8 text-stone-600">
            From the first consultation to the final reveal, we create refined bridal moments that feel timeless, personal, and effortless.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-[#8b5e3c] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#6f462b]">
              Book a consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a href="#services" className="inline-flex items-center justify-center rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-semibold text-stone-700 transition hover:border-[#c8a97e] hover:text-[#8b5e3c]">
              Explore services
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {highlights.map((item) => (
              <span key={item} className="rounded-full border border-stone-200 bg-white/80 px-3 py-2 text-sm text-stone-600 shadow-sm">
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-[2rem] border border-stone-200 bg-white p-3 shadow-[0_25px_70px_rgba(17,24,39,0.08)] sm:p-4">
          <img src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80" alt="Bride getting ready" className="h-[420px] w-full rounded-[1.5rem] object-cover" />
          <div className="mt-4 rounded-[1.5rem] bg-gradient-to-br from-[#f6e9dc] to-[#e7caa6] p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8b5e3c]">Featured experience</p>
            <h2 className="mt-3 text-2xl font-semibold text-stone-900">Signature Bridal Styling</h2>
            <p className="mt-3 text-sm leading-7 text-stone-700">A polished experience with hair, makeup, and finishing touches that highlight your individual beauty.</p>
            <div className="mt-6 space-y-3">
              {['Private styling session', 'Luxury product and accessory guidance', 'On-site support for your wedding day'].map((item) => (
                <div key={item} className="rounded-2xl bg-white/70 px-4 py-3 text-sm font-medium text-stone-700">{item}</div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
