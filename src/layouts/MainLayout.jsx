import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">

      {/* NAVBAR */}
      <Navbar />

      {/* PAGE CONTENT */}
      <main className="flex-1">
        {children}
      </main>

      {/* FOOTER */}
      <Footer />

    </div>
  );
};

export default MainLayout;