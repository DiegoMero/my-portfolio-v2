import Image from "next/image"
import Social from "./utility/social"

export default function Header() {
  return (
    <header className='h-[85vh] relative p-3 flex flex-col justify-center gap-2'>
      <Image
        src='/header-shapes-mobile.png'
        fill
        alt='Header'
        className="-z-10"
      />
      <h1 className="text-[#172B4D] font-bold text-4xl">I’m Diego.<br />Glad to see you!</h1>
      <p className="text-[#344563]">I’m a software developer! I can help you build a product , feature or website. Look through some of my work and experience! If you like what you see and have a project you need coded, don’t hesitate to contact me.</p>
      <h2 className="text-[#7F8CFF] font-semibold">LET’S CONNECT</h2>
      <Social /> 
    </header>
  )
}