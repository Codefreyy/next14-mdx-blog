"use client"

import Link from "next/link"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div>
      <h2 className="my-4 text-2xl font-bold">Something went wrong!</h2>
      <button
        className="mb-4 p-4 bg-red-500 text-white rounded-xl"
        onClick={() => reset()}
      >
        Try again
      </button>
      <p className="text-xl">
        Or go back to{" "}
        <Link className="underline" href="/">
          Home 🏠
        </Link>
      </p>
    </div>
  )
}
