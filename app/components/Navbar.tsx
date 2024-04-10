import Link from "next/link"
import { ModeToggle } from "./ModeToggler"

export default function Navbar() {
  return (
    <nav className="dark:bg-themeBlack w-full bg-white p-4 sticky max-w-4xl top-0  z-1 flex justify-between sm:flex-row flex-nowrap mx-auto">
      <h1 className="text-2xl font-bold grid  mb-2 md:mb-0">
        <Link
          href="/"
          className="no-underline text-themePink dark:text-darkPink font-semibold"
        >
          Joy Peng
        </Link>
      </h1>
      <div className=" dark:text-white/90 flex flex-row justify-center sm:justify-evenly align-middle gap-4  text-4xl lg:text-5xl">
        <ModeToggle />
      </div>
    </nav>
  )
}
