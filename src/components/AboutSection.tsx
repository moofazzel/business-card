"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaBriefcase, FaRegLightbulb, FaTrophy } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <FaBriefcase className="text-3xl text-secondary" />,
      title: "Professional Service",
      description: "We deliver high-quality services that exceed expectations.",
    },
    {
      icon: <FaRegLightbulb className="text-3xl text-secondary" />,
      title: "Innovative Solutions",
      description: "Creative approaches tailored to your unique challenges.",
    },
    {
      icon: <FaTrophy className="text-3xl text-secondary" />,
      title: "Award-Winning",
      description: "Recognized for excellence in our industry.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-primary to-transparent opacity-5"></div>
      <div className="absolute -right-40 top-40 w-80 h-80 bg-secondary rounded-full opacity-5 blur-3xl"></div>
      <div className="absolute -left-40 bottom-40 w-80 h-80 bg-accent rounded-full opacity-5 blur-3xl"></div>

      <div className="container-custom" ref={ref}>
        <div className="text-center mb-20">
          <motion.span
            className="inline-block text-secondary font-semibold mb-2 reveal-animation"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            WHO WE ARE
          </motion.span>
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-4 text-primary reveal-animation"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            About <span className="text-secondary">Our Business</span>
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-secondary mx-auto mb-8 reveal-animation"
            initial={{ opacity: 0, width: 0 }}
            animate={
              inView ? { opacity: 1, width: 96 } : { opacity: 0, width: 0 }
            }
            transition={{ duration: 0.6, delay: 0.2 }}
          ></motion.div>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto reveal-animation"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            We are a forward-thinking company dedicated to delivering
            exceptional value and innovative solutions to our clients.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left side - Image with effects */}
          <motion.div
            className="reveal-animation"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-5 -left-5 w-24 h-24 border-t-4 border-l-4 border-secondary"></div>
              <div className="absolute -bottom-5 -right-5 w-24 h-24 border-b-4 border-r-4 border-secondary"></div>

              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
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
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent"></div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Text */}
          <div>
            <motion.div
              className="mb-10 reveal-animation"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-primary flex items-center">
                <span className="w-10 h-1 bg-secondary mr-3"></span>
                Our Mission
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                volutpat, urna in ultrices tincidunt, massa dui volutpat nisl,
                in condimentum dui magna id eros. Phasellus aliquam odio eget
                est semper, in fermentum massa sollicitudin.
              </p>
            </motion.div>

            <motion.div
              className="mb-10 reveal-animation"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-primary flex items-center">
                <span className="w-10 h-1 bg-secondary mr-3"></span>
                Our Vision
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Praesent non erat vel ligula facilisis lobortis. Aliquam erat
                volutpat. Mauris molestie varius sem. Curabitur sed metus sed
                augue ultricies elementum sit amet a sem.
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              className="reveal-animation"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <a href="#contact" className="btn-primary inline-block">
                Get In Touch
              </a>
            </motion.div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-24 grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-lg shadow-xl text-center reveal-animation transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary bg-opacity-10 transform transition-transform duration-500 hover:rotate-12">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
