'use client'

import PopupProjectCard from "./popup-project-card";
import Image from "next/image";
import { useState } from "react";

export default function ProjectCard(props: any) {
  const [toggleProjectCard, setToggleProjectCard] = useState(false);

  const handleClick = () => {
    setToggleProjectCard(!toggleProjectCard);
    document.body.style.overflow = toggleProjectCard ? 'auto' : 'hidden';
  }

  const { project } = props;

  return (
    <li className="p-3 border hover:border-[#7F8CFF] border-[#DFE1E6] rounded-lg flex flex-col gap-2 bg-white md:flex-row md:gap-10 md:even:flex-row-reverse">
      <div className="pl-3 pr-3 pt-6 pb-6 bg-[#6070FF] rounded-lg md:flex-1 md:pt-16 md:pb-16">
        <Image
          src={project.image}
          width={1200}
          height={900}
          alt={project.title}
        />
      </div>
      <div className="flex flex-col gap-3 items-start md:flex-1 md:pt-16">
        <h2 className="text-[#172B4D] font-bold text-3xl">{project.title}</h2>
        <p className="text-[#344563]">{project.description}</p>
        <ul className="flex gap-3 flex-wrap">
          {project.tools.map((tool: string, index: number) => (
            <li key={index} className="text-[#6070FF] bg-[#EBEBFF] p-1 rounded-lg">{tool}</li>
          ))}
        </ul>
        <button onClick={handleClick} className="border-[#6070FF] hover:bg-[#6070FF] hover:text-white border rounded-lg p-3 text-[#396DF2] font-medium active:bg-[#2230D2] active:text-white">See Project</button>
        { toggleProjectCard && <PopupProjectCard project={project} handleClick={handleClick} />}
      </div>
    </li>
  )
}