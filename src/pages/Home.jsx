import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Pricing from "../components/Pricing";
import BookingWidget from "../components/BookingWidget";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <section id="home" className="scroll-mt-20">
        <Hero />
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="scroll-mt-20 py-16 bg-white">
        <About />
      </section>

      {/* SERVICES / BOOKS SECTION */}
      <section id="services" className="scroll-mt-20 py-16 bg-gray-50">
        <Services />
      </section>

      {/* PRICING / PACKAGES */}
      <section id="pricing" className="scroll-mt-20 py-16 bg-white">
        <Pricing />
      </section>

      {/* BOOKING SECTION */}
      <section id="booking" className="scroll-mt-20 py-16 bg-gray-50">
        <BookingWidget />
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="scroll-mt-20 py-16 bg-white">
        <Contact />
      </section>

    </div>
  );
};

export default Home;