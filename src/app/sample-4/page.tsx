"use client";

import { AnimatePresence, motion, useAnimation } from "framer-motion";
import Lottie from "lottie-react";
import { useEffect, useRef, useState } from "react";
import {
  FaChartLine,
  FaCode,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLightbulb,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaRocket,
  FaTimes,
  FaTwitter,
  FaUsers,
} from "react-icons/fa";
import { MdEmail, MdSubject } from "react-icons/md";

// Import Lottie animations
import contactAnimation from "../../../public/animations/contact.json";
import rocketAnimation from "../../../public/animations/rocket.json";
import techAnimation from "../../../public/animations/tech.json";

export default function Sample4() {
  const [activeSection, setActiveSection] = useState("home");
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [scrollPosition, setScrollPosition] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const pageRef = useRef(null);
  const controls = useAnimation();

  // Handle scroll position for parallax effects
  useEffect(() => {
    const handleScroll = () => {
      if (pageRef.current) {
        setScrollPosition(window.scrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle mouse position for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Animate background elements on hover
  useEffect(() => {
    if (isHovered) {
      controls.start({
        scale: [1, 1.2, 1],
        rotate: [0, 5, 0],
        transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
      });
    } else {
      controls.start({ scale: 1, rotate: 0 });
    }
  }, [isHovered, controls]);

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
    setIsSuccessModalOpen(true);

    // Close success modal after 3 seconds
    setTimeout(() => {
      setIsSuccessModalOpen(false);
    }, 3000);
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const slideUp = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const slideInLeft = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const slideInRight = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const scaleUp = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
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

  // Calculate parallax effect based on scroll position
  const parallaxY = (speed: number) => {
    return scrollPosition * speed;
  };

  // Calculate mouse parallax effect
  const mouseParallax = (speed: number) => {
    const x = (mousePosition.x - window.innerWidth / 2) * speed;
    const y = (mousePosition.y - window.innerHeight / 2) * speed;
    return { x, y };
  };

  return (
    <div
      ref={pageRef}
      className="min-h-screen w-full relative overflow-hidden bg-gradient-to-br from-indigo-950 via-purple-950 to-blue-950"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,100,255,0.1),rgba(0,0,0,0))]" />

        {/* Animated grid */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        {/* Floating particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.5, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}

        {/* Animated orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl"
          animate={mouseParallax(0.01)}
          transition={{ type: "spring", stiffness: 100, damping: 30 }}
        />

        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-indigo-500/10 blur-3xl"
          animate={mouseParallax(-0.01)}
          transition={{ type: "spring", stiffness: 100, damping: 30 }}
        />

        {/* Animated shapes */}
        <motion.div
          className="absolute top-1/3 right-1/3 w-40 h-40 rounded-full bg-blue-500/5 border border-blue-500/20"
          animate={controls}
        />

        <motion.div
          className="absolute bottom-1/3 left-1/3 w-60 h-60 rounded-full bg-purple-500/5 border border-purple-500/20"
          animate={controls}
        />

        {/* Animated lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M0,100 Q250,0 500,100 T1000,100"
            stroke="url(#gradient1)"
            strokeWidth="2"
            fill="none"
            animate={{
              d: [
                "M0,100 Q250,0 500,100 T1000,100",
                "M0,100 Q250,200 500,100 T1000,100",
                "M0,100 Q250,0 500,100 T1000,100",
              ],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Floating Action Menu */}
        <motion.div
          className="fixed top-6 right-6 z-50"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="relative">
            <motion.button
              className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-600 to-indigo-700 shadow-lg flex items-center justify-center text-white"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={() =>
                setActiveSection(activeSection === "home" ? "contact" : "home")
              }
            >
              {activeSection === "home" ? (
                <FaEnvelope className="text-xl" />
              ) : (
                <FaLightbulb className="text-xl" />
              )}
            </motion.button>

            <motion.div
              className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-white text-xs font-bold"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8, type: "spring" }}
            >
              {activeSection === "home" ? "2" : "1"}
            </motion.div>
          </div>
        </motion.div>

        {/* Section Navigation */}
        <motion.div
          className="fixed top-6 left-6 z-50 flex flex-col space-y-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {["home", "about", "services", "contact"].map((section, index) => (
            <motion.button
              key={section}
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                activeSection === section
                  ? "bg-gradient-to-r from-purple-600 to-indigo-700 text-white"
                  : "bg-white/10 text-white/70 hover:bg-white/20"
              }`}
              onClick={() => setActiveSection(section)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {index + 1}
            </motion.button>
          ))}
        </motion.div>

        {/* Home Section */}
        <AnimatePresence mode="wait">
          {activeSection === "home" && (
            <motion.section
              key="home"
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0 }}
              variants={fadeIn}
              className="min-h-screen flex items-center justify-center px-4 py-20"
            >
              <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div variants={slideInLeft} className="space-y-6">
                  <motion.h1
                    className="text-5xl md:text-6xl font-bold text-white"
                    style={{
                      textShadow: "0 0 20px rgba(120,100,255,0.3)",
                    }}
                  >
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-500">
                      Innovate. Create. Transform.
                    </span>
                  </motion.h1>

                  <motion.p
                    className="text-gray-300 text-xl leading-relaxed"
                    variants={slideInLeft}
                  >
                    We're a team of innovators dedicated to pushing the
                    boundaries of what's possible in the digital world.
                  </motion.p>

                  <motion.div variants={slideInLeft} className="flex space-x-4">
                    <motion.button
                      onClick={() => setActiveSection("contact")}
                      className="px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg font-medium tracking-wide group relative overflow-hidden"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
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

                    <motion.button
                      onClick={() => setActiveSection("about")}
                      className="px-6 py-3 bg-white/10 text-white rounded-lg font-medium tracking-wide group relative overflow-hidden"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="relative flex items-center justify-center gap-2">
                        Learn More
                      </span>
                    </motion.button>
                  </motion.div>
                </motion.div>

                <motion.div variants={slideInRight} className="relative">
                  <div className="w-full h-full max-w-md mx-auto">
                    <Lottie
                      animationData={rocketAnimation}
                      loop={true}
                      className="w-full h-full"
                    />
                  </div>
                </motion.div>
              </div>
            </motion.section>
          )}

          {/* About Section */}
          {activeSection === "about" && (
            <motion.section
              key="about"
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0 }}
              variants={fadeIn}
              className="min-h-screen flex items-center justify-center px-4 py-20"
            >
              <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div variants={slideInLeft} className="relative">
                  <div className="w-full h-full max-w-md mx-auto">
                    <Lottie
                      animationData={techAnimation}
                      loop={true}
                      className="w-full h-full"
                    />
                  </div>
                </motion.div>

                <motion.div variants={slideInRight} className="space-y-6">
                  <motion.h2
                    className="text-4xl font-bold text-white"
                    variants={slideInRight}
                  >
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-500">
                      About NovaTech
                    </span>
                  </motion.h2>

                  <motion.p
                    className="text-gray-300 text-lg leading-relaxed"
                    variants={slideInRight}
                  >
                    Founded in 2020, NovaTech has been at the forefront of
                    digital innovation. Our team of experts combines creativity
                    with technical excellence to deliver solutions that drive
                    business growth.
                  </motion.p>

                  <motion.div
                    variants={slideInRight}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                  >
                    <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                          <FaUsers className="text-purple-400" />
                        </div>
                        <h3 className="text-white font-medium">Expert Team</h3>
                      </div>
                      <p className="text-gray-300 text-sm">
                        Our diverse team brings together the best talent from
                        around the world.
                      </p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center">
                          <FaCode className="text-indigo-400" />
                        </div>
                        <h3 className="text-white font-medium">
                          Innovative Solutions
                        </h3>
                      </div>
                      <p className="text-gray-300 text-sm">
                        We create cutting-edge solutions that solve real-world
                        problems.
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.section>
          )}

          {/* Services Section */}
          {activeSection === "services" && (
            <motion.section
              key="services"
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0 }}
              variants={fadeIn}
              className="min-h-screen flex items-center justify-center px-4 py-20"
            >
              <div className="max-w-7xl mx-auto">
                <motion.div className="text-center mb-16" variants={slideUp}>
                  <h2 className="text-4xl font-bold text-white mb-4">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-500">
                      Our Services
                    </span>
                  </h2>
                  <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                    We offer a comprehensive range of services to help your
                    business thrive in the digital age.
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                      icon: <FaCode className="text-3xl text-purple-400" />,
                      title: "Web Development",
                      description:
                        "Custom websites and web applications built with the latest technologies.",
                    },
                    {
                      icon: (
                        <FaChartLine className="text-3xl text-indigo-400" />
                      ),
                      title: "Digital Strategy",
                      description:
                        "Strategic planning to help your business grow in the digital landscape.",
                    },
                    {
                      icon: <FaUsers className="text-3xl text-blue-400" />,
                      title: "UX/UI Design",
                      description:
                        "User-centered design that creates engaging and intuitive experiences.",
                    },
                  ].map((service, index) => (
                    <motion.div
                      key={index}
                      variants={scaleUp}
                      className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:border-purple-500/50 transition-colors duration-300"
                      whileHover={{ y: -10, transition: { duration: 0.3 } }}
                    >
                      <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-4">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-300">{service.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>
          )}

          {/* Contact Section */}
          {activeSection === "contact" && (
            <motion.section
              key="contact"
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0 }}
              variants={fadeIn}
              className="min-h-screen flex items-center justify-center px-4 py-20"
            >
              <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div variants={slideInLeft} className="space-y-6">
                  <motion.h2
                    className="text-4xl font-bold text-white"
                    variants={slideInLeft}
                  >
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-500">
                      Get in Touch
                    </span>
                  </motion.h2>

                  <motion.p
                    className="text-gray-300 text-lg leading-relaxed"
                    variants={slideInLeft}
                  >
                    Have a project in mind? We'd love to hear from you. Send us
                    a message and we'll respond as soon as possible.
                  </motion.p>

                  <motion.div variants={slideInLeft} className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                        <FaEnvelope className="text-purple-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium">Email</h3>
                        <p className="text-gray-300">info@novatech.com</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center">
                        <FaPhone className="text-indigo-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium">Phone</h3>
                        <p className="text-gray-300">+1 (555) 123-4567</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <FaMapMarkerAlt className="text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium">Location</h3>
                        <p className="text-gray-300">
                          123 Innovation Street, Tech City
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div variants={slideInLeft} className="flex space-x-4">
                    {[
                      { icon: FaFacebook, color: "text-blue-400" },
                      { icon: FaTwitter, color: "text-sky-400" },
                      { icon: FaInstagram, color: "text-pink-400" },
                      { icon: FaLinkedin, color: "text-blue-500" },
                    ].map((social, index) => (
                      <motion.a
                        key={index}
                        href="#"
                        className={`w-10 h-10 rounded-full bg-white/10 flex items-center justify-center ${social.color} hover:bg-white/20 transition-colors duration-300`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <social.icon />
                      </motion.a>
                    ))}
                  </motion.div>
                </motion.div>

                <motion.div variants={slideInRight} className="relative">
                  <div className="w-full h-full max-w-md mx-auto">
                    <Lottie
                      animationData={contactAnimation}
                      loop={true}
                      className="w-full h-full"
                    />
                  </div>

                  <motion.button
                    onClick={() => setIsContactModalOpen(true)}
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg font-medium tracking-wide group relative overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-white/20 translate-y-full"
                      whileHover={{ translateY: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                    <span className="relative flex items-center justify-center gap-2">
                      <FaEnvelope className="text-lg" /> Send Message
                    </span>
                  </motion.button>
                </motion.div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
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
              <div className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white p-6 pb-8 relative">
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

              <motion.form onSubmit={handleSubmit} className="p-6 space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-purple-500">
                        <FaUsers />
                      </div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your Name"
                        className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-200"
                        required
                      />
                    </div>
                  </motion.div>

                  <motion.div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-purple-500">
                        <MdEmail />
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email Address"
                        className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-200"
                        required
                      />
                    </div>
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-purple-500">
                        <FaPhone />
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Phone Number"
                        className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-200"
                      />
                    </div>
                  </motion.div>

                  <motion.div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-purple-500">
                        <MdSubject />
                      </div>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Subject"
                        className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-200"
                        required
                      />
                    </div>
                  </motion.div>
                </div>

                <motion.div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your Message"
                    rows={4}
                    className="block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-200 resize-none"
                    required
                  ></textarea>
                </motion.div>

                <motion.div className="flex justify-end space-x-3 pt-2">
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
                    className="px-6 py-2 bg-gradient-to-r from-purple-600 to-indigo-700 text-white rounded-md shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2"
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 5px 15px rgba(120,100,255,0.2)",
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

      {/* Success Modal */}
      <AnimatePresence>
        {isSuccessModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-xl shadow-2xl max-w-md w-full mx-4 overflow-hidden p-6 text-center"
            >
              <div className="w-32 h-32 mx-auto mb-4">
                <Lottie
                  animationData={rocketAnimation}
                  loop={false}
                  className="w-full h-full"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Message Sent!
              </h3>
              <p className="text-gray-600 mb-4">
                Thank you for reaching out. We'll get back to you as soon as
                possible.
              </p>
              <motion.button
                onClick={() => setIsSuccessModalOpen(false)}
                className="px-6 py-2 bg-gradient-to-r from-purple-600 to-indigo-700 text-white rounded-md shadow-md hover:shadow-lg transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Close
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
