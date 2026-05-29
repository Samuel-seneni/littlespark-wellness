import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MessageCircle } from "lucide-react";

import useScrollReveal from "../hooks/useScrollReveal";

const BookingWidget = () => {
  const ref = useScrollReveal();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    role: "",
    package: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // WhatsApp direct booking
  const handleWhatsApp = () => {
    const text = `
Hello LittleSpark 👋

My Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}
Role: ${form.role}
Package: ${form.package}

Message: ${form.message}
    `;

    const url = `https://wa.me/254706170473?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Request submitted successfully! We will contact you soon.");
    setForm({
      name: "",
      phone: "",
      email: "",
      role: "",
      package: "",
      message: "",
    });
  };

  return (
    <section ref={ref}
      id="booking"
      className="relative py-16 md:py-20 bg-gradient-to-br from-purple-50 via-white to-orange-50 overflow-hidden"
    >

      {/* BACKGROUND GLOW */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-purple-300 blur-3xl opacity-20 rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-orange-300 blur-3xl opacity-20 rounded-full"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >

          <div className="inline-flex items-center px-5 py-2 border-2 border-purple-500 rounded-full mb-6 bg-white shadow-sm">
            <span className="text-purple-600 font-semibold text-sm">
              ✦ Book Free Consultation
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Start Your{" "}
            <span className="text-purple-600">SEL Journey</span>{" "}
            Today
          </h2>

          <p className="mt-4 text-gray-600">
            Book a consultation or request your LittleSpark SEL Toolkit instantly.
          </p>

        </motion.div>

        {/* FORM */}
        <motion.form
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl p-8 grid md:grid-cols-2 gap-6"
        >

          {/* NAME */}
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="p-4 border rounded-xl focus:outline-purple-500"
          />

          {/* PHONE */}
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="p-4 border rounded-xl focus:outline-purple-500"
          />

          {/* EMAIL */}
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="p-4 border rounded-xl focus:outline-purple-500 md:col-span-2"
          />

          {/* ROLE */}
          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            className="p-4 border rounded-xl focus:outline-purple-500"
          >
            <option value="">Select Role</option>
            <option>Teacher</option>
            <option>School Admin</option>
            <option>Parent</option>
            <option>Student</option>
          </select>

          {/* PACKAGE */}
          <select
            name="package"
            value={form.package}
            onChange={handleChange}
            className="p-4 border rounded-xl focus:outline-purple-500"
          >
            <option value="">Select Package</option>
            <option>Starter Pack</option>
            <option>Teacher Toolkit</option>
            <option>School Package</option>
          </select>

          {/* MESSAGE */}
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="p-4 border rounded-xl md:col-span-2 h-32 focus:outline-purple-500"
          />

          {/* BUTTONS */}
          <div className="md:col-span-2 flex flex-col md:flex-row gap-4">

            {/* SUBMIT */}
            <button
              type="submit"
              className="flex-1 flex items-center justify-center gap-2 bg-purple-600 text-white py-3 rounded-full font-semibold hover:bg-purple-700 transition"
            >
              <Send size={18} />
              Submit Request
            </button>

            {/* WHATSAPP */}
            <button
              type="button"
              onClick={handleWhatsApp}
              className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-full font-semibold hover:opacity-90 transition"
            >
              <MessageCircle size={18} />
              Book via WhatsApp
            </button>

          </div>

        </motion.form>

      </div>
    </section>
  );
};

export default BookingWidget;