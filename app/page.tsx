"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import LandingHero from "@/components/landing/LandingHero";
import SplashScreen from "@/components/SplashScreen";

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
    <main className="h-screen flex flex-col bg-gradient-to-b from-pink-500 via-red-500 to-orange-500">
      <Navbar />
      <LandingHero />
    </main>
  );
}
