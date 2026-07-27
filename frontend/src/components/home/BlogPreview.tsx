import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Sparkles } from "lucide-react";

const blogPosts = [
  {
    title: "How to Choose the Perfect Bridal Look",
    category: "Beauty Tips",
    description:
      "Discover how to select a bridal style that matches your personality, wedding theme, and natural beauty.",
    image:
      "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "A Bride's Guide to Wedding Day Preparation",
    category: "Wedding Planning",
    description:
      "Important steps every bride should take before the big day to feel confident, relaxed, and prepared.",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Trending Bridal Styles for 2026",
    category: "Bridal Fashion",
    description:
      "Explore modern bridal trends, elegant styling ideas, and inspiration for your dream wedding.",
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=80",
  },
];

const BlogPreview = () => {
  return (
    <section className="bg-[#fffdf9] py-20">
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
            <BookOpen className="h-4 w-4" />
            Bridal Inspiration
          </div>

          <h2 className="text-3xl font-semibold text-stone-900 sm:text-4xl">
            Tips, inspiration, and wedding advice
          </h2>

          <p className="mt-5 text-stone-600">
            Our bridal journal shares helpful guides, beauty inspiration, and
            expert advice to help every bride prepare for her special day.
          </p>
        </motion.div>

        {/* Blog Cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
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
              className="group overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="rounded-full bg-[#f6e9dc] px-3 py-1 text-xs font-medium text-[#8b5e3c]">
                  {post.category}
                </span>

                <h3 className="mt-4 text-xl font-semibold text-stone-900">
                  {post.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-stone-600">
                  {post.description}
                </p>

                <button className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#8b5e3c] transition hover:gap-3">
                  Read Article
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Marketing Banner */}
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
            duration: 0.7,
          }}
          className="mt-14 rounded-[2rem] bg-gradient-to-r from-[#8b5e3c] to-[#c8a97e] p-8 text-center text-white"
        >
          <Sparkles className="mx-auto h-8 w-8" />

          <h3 className="mt-4 text-2xl font-semibold">
            Need personalized bridal advice?
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-white/90">
            Our bridal specialists can guide you through styling choices,
            packages, preparation timelines, and wedding day planning.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogPreview;
