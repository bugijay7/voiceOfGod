import React from "react";

 function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Mwangi",
      quote:
        "This church transformed my life. The love and support I received here helped me through my darkest times.",
      role: "Member since 2020",
    },
    {
      name: "David Ochieng",
      quote:
        "The youth ministry here is incredible. I've grown so much in my faith and made lifelong friends.",
      role: "Youth Leader",
    },
    {
      name: "Grace Njeri",
      quote:
        "I found a family at Voice of God. The teachings are powerful and practical for everyday life.",
      role: "Women's Ministry",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#0B3D91] to-[#0A2540]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Life-Changing Stories
          </h2>
          <p className="text-xl text-gray-300">
            Hear from members of our church family.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#60A5FA] to-[#DC2626] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  {testimonial.name[0]}
                </div>
                <div>
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-300">{testimonial.role}</div>
                </div>
              </div>
              <p className="text-gray-200 italic leading-relaxed">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


export default Testimonials;