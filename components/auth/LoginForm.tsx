"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [error, setError] = useState("");

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement).value;

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.error) setError(res.error);
    else window.location.href = "/";
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md text-center">
        <h2 className="text-2xl font-bold mb-6">Log In</h2>

        {/* Google Login */}
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

        <form onSubmit={handleEmailLogin} className="flex flex-col gap-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="border px-4 py-2 rounded-full"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="border px-4 py-2 rounded-full"
          />
          <Button type="submit" className="bg-red-500 text-white rounded-full py-2">
            Log In
          </Button>
        </form>

        {error && <p className="text-red-500 mt-2">{error}</p>}

        <p className="mt-6 text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link href="/signup" className="text-red-500 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
