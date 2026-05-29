import { motion } from "framer-motion";
import {
  BookOpen,
  Sparkles,
  NotebookPen,
} from "lucide-react";

import useScrollReveal from "../hooks/useScrollReveal";


const Hero = () => {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="relative overflow-hidden bg-gradient-to-br from-white via-purple-50 to-orange-50 pt-28 pb-16">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            {/* TOP BADGE */}
            <div className="inline-flex items-center px-5 py-2 border-2 border-purple-500 rounded-full mb-6 bg-white/70 backdrop-blur-md shadow-sm">

              <span className="text-purple-600 font-semibold text-sm">
                ✦ Classroom SEL Toolkit
              </span>

            </div>

            {/* MAIN HEADING */}
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">

              Nurture Every Child's{" "}

              <span className="text-purple-600">
                Emotional
              </span>{" "}

              Growth

            </h1>

            {/* DESCRIPTION */}
          <p className="mt-6 text-base sm:text-lg text-gray-600 leading-relaxed w-full max-w-full sm:max-w-xl px-4 sm:px-0 break-words">
            Empower learners and educators with engaging Social & Emotional
            Learning books, emotional intelligence activities, and classroom
            wellness resources designed for meaningful growth.
          </p>

           </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center items-center min-h-[450px]"
          >

            {/* BACKGROUND GLOW */}
            <div className="absolute w-80 h-80 bg-purple-300 opacity-30 blur-3xl rounded-full"></div>

            <div className="relative flex flex-col gap-6 z-10">

              {/* CARD 1 */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="bg-gradient-to-r from-purple-600 to-purple-400 text-white shadow-2xl rounded-3xl px-8 py-6 w-80"
              >
                <div className="flex items-center gap-4">

                  <div className="bg-white/20 p-3 rounded-2xl">
                    <BookOpen size={32} />
                  </div>

                  <div>
                    <h3 className="font-bold text-lg">
                      Wellness Journal
                    </h3>

                    <p className="text-sm text-purple-100">
                      Daily emotional reflection activities
                    </p>
                  </div>

                </div>
              </motion.div>

              {/* CARD 2 */}
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white shadow-2xl rounded-3xl px-8 py-6 w-80 ml-12"
              >
                <div className="flex items-center gap-4">

                  <div className="bg-white/20 p-3 rounded-2xl">
                    <Sparkles size={32} />
                  </div>

                  <div>
                    <h3 className="font-bold text-lg">
                      Affirmation Cards
                    </h3>

                    <p className="text-sm text-orange-100">
                      Confidence & positivity building
                    </p>
                  </div>

                </div>
              </motion.div>

              {/* CARD 3 */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                }}
                className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white shadow-2xl rounded-3xl px-8 py-6 w-80"
              >
                <div className="flex items-center gap-4">

                  <div className="bg-white/20 p-3 rounded-2xl">
                    <NotebookPen size={32} />
                  </div>

                  <div>
                    <h3 className="font-bold text-lg">
                      SEL Notebook
                    </h3>

                    <p className="text-sm text-orange-100">
                      Guided emotional learning exercises
                    </p>
                  </div>

                </div>
              </motion.div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Hero;