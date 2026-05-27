import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

import useScrollReveal from "../hooks/useScrollReveal";

const Pricing = () => {
  const ref = useScrollReveal();
  const plans = [
    {
      name: "Starter Pack",
      price: "KSh 2,500",
      description: "Perfect for individual learners and parents.",
      features: [
        "Affirmation Cards",
        "SEL Notebook",
        "Emotion Check-in Guide",
        "Basic Support",
      ],
      gradient: "from-purple-600 to-purple-400",
      highlight: false,
    },

    {
      name: "Teacher Toolkit",
      price: "KSh 7,500",
      description: "Ideal for teachers and small classrooms.",
      features: [
        "Everything in Starter Pack",
        "Wellness Journal",
        "SEL Activity Sheets",
        "Classroom Posters",
        "Priority Support",
      ],
      gradient: "from-orange-500 to-yellow-400",
      highlight: true,
    },

    {
      name: "School Package",
      price: "KSh 25,000",
      description: "Complete SEL implementation for schools.",
      features: [
        "All Toolkit Resources",
        "Multi-class License",
        "Teacher Training Guide",
        "Custom School Support",
        "Dedicated Assistance",
      ],
      gradient: "from-purple-600 via-pink-500 to-orange-400",
      highlight: false,
    },
  ];

  return (
    <section ref={ref}
      id="pricing"
      className="relative py-16 md:py-20 bg-gradient-to-br from-white via-purple-50 to-orange-50 overflow-hidden"
    >

      {/* BACKGROUND GLOW */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-purple-300 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-orange-300 opacity-20 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >

          <div className="inline-flex items-center px-5 py-2 border-2 border-purple-500 rounded-full mb-6 bg-white shadow-sm">
            <span className="text-purple-600 font-semibold text-sm">
              ✦ Pricing Plans
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Choose the Right{" "}
            <span className="text-purple-600">SEL Package</span>
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Flexible SEL toolkits designed for learners, teachers, and schools.
          </p>

        </motion.div>

        {/* PRICING GRID */}
        <div className="grid md:grid-cols-3 gap-10 mt-20">

          {plans.map((plan, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -12, scale: 1.03 }}
              className={`relative rounded-3xl p-8 shadow-xl bg-white/80 backdrop-blur-xl border ${
                plan.highlight
                  ? "border-orange-400 scale-105"
                  : "border-white"
              }`}
            >

              {/* MOST POPULAR BADGE */}
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                  Most Popular
                </div>
              )}

              {/* PLAN NAME */}
              <h3 className="text-2xl font-bold text-gray-900">
                {plan.name}
              </h3>

              {/* PRICE */}
              <p className="text-3xl font-bold mt-4 text-gray-900">
                {plan.price}
              </p>

              {/* DESCRIPTION */}
              <p className="text-gray-600 mt-3">
                {plan.description}
              </p>

              {/* FEATURES */}
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle className="text-green-500" size={18} />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* BUTTON */}
              <a
                href="#booking"
                className={`mt-8 block text-center px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r ${plan.gradient} hover:opacity-90 transition`}
              >
                Get Started
              </a>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Pricing;