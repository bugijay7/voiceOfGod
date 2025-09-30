import React, { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";

 function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "general",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out! We will contact you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      interest: "general",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-20 bg-[#F3F7FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0A2540] mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600">
            We'd love to hear from you. Reach out to us today!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-8 shadow-xl"
            >
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-[#0A2540] mb-2"
                >
                  Full Name *
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#0B3D91] focus:outline-none transition-colors"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-[#0A2540] mb-2"
                >
                  Email Address *
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#0B3D91] focus:outline-none transition-colors"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-[#0A2540] mb-2"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#0B3D91] focus:outline-none transition-colors"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="interest"
                  className="block text-sm font-semibold text-[#0A2540] mb-2"
                >
                  I'm interested in *
                </label>
                <select
                  id="interest"
                  required
                  value={formData.interest}
                  onChange={(e) =>
                    setFormData({ ...formData, interest: e.target.value })
                  }
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#0B3D91] focus:outline-none transition-colors"
                >
                  <option value="general">General Inquiry</option>
                  <option value="membership">Joining the Church</option>
                  <option value="ministry">Ministry Involvement</option>
                  <option value="prayer">Prayer Request</option>
                  <option value="counseling">Counseling</option>
                </select>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-[#0A2540] mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#0B3D91] focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#0B3D91] hover:bg-[#DC2626] text-white py-4 rounded-full font-semibold text-lg transition-all duration-200 hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-[#0A2540] mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#60A5FA]/10 p-3 rounded-xl">
                    <Phone className="text-[#0B3D91]" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-[#0A2540]">Phone</div>
                    <a
                      href="tel:+254700000000"
                      className="text-gray-700 hover:text-[#0B3D91]"
                    >
                      +254 700 000 000
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#60A5FA]/10 p-3 rounded-xl">
                    <Mail className="text-[#0B3D91]" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-[#0A2540]">Email</div>
                    <a
                      href="mailto:info@voiceofgodkinoo.org"
                      className="text-gray-700 hover:text-[#0B3D91]"
                    >
                      info@voiceofgodkinoo.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#60A5FA]/10 p-3 rounded-xl">
                    <MapPin className="text-[#0B3D91]" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-[#0A2540]">Address</div>
                    <p className="text-gray-700">
                      Voice of God Church
                      <br />
                      Kinoo, Kiambu County
                      <br />
                      Kenya
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-2 shadow-xl overflow-hidden">
              <div className="bg-gradient-to-br from-[#60A5FA] to-[#0B3D91] h-64 flex items-center justify-center text-white">
                <div className="text-center">
                  <MapPin size={64} className="mx-auto mb-4" />
                  <p className="text-lg font-semibold">Map Placeholder</p>
                  <p className="text-sm mt-2">
                    Embedded Google Map would go here
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;