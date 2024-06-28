import Link from "next/link"
import Image from "next/image"
import Navbar_Link from "./Navbar_Link"

export default function Navbar() {
  return (
    <nav className="relative inset-x-0 top-0 z-50 shadow-sm bg-[#181818]" >
      <div className="w-full mx-auto px-14 py-6">
        <div className="flex justify-between items-center">
          <Link href="#" className="flex items-center" prefetch={false}>
            <Image src="/images/logo.png" alt="logo" height="60" width="140" className="w-5/6" />
          </Link>
          <nav className="hidden sm:flex gap-6 sm:gap-10 md:gap-16 text-white text-[32px]">
            <Navbar_Link link_name="HOME" link="#" />
            <Navbar_Link link_name="ABOUT" link="#" />
            <Navbar_Link link_name="TEAM" link="#" />
            <Navbar_Link link_name="ROADMAP" link="#" />
            <Navbar_Link link_name="FAQ" link="#" />
          </nav>
          <div className="hidden md:flex items-center gap-4">
            <Image src="/images/wait.png" alt="logo" height="50" width="50" className="w-5/6 h-12" />
          </div>
        </div>
      </div>
    </nav>
  )
}