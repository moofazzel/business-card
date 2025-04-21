"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowRight, FaCode, FaRocket } from "react-icons/fa";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const categories = [
    { id: "all", name: "All Demos" },
    { id: "Rony", name: "Rony" },
    { id: "Nowrin", name: "Nowrin" },
    { id: "Jui", name: "Jui" },
    { id: "Tonmoy", name: "Tonmoy" },
  ];

  const pages = [
    // Rony
    {
      name: "Simple",
      path: "/simple",
      category: "Rony",
      icon: <FaCode className="text-2xl" />,
    },
    {
      name: "Single",
      path: "/single",
      category: "Rony",
      icon: <FaCode className="text-2xl" />,
    },
    {
      name: "Sample 1",
      path: "/sample-1",
      category: "Rony",
      icon: <FaRocket className="text-2xl" />,
    },
    {
      name: "Sample 2",
      path: "/sample-2",
      category: "Rony",
      icon: <FaRocket className="text-2xl" />,
    },
    {
      name: "Sample 3",
      path: "/sample-3",
      category: "Rony",
      icon: <FaRocket className="text-2xl" />,
    },
    {
      name: "Sample 4",
      path: "/sample-4",
      category: "Rony",
      icon: <FaRocket className="text-2xl" />,
    },
    {
      name: "Sample 5",
      path: "/sample-5",
      category: "Rony",
      icon: <FaRocket className="text-2xl" />,
    },
    {
      name: "Sample 6",
      path: "/sample-6",
      category: "Rony",
      icon: <FaRocket className="text-2xl" />,
    },
    // Jui
    {
      name: "Jui 1",
      path: "https://b-card-steel.vercel.app/",
      category: "Jui",
      icon: <FaRocket className="text-2xl" />,
    },
    {
      name: "Jui 2",
      path: "https://ivey-template.vercel.app/",
      category: "Jui",
      icon: <FaRocket className="text-2xl" />,
    },
    //Nowrin

    // Tonmoy
    {
      name: "Tonmoy 1",
      path: "https://business-card-fawn.vercel.app/",
      category: "Tonmoy",
      icon: <FaRocket className="text-2xl" />,
    },
    {
      name: "Tonmoy 2",
      path: "https://ivey-landing.vercel.app/",
      category: "Tonmoy",
      icon: <FaRocket className="text-2xl" />,
    },
  ];

  const filteredPages =
    activeCategory === "all"
      ? pages
      : pages.filter((page) => page.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#000B58] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0">
        {/* Main background with pattern */}
        <div className="absolute inset-0 bg-[#000B58]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMjB2MjBIMzB6IiBmaWxsPSIjMDAzMTYxIiBmaWxsLW9wYWNpdHk9IjAuMSIvPjwvZz48L3N2Zz4=')] opacity-20" />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#003161] to-[#000B58]" />

        {/* Animated shapes */}
        <motion.div
          className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#006A67] opacity-10"
          style={{
            clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
          }}
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.div
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#FFF4B7] opacity-5"
          style={{
            clipPath: "polygon(0 0, 100% 0, 0 100%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl pb-5f md:text-7xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-[#FFF4B7] to-[#006A67]">
            Templates
          </h1>
          {/* <p className="text-gray-300 text-lg">
            Explore our interactive showcases
          </p> */}
        </motion.div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center px-6 py-3 rounded-full backdrop-blur-sm border transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-[#006A67]/20 border-[#FFF4B7]/30 text-[#FFF4B7]"
                  : "bg-[#003161]/20 border-white/10 text-gray-300 hover:bg-[#006A67]/10 hover:border-[#FFF4B7]/20"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </div>

        {/* Demo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPages.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-full text-center py-12"
            >
              <div className="bg-[#003161]/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-white mb-3">
                  No templates found
                </h3>
                <p className="text-gray-300">
                  Try selecting a different category
                </p>
              </div>
            </motion.div>
          )}

          {filteredPages.map((page, index) => (
            <motion.div
              key={page.path}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Link href={page.path}>
                <motion.div
                  className="group relative h-[200px] rounded-2xl overflow-hidden cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onHoverStart={() => setActiveIndex(index)}
                  onHoverEnd={() => setActiveIndex(null)}
                >
                  {/* Card background with gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#003161] to-[#000B58]" />

                  {/* Glass effect overlay */}
                  <div className="absolute inset-0 backdrop-blur-xl bg-white/5 border border-white/10" />

                  {/* Content */}
                  <div className="relative h-full p-8 flex flex-col justify-between">
                    <div>
                      <div className="text-[#FFF4B7] mb-4">{page.icon}</div>
                      <h2 className="text-2xl font-semibold text-white mb-3">
                        {page.name}
                      </h2>
                    </div>

                    {/* Interactive elements */}
                    <div className="flex items-center justify-between">
                      <motion.div
                        className="flex items-center text-[#FFF4B7]"
                        animate={{
                          x: activeIndex === index ? 10 : 0,
                        }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <span className="mr-2 text-sm font-medium">
                          View Demo
                        </span>
                        <FaArrowRight className="text-sm" />
                      </motion.div>

                      {/* Corner accent */}
                      <motion.div
                        className="w-12 h-12 rounded-full bg-gradient-to-br from-[#006A67]/20 to-[#FFF4B7]/20"
                        animate={{
                          scale: activeIndex === index ? 1.1 : 1,
                          rotate: activeIndex === index ? 180 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </div>

                  {/* Hover effect overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#006A67]/10 to-[#FFF4B7]/10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: activeIndex === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-[#003161]/20 backdrop-blur-sm border border-white/10">
            <span className="text-gray-300 mr-2">Powered by</span>
            <span className="text-[#FFF4B7] font-medium">Savvy Software</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
