import { motion } from "framer-motion";
import { Award, Heart, Sparkles } from "lucide-react";

const teamMembers = [
  {
    name: "Miriam",
    role: "Founder & Lead Bridal Stylist",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Sarah",
    role: "Makeup & Beauty Specialist",
    image:
      "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Grace",
    role: "Wedding Planning Consultant",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
  },
];

const TeamPreview = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#f6e9dc] px-4 py-2 text-sm font-medium text-[#8b5e3c]">
            <Sparkles className="h-4 w-4" />
            Our Bridal Experts
          </div>

          <h2 className="text-3xl font-semibold text-stone-900 sm:text-4xl">
            Meet the team behind your perfect bridal experience
          </h2>

          <p className="mt-5 text-stone-600">
            Our passionate team combines beauty expertise, creativity, and
            personal care to make every bride feel confident and celebrated.
          </p>
        </motion.div>

        {/* Team Cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              className="group overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-80 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-stone-900">
                  {member.name}
                </h3>

                <p className="mt-2 text-sm text-[#8b5e3c]">{member.role}</p>

                <div className="mt-5 flex items-center gap-3 text-sm text-stone-600">
                  <Heart className="h-4 w-4 text-[#c8a97e]" />
                  Creating unforgettable bridal moments
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 flex flex-col items-center justify-center gap-4 rounded-3xl bg-[#f7efe8] p-8 text-center sm:flex-row sm:text-left"
        >
          <Award className="h-10 w-10 text-[#8b5e3c]" />

          <div>
            <h3 className="font-semibold text-stone-900">
              Professional bridal specialists
            </h3>

            <p className="mt-1 text-sm text-stone-600">
              Dedicated to beauty, elegance, and exceptional service from
              consultation to wedding day.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamPreview;
