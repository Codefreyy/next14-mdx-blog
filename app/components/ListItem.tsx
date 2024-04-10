import Link from "next/link"

type Props = {
  post: Meta
}

export default function ListItem({ post }: Props) {
  const { id, title, description } = post
  return (
    <li className="mt-4 text-2xl dark:text-white/90 mb-10 group">
      <Link
        className="link-no-underline font-medium group-hover:text-themePink"
        href={`/${id}`}
      >
        {title}
        <p className="text-sm text-slate-400 mt-1 mb-0">{description}</p>
      </Link>
      <a
        className="text-sm group-hover:text-themePink group-hover:underline font-medium link-no-underline"
        href={`/${id}`}
      >
        Read more
      </a>
    </li>
  )
}
