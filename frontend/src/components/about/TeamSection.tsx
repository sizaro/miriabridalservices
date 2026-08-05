import { motion } from "framer-motion";

const team = [
  {
    name: "Miriam A. N.",
    role: "Founder and Lead Bridal Stylist",
    specialty: "Bridal transformation and consultation",
    experience: "8+ years",
    summary:
      "Leads beauty direction, consultation design, and wedding-day execution standards.",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Amara D.",
    role: "Makeup Artist",
    specialty: "Soft-glam and long-wear bridal makeup",
    experience: "5+ years",
    summary: "Known for polished skin finishes and camera-ready bridal looks.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Naomi K.",
    role: "Hair Stylist",
    specialty: "Updos, texture work, and veil styling",
    experience: "6+ years",
    summary:
      "Designs timeless hairstyles that hold through long wedding schedules.",
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Grace L.",
    role: "Bridal Consultant",
    specialty: "Planning flow and client preparation",
    experience: "4+ years",
    summary:
      "Supports schedule management, prep guidance, and calm coordination.",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Ruth P.",
    role: "Training Instructor",
    specialty: "Student mentorship and practical skill coaching",
    experience: "7+ years",
    summary:
      "Guides students through bridal standards, hygiene, and execution.",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Talia M.",
    role: "Event Support Specialist",
    specialty: "On-site logistics and timing support",
    experience: "3+ years",
    summary:
      "Ensures smooth transitions and readiness during busy event windows.",
    image:
      "https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=900&q=80",
  },
];

const TeamSection = () => {
  return (
    <section className="bg-[#f7efe8] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8b5e3c]">
            Meet the team
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-stone-900 sm:text-4xl">
            The people behind every beautiful experience.
          </h2>
          <p className="mt-5 text-base leading-8 text-stone-600">
            Bridal preparation succeeds through teamwork, professionalism,
            timing, communication, and attention to detail across every stage of
            the day.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {team.map((member, index) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group overflow-hidden rounded-[1.6rem] border border-stone-200 bg-white"
            >
              <div className="overflow-hidden">
                <img
                  src={member.image}
                  alt={`${member.name} portrait`}
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-stone-900">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-semibold uppercase tracking-[0.12em] text-stone-500">
                  {member.role}
                </p>
                <p className="mt-3 text-sm text-stone-700">
                  {member.specialty}
                </p>
                <p className="mt-1 text-sm text-stone-500">
                  Experience: {member.experience}
                </p>
                <p className="mt-3 text-sm leading-7 text-stone-600">
                  {member.summary}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
