import ContactForm from "./utility/contact-form"
import Image from "next/image"

export default function Contact() {
  return (
    <section className="text-center h-[660px] md:h-[85vh] relative p-3 flex flex-col gap-5 md:items-center" id="contact-me">
      <Image
        src='/contact-me-bg.png'
        fill
        alt='Contact Me Background'
        className="-z-10 md:hidden"
      />
      <Image
        src='/contact-form-background-shape-desktop.png'
        fill
        alt='Contact Me Background'
        className="-z-10 hidden md:block"
      />
      <h2 className="z-10 text-3xl font-semibold text-white pt-20 md:pt-10">Contact me</h2>
      <p className="z-10 text-[#EBEBFF] md:text-center md:w-1/4">If you have an application you are interested in developing, a feature that you need built or a project that needs coding. I’d love to help with it!</p>
      <ContactForm />
    </section>
  )
}