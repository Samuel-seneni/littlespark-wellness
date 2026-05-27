import { motion } from "framer-motion";

import {
  Sparkles,
  BookOpen,
  NotebookPen,
  Smile,
  Puzzle,
  Star,
} from "lucide-react";

import useScrollReveal from "../hooks/useScrollReveal";

const Services = () => {
  const ref = useScrollReveal();
  const products = [
    {
      icon: <Sparkles size={32} />,
      title: "Affirmation Cards",
      description:
        "Beautifully illustrated daily affirmation cards that build positive self-talk and confidence. Perfect for morning circles, transitions, and reflection moments.",
      tag: "Mindset Building",
      gradient: "from-purple-600 to-purple-400",
    },

    {
      icon: <BookOpen size={32} />,
      title: "Wellness Journal",
      description:
        "A guided journal with prompts designed to help children explore feelings, track moods, and celebrate personal growth throughout the year.",
      tag: "Self-Reflection",
      gradient: "from-orange-500 to-yellow-400",
    },

    {
      icon: <NotebookPen size={32} />,
      title: "SEL Notebook",
      description:
        "Structured activities that weave emotional learning into daily writing with gratitude logs, emotion check-ins, and goal-setting pages.",
      tag: "Daily Practice",
      gradient: "from-purple-600 via-pink-500 to-orange-400",
    },

    {
      icon: <Smile size={32} />,
      title: "Emotion Check-In Cards",
      description:
        "Visual emotion cards that help children identify and express feelings during classroom check-ins and conflict resolution.",
      tag: "Emotional Literacy",
      gradient: "from-pink-500 to-purple-500",
    },

    {
      icon: <Puzzle size={32} />,
      title: "SEL Activity Sheets",
      description:
        "Ready-to-use activity sheets covering empathy, kindness, communication, and problem-solving aligned with core SEL competencies.",
      tag: "Core Competencies",
      gradient: "from-yellow-400 to-orange-500",
    },

    {
      icon: <Star size={32} />,
      title: "Classroom Poster Set",
      description:
        "Vibrant classroom posters featuring feelings charts, growth mindset reminders, and community agreements.",
      tag: "Visual Environment",
      gradient: "from-purple-500 to-indigo-500",
    },
  ];

  return (
    <section ref={ref}
      id="books"
      className="relative overflow-hidden py-16 md:py-20 bg-gradient-to-br from-purple-50 via-white to-orange-50"
    >

      {/* BACKGROUND GLOWS */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-purple-300 opacity-20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-orange-300 opacity-20 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >

          {/* TAG */}
          <div className="inline-flex items-center px-5 py-2 border-2 border-purple-500 rounded-full mb-6 bg-white shadow-sm">

            <span className="text-purple-600 font-semibold text-sm">
              ✦ The Toolkit
            </span>

          </div>

          {/* TITLE */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">

            Everything Your Classroom{" "}

            <span className="text-purple-600 italic">
              Needs
            </span>

          </h2>

          {/* SUBTITLE */}
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            A thoughtfully curated collection of SEL resources designed to
            engage, inspire, and support the whole child.
          </p>

        </motion.div>

        {/* PRODUCTS GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {products.map((product, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -12,
                scale: 1.02,
              }}
              className="group relative"
            >

              {/* CARD */}
              <div className="bg-white/80 backdrop-blur-xl border border-white shadow-xl rounded-3xl p-8 h-full transition duration-300 hover:shadow-2xl">

                {/* ICON */}
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white bg-gradient-to-r ${product.gradient} shadow-lg`}
                >
                  {product.icon}
                </div>

                {/* TITLE */}
                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                  {product.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-4 text-gray-600 leading-relaxed">
                  {product.description}
                </p>

                {/* TAG */}
                <div className="mt-6">

                  <span
                    className={`inline-block px-4 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r ${product.gradient}`}
                  >
                    {product.tag}
                  </span>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Services;