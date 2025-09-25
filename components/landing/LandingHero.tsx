"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="relative h-screen text-white overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('/rose-bg.jpg')" }}
      ></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-bl from-red-600/70 via-black/80 to-black"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
          Shinani®
        </h1>
        <p className="max-w-lg mb-8 text-lg md:text-xl drop-shadow">
          Make meaningful connections and meet new people around the world.
        </p>

        <div className="flex flex-col gap-4 w-full max-w-sm">
          {/* Create Account → /signup */}
          <Link href="/signup" passHref>
            <Button className="bg-gradient-to-r from-black to-red-500 hover:from-red-500 hover:to-pink-900 text-white w-full rounded-full shadow-lg">
              Create Account
            </Button>
          </Link>

          {/* Log In → /login */}
          <Link href="/login" passHref>
            <Button className="bg-white text-pink-600 hover:bg-black hover:text-white w-full rounded-full shadow-md">
              Log In
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
