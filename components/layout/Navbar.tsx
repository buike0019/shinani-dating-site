export default function Navbar() {
  return (
    <header className="flex justify-between items-center px-6 py-4 text-white">
      <img src="/logo.svg" alt="Tinder Logo" className="w-10 h-10" />
      <a
        href="/auth"
        className="px-4 py-2 rounded-full border border-white font-semibold hover:bg-white hover:text-pink-600 transition"
      >
        Log In
      </a>
    </header>
  )
}
