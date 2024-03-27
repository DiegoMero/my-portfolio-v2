import Image from "next/image"

export default function Frameworks() {
  return (
    <ul className="flex flex-col md:flex-row gap-3 pt-5">
      <li className="flex md:flex-col md:items-start bg-[#F7F7F9] items-center gap-3 p-3 text-[#253858] rounded-lg md:w-32">
        <Image
          src='/logos/nextjs-logo.png'
          width={50}
          height={50}
          alt="Next.js"
        />
        Next.js
      </li>
      <li className="flex md:flex-col md:items-start bg-[#F7F7F9] items-center gap-3 p-3 text-[#253858] rounded-lg md:w-32">
        <Image
          src='/logos/Tailwind_CSS_Logo.png'
          width={50}
          height={50}
          alt="Tailwind CSS"
        />
        Tailwind CSS
      </li>
      <li className="flex md:flex-col md:items-start bg-[#F7F7F9] items-center gap-3 p-3 text-[#253858] rounded-lg md:w-auto">
        <Image
          src='/logos/rubyonrails-logo.png'
          width={50}
          height={50}
          alt="Ruby on Rails"
        />
        Ruby on Rails
      </li>
    </ul>
  )
}