"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FaArrowRight,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaPhone,
  FaTwitter,
  FaUser,
} from "react-icons/fa";

export default function SingleView() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

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
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  const features = [
    {
      icon: "💼",
      title: "Professional Service",
      description: "We deliver high-quality services that exceed expectations.",
    },
    {
      icon: "💡",
      title: "Innovative Solutions",
      description: "Creative approaches tailored to your unique challenges.",
    },
    {
      icon: "🏆",
      title: "Award-Winning",
      description: "Recognized for excellence in our industry.",
    },
  ];

  const socialLinks = [
    { icon: <FaFacebook />, url: "#", label: "Facebook" },
    { icon: <FaTwitter />, url: "#", label: "Twitter" },
    { icon: <FaInstagram />, url: "#", label: "Instagram" },
    { icon: <FaLinkedin />, url: "#", label: "LinkedIn" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Link
        href="/"
        className="fixed top-4 left-4 z-50 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
      >
        <FaArrowRight className="transform rotate-180" />
      </Link>

      <div className="container-custom py-10">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header/Logo Section */}
          <div className="relative h-60 bg-gradient-to-r from-primary to-secondary overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute w-96 h-96 -top-48 -left-48 bg-secondary rounded-full blur-3xl animate-pulse"></div>
              <div
                className="absolute w-96 h-96 -bottom-48 -right-48 bg-accent rounded-full blur-3xl animate-pulse"
                style={{ animationDelay: "2s" }}
              ></div>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full border-2 border-white/30 flex items-center justify-center mb-4"
              >
                <span className="text-3xl font-bold">YB</span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-2xl font-bold"
              >
                Your Business
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-sm opacity-90 mt-1"
              >
                Your compelling tagline goes here
              </motion.p>
            </div>
          </div>

          <div className="p-6 md:p-10 space-y-8">
            {/* About Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-1 bg-secondary mr-4"></div>
                <h2 className="text-xl md:text-2xl font-bold text-primary">
                  About Us
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-600 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras volutpat, urna in ultrices tincidunt, massa dui
                    volutpat nisl, in condimentum dui magna id eros. Phasellus
                    aliquam odio eget est semper, in fermentum massa
                    sollicitudin.
                  </p>
                  <div className="mt-4">
                    <h3 className="font-semibold text-primary mb-2">
                      Our Mission
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Praesent non erat vel ligula facilisis lobortis. Aliquam
                      erat volutpat. Mauris molestie varius sem.
                    </p>
                  </div>
                </div>
                <div className="relative h-[200px] rounded-lg overflow-hidden shadow-md">
                  <Image
                    src="/images/about-image.jpg"
                    alt="About our business"
                    fill
                    className="object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.backgroundColor = "#e2e8f0";
                    }}
                  />
                </div>
              </div>
            </motion.div>

            {/* Features Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-1 bg-secondary mr-4"></div>
                <h2 className="text-xl md:text-2xl font-bold text-primary">
                  Our Services
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 p-5 rounded-lg shadow-sm border border-gray-100 transform transition-transform hover:-translate-y-1"
                  >
                    <div className="text-3xl mb-3">{feature.icon}</div>
                    <h3 className="font-semibold text-primary mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-1 bg-secondary mr-4"></div>
                <h2 className="text-xl md:text-2xl font-bold text-primary">
                  Contact Us
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Contact Info */}
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="mt-1 bg-gray-100 p-2 rounded-full mr-3">
                      <FaPhone className="text-secondary" size={14} />
                    </div>
                    <div>
                      <h4 className="text-primary font-medium text-sm">
                        Phone
                      </h4>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mt-1 bg-gray-100 p-2 rounded-full mr-3">
                      <FaEnvelope className="text-secondary" size={14} />
                    </div>
                    <div>
                      <h4 className="text-primary font-medium text-sm">
                        Email
                      </h4>
                      <p className="text-gray-600">info@yourbusiness.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mt-1 bg-gray-100 p-2 rounded-full mr-3">
                      <FaMapMarkerAlt className="text-secondary" size={14} />
                    </div>
                    <div>
                      <h4 className="text-primary font-medium text-sm">
                        Address
                      </h4>
                      <p className="text-gray-600">
                        123 Business St, City Name
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <h4 className="text-primary font-medium mb-3 text-sm">
                      Connect with us
                    </h4>
                    <div className="flex space-x-3">
                      {socialLinks.map((link, index) => (
                        <a
                          key={index}
                          href={link.url}
                          aria-label={link.label}
                          className="bg-gray-100 p-2 rounded-full text-primary hover:bg-secondary hover:text-white transition-colors"
                        >
                          {link.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="bg-gray-50 p-5 rounded-lg">
                  {!isSubmitted ? (
                    <form onSubmit={handleSubmit}>
                      <div className="mb-4">
                        <label
                          htmlFor="name"
                          className="block text-gray-700 text-sm font-medium mb-1 flex items-center"
                        >
                          <FaUser className="mr-2 text-secondary" size={12} />
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-secondary focus:border-secondary transition-all text-sm"
                          placeholder="John Doe"
                        />
                      </div>

                      <div className="mb-4">
                        <label
                          htmlFor="email"
                          className="block text-gray-700 text-sm font-medium mb-1 flex items-center"
                        >
                          <FaEnvelope
                            className="mr-2 text-secondary"
                            size={12}
                          />
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-secondary focus:border-secondary transition-all text-sm"
                          placeholder="john@example.com"
                        />
                      </div>

                      <div className="mb-4">
                        <label
                          htmlFor="message"
                          className="block text-gray-700 text-sm font-medium mb-1 flex items-center"
                        >
                          <FaPaperPlane
                            className="mr-2 text-secondary"
                            size={12}
                          />
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={4}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-secondary focus:border-secondary transition-all text-sm"
                          placeholder="How can we help you?"
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-secondary text-white py-2 px-4 rounded-md font-medium transition-all hover:bg-opacity-90 text-sm flex items-center justify-center"
                      >
                        {isSubmitting ? (
                          <>
                            <svg
                              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message{" "}
                            <FaPaperPlane className="ml-2" size={12} />
                          </>
                        )}
                      </button>
                    </form>
                  ) : (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg
                          className="w-8 h-8 text-green-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        Message Sent!
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Thank you for reaching out. We'll get back to you
                        shortly.
                      </p>
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="text-secondary hover:text-primary transition-colors text-sm font-medium"
                      >
                        Send another message
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Footer */}
          <div className="bg-gray-50 p-6 border-t border-gray-200 text-center">
            <p className="text-gray-600 text-sm">
              &copy; {new Date().getFullYear()} Your Business. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
