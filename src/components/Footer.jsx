import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  const socialLinks = [
    { icon: FaFacebook, href: "#", color: "hover:bg-blue-600" },
    { icon: FaInstagram, href: "#", color: "hover:bg-pink-500" },
    { icon: FaLinkedin, href: "#", color: "hover:bg-blue-500" },
    { icon: FaYoutube, href: "#", color: "hover:bg-red-500" },
    { icon: FaXTwitter, href: "#", color: "hover:bg-black" },
  ];

  return (
    <footer className="relative bg-gradient-to-br  from-gray-950 via-gray-900 to-black text-gray-300 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-purple-600 opacity-10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-500 opacity-10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

          {/* BRAND */}
          <div className="text-center sm:text-left">

            <h2 className="text-2xl font-bold text-white">
              LittleSpark{" "}
              <span className="text-purple-400">Wellness Hub</span>
            </h2>

            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              A Classroom SEL Toolkit designed to nurture emotional intelligence,
              resilience, and wellbeing in learners through engaging books and activities.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex flex-wrap justify-center sm:justify-start gap-3 mt-6">

              {socialLinks.map((item, i) => {
                const Icon = item.icon;

                return (
                  <a
                    key={i}
                    href={item.href}
                    className={`p-3 bg-white/10 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg ${item.color}`}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}

              {/* WHATSAPP */}
              <a
                href="https://wa.me/254706170473"
                className="p-3 bg-white/10 rounded-full hover:bg-green-500 hover:scale-110 transition-all duration-300"
              >
                <FaWhatsapp size={18} />
              </a>

            </div>

          </div>

          {/* QUICK LINKS */}
          <div className="text-center sm:text-left">

            <h3 className="text-white font-semibold text-lg mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm">

              {["Home", "About", "Books", "Pricing", "Booking", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="hover:text-purple-400 transition hover:translate-x-1 inline-block"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}

            </ul>

          </div>

          {/* CONTACT (FULLY LIVE + PREMIUM) */}
          <div className="text-center sm:text-left">

            <h3 className="text-white font-semibold text-lg mb-5">
              Contact
            </h3>

            <p className="text-sm text-gray-400">
              📍 Nairobi, Kenya
            </p>

            <a
              href="tel:+254706170473"
              className="text-sm text-gray-400 mt-3 block hover:text-purple-400 transition"
            >
              📞 +254 706 170 473
            </a>

            <a
              href="mailto:wambuikirugi19@gmail.com"
              className="text-sm text-gray-400 mt-3 block hover:text-purple-400 transition break-words"
            >
              📧 littlesparkwellnesshub@gmail.com
            </a>

            {/* CTA BUTTON */}
            <a
              href="#booking"
              className="inline-block mt-6 px-6 py-3 bg-gradient-to-r from-purple-600 to-orange-400 text-white rounded-full font-semibold hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              Book Consultation
            </a>

          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-800 mt-14 pt-6">

          {/* BOTTOM BAR */}
          <div className="flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm text-gray-500 gap-3">

            <p>
              © {new Date().getFullYear()} LittleSpark Wellness Hub. All rights reserved.
            </p>

            <p className="text-purple-400 font-medium">
              Building emotionally strong classrooms ✨
            </p>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;