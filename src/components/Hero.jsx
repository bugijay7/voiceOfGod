import React from "react";
import { Calendar, ChevronDown } from "lucide-react";
import heroBg from "../assets/hero-bg.jpg"; // <-- make sure you have this image in assets

// Hero Component
const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Overlay for dark effect */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Hero content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Voice of God Church
            <span className="block text-[#60A5FA] mt-2">
              Ministries — Kinoo
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-200 mb-8 font-light tracking-wide">
            Worship. Teach. Serve. Transform.
          </p>

          {/* Service times */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto mb-10 border border-white/20">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-white">
              <div className="flex items-center gap-2">
                <Calendar className="text-[#60A5FA]" size={24} />
                <div className="text-left">
                  <div className="font-semibold">Sunday Service</div>
                  <div className="text-sm text-gray-300">9:00 AM</div>
                </div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-white/30"></div>
              <div className="flex items-center gap-2">
                <Calendar className="text-[#60A5FA]" size={24} />
                <div className="text-left">
                  <div className="font-semibold">Wednesday Service</div>
                  <div className="text-sm text-gray-300">6:30 PM</div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-[#60A5FA] hover:bg-[#3B82F6] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-xl w-full sm:w-auto"
            >
              Join Us
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("sermons")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 hover:scale-105 backdrop-blur-sm border-2 border-white/30 w-full sm:w-auto"
            >
              Watch Sermons
            </button>
          </div>
        </div>
      </div>

      {/* Scroll-down icon */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-white/60" size={32} />
      </div>
    </section>
  );
};

export default Hero;
