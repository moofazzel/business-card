"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

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
      transition: { duration: 0.8 },
    },
  };

  const floatingAnimation = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Geometric background patterns */}
      <div className="absolute inset-0 z-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A]" />

        {/* Hexagonal pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMzAgMEw1MiA0NUwzMCA5MEwwIDQ1WiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDU5LDEzMCwyNDYsMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')] bg-repeat" />
        </div>

        {/* Diagonal stripes */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(59,130,246,0.1)_10px,rgba(59,130,246,0.1)_20px)]" />
          <div className="absolute inset-0 bg-[repeating-linear-gradient(-45deg,transparent,transparent_10px,rgba(16,185,129,0.1)_10px,rgba(16,185,129,0.1)_20px)]" />
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute w-[800px] h-[800px] -top-48 -left-48 bg-[#3B82F6]/10 rounded-full blur-3xl"
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
          className="absolute w-[800px] h-[800px] -bottom-48 -right-48 bg-[#10B981]/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 text-center text-white">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          className="mx-auto w-full max-w-4xl"
        >
          {/* Logo */}
          <motion.div
            variants={itemVariants}
            className="mx-auto w-48 h-48 relative mb-8"
          >
            <motion.div
              className="w-48 h-48 glass-effect rounded-full flex items-center justify-center border-2 border-[#3B82F6]/30 relative overflow-hidden"
              variants={floatingAnimation}
              animate="animate"
            >
              {/* Logo SVG */}
              <svg
                className="w-32 h-32"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Outer ring with tech pattern */}
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  stroke="url(#gradient1)"
                  strokeWidth="2"
                  strokeDasharray="4 2"
                  fill="none"
                />

                {/* Rotating segments */}
                <g transform="rotate(0, 50, 50)">
                  <path
                    d="M50 5 L65 20 L65 35 L50 50 L35 35 L35 20 Z"
                    stroke="url(#gradient2)"
                    strokeWidth="1.5"
                    fill="none"
                  />
                </g>
                <g transform="rotate(60, 50, 50)">
                  <path
                    d="M50 5 L65 20 L65 35 L50 50 L35 35 L35 20 Z"
                    stroke="url(#gradient2)"
                    strokeWidth="1.5"
                    fill="none"
                  />
                </g>
                <g transform="rotate(120, 50, 50)">
                  <path
                    d="M50 5 L65 20 L65 35 L50 50 L35 35 L35 20 Z"
                    stroke="url(#gradient2)"
                    strokeWidth="1.5"
                    fill="none"
                  />
                </g>

                {/* Central core */}
                <circle cx="50" cy="50" r="12" fill="url(#gradient3)" />
                <circle cx="50" cy="50" r="8" fill="url(#gradient4)" />

                {/* Energy rings */}
                <circle
                  cx="50"
                  cy="50"
                  r="25"
                  stroke="url(#gradient5)"
                  strokeWidth="0.5"
                  fill="none"
                  strokeDasharray="2 4"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="35"
                  stroke="url(#gradient5)"
                  strokeWidth="0.5"
                  fill="none"
                  strokeDasharray="2 4"
                />

                {/* Gradients */}
                <defs>
                  <linearGradient
                    id="gradient1"
                    x1="0"
                    y1="0"
                    x2="100"
                    y2="100"
                  >
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#10B981" />
                  </linearGradient>
                  <linearGradient
                    id="gradient2"
                    x1="0"
                    y1="0"
                    x2="100"
                    y2="100"
                  >
                    <stop offset="0%" stopColor="#10B981" />
                    <stop offset="100%" stopColor="#3B82F6" />
                  </linearGradient>
                  <radialGradient id="gradient3" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#10B981" />
                  </radialGradient>
                  <radialGradient id="gradient4" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="100%" stopColor="#3B82F6" />
                  </radialGradient>
                  <linearGradient
                    id="gradient5"
                    x1="0"
                    y1="0"
                    x2="100"
                    y2="100"
                  >
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#10B981" stopOpacity="0.5" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
          </motion.div>

          {/* Launch Text */}
          <motion.div variants={itemVariants} className="mb-4">
            <span className="text-[#3B82F6] font-medium tracking-wider uppercase text-sm">
              Welcome to the Future
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-8xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-[#3B82F6] via-[#10B981] to-[#3B82F6] bg-clip-text text-transparent">
              Launching
            </span>{" "}
            <span className="text-white">Your Success</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-2xl md:text-3xl mb-12 max-w-2xl mx-auto text-gray-300 font-light"
          >
            Transform your business with cutting-edge solutions
          </motion.p>

          {/* CTA Button */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <motion.a
              href="#contact"
              className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#10B981] text-white text-lg font-medium overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Get Started Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#10B981] to-[#3B82F6] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>
          </motion.div>

          {/* Stats or Features */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-400"
          >
            <div>
              <span className="text-[#3B82F6] font-semibold">24/7 Support</span>
              <p className="mt-1">Always here to help you succeed</p>
            </div>
            <div>
              <span className="text-[#10B981] font-semibold">Fast Setup</span>
              <p className="mt-1">Get started in minutes, not days</p>
            </div>
            <div>
              <span className="text-[#3B82F6] font-semibold">Scalable</span>
              <p className="mt-1">Grows with your business</p>
            </div>
          </motion.div>

          {/* Powered by Savvy Software */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-sm text-gray-500"
          >
            <span className="opacity-75">Powered by</span>{" "}
            <span className="font-semibold text-[#3B82F6]">Savvy Software</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
