import ContactForm from "./utility/contact-form"
import Image from "next/image"

export default function Contact() {
  return (
    <section className="text-center h-[660px] relative p-3 flex flex-col gap-5" id="contact-me">
      <Image
        src='/contact-me-bg.png'
        fill
        alt='Contact Me Background'
        className="-z-10"
      />
      <h2 className="z-10 text-3xl font-semibold text-white pt-20">Contact me</h2>
      <p className="z-10 text-[#EBEBFF]">If you have an application you are interested in developing, a feature that you need built or a project that needs coding. I’d love to help with it!</p>
      <ContactForm />
    </section>
  )
}