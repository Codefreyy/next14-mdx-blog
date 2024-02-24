import Link from "next/link"
import {
  FaYoutube,
  FaTwitter,
  FaGithub,
  FaLaptop,
  FaLinkedin,
} from "react-icons/fa"

export default function Navbar() {
  return (
    <nav className="bg-white p-4 sticky top-0 shadow-md mb-10 z-10 ">
      <div className="mx-auto flex justify-between flex-col sm:flex-row bg-white px-4 max-w-5xl">
        <h1 className="text-2xl font-bold grid  mb-2 md:mb-0">
          <Link href="/" className="no-underline text-themePink ">
            Joy Peng
          </Link>
        </h1>
        <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4  text-4xl lg:text-5xl">
          {/* <Link href="https://twitter.com/yesdavidgray">
            <FaLinkedin className="w-12 h-12" />
          </Link> */}
        </div>
      </div>
    </nav>
  )
}
