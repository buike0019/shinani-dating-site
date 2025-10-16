import ProfileCard from "@/components/profile/ProfileCard";

const sample = [
  { name: "Amina", age: 28, location: "Nairobi, KE", bio: "Loves hiking and coffee.", imgSrc: "/sample1.jpg" },
  { name: "Jon", age: 30, location: "Lagos, NG", bio: "Musician and traveler.", imgSrc: "/sample2.jpg" },
];

export default function MatchesList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {sample.map((p) => (
        <ProfileCard key={p.name} {...p} />
      ))}
    </div>
  );
}
