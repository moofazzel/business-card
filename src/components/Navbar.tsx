"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBars, FaCreditCard, FaIdCard, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "py-2 glass-effect" : "py-5 bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-bold text-white flex items-center"
          >
            <span className="bg-secondary text-white py-1 px-2 rounded-md mr-2">
              YB
            </span>
            <span className={`${scrolled ? "text-primary" : "text-white"}`}>
              Your Business
            </span>
          </motion.a>

          {/* Desktop Menu */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex space-x-8"
          >
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`${
                  scrolled ? "text-primary" : "text-white"
                } hover:text-secondary transition-colors font-medium`}
              >
                {link.name}
              </a>
            ))}
            <Link
              href="/single"
              className={`${
                scrolled ? "text-primary" : "text-white"
              } hover:text-secondary transition-colors font-medium flex items-center`}
            >
              <FaIdCard className="mr-2" />
              Full Card
            </Link>
            <Link
              href="/simple"
              className={`${
                scrolled ? "text-primary" : "text-white"
              } hover:text-secondary transition-colors font-medium flex items-center`}
            >
              <FaCreditCard className="mr-2" />
              Simple Card
            </Link>
            <a href="#contact" className="btn-primary">
              Get In Touch
            </a>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`${
                scrolled ? "text-primary" : "text-white"
              } focus:outline-none transition-all`}
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? "auto" : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden glass-effect"
      >
        <div className="container-custom py-4">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={closeMenu}
                className="text-primary hover:text-secondary transition-colors py-2 font-medium"
              >
                {link.name}
              </a>
            ))}
            <Link
              href="/single"
              onClick={closeMenu}
              className="text-primary hover:text-secondary transition-colors py-2 font-medium flex items-center"
            >
              <FaIdCard className="mr-2" />
              Full Card
            </Link>
            <Link
              href="/simple"
              onClick={closeMenu}
              className="text-primary hover:text-secondary transition-colors py-2 font-medium flex items-center"
            >
              <FaCreditCard className="mr-2" />
              Simple Card
            </Link>
            <a
              href="#contact"
              onClick={closeMenu}
              className="btn-primary inline-block text-center"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
