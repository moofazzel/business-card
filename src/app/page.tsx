"use client";

import AboutSection from "@/components/AboutSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Intersection Observer for reveal animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px", // Trigger a bit earlier
      }
    );

    // Observe all elements with reveal-animation class
    document.querySelectorAll(".reveal-animation").forEach((el) => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll(".reveal-animation").forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <HeroSection />
        <AboutSection />
        <ContactForm />
        <div className="py-8 text-center">
          <Link href="/coming-soon" className="btn-primary">
            View Coming Soon Page
          </Link>
        </div>
        <Footer />
      </main>
    </>
  );
}
