"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import LandingHero from "@/components/landing/LandingHero";
import SplashScreen from "@/components/SplashScreen";
import FeaturesSection from "@/components/WhyChooseUs/page";

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500); // 2.5s splash
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-b from-pink-500 via-red-500 to-orange-500 text-white">
      {/* Sticky Navbar */}
      <header className="sticky top-0 z-50 bg-gradient-to-r from-pink-600/80 to-red-600/80 backdrop-blur-md shadow-md">
        <Navbar />
      </header>

      {/* Hero Section */}
      <section className="flex-1">
        <LandingHero />
      </section>

      {/* Features Section */}
      <FeaturesSection />
    </main>
  );
}
