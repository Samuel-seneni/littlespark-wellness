import React, { useState, useEffect } from "react";
import logo from "../assets/logo.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  const sections = [
    "home",
    "about",
    "books",
    "booking",
    "contact",
  ];

  // ACTIVE SECTION
  useEffect(() => {
    const observers = [];

    sections.forEach((id) => {
      const section = document.getElementById(id);

      if (!section) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActive(id);
            }
          });
        },
        {
          threshold: 0.6,
        }
      );

      observer.observe(section);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // SCROLL EFFECTS
  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      setScrolled(currentScroll > 20);

      // hide/show navbar
      if (currentScroll > lastScroll && currentScroll > 120) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (id) =>
    `relative transition duration-300 ${
      active === id
        ? "text-purple-600 font-semibold"
        : "text-gray-700 hover:text-purple-600"
    }`;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: hidden ? -120 : 0 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500
      ${
        scrolled
          ? "bg-white/80 backdrop-blur-2xl shadow-xl py-2 border-b border-white/20"
          : "bg-white/30 backdrop-blur-xl py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* NAVBAR ROW */}
        <div className="flex items-center justify-between">

          {/* LOGO */}
          <a
            href="#home"
            className="flex items-center gap-3 group"
          >

            {/* LOGO IMAGE */}
            <motion.img
              whileHover={{ scale: 1.08, rotate: 3 }}
              transition={{ type: "spring", stiffness: 300 }}
              src={logo}
              alt="LittleSpark"
              className="h-11 w-11 sm:h-12 sm:w-12 object-cover rounded-full border-2 border-purple-300 shadow-lg"
            />

            {/* BRAND */}
            <div className="leading-tight">

              <h1 className="text-sm sm:text-lg font-bold">
                <span className="text-black">LittleSpark </span>
                <span className="text-purple-600">
                  Wellness Hub
                </span>
              </h1>

              <p className="text-[10px] sm:text-xs text-yellow-500 font-medium">
                Classroom SEL Toolkit
              </p>

            </div>

          </a>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8 font-medium">

            {sections.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className={linkClass(id)}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}

                {/* ACTIVE UNDERLINE */}
                {active === id && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 -bottom-2 h-[3px] w-full rounded-full bg-gradient-to-r from-purple-600 to-yellow-400"
                  />
                )}
              </a>
            ))}

          </div>

          {/* CTA */}
          <div className="hidden md:block">

            <motion.a
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 8px 25px rgba(168,85,247,0.4)",
              }}
              whileTap={{ scale: 0.98 }}
              href="#booking"
              className="px-6 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-purple-600 to-yellow-400"
            >
              Book Free Consultation
            </motion.a>

          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-purple-700"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>

          {open && (
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 bg-white/90 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden"
            >

              <div className="flex flex-col p-6 space-y-5">

                {sections.map((id) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    onClick={() => setOpen(false)}
                    className={`text-base ${
                      active === id
                        ? "text-purple-600 font-semibold"
                        : "text-gray-700"
                    }`}
                  >
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </a>
                ))}

                {/* MOBILE CTA */}
                <a
                  href="#booking"
                  onClick={() => setOpen(false)}
                  className="mt-2 text-center px-5 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-purple-600 to-yellow-400"
                >
                  Book Free Consultation
                </a>

              </div>

            </motion.div>
          )}

        </AnimatePresence>

      </div>
    </motion.nav>
  );
};

export default Navbar;