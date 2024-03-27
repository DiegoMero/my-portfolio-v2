import Image from "next/image"

export default function OtherSkills() {
  return (
    <ul className="flex flex-col md:flex-row gap-3 pt-5">
      <li className="flex md:flex-col md:items-start bg-[#F7F7F9] items-center gap-3 p-3 text-[#253858] rounded-lg md:w-32">
        <Image
          src='/logos/redux-logo.png'
          width={50}
          height={50}
          alt="Redux"
        />
        Redux
      </li>
      <li className="flex md:flex-col md:items-start bg-[#F7F7F9] items-center gap-3 p-3 text-[#253858] rounded-lg md:w-32">
        <Image
          src='/logos/Postgresql-logo.png'
          width={50}
          height={50}
          alt="PostgreSQL"
        />
        PostgreSQL
      </li>
    </ul>
  )
}