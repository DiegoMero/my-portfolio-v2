import Image from "next/image"

export default function Navbar() {
  return (
    <nav className="flex items-center h-[15vh] justify-between sticky top-0 z-20 p-3 bg-white">
      <Image
        src='/my-logo.png'
        width={140}
        height={100}
        alt="Home"
      />
      <svg width="26" height="20" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 1C0 0.447715 0.447715 0 1 0H17C17.5523 0 18 0.447715 18 1C18 1.55228 17.5523 2 17 2H1C0.447715 2 0 1.55228 0 1ZM0 6C0 5.44772 0.447715 5 1 5L17 5C17.5523 5 18 5.44772 18 6C18 6.55229 17.5523 7 17 7L1 7C0.447715 7 0 6.55228 0 6ZM1 10C0.447715 10 0 10.4477 0 11C0 11.5523 0.447715 12 1 12H17C17.5523 12 18 11.5523 18 11C18 10.4477 17.5523 10 17 10H1Z" fill="#6070FF" />
      </svg>
    </nav>
  )
}