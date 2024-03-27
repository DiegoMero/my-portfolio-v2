import Image from "next/image"

export default function Languages() {
  return (
    <ul className="flex flex-col md:flex-row gap-3 pt-5">
      <li className="flex md:flex-col md:items-start bg-[#F7F7F9] items-center gap-3 p-3 text-[#253858] rounded-lg md:w-28">
        <Image
          src='/logos/JavaScript-logo.png'
          width={50}
          height={50}
          alt="JavaScript"
          className="rounded-full"
        />
        JavaScript
      </li>
      <li className="flex md:flex-col md:items-start bg-[#F7F7F9] items-center gap-3 p-3 text-[#253858] rounded-lg md:w-28">
        <Image
          src='/logos/html-logo.png'
          width={50}
          height={50}
          alt="HTML"
        />
        HTML
      </li>
      <li className="flex md:flex-col md:items-start bg-[#F7F7F9] items-center gap-3 p-3 text-[#253858] rounded-lg md:w-28">
        <Image
          src='/logos/css-logo.png'
          width={50}
          height={50}
          alt="CSS"
        />
        CSS
      </li>
      <li className="flex md:flex-col md:items-start bg-[#F7F7F9] items-center gap-3 p-3 text-[#253858] rounded-lg md:w-28">
        <Image
          src='/logos/Ruby_logo.png'
          width={50}
          height={50}
          alt="Ruby"
        />
        Ruby
      </li>
    </ul>
  )
}