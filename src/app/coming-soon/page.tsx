"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaTimes,
  FaTwitter,
  FaUser,
} from "react-icons/fa";
import { MdEmail, MdSubject } from "react-icons/md";

export default function ComingSoonPage() {
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

  // Enhanced animation variants
  const titleVariants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        duration: 1,
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: 90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
  };

  const floatingVariants = {
    hidden: { y: 0 },
    visible: {
      y: [-20, 0, -20],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const glowVariants = {
    hidden: { opacity: 0.5 },
    visible: {
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

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

  const cinematic3DVariants = {
    hidden: {
      rotateX: 5,
      rotateY: -5,
      scale: 0.95,
      opacity: 0,
    },
    visible: {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // Modal animations
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

  // Micro animations for modal content
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

  const modalItemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
  };

  // Add new contact form animation variants
  const formItemVariants = {
    hidden: {
      opacity: 0,
      x: -20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
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

  // Enhanced background animation variants
  const backgroundVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.2,
      },
    },
  };

  const diagonalVariants = {
    hidden: { opacity: 0, scaleX: 0.8 },
    visible: {
      opacity: 1,
      scaleX: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    },
  };

  const cityScapeVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 0.15,
      y: 0,
      transition: {
        duration: 2,
        ease: "easeOut",
      },
    },
  };

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: [0.1, 0.15, 0.1],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-[#1a1f36]">
      {/* Animated Background Container */}
      <motion.div
        variants={backgroundVariants}
        initial="hidden"
        animate="visible"
        className="absolute inset-0"
      >
        {/* Base Gradient */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            background: [
              "linear-gradient(135deg, #1a1f36 0%, #2a3a7c 50%, #1a1f36 100%)",
              "linear-gradient(135deg, #1a1f36 50%, #2a3a7c 100%, #1a1f36 150%)",
              "linear-gradient(135deg, #1a1f36 0%, #2a3a7c 50%, #1a1f36 100%)",
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0"
        />

        {/* Animated Grid Pattern */}
        <motion.div
          variants={gridVariants}
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px),
              linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
            transform: "perspective(500px) rotateX(60deg)",
            opacity: 0.05,
          }}
        />

        {/* Diagonal Overlay */}
        <motion.div
          variants={diagonalVariants}
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(26, 31, 54, 0.9) 55%, transparent 55%)",
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          }}
        />

        {/* City Silhouette */}
        <motion.div
          variants={cityScapeVariants}
          className="absolute bottom-0 right-0 w-1/2 h-2/3"
          style={{
            backgroundImage:
              'url(\'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" preserveAspectRatio="none"%3E%3Cpath d="M0 1000h50l25-100h25l25 100h100l50-200h25l25 200h100l50-300h25l25 300h100l50-400h25l25 400h100l50-500h25l25 500h100V1000H0z" fill="%23ff6600"%3E%3C/path%3E%3C/svg%3E\')',
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom right",
            backgroundSize: "contain",
            opacity: 0.1,
          }}
        />

        {/* Animated Particles */}
        <motion.div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              initial={{
                opacity: Math.random() * 0.5 + 0.3,
                x: Math.random() * 100 + "%",
                y: Math.random() * 100 + "%",
              }}
              animate={{
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.5, 1],
                y: ["-100%", "200%"],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 5,
              }}
            />
          ))}
        </motion.div>

        {/* Glowing Orbs */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={floatingVariants}
          className="absolute top-[20%] right-[20%] w-48 h-48 rounded-full bg-[#ff6600] opacity-20 blur-2xl"
        />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={floatingVariants}
          transition={{ delay: 0.5 }}
          className="absolute bottom-[20%] left-[20%] w-64 h-64 rounded-full bg-[#4a63c8] opacity-20 blur-2xl"
        />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={floatingVariants}
          transition={{ delay: 1 }}
          className="absolute top-[40%] left-[10%] w-32 h-32 rounded-full bg-[#ff8833] opacity-15 blur-xl"
        />

        {/* Scanlines Effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.02, 0.04, 0.02] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(0deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "100% 3px",
          }}
        />
      </motion.div>

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-8 md:px-16 flex flex-col md:flex-row items-center justify-between">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 space-y-12 text-left"
          >
            {/* Main Title */}
            <motion.div
              variants={titleVariants}
              initial="hidden"
              animate="visible"
              className="space-y-4"
            >
              <motion.div className="overflow-hidden">
                <motion.h1
                  className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight"
                  style={{
                    textShadow: "0 0 20px rgba(255, 102, 0, 0.3)",
                    fontFamily: "var(--font-playfair), serif",
                  }}
                >
                  <motion.span
                    variants={wordVariants}
                    className="inline-block bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text"
                  >
                    Innovate
                  </motion.span>
                  <br />
                  <motion.span
                    variants={wordVariants}
                    className="inline-block bg-gradient-to-r from-[#ff6600] to-[#ff8833] text-transparent bg-clip-text"
                  >
                    Create
                  </motion.span>
                  <br />
                  <motion.span
                    variants={wordVariants}
                    className="inline-block bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text"
                  >
                    Transform
                  </motion.span>
                </motion.h1>
              </motion.div>

              <motion.p
                variants={wordVariants}
                className="text-gray-300 text-xl max-w-xl mt-8 leading-relaxed"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                Crafting revolutionary digital experiences that push the
                boundaries of innovation.
              </motion.p>
            </motion.div>

            {/* Social Icons with enhanced animations */}
            <motion.div
              variants={titleVariants}
              initial="hidden"
              animate="visible"
              className="flex space-x-8"
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
                  className="text-white text-2xl hover:text-[#ff6600] transition-colors relative group"
                  variants={wordVariants}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ delay: social.delay }}
                >
                  <social.icon />
                  <motion.div
                    className="absolute -inset-2 bg-white/10 rounded-full -z-10 opacity-0 group-hover:opacity-100"
                    initial={false}
                    animate={{ scale: [1, 1.2, 1], opacity: [0, 0.5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* image.pngEnhanced Glass Card */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={cinematic3DVariants}
            style={{
              transformStyle: "preserve-3d",
              perspective: "1000px",
            }}
            className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center"
          >
            <motion.div
              className="relative w-full max-w-md p-8 backdrop-blur-lg bg-white/10 rounded-2xl border border-white/20"
              variants={glowVariants}
              style={{
                boxShadow:
                  "0 8px 32px rgba(255, 102, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.1)",
              }}
            >
              <motion.div
                variants={itemVariants}
                className="text-center space-y-8"
              >
                <motion.div
                  className="w-24 h-24 mx-auto relative"
                  variants={floatingVariants}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ff6600] to-[#ff8833] rounded-full blur-xl opacity-50" />
                  <div className="relative w-full h-full bg-gradient-to-br from-[#ff6600] to-[#ff8833] rounded-full flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">L&C</span>
                  </div>
                </motion.div>

                <div className="space-y-4">
                  <motion.h3
                    className="text-white text-3xl font-bold"
                    style={{ fontFamily: "var(--font-playfair), serif" }}
                  >
                    Licaria & Co.
                  </motion.h3>
                  <motion.div
                    className="w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                      scaleX: [0.8, 1, 0.8],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </div>

                <motion.button
                  onClick={() => setIsContactModalOpen(true)}
                  className="w-full px-6 py-4 bg-gradient-to-r from-[#ff6600] to-[#ff8833] text-white rounded-lg font-medium tracking-wide group relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-white/20 translate-y-full"
                    whileHover={{ translateY: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative flex items-center justify-center gap-2 text-lg">
                    <FaEnvelope className="text-xl" /> Get Started
                  </span>
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Powered by Savvy Software */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-4 left-16 text-gray-400 text-sm tracking-wider"
      >
        Powered by{" "}
        <span className="font-semibold text-[#ff6600]">Savvy Software</span>
      </motion.div>

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
              <div className="bg-gradient-to-r from-[#1a1f36] to-[#ff6600] text-white p-6 pb-8 relative">
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsContactModalOpen(false)}
                  className="absolute top-4 right-4 text-white/80 hover:text-white"
                >
                  <FaTimes />
                </motion.button>
                <h3 className="text-2xl font-bold mb-2">Get in Touch</h3>
                <p className="text-white/80 text-sm">
                  We'd love to hear from you
                </p>
              </div>

              <motion.form
                onSubmit={handleSubmit}
                variants={modalContentVariants}
                initial="hidden"
                animate="visible"
                className="p-6 space-y-4"
              >
                {/* Keep existing form fields */}
                <motion.div variants={inputGroupVariants} className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <FaUser />
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#ff6600] focus:border-transparent outline-none transition-all duration-200"
                    required
                  />
                </motion.div>

                <motion.div variants={inputGroupVariants} className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <MdEmail />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address"
                    className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#ff6600] focus:border-transparent outline-none transition-all duration-200"
                    required
                  />
                </motion.div>

                <motion.div variants={inputGroupVariants} className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <FaPhone />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone Number"
                    className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#ff6600] focus:border-transparent outline-none transition-all duration-200"
                  />
                </motion.div>

                <motion.div variants={inputGroupVariants} className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <MdSubject />
                  </div>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Subject"
                    className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#ff6600] focus:border-transparent outline-none transition-all duration-200"
                    required
                  />
                </motion.div>

                <motion.div variants={inputGroupVariants}>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your Message"
                    rows={4}
                    className="block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-[#ff6600] focus:border-transparent outline-none transition-all duration-200 resize-none"
                    required
                  ></textarea>
                </motion.div>

                <motion.div
                  variants={inputGroupVariants}
                  className="flex justify-end space-x-3"
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
                    className="px-6 py-2 bg-gradient-to-r from-[#ff6600] to-[#ff8833] text-white rounded-md shadow-md hover:shadow-lg transition-all duration-200"
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 5px 15px rgba(255, 102, 0, 0.2)",
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
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
