"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

export default function Sample4() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-[#0a192f] flex items-center justify-center p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-5xl"
      >
        {/* Main Business Card */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-[#0d1f3a] rounded-2xl shadow-2xl overflow-hidden relative mb-8"
        >
          {/* Accent Shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#628ccb] to-[#7ba1d6] opacity-20 rounded-bl-full transform rotate-45"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-[#628ccb] to-[#7ba1d6] opacity-10 rounded-tr-full"></div>

          <div className="grid md:grid-cols-2 gap-8 p-12 relative">
            {/* Left Side - Logo and Company Info */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center space-x-4"
              >
                <div className="w-48 h-12 relative">
                  <Image
                    src="https://www.ivey.solutions/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FiveySolutionsLogo.ab11ab3a.png&w=3840&q=75"
                    alt="Ivey Solutions Logo"
                    fill
                    style={{ objectFit: "contain" }}
                    className="brightness-0 invert" // Makes the logo white
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-bold text-white">
                  Tech Talent Solutions
                </h2>
                <div className="space-y-3">
                  <p className="text-[#628ccb] text-lg font-semibold">
                    SPECIALIZED TECH RECRUITMENT
                  </p>
                  <p className="text-gray-300 text-base">
                    Connecting innovative tech companies with exceptional
                    talent. Specializing in software development, cloud
                    architecture, and digital transformation roles.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="space-y-4 text-gray-300"
              >
                <div className="flex items-center space-x-3">
                  <FaMapMarkerAlt className="text-[#628ccb]" />
                  <span>Silicon Valley Office, CA</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaEnvelope className="text-[#628ccb]" />
                  <span>talent@iveysolutions.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaPhone className="text-[#628ccb]" />
                  <span>+1 (555) 234-5678</span>
                </div>
              </motion.div>
            </div>

            {/* Right Side - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-[#0a192f]/50 p-8 rounded-xl backdrop-blur-sm"
            >
              <h3 className="text-2xl font-bold text-white mb-2">
                Looking for Top Tech Talent?
              </h3>
              <p className="text-gray-300 mb-6">
                Let us help you find your next tech superstar
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#628ccb] transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#628ccb] transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows={4}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#628ccb] transition-colors resize-none"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#628ccb] to-[#7ba1d6] text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#628ccb]/20"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>

        {/* Powered By Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center text-gray-400 text-sm"
        >
          Powered by Savvy Software
        </motion.div>
      </motion.div>
    </div>
  );
}
