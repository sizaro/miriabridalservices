import { motion } from 'framer-motion';
import { Mail, PhoneCall } from 'lucide-react';

const ContactSection = () => {
  return (
    <motion.section id="contact" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="bg-white py-20">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-stone-200 bg-[linear-gradient(135deg,_#fffdf9_0%,_#f6e9dc_100%)] px-6 py-12 shadow-sm sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8b5e3c]">Contact</p>
            <h2 className="mt-4 text-3xl font-semibold text-stone-900 sm:text-4xl">Let’s create a bridal experience that feels beautifully yours.</h2>
            <p className="mt-5 text-lg leading-8 text-stone-600">Reach out to begin planning your consultation, wedding-day support, or luxury bridal styling experience.</p>
            <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=80" alt="Bridal consultation" className="mt-8 h-[240px] w-full rounded-[1.5rem] object-cover" />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-[1.5rem] border border-stone-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f1e1cf] text-[#8b5e3c]">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-stone-900">Email us</p>
                <a href="mailto:hello@miriambridalservices.com" className="text-sm text-stone-600 hover:text-[#8b5e3c]">hello@miriambridalservices.com</a>
              </div>
            </div>

            <div className="mt-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f1e1cf] text-[#8b5e3c]">
                <PhoneCall className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-stone-900">Call us</p>
                <a href="tel:+18005550199" className="text-sm text-stone-600 hover:text-[#8b5e3c]">+1 (800) 555-0199</a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
