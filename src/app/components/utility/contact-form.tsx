'use client'

import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("meqyregq");

  if (state.succeeded) {
    return <p className="z-10 text-white text-2xl">Thanks for your submission!</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-start z-10 gap-5">
      <input id="name" type="name" name="name" className="border border-[#CFD8DC] w-full rounded-md" placeholder="Write your name here" required />
      <ValidationError prefix="Name" field="name" errors={state.errors} />
      <input id="email" type="email" name="email" className="border border-[#CFD8DC] w-full rounded-md" placeholder="Write your e-mail here" required />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea id="message" name="message" className="border border-[#CFD8DC] w-full rounded-md h-44" placeholder="Write your message here" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button type="submit" disabled={state.submitting} className="rounded-lg p-3 text-[#396DF2] bg-white font-medium active:bg-[#2230D2] active:text-white">
        Get in touch
      </button>
      <ValidationError errors={state.errors} />
    </form>
  );
}
