import React from "react";
import { Mic, Users, HandHeart, Heart, BookOpen } from "lucide-react";

// Ministries Component
const Ministries = () => {
  const ministries = [
    {
      icon: <Mic size={40} />,
      title: "Worship",
      description:
        "Experience powerful praise and worship that ushers in God's presence every service.",
      cta: "Join Worship Team",
    },
    {
      icon: <Users size={40} />,
      title: "Youth Ministry",
      description:
        "Empowering the next generation through discipleship, fun activities, and mentorship.",
      cta: "Join Youth",
    },
    {
      icon: <HandHeart size={40} />,
      title: "Outreach",
      description:
        "Serving our community through food drives, evangelism, and compassionate care.",
      cta: "Volunteer",
    },
    {
      icon: <Heart size={40} />,
      title: "Children's Ministry",
      description:
        "Nurturing young hearts with age-appropriate biblical teaching and activities.",
      cta: "Register Child",
    },
    {
      icon: <Users size={40} />,
      title: "Women's Ministry",
      description:
        "Building strong, faith-filled women through fellowship, prayer, and Bible study.",
      cta: "Join Women",
    },
    {
      icon: <BookOpen size={40} />,
      title: "Counseling",
      description:
        "Providing spiritual guidance and support for life's challenges and decisions.",
      cta: "Book Session",
    },
  ];

  return (
    <section id="ministries" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0A2540] mb-4">
            Our Ministries
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover opportunities to grow in faith, serve others, and use your
            gifts for God's kingdom.
          </p>
        </div>

        {/* Ministries Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {ministries.map((ministry, index) => (
            <div
              key={index}
              className="bg-[#F3F7FF] rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-[#60A5FA]/20"
            >
              <div className="text-[#0B3D91] mb-4">{ministry.icon}</div>
              <h3 className="text-2xl font-bold text-[#0A2540] mb-3">
                {ministry.title}
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {ministry.description}
              </p>
              <button className="text-[#0B3D91] hover:text-[#DC2626] font-semibold transition-colors duration-200 flex items-center gap-2">
                {ministry.cta}
                <span>→</span>
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Ministries;
