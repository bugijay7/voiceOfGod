import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

// Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#0A2540] shadow-lg" : "bg-[#0A2540]/95"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-[#60A5FA] to-[#0B3D91] rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">VOG</span>
            </div>
            <div className="text-white">
              <div className="font-bold text-lg leading-tight">Voice of God</div>
              <div className="text-xs text-[#60A5FA]">
                Church Ministries - Kinoo
              </div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {["Home", "About", "Ministries", "Events", "Sermons", "Contact"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-white hover:text-[#60A5FA] transition-colors duration-200 font-medium"
                >
                  {item}
                </button>
              )
            )}
            <button
              onClick={() => scrollToSection("donate")}
              className="bg-[#DC2626] hover:bg-[#B91C1C] text-white px-6 py-2 rounded-full font-semibold transition-all duration-200 hover:scale-105 shadow-lg"
            >
              Donate
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0A2540] border-t border-[#60A5FA]/20">
          <div className="px-4 pt-2 pb-4 space-y-3">
            {["Home", "About", "Ministries", "Events", "Sermons", "Contact"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left text-white hover:text-[#60A5FA] py-2 transition-colors"
                >
                  {item}
                </button>
              )
            )}
            <button
              onClick={() => scrollToSection("donate")}
              className="w-full bg-[#DC2626] text-white py-3 rounded-full font-semibold mt-2"
            >
              Donate
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
