import React from "react";
import { BookOpen } from "lucide-react";

// About Component
const About = () => {
  return (
    <section id="about" className="py-20 bg-[#F3F7FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left - Image/Illustration */}
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <div className="bg-gradient-to-br from-[#60A5FA] to-[#0B3D91] h-96 flex items-center justify-center">
              <div className="text-center text-white p-8">
                <BookOpen size={80} className="mx-auto mb-4" />
                <p className="text-lg italic">
                  "Building a loving community in Kinoo"
                </p>
              </div>
            </div>
          </div>

          {/* Right - Text content */}
          <div>
            <h2 className="text-4xl font-bold text-[#0A2540] mb-6">
              About Our Church
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-lg">
                We're committed to building a loving community in Kinoo that
                worships God, serves neighbors, and raises disciples for Christ.
              </p>
              <p>
                Voice of God Church Ministries was established with a vision to
                be a beacon of hope and transformation in our community. Through
                powerful worship, biblical teaching, and compassionate service,
                we seek to impact lives and spread God's love.
              </p>
              <p>
                Our church is more than just a building—it's a family. We
                welcome everyone, regardless of where you are in your faith
                journey, to come and experience the transforming power of God's
                presence.
              </p>
            </div>
            <button className="mt-8 bg-[#0B3D91] hover:bg-[#0A2540] text-white px-6 py-3 rounded-full font-semibold transition-all duration-200 hover:scale-105">
              Learn More About Us
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
