import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white p-4 font-mono">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-xl mb-8">Page not found</p>
      <Link href="/" className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 transition-colors">
        Return Home
      </Link>
    </div>
  )
}
