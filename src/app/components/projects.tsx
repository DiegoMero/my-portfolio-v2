import ProjectCard from "./utility/project-card"

export default function Projects() {
  const projects = [
    {
      image: '/super-mario-run-screenshot.png',
      title: 'One-Page Website Design',
      description: 'A responsive single page that offers a dynamic and user-centered web experience. With a minimalist approach and intuitive navigation, this project combines elegant design with fluid functionality to present information effectively and attractively.',
      tools: ['Next.js', 'Tailwind CSS']
    },
    {
      image: '/super-mario-run-screenshot.png',
      title: 'Super Mario Run',
      description: 'Run, jump and smash enemies as you race against the clock and against other participants, do you have what it takes to save the princess? Fortune and glory, kid.',
      tools: ['HTML', 'JavaScript', 'CSS']
    },
    {
      image: '/super-mario-run-screenshot.png',
      title: 'Bookstore',
      description: 'An advanced book management solution designed for book lovers. Bookstore provides users with a virtual environment where they can intuitively catalogue, browse and manage their personal collection of books.',
      tools: ['React', 'CSS']
    },
    {
      image: '/super-mario-run-screenshot.png',
      title: 'Pet Friendly Web',
      description: 'An enjoyable website that uses the database queries to show the different characteristics of pets, feel free to try it and help pets fulfill their dreams!',
      tools: ['Ruby on Rails', 'Tailwind CSS', 'PostgreSQL']
    },
  ]



  return (
    <ul id="projects" className="p-3 pt-40 bg-[#F7F7F9] flex flex-col gap-20 -mt-10 pb-40">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </ul>
  )
}