"use client"

import { motion } from "framer-motion"
import { useEffect } from "react"

export default function SplashScreen({ onFinish }: { onFinish: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish()
    }, 2500) // show for 2.5 seconds
    return () => clearTimeout(timer)
  }, [onFinish])

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <motion.img
        src="/shinna.png" // put your tinder-style logo in /public
        alt="Logo"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="w-24 h-24"
      />
    </div>
  )
}
