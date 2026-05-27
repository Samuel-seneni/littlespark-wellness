import { motion } from "framer-motion";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import useScrollReveal from "../hooks/useScrollReveal";

const Contact = () => {
  const ref = useScrollReveal();
  return (
    <section ref={ref}
      id="contact"
      className="relative py-16 md:py-20 bg-gradient-to-br from-white via-purple-50 to-orange-50 overflow-hidden"
    >

      {/* BACKGROUND GLOW */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-purple-300 blur-3xl opacity-20 rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-orange-300 blur-3xl opacity-20 rounded-full"></div>

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
              ✦ Get In Touch
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Let’s Build{" "}
            <span className="text-purple-600">Emotionally Strong</span>{" "}
            Classrooms
          </h2>

          <p className="mt-4 text-gray-600">
            Reach out for bookings, school partnerships, or SEL toolkit inquiries.
          </p>

        </motion.div>

        {/* CONTENT GRID */}
        <div className="grid lg:grid-cols-2 gap-12 mt-16">

          {/* LEFT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >

            {/* LOCATION */}
            <div className="bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-lg flex items-start gap-4">
              <MapPin className="text-purple-600" size={28} />
              <div>
                <h3 className="font-bold text-gray-900">Location</h3>
                <p className="text-gray-600">Nairobi, Kenya</p>
              </div>
            </div>

            {/* PHONE */}
            <div className="bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-lg flex items-start gap-4">
              <Phone className="text-orange-500" size={28} />
              <div>
                <h3 className="font-bold text-gray-900">Phone</h3>
                <p className="text-gray-600">+254 700 000 000</p>
              </div>
            </div>

            {/* EMAIL */}
            <div className="bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-lg flex items-start gap-4">
              <Mail className="text-purple-600" size={28} />
              <div>
                <h3 className="font-bold text-gray-900">Email</h3>
                <p className="text-gray-600">support@littlesparkbooks.com</p>
              </div>
            </div>

            {/* WHATSAPP CTA */}
            <a
              href="https://wa.me/254700000000"
              target="_blank"
              className="flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-full font-semibold hover:opacity-90 transition shadow-lg"
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
            </a>

          </motion.div>

          {/* RIGHT FORM */}
          <motion.form
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl p-8 space-y-5"
          >

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 border rounded-xl focus:outline-purple-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 border rounded-xl focus:outline-purple-500"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full p-4 border rounded-xl focus:outline-purple-500"
            />

            <textarea
              placeholder="Your Message"
              className="w-full p-4 border rounded-xl h-32 focus:outline-purple-500"
            />

            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-3 rounded-full font-semibold hover:bg-purple-700 transition"
            >
              Send Message
            </button>

          </motion.form>

        </div>

      </div>
    </section>
  );
};

export default Contact;