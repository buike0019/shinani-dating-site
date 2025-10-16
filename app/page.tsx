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
    <main className="min-h-screen flex flex-col text-white">
      {/* Sticky Navbar */}
      <header className="sticky top-0 z-50  shadow-md py-3">
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
