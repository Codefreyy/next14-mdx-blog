import Link from "next/link"
import { ModeToggle } from "./ModeToggler"

export default function Navbar() {
  return (
    <nav className="dark:bg-black  bg-white p-4 sticky top-0 shadow-sm z-1">
      <div className="mx-auto flex justify-between  sm:flex-row flex-nowrap px-4 max-w-3xl">
        <h1 className="text-2xl font-bold grid  mb-2 md:mb-0">
          <Link href="/" className="no-underline text-themePink">
            Joy Peng
          </Link>
        </h1>
        <div className=" dark:text-white/90 flex flex-row justify-center sm:justify-evenly align-middle gap-4  text-4xl lg:text-5xl">
          <ModeToggle />
        </div>
      </div>
    </nav>
  )
}
