import ProjectCard from "./utility/project-card"

export default function Projects() {
  const projects = [
    {
      image: '/amass.png',
      title: 'One-Page Website Design',
      description: 'A responsive single page that offers a dynamic and user-centered web experience. This project combines elegant design with fluid functionality to present information effectively and attractively.',
      tools: ['Next.js', 'Tailwind CSS'],
      liveLink: 'https://www.amassecuador.com/',
      sourceLink: 'https://github.com/DiegoMero/amass-beta'
    },
    {
      image: '/petfriendlypage.png',
      title: 'Pet-Friendly Webpage',
      description: 'A small foundation with the objective of helping to fulfill the dreams of our pets. Donate and sponsor them to bring them closer every day to fulfilling their dreams.',
      tools: ['Ruby on Rails', 'Tailwind CSS', 'PostgreSQL'],
      liveLink: 'https://pet-webpage.onrender.com/',
      sourceLink: 'https://github.com/DiegoMero/pet-webpage'
    },
    {
      image: '/super-mario-run-screenshot.png',
      title: 'Super Mario Run',
      description: 'Run, jump and smash enemies as you race against the clock and against other participants, do you have what it takes to save the princess? Fortune and glory, kid.',
      tools: ['HTML', 'CSS', 'JavaScript'],
      liveLink: 'https://diegomero.github.io/Super-Mario-Run/',
      sourceLink: 'https://github.com/DiegoMero/Super-Mario-Run'
    },
    {
      image: '/bookstore.png',
      title: 'Bookstore',
      description: 'An advanced book management solution designed for book lovers. Bookstore provides users with a virtual environment where they can intuitively catalogue, browse and manage their personal collection of books.',
      tools: ['HTML', 'CSS', 'React'],
      liveLink: 'https://astonishing-youtiao-974e95.netlify.app/',
      sourceLink: 'https://github.com/DiegoMero/bookstore',
    },
  ]



  return (
    <ul id="projects" className="p-3 pt-40 bg-[#F7F7F9] flex flex-col gap-20 -mt-10 pb-40 md:-mt-48 md:pt-80 md:pl-28 md:pr-28">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </ul>
  )
}