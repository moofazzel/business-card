"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function SoftwareSolutions2() {
  const [imageError, setImageError] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });

  // Effect for parallax 3D scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    setMounted(true);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleContactClick = (e: React.MouseEvent) => {
    const button = e.currentTarget as HTMLElement;
    const rect = button.getBoundingClientRect();
    setButtonPosition({
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    });
    setIsModalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-purple-950 text-white font-sans overflow-hidden">
      {/* Hero Section */}
      <main className="relative w-full h-screen overflow-hidden">
        {/* Background with a subtle texture/pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(120,0,120,0.3)_0%,_rgba(60,0,60,0.2)_60%)] reveal-left"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-950 to-purple-900 opacity-90 morph-gradient reveal-left delay-100"></div>

        {/* 3D Grid background effect */}
        <div
          className="absolute inset-0 opacity-30 reveal-left delay-200"
          style={{
            backgroundImage:
              "linear-gradient(rgba(75, 0, 130, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(75, 0, 130, 0.4) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
            backgroundPosition: `0px ${scrollY * 0.1}px`,
            perspective: "1000px",
            transform: "rotateX(60deg) scale(2.5)",
            transformOrigin: "center center",
          }}
        ></div>

        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden opacity-30">
          {Array.from({ length: 40 }).map((_, index) => (
            <div
              key={index}
              className="absolute rounded-full bg-white"
              style={{
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.3,
                animation: `float ${Math.random() * 15 + 10}s linear infinite`,
                animationDelay: `${Math.random() * 10}s`,
              }}
            ></div>
          ))}
        </div>

        {/* Full-width 3D shapes - Position behind content but visible across entire screen */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {mounted && (
            <>
              {/* Large left cube */}
              <div
                className="absolute w-40 h-40 -left-10 top-1/4 transform-style-3d animate-float"
                style={{
                  transform: `translateZ(20px) rotateX(${
                    scrollY * 0.05
                  }deg) rotateY(${scrollY * 0.08}deg)`,
                  transformStyle: "preserve-3d",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 transform rotateY(0deg) translateZ(20px) opacity-50"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-500/90 transform rotateY(180deg) translateZ(20px) opacity-50"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-500/90 transform rotateX(90deg) translateZ(20px) opacity-50"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-purple-500/90 transform rotateX(-90deg) translateZ(20px) opacity-50"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-800  to-purple-500/90 transform rotateY(90deg) translateZ(20px) opacity-50"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-950 to-purple-500/90 transform rotateY(-90deg) translateZ(20px) opacity-50"></div>
              </div>

              {/* Large right sphere */}
              <div
                className="absolute w-64 h-64 -right-20 top-1/5 rounded-full animate-float-delay"
                style={{
                  background:
                    "radial-gradient(circle at 30% 30%, rgba(216, 180, 254, 0.6), rgba(129, 140, 248, 0.3))",
                  boxShadow:
                    "0 0 40px rgba(139, 92, 246, 0.3), inset 0 0 30px rgba(139, 92, 246, 0.3)",
                  transform: `translateZ(${
                    30 + Math.sin(scrollY * 0.01) * 10
                  }px)`,
                }}
              ></div>

              {/* Large bottom ring */}
              <div
                className="absolute w-96 h-96 -bottom-20 left-1/4 rounded-full border-[12px] border-transparent animate-spin-slow"
                style={{
                  background:
                    "linear-gradient(45deg, transparent, transparent 40%, rgba(251, 113, 133, 0.4)) border-box",
                  WebkitMask:
                    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                  transform: `translateZ(${
                    20 + Math.cos(scrollY * 0.01) * 10
                  }px) rotateX(75deg)`,
                  boxShadow: "0 0 15px rgba(251, 113, 133, 0.3)",
                }}
              ></div>

              {/* Large top pyramid */}
              <div
                className="absolute top-20 right-1/4 w-0 h-0 animate-float-reverse"
                style={{
                  borderLeft: "40px solid transparent",
                  borderRight: "40px solid transparent",
                  borderBottom: "80px solid rgba(249, 168, 212, 0.4)",
                  filter: "drop-shadow(0 0 15px rgba(249, 168, 212, 0.3))",
                  transform: `translateZ(60px) rotateY(${scrollY * -0.04}deg)`,
                  transformStyle: "preserve-3d",
                }}
              ></div>
            </>
          )}
        </div>

        {/* Main Content Container - Centered */}
        <div className="relative z-10 flex flex-col items-center h-full max-w-7xl mx-auto px-4">
          {/* Top Navigation */}
          <header className="w-full p-6 md:p-10 flex justify-between items-center reveal-bottom">
            <div className="border border-pink-200/20 w-fit px-5 py-2.5 reveal-left">
              <h2 className="text-xl font-light tracking-[0.2em]">
                IVEY SOLUTIONS
              </h2>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white hover:text-pink-300 transition-colors duration-300 reveal-right delay-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-white hover:text-pink-300 transition-colors duration-300 reveal-right delay-400"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="#"
                className="text-white hover:text-pink-300 transition-colors duration-300 reveal-right delay-500"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-white hover:text-pink-300 transition-colors duration-300 reveal-right delay-600"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-white hover:text-pink-300 transition-colors duration-300 reveal-right delay-700"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </header>

          {/* Centered Hero Content */}
          <div className="flex flex-col items-center md:flex-row h-[calc(100%-100px)] justify-center w-full">
            {/* Left side - Content Section */}
            <div className="flex flex-col justify-center md:w-1/2 p-6 text-center md:text-left max-w-lg md:max-w-none z-10">
              <div className="space-y-0 reveal-left delay-200">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-pink-50 leading-[0.95] mb-4">
                  <span className="block relative reveal-left delay-300">
                    <span className="relative z-10">DIGITAL</span>
                    <span className="absolute -left-1 -bottom-1 text-blue-500 opacity-30 z-0">
                      DIGITAL
                    </span>
                  </span>
                  <span className="block mt-2 relative reveal-left delay-400">
                    <span className="relative z-10">INNOVATION</span>
                    <span className="absolute -left-1 -bottom-1 text-purple-500 opacity-30 z-0">
                      INNOVATION
                    </span>
                  </span>
                  <span className="block mt-2 relative reveal-left delay-500">
                    <span className="relative z-10">REDEFINED</span>
                    <span className="absolute -left-1 -bottom-1 text-pink-500 opacity-30 z-0">
                      REDEFINED
                    </span>
                  </span>
                </h1>
              </div>

              {/* Powered by tag */}
              <div className="mt-6 pt-3 opacity-70 text-sm reveal-left delay-600">
                <p>Powered by Savvy Software</p>
              </div>
            </div>

            {/* Right side - Card container */}
            <div className="relative md:w-1/2 h-full md:h-[600px] flex items-center justify-center z-10">
              {/* Text Card */}
              <div className="relative z-20 w-64 md:w-80 float-in delay-700">
                {/* Glass Card */}
                <div className="bg-gradient-to-br from-purple-800/40 to-pink-700/30 backdrop-blur-md p-6 rounded-lg border border-white/10 shadow-xl overflow-hidden relative morph-gradient">
                  {/* Glowing accent */}
                  <div className="absolute -top-10 -right-10 w-20 h-20 bg-pink-500/30 rounded-full blur-xl morph-gradient"></div>
                  <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-blue-500/30 rounded-full blur-xl morph-gradient delay-100"></div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-pink-200 to-blue-200 bg-clip-text text-transparent reveal-right delay-800">
                    Transform Your Business
                  </h3>

                  <p className="text-sm font-light mb-4 text-white/90 leading-relaxed reveal-right delay-800">
                    Innovative technology solutions custom-built for your unique
                    challenges and growth objectives.
                  </p>

                  <Link
                    href="#"
                    onClick={handleContactClick}
                    className="inline-flex items-center justify-center w-full bg-gradient-to-r from-pink-500/80 to-purple-500/80 hover:from-pink-500/90 hover:to-purple-500/90 py-3 px-4 rounded-md text-white font-medium shadow-lg transition-all duration-300 group reveal-bottom delay-800"
                  >
                    <span className="mr-2 tracking-wide">Contact Us</span>
                    <svg
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>
                </div>

                {/* Feature badges */}
                <div className="flex justify-between mt-4 items-center">
                  <div className="bg-indigo-900/50 backdrop-blur-sm px-3 py-1 rounded-full border border-indigo-500/30 text-xs flex items-center reveal-right delay-800">
                    <svg
                      className="w-3 h-3 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Fast Delivery
                  </div>
                  <div className="bg-pink-900/50 backdrop-blur-sm px-3 py-1 rounded-full border border-pink-500/30 text-xs flex items-center reveal-right delay-800">
                    <svg
                      className="w-3 h-3 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
                    </svg>
                    Expert Support
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Contact Modal */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-500 ${
          isModalOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${
            isModalOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsModalOpen(false)}
        ></div>

        {/* Modal Content */}
        <div
          className={`relative z-10 w-full max-w-md bg-gradient-to-br from-purple-800/90 to-pink-700/90 backdrop-blur-lg rounded-xl border border-white/10 shadow-2xl transition-all duration-500 ${
            isModalOpen
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 translate-y-4"
          }`}
          style={{
            transformOrigin: `${buttonPosition.x}px ${buttonPosition.y}px`,
          }}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Modal Header */}
          <div className="p-6 pb-0">
            <h3 className="text-2xl font-semibold text-white mb-1">
              Get in Touch
            </h3>
            <p className="text-white/70 text-sm">
              We'll get back to you within 24 hours.
            </p>
          </div>

          {/* Contact Form */}
          <form onSubmit={(e) => e.preventDefault()} className="p-6 space-y-4">
            <div className="space-y-4">
              <div className="transform transition-all duration-300 delay-100">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-white/90 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-500/60"
                  placeholder="Your name"
                />
              </div>
              <div className="transform transition-all duration-300 delay-200">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white/90 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-500/60"
                  placeholder="your@email.com"
                />
              </div>
              <div className="transform transition-all duration-300 delay-300">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-white/90 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-500/60 resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 py-3 px-4 rounded-md text-white font-medium shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <style jsx global>{`
        @keyframes revealFromLeft {
          0% {
            clip-path: inset(0 100% 0 0);
            transform: translateX(-20px);
            opacity: 0;
          }
          100% {
            clip-path: inset(0 0 0 0);
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes revealFromRight {
          0% {
            clip-path: inset(0 0 0 100%);
            transform: translateX(20px);
            opacity: 0;
          }
          100% {
            clip-path: inset(0 0 0 0);
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes revealFromBottom {
          0% {
            clip-path: inset(100% 0 0 0);
            transform: translateY(20px);
            opacity: 0;
          }
          100% {
            clip-path: inset(0 0 0 0);
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes morphGradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes floatIn {
          0% {
            transform: translateY(100%) scale(0.8);
            opacity: 0;
          }
          100% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
        }

        .reveal-left {
          animation: revealFromLeft 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .reveal-right {
          animation: revealFromRight 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .reveal-bottom {
          animation: revealFromBottom 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .morph-gradient {
          background-size: 200% 200%;
          animation: morphGradient 8s ease infinite;
        }

        .float-in {
          animation: floatIn 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .delay-100 {
          animation-delay: 100ms;
        }
        .delay-200 {
          animation-delay: 200ms;
        }
        .delay-300 {
          animation-delay: 300ms;
        }
        .delay-400 {
          animation-delay: 400ms;
        }
        .delay-500 {
          animation-delay: 500ms;
        }
        .delay-600 {
          animation-delay: 600ms;
        }
        .delay-700 {
          animation-delay: 700ms;
        }
        .delay-800 {
          animation-delay: 800ms;
        }
      `}</style>
    </div>
  );
}
