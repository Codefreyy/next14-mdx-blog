import Link from "next/link"
import getFormattedDate from "@/lib/getFormattedDate"

type Props = {
  post: Meta
}

export default function ListItem({ post }: Props) {
  const { id, title, date, description } = post
  // const formattedDate = getFormattedDate(date)

  return (
    <li className="mt-4 text-2xl dark:text-white/90 mb-10">
      <Link
        className="link font-medium peer peer-hover:text-themePink"
        href={`${id}`}
      >
        {title}
      </Link>
      <p className="text-sm text-slate-400 mt-1 mb-0">{description}</p>
      <a
        className="text-sm peer-hover:underline peer hover/item:text-themePink font-medium link"
        href={`${id}`}
      >
        Read more
      </a>
    </li>
  )
}
