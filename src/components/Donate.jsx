// Donate CTA Component
import React from "react";

function DonateCTA() {
  return (
    <section id="donate" className="py-20 bg-gradient-to-r from-[#DC2626] to-[#B91C1C]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Support Our Ministry</h2>
        <p className="text-xl text-white/90 mb-8 leading-relaxed">
          Your generous giving helps us spread the Gospel, serve our community, and build God's kingdom. Every contribution makes a difference.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            className="bg-white text-[#DC2626] hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-xl"
          >
            Give Now
          </button>
          <button
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#DC2626] px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 hover:scale-105"
          >
            Learn About Giving
          </button>
        </div>
        <p className="text-white/80 text-sm mt-8">
          All donations are tax-deductible. You will receive a receipt via email.
        </p>
      </div>
    </section>
  );
}

export default DonateCTA;
