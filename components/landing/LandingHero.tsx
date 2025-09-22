"use client";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <div className="relative h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/tinder-bg.jpg"
          alt="Tinder background"
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-5xl font-bold mb-6">Swipe Right®</h1>
        <p className="max-w-lg mb-8">
          Make meaningful connections and meet new people around the world.
        </p>
        <div className="flex flex-col gap-4 w-full max-w-sm">
          <Button className="bg-red-500 hover:bg-red-600 text-white w-full rounded-full">
            Create Account
          </Button>
          <Button className="bg-white text-black hover:bg-gray-200 w-full rounded-full">
            Log In
          </Button>
        </div>
      </div>
    </div>
  );
}
