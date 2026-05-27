import { motion } from "framer-motion";
import {
  HeartHandshake,
  Brain,
  School,
  Sparkles,
} from "lucide-react";

import useScrollReveal from "../hooks/useScrollReveal";

const About = () => {
    const ref = useScrollReveal();
  return (
    <section ref={ref} className="relative overflow-hidden py-14 md:py-18 bg-white">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 blur-3xl opacity-20 rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* TOP SECTION */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            {/* BADGE */}
            <div className="inline-flex items-center px-5 py-2 border-2 border-purple-500 rounded-full mb-6 bg-purple-50">

              <span className="text-purple-600 font-semibold text-sm">
                ✦ About LittleSpark Wellness Book
              </span>

            </div>

            {/* HEADING */}
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">

              Helping Learners Thrive Through{" "}

              <span className="text-purple-600">
                Emotional Intelligence
              </span>

            </h2>

            {/* DESCRIPTION */}
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              LittleSpark Wellness Book provides engaging Social & Emotional
              Learning resources that support emotional growth, resilience,
              mindfulness, and positive classroom experiences for learners and
              educators.
            </p>

            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Our mission is to create emotionally safe learning environments
              through practical SEL books, guided activities, and teacher
              support toolkits.
            </p>

          </motion.div>

          {/* RIGHT CARDS */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6"
          >

            {/* CARD 1 */}
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-gradient-to-br from-purple-600 to-purple-400 text-white p-8 rounded-3xl shadow-2xl"
            >

              <div className="bg-white/20 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                <HeartHandshake size={28} />
              </div>

              <h3 className="text-xl font-bold">
                Emotional Wellbeing
              </h3>

              <p className="mt-3 text-purple-100">
                Supporting emotional awareness and positive mental health.
              </p>

            </motion.div>

            {/* CARD 2 */}
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-gradient-to-br from-orange-500 to-yellow-400 text-white p-8 rounded-3xl shadow-2xl mt-8"
            >

              <div className="bg-white/20 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                <Brain size={28} />
              </div>

              <h3 className="text-xl font-bold">
                SEL Learning
              </h3>

              <p className="mt-3 text-orange-100">
                Interactive books and activities that build emotional intelligence.
              </p>

            </motion.div>

            {/* CARD 3 */}
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white p-8 rounded-3xl shadow-2xl"
            >

              <div className="bg-white/20 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                <School size={28} />
              </div>

              <h3 className="text-xl font-bold">
                Classroom Support
              </h3>

              <p className="mt-3 text-orange-100">
                Resources for teachers to build inclusive learning spaces.
              </p>

            </motion.div>

            {/* CARD 4 */}
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-white border border-purple-100 p-8 rounded-3xl shadow-xl mt-8"
            >

              <div className="bg-purple-100 text-purple-600 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                <Sparkles size={28} />
              </div>

              <h3 className="text-xl font-bold text-gray-800">
                Positive Growth
              </h3>

              <p className="mt-3 text-gray-600">
                Encouraging confidence, empathy, resilience, and mindfulness.
              </p>

            </motion.div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;