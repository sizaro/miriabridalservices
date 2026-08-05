import { motion } from "framer-motion";

type TeamRole = {
  name: string;
  role: string;
  contribution: string;
  image: string;
};

const teamRoles: TeamRole[] = [
  {
    name: "Miriam A. N.",
    role: "Founder and lead bridal stylist",
    contribution:
      "Leads beauty direction, quality control, and client experience planning.",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Amara D.",
    role: "Makeup artist",
    contribution:
      "Executes complexion detail and finish consistency across event phases.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Naomi K.",
    role: "Hair stylist",
    contribution:
      "Creates durable hairstyles and accessory integration for ceremony flow.",
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Grace L.",
    role: "Bridal consultant",
    contribution:
      "Coordinates communication, schedule readiness, and process clarity.",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Talia M.",
    role: "Event support specialist",
    contribution:
      "Supports logistics, touch-up timing, and on-site transitions.",
    image:
      "https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Collaboration partner",
    role: "Photographer or vendor partner",
    contribution: "Aligns visual storytelling and final presentation moments.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=700&q=80",
  },
];

const BehindEveryBrideSection = () => {
  return (
    <section className="bg-[#f7efe8] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8b5e3c]">
            Behind every bride
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-stone-900 sm:text-4xl">
            Teamwork that powers each bridal story.
          </h2>
          <p className="mt-5 text-base leading-8 text-stone-600">
            Portfolio outcomes are built through coordinated professionals, each
            contributing focused expertise throughout the journey.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {teamRoles.map((member, index) => (
            <motion.article
              key={`${member.name}-${member.role}`}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="rounded-[1.5rem] border border-stone-200 bg-white p-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={member.image}
                  alt={`${member.name} portrait`}
                  className="h-16 w-16 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <h3 className="text-base font-semibold text-stone-900">
                    {member.name}
                  </h3>
                  <p className="text-xs uppercase tracking-[0.12em] text-stone-500">
                    {member.role}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-7 text-stone-600">
                {member.contribution}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BehindEveryBrideSection;
