"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function SignUpPage() {
  const [showPopup, setShowPopup] = useState(false);

  const handleGoogleSignUp = async () => {
    try {
      await signIn("google", { redirect: false });
      setShowPopup(true);
    } catch (err) {
      console.error("Google signup failed:", err);
    }
  };

  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => {
        window.location.href = "/login";
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 relative">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md text-center">
        <h2 className="text-2xl font-bold mb-6">Create Account</h2>

        {/* Google Signup */}
        <Button
          onClick={handleGoogleSignUp}
          className="w-full bg-red-500 hover:bg-red-600 text-white rounded-full py-3 mb-4"
        >
          Continue with Google
        </Button>

        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-gray-500 text-sm">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <p className="text-gray-600 mb-4">
          For email signup, please log in with credentials (DB integration later).
        </p>

        <p className="mt-6 text-sm text-gray-600">
          Already have an account?{" "}
          <Link href="/login" className="text-red-500 hover:underline">
            Log In
          </Link>
        </p>
      </div>

      {/* Success Popup */}
      {showPopup && (
        <div className="absolute top-10 bg-white shadow-xl rounded-xl p-6 flex flex-col items-center animate-bounce">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500 text-white text-3xl">
            ✓
          </div>
          <p className="mt-3 text-green-600 font-semibold">
            Registration successful!
          </p>
          <p className="text-sm text-gray-500">
            Login to the app to continue
          </p>
        </div>
      )}
    </div>
  );
}
