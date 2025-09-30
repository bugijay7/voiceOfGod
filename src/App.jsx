import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Ministries from "./components/Ministries";
import Events from "./components/Events";
import Sermons from "./components/Sermons";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import DonateCTA from "./components/Donate";
import Footer from "./components/Footer";

import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Youtube,
  Instagram,
  Calendar,
  Users,
  Heart,
  BookOpen,
  Mic,
  HandHeart,
  ChevronDown,
} from "lucide-react";

// Main App Component
export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Ministries />
      <Events />
      <Sermons />
      <Testimonials />
      <Contact />
      <DonateCTA />
      <Footer />
    </div>
  );
}
