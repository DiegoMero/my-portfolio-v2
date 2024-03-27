import Social from "./utility/social"
import TechSkills from "./utility/tech-skills"

export default function About() {
  return (
    <section className="p-3 flex flex-col gap-5 pb-20 pt-20 bg-white rounded-tr-[50px] -mt-20" id="about">
      <div className="flex flex-col gap-5 items-start">
        <h2 className="text-[#172B4D] font-bold text-3xl">About Myself</h2>
        <p className="text-[#344563]">I am passionate about video games and I hope one day to be able to develop new experiences for players, with my love for JavaScript and Ruby. I am confident you can learn something new every day. Don’t hesitate to ask me anything, I’ll be happy to help.</p>
        <h3 className="text-[#7F8CFF]">LET’S CONNECT</h3>
        <Social />
        <button className="border-[#6070FF] border rounded-lg p-3 text-[#396DF2] font-medium active:bg-[#2230D2] active:text-white">Get my resume</button>
      </div>
      <TechSkills />
    </section>
  )
}