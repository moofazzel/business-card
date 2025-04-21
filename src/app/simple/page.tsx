"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaArrowDown } from "react-icons/fa";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
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
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/90 to-primary/80 z-0">
        {/* Optional particle or animated overlay effect */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute w-96 h-96 -top-48 -left-48 bg-secondary rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute w-96 h-96 -bottom-48 -right-48 bg-accent rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>
      </div>

      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
          alt="Business background"
          fill
          priority
          className="object-cover"
          // Placeholder image until replaced with actual image
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.backgroundColor = "#0f172a";
            target.style.objectFit = "cover";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/70 to-primary"></div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 text-center text-white">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          className="mx-auto w-full max-w-3xl"
        >
          {/* Logo */}
          <motion.div
            variants={itemVariants}
            className="mx-auto w-40 h-40 relative mb-8"
          >
            <div className="w-40 h-40 glass-effect rounded-full flex items-center justify-center border-2 border-secondary">
              <div className="text-4xl font-bold gradient-text">LOGO</div>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="gradient-text">Our Business</span>{" "}
            <span className="text-white">Name</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto text-gray-200"
          >
            Your compelling tagline goes here - Bringing innovation to your
            world
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button onClick={scrollToAbout} className="btn-primary">
              Learn More
            </button>
            <a href="#contact" className="btn-secondary">
              Contact Us
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={scrollToAbout}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
            className="flex flex-col items-center"
          >
            <span className="text-sm mb-2 text-gray-300">Scroll Down</span>
            <FaArrowDown className="text-white text-xl" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
