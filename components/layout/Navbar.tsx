"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="mx-auto my-3 z-20 w-[90%] md:w-[80%] bg-black/60 backdrop-blur-lg border border-white/20 rounded-4xl shadow-lg flex items-center justify-between px-6 py-3">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-red-500">Shinani®</h1>

      {/* Links */}
      <div className="hidden md:flex gap-6 text-white">
        <a href="#features" className="hover:text-red-400 transition">
          Features
        </a>
        <a href="#about" className="hover:text-red-400 transition">
          About
        </a>
        <a href="#contact" className="hover:text-red-400 transition">
          Contact
        </a>
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        {/* Sign Up → /signup */}
        <Link href="/components/auth/SignupPage" passHref>
          <Button className="bg-gradient-to-r from-black to-red-500 hover:from-red-500 hover:to-pink-900 text-white rounded-full px-4 py-2">
            Sign Up
          </Button>
        </Link>

        {/* Log In → /login */}
        <Link href="/components/auth/LoginForm" passHref>
          <Button className="bg-white text-pink-600 hover:bg-black hover:text-white rounded-full px-4 py-2">
            Log In
          </Button>
        </Link>
      </div>
    </nav>
  );
}
