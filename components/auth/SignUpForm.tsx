"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md text-center">
        <h2 className="text-2xl font-bold mb-6">Create Account</h2>

        {/* Google Signup */}
        <Button
          onClick={() => signIn("google", { callbackUrl: "/" })}
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
          For email signup, please log in with credentials (will connect to DB later).
        </p>

        <p className="mt-6 text-sm text-gray-600">
          Already have an account?{" "}
          <Link href="/login" className="text-red-500 hover:underline">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}
