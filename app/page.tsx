import Navbar from "@/components/layout/Navbar"
import LandingHero from "@/components/landing/LandingHero"

export default function HomePage() {
  return (
    <main className="h-screen flex flex-col bg-gradient-to-b from-pink-500 via-red-500 to-orange-500">
      <Navbar />
      <LandingHero />
    </main>
  )
}
