import { getPostMeta } from "@/lib/posts"
import ListItem from "./ListItem"

export default async function Posts() {
  const posts = await getPostMeta()
  if (!posts) {
    return <p className="mt-10 text-center">Sorry, no posts available.</p>
  }

  return (
    <section className="mt-6 max-w-4xl mx-4 sm:mx-auto">
      <h2 className="text-4xl font-bold dark:text-white/90">Blog</h2>
      <ul className="w-full list-none p-0">
        {posts.map((post) => (
          <ListItem key={post.id} post={post} />
        ))}
      </ul>
    </section>
  )
}
