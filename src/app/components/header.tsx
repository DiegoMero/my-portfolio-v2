import Image from "next/image"
import Social from "./utility/social"

export default function Header() {
  return (
    <header className='h-[85vh] relative p-3 flex flex-col justify-center gap-2 bg-white rounded-bl-[60px] md:pr-48 md:pl-48 md:rounded-bl-[250px]'>
      <Image
        src='/header-shapes-mobile.png'
        fill
        alt='Header'
        className="md:hidden"
      />
      <Image
        src='/Header-bg.png'
        fill
        alt='Header'
        className="hidden md:block select-none"
      />
      <h1 className="text-[#172B4D] font-bold text-4xl z-10 md:text-5xl">I’m Diego.<br />Glad to see you!</h1>
      <p className="text-[#344563] z-10 md:text-xl">I’m a software developer! I can help you build a product , feature or website. Look through some of my work and experience! If you like what you see and have a project you need coded, don’t hesitate to contact me.</p>
      <h2 className="text-[#7F8CFF] font-semibold z-10 md:text-xl">LET’S CONNECT</h2>
      <Social /> 
    </header>
  )
}