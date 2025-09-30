import React from "react";
import { Calendar } from "lucide-react";

 function Events() {
  const events = [
    {
      title: "Sunday Worship Service",
      date: "Every Sunday, 9:00 AM",
      description:
        "Join us for powerful worship, inspiring preaching, and fellowship.",
    },
    {
      title: "Wednesday Bible Study",
      date: "Every Wednesday, 6:30 PM",
      description:
        "Deep dive into God's Word with interactive teaching and discussion.",
    },
    {
      title: "Youth Conference 2025",
      date: "October 15-17, 2025",
      description:
        "Three days of worship, teaching, and fellowship for young people.",
    },
    {
      title: "Community Outreach",
      date: "First Saturday of Every Month",
      description:
        "Serving our community with food distribution and prayer.",
    },
  ];

  return (
    <section id="events" className="py-20 bg-[#F3F7FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0A2540] mb-4">
            Upcoming Events
          </h2>
          <p className="text-xl text-gray-600">
            Join us for these upcoming gatherings and special services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-[#0B3D91]"
            >
              <div className="flex items-start gap-4">
                <div className="bg-[#60A5FA]/10 p-3 rounded-xl">
                  <Calendar className="text-[#0B3D91]" size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#0A2540] mb-2">
                    {event.title}
                  </h3>
                  <p className="text-[#0B3D91] font-semibold mb-3">
                    {event.date}
                  </p>
                  <p className="text-gray-700 mb-4">{event.description}</p>
                  <button className="bg-[#0B3D91] hover:bg-[#DC2626] text-white px-6 py-2 rounded-full font-semibold transition-all duration-200 hover:scale-105">
                    RSVP
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Events;