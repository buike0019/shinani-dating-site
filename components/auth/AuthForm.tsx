export default function AuthForm() {
  return (
    <div className="bg-gray-900 rounded-2xl p-8 w-full max-w-md shadow-lg">
      <h1 className="text-2xl font-bold mb-6 text-center text-white">Log in</h1>

      <div className="flex flex-col gap-4">
        {/* Google */}
        <button className="w-full py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition">
          Continue with Google
        </button>

        {/* Facebook */}
        <button className="w-full py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition">
          Continue with Facebook
        </button>

        {/* Phone Number */}
        <button className="w-full py-3 bg-gray-800 text-white rounded-full font-semibold hover:bg-gray-700 transition">
          Continue with Phone Number
        </button>
      </div>

      <p className="text-sm text-gray-400 mt-6 text-center">
        By continuing, you agree to our Terms and Privacy Policy.
      </p>
    </div>
  )
}
