export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen bg-black text-white">
      <div className="flex flex-col items-center gap-4">
        {/* Logo or Spinner */}
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-pink-500"></div>
        <p className="text-lg font-semibold">Loading your match...</p>
      </div>
    </div>
  )
}
