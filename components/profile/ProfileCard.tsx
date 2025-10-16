import Image from "next/image";
import { Button } from "@/components/ui/button";

type ProfileProps = {
  name: string;
  age?: number;
  location?: string;
  bio?: string;
  imgSrc?: string;
};

export default function ProfileCard({
  name,
  age,
  location,
  bio,
  imgSrc = "/default-profile.png",
}: ProfileProps) {
  return (
    <div className="w-full max-w-sm bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 text-white">
      <div className="relative h-56 w-full rounded-xl overflow-hidden mb-4">
        <Image src={imgSrc} alt={name} fill style={{ objectFit: "cover" }} />
      </div>
      <div className="mb-3">
        <h3 className="text-xl font-semibold">{name}, {age}</h3>
        <p className="text-sm text-zinc-300">{location}</p>
      </div>
      <p className="text-sm text-zinc-200 mb-4">{bio}</p>
      <div className="flex gap-3">
        <Button className="bg-white text-pink-600 rounded-full px-4 py-2">Message</Button>
        <Button className="bg-gradient-to-r from-black to-red-500 text-white rounded-full px-4 py-2">Like</Button>
      </div>
    </div>
  );
}
