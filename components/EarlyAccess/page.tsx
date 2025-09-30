"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const people = [
  {
    name: "Sophia, 24",
    img: "/avatars/girl1.jpg",
    info: "Traveler ✈️ | Foodie 🍕 | Loves deep talks",
  },
  {
    name: "Daniel, 27",
    img: "/avatars/guy1.jpg",
    info: "Fitness junkie 💪 | Guitar player 🎸 | Dog dad 🐶",
  },
  {
    name: "Maya, 22",
    img: "/avatars/girl2.jpg",
    info: "Art lover 🎨 | Coffee addict ☕ | Bookworm 📚",
  },
];

export default function EarlyAccessSection() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-pink-600 via-red-500 to-purple-700 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          Be the First to Know
        </h2>
        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-90">
          Get early access to Shinani® and connect with amazing people before
          anyone else.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          {people.map((person, index) => (
            <Card
              key={index}
              className="rounded-2xl overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:scale-105 transform transition"
            >
              <CardContent className="p-0">
                <img
                  src={person.img}
                  alt={person.name}
                  className="w-full h-60 object-cover"
                />
                <div className="p-4 text-left">
                  <h3 className="text-xl font-semibold">{person.name}</h3>
                  <p className="text-sm text-gray-200">{person.info}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <Button className="px-8 py-4 text-lg rounded-full bg-gradient-to-r from-black to-red-600 hover:from-red-600 hover:to-pink-800 shadow-lg">
          Join the Waitlist
        </Button>
      </div>
    </section>
  );
}
