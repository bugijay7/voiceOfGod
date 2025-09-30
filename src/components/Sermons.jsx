import React from "react";
import { Mic } from "lucide-react";

function Sermons() {
  const sermons = [
    {
      title: "Walking in Faith",
      preacher: "Pastor John Kamau",
      date: "Sept 28, 2025",
      series: "Faith Series",
    },
    {
      title: "The Power of Prayer",
      preacher: "Pastor Mary Wanjiku",
      date: "Sept 21, 2025",
      series: "Prayer Life",
    },
    {
      title: "Living with Purpose",
      preacher: "Pastor John Kamau",
      date: "Sept 14, 2025",
      series: "Purpose Driven",
    },
    {
      title: "God's Love Revealed",
      preacher: "Pastor Mary Wanjiku",
      date: "Sept 7, 2025",
      series: "Love Series",
    },
  ];

  return (
    <section id="sermons" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0A2540] mb-4">
            Recent Sermons
          </h2>
          <p className="text-xl text-gray-600">
            Catch up on recent messages or revisit your favorites.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sermons.map((sermon, index) => (
            <div
              key={index}
              className="bg-[#F3F7FF] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="bg-gradient-to-br from-[#0B3D91] to-[#60A5FA] h-48 flex items-center justify-center">
                <Mic className="text-white" size={64} />
              </div>
              <div className="p-6">
                <div className="text-xs text-[#DC2626] font-semibold uppercase mb-2">
                  {sermon.series}
                </div>
                <h3 className="text-lg font-bold text-[#0A2540] mb-2">
                  {sermon.title}
                </h3>
                <p className="text-sm text-gray-600 mb-1">{sermon.preacher}</p>
                <p className="text-sm text-gray-500 mb-4">{sermon.date}</p>
                <button className="w-full bg-[#0B3D91] hover:bg-[#DC2626] text-white py-2 rounded-full font-semibold transition-all duration-200">
                  Watch Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-[#60A5FA] hover:bg-[#0B3D91] text-white px-8 py-3 rounded-full font-semibold transition-all duration-200 hover:scale-105">
            View All Sermons
          </button>
        </div>
      </div>
    </section>
  );
}

export default Sermons;
