import Link from "next/link"

export default function NotFound() {
  return (
    <div className="text-center prose prose-xl prose-slate dark:prose-invert">
      <p className="mt-10">Sorry, the requested post does not exist.</p>
      <Link href="/">Back to Home</Link>
    </div>
  )
}
