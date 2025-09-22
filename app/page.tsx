export default function HomePage() {
  return (
    <main className="h-screen flex flex-col bg-gradient-to-b from-pink-500 via-red-500 to-orange-500 text-white">
      {/* Navbar */}
      <header className="flex justify-between items-center px-6 py-4">
        <img src="/shinna.png" alt="Shinani Logo" className="w-10 h-10" />
        <a
          href="/auth"
          className="px-4 py-2 rounded-full border border-white font-semibold hover:bg-white hover:text-pink-600 transition"
        >
          Log In
        </a>
      </header>

      {/* Hero Section */}
      <section className="flex flex-1 flex-col items-center justify-center text-center px-6">
        <h1 className="text-5xl font-extrabold mb-6">Swipe Right®</h1>
        <p className="text-lg max-w-xl mb-8">
          Make meaningful connections and meet new people today.
        </p>

        <a
          href="/auth"
          className="px-8 py-4 rounded-full bg-white text-pink-600 font-bold text-lg hover:bg-gray-100 transition"
        >
          Create Account
        </a>
      </section>
    </main>
  )
}
