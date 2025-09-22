"use client";
import { motion } from "framer-motion";
import { Flame } from "lucide-react";

export default function SplashScreen() {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1.2, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
        className="text-red-500"
      >
        <Flame size={80} />
      </motion.div>
    </div>
  );
}
