// Footer Component
import React from "react";
import { Facebook, Youtube, Instagram } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#0A2540] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#60A5FA] to-[#0B3D91] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">VOG</span>
              </div>
              <div>
                <div className="font-bold text-lg leading-tight">Voice of God</div>
                <div className="text-xs text-[#60A5FA]">Church Ministries</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Building a loving community that worships God, serves neighbors, and raises disciples for Christ.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button
                  onClick={() =>
                    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="hover:text-[#60A5FA] transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document.getElementById("ministries")?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="hover:text-[#60A5FA] transition-colors"
                >
                  Ministries
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document.getElementById("events")?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="hover:text-[#60A5FA] transition-colors"
                >
                  Events
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document.getElementById("sermons")?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="hover:text-[#60A5FA] transition-colors"
                >
                  Sermons
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Connect</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button
                  onClick={() =>
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="hover:text-[#60A5FA] transition-colors"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <a href="tel:+254700000000" className="hover:text-[#60A5FA] transition-colors">
                  +254 700 000 000
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@voiceofgodkinoo.org"
                  className="hover:text-[#60A5FA] transition-colors"
                >
                  info@voiceofgodkinoo.org
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-[#60A5FA] p-3 rounded-full transition-all duration-200 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-[#DC2626] p-3 rounded-full transition-all duration-200 hover:scale-110"
                aria-label="YouTube"
              >
                <Youtube size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-[#60A5FA] p-3 rounded-full transition-all duration-200 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
            </div>
            <div className="mt-6">
              <h5 className="font-semibold mb-2">Newsletter</h5>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#60A5FA]"
                />
                <button className="bg-[#60A5FA] hover:bg-[#0B3D91] px-4 py-2 rounded-lg font-semibold transition-colors">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2025 Voice of God Church Ministries - Kinoo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
