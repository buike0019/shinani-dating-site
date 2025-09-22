"use client";
import { motion } from "framer-motion";

export default function SplashScreen() {
  return (
    <div className="flex items-center justify-center h-screen bg-red-500">
      <motion.img
        src="/birds.png" // 👈 put your flame logo here
        alt="Tinder Flame Logo"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1.2, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
        className="w-24 h-24" // adjust size as needed
      />
    </div>
  );
}
