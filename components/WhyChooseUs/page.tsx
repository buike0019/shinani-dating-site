"use client";

import { Heart, MessageCircle, Globe, Shield } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: <Heart className="w-10 h-10 text-pink-500" />,
      title: "Smart Matching",
      desc: "Connect with people who truly match your vibe using our advanced matching algorithm.",
    },
    {
      icon: <MessageCircle className="w-10 h-10 text-red-500" />,
      title: "Real Conversations",
      desc: "Start meaningful chats with people who are genuinely interested in knowing you.",
    },
    {
      icon: <Globe className="w-10 h-10 text-purple-500" />,
      title: "Global Community",
      desc: "Meet people from around the world and explore cultures beyond borders.",
    },
    {
      icon: <Shield className="w-10 h-10 text-pink-700" />,
      title: "Safe & Secure",
      desc: "Your privacy is our priority with encrypted chats and secure verification.",
    },
  ];

  return (
    <section className="bg-black text-white py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Why Choose <span className="text-pink-500">Shinani®</span>?
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          We make dating exciting, meaningful, and safe — giving you the tools to build real connections.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl shadow-lg hover:scale-105 transform transition duration-300"
          >
            <div className="flex justify-center mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
