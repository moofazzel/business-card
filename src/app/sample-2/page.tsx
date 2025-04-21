"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLightbulb,
  FaLinkedin,
  FaPhone,
  FaRocket,
  FaTimes,
  FaTwitter,
  FaUser,
} from "react-icons/fa";
import { MdEmail, MdSubject } from "react-icons/md";

export default function Sample2() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
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
    // Here you would typically handle the form submission
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setIsContactModalOpen(false);
  };

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300,
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.3,
      },
    },
  };

  const modalBackdropVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      transition: { delay: 0.1, duration: 0.3 },
    },
  };

  const modalContentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const inputGroupVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-gradient-to-br from-emerald-900 to-teal-800">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(100,255,200,0.1),rgba(0,0,0,0))]" />

        {/* Geometric shapes */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-emerald-500/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-teal-500/10 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Additional geometric shapes */}
        <motion.div
          className="absolute top-1/3 left-1/3 w-40 h-40 bg-emerald-400/5 rounded-lg rotate-45"
          animate={{
            rotate: [45, 90, 45],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-1/3 right-1/3 w-60 h-60 bg-teal-400/5 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating triangles */}
        <motion.div
          className="absolute top-1/5 left-1/5 w-0 h-0 border-l-[30px] border-r-[30px] border-b-[52px] border-l-transparent border-r-transparent border-b-emerald-400/10"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-1/5 right-1/5 w-0 h-0 border-l-[40px] border-r-[40px] border-b-[69px] border-l-transparent border-r-transparent border-b-teal-400/10"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12">
        {/* Main Content */}
        <div className="w-full max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left space-y-6"
            >
              <motion.h1
                className="text-5xl md:text-6xl font-bold text-white"
                style={{
                  textShadow: "0 0 20px rgba(100,255,200,0.3)",
                }}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-500">
                  NovaTech
                </span>
              </motion.h1>

              <motion.p
                className="text-gray-300 text-xl leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Pioneering the future of digital innovation with cutting-edge
                solutions.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex space-x-4"
              >
                {[
                  { icon: FaFacebook, delay: 0 },
                  { icon: FaInstagram, delay: 0.1 },
                  { icon: FaTwitter, delay: 0.2 },
                  { icon: FaLinkedin, delay: 0.3 },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className="text-white/70 text-2xl hover:text-white transition-colors"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ delay: social.delay }}
                  >
                    <social.icon />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Side - Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative w-full max-w-md mx-auto p-8 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-emerald-600/20 to-teal-700/20 backdrop-blur-md border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-600/10" />

                <div className="relative z-10 text-center space-y-6">
                  <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                    <FaLightbulb className="text-4xl text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white">
                    Innovate With Us
                  </h3>
                  <p className="text-white/80">
                    Transform your ideas into reality with our expert team.
                  </p>

                  <motion.button
                    onClick={() => setIsContactModalOpen(true)}
                    className="w-full px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-lg font-medium tracking-wide group relative overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-white/20 translate-y-full"
                      whileHover={{ translateY: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                    <span className="relative flex items-center justify-center gap-2">
                      <FaRocket className="text-lg" /> Get Started
                    </span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Powered by Savvy Software */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-4 text-gray-400 text-sm tracking-wider"
        >
          Powered by{" "}
          <span className="font-semibold text-emerald-400">Savvy Software</span>
        </motion.div>
      </div>

      {/* Contact Modal */}
      <AnimatePresence>
        {isContactModalOpen && (
          <motion.div
            variants={modalBackdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center"
            onClick={() => setIsContactModalOpen(false)}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white relative rounded-xl shadow-2xl max-w-md w-full mx-4 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white p-6 pb-8 relative">
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsContactModalOpen(false)}
                  className="absolute top-4 right-4 text-white/80 hover:text-white"
                >
                  <FaTimes />
                </motion.button>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <FaEnvelope className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Get in Touch</h3>
                    <p className="text-white/80 text-sm">
                      We'd love to hear from you
                    </p>
                  </div>
                </div>
              </div>

              <motion.form
                onSubmit={handleSubmit}
                variants={modalContentVariants}
                initial="hidden"
                animate="visible"
                className="p-6 space-y-5"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.div
                    variants={inputGroupVariants}
                    className="relative"
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-emerald-500">
                        <FaUser />
                      </div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your Name"
                        className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all duration-200"
                        required
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    variants={inputGroupVariants}
                    className="relative"
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-emerald-500">
                        <MdEmail />
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email Address"
                        className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all duration-200"
                        required
                      />
                    </div>
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.div
                    variants={inputGroupVariants}
                    className="relative"
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-emerald-500">
                        <FaPhone />
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Phone Number"
                        className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all duration-200"
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    variants={inputGroupVariants}
                    className="relative"
                  >
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-emerald-500">
                        <MdSubject />
                      </div>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Subject"
                        className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all duration-200"
                        required
                      />
                    </div>
                  </motion.div>
                </div>

                <motion.div variants={inputGroupVariants}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your Message"
                    rows={4}
                    className="block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all duration-200 resize-none"
                    required
                  ></textarea>
                </motion.div>

                <motion.div
                  variants={inputGroupVariants}
                  className="flex justify-end space-x-3 pt-2"
                >
                  <motion.button
                    type="button"
                    onClick={() => setIsContactModalOpen(false)}
                    className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Cancel
                  </motion.button>
                  <motion.button
                    type="submit"
                    className="px-6 py-2 bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-md shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2"
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 5px 15px rgba(100,255,200,0.2)",
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaRocket className="text-sm" />
                    Send Message
                  </motion.button>
                </motion.div>
              </motion.form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
