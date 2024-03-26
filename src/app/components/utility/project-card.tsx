import Image from "next/image";

export default function ProjectCard(props: any) {
  const { project } = props;

  return (
    <li className="p-3 border border-[#DFE1E6] rounded-lg flex flex-col gap-4 items-start bg-white">
      <div className="pl-3 pr-3 pt-6 pb-6 bg-[#6070FF] rounded-lg">
        <Image
          src={project.image}
          width={900}
          height={1200}
          alt={project.title}
        />
      </div>
      <h2 className="text-[#172B4D] font-bold text-3xl">{project.title}</h2>
      <p className="text-[#344563]">{project.description}</p>
      <ul className="flex gap-3 flex-wrap">
        {project.tools.map((tool: string, index: number) => (
          <li key={index} className="text-[#6070FF] bg-[#EBEBFF] p-1 rounded-lg">{tool}</li>
        ))}
      </ul>
      <button className="border-[#6070FF] border rounded-lg p-3 text-[#396DF2] font-medium active:bg-[#2230D2] active:text-white">See Project</button>
    </li>
  )
}