"use client"

import { useState } from "react";
import Languages from "./languages";
import Frameworks from "./frameworks";
import OtherSkills from "./other-skills";

export default function TechSkills() {
  const [toggleLanguagesMenu, setToggleLanguagesMenu] = useState(false);
  const [toggleFrameworksMenu, setToggleFrameworksMenu] = useState(false);
  const [toggleOtherSkillsMenu, setToggleOtherSkillssMenu] = useState(false);


  const [rotateArrowOne, setRotateArrowOne] = useState(false);
  const [rotateArrowTwo, setRotateArrowTwo] = useState(false);
  const [rotateArrowThree, setRotateArrowThree] = useState(false);

  const handleLanguagesClick = () => {
    setToggleLanguagesMenu(!toggleLanguagesMenu);
    setRotateArrowOne(!rotateArrowOne);
  }

  const handleFrameworksClick = () => {
    setToggleFrameworksMenu(!toggleFrameworksMenu);
    setRotateArrowTwo(!rotateArrowTwo);
  }

  const handleOtherSkillsClick = () => {
    setToggleOtherSkillssMenu(!toggleOtherSkillsMenu);
    setRotateArrowThree(!rotateArrowThree);
  }

  return (
    <div className="pt-5">
      <div onClick={handleLanguagesClick} className="p-3 border border-l-white border-r-white border-t-[#DFE1E6] border-b-[#DFE1E6]">
        <div className="flex justify-between items-center">
          <h3 className="font-medium text-xl">Languages</h3>
          <svg width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg" className={`transition-transform ${rotateArrowOne ? 'rotate-90' : 'rotate-0'}`}>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.292893 0.439622C0.683417 0.0490974 1.31658 0.0490974 1.70711 0.439622L7.70711 6.43962C8.09763 6.83015 8.09763 7.46331 7.70711 7.85384L1.70711 13.8538C1.31658 14.2444 0.683417 14.2444 0.292893 13.8538C-0.0976311 13.4633 -0.0976311 12.8301 0.292893 12.4396L5.58579 7.14673L0.292893 1.85384C-0.0976311 1.46331 -0.0976311 0.830146 0.292893 0.439622Z" fill="#505F79" />
          </svg>
        </div>
        {toggleLanguagesMenu && <Languages />}
      </div>
      <div onClick={handleFrameworksClick} className="p-3">
        <div className="flex justify-between items-center">
          <h3 className="font-medium text-xl">Frameworks</h3>
          <svg width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg" className={`transition-transform ${rotateArrowTwo ? 'rotate-90' : 'rotate-0'}`}>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.292893 0.439622C0.683417 0.0490974 1.31658 0.0490974 1.70711 0.439622L7.70711 6.43962C8.09763 6.83015 8.09763 7.46331 7.70711 7.85384L1.70711 13.8538C1.31658 14.2444 0.683417 14.2444 0.292893 13.8538C-0.0976311 13.4633 -0.0976311 12.8301 0.292893 12.4396L5.58579 7.14673L0.292893 1.85384C-0.0976311 1.46331 -0.0976311 0.830146 0.292893 0.439622Z" fill="#505F79" />
          </svg>
        </div>
        {toggleFrameworksMenu && <Frameworks />}
      </div>
      <div onClick={handleOtherSkillsClick} className="p-3 border border-l-white border-r-white border-t-[#DFE1E6] border-b-[#DFE1E6]">
        <div className="flex items-center justify-between ">
          <h3 className="font-medium text-xl">Other Skills</h3>
          <svg width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg" className={`transition-transform ${rotateArrowThree ? 'rotate-90' : 'rotate-0'}`}>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.292893 0.439622C0.683417 0.0490974 1.31658 0.0490974 1.70711 0.439622L7.70711 6.43962C8.09763 6.83015 8.09763 7.46331 7.70711 7.85384L1.70711 13.8538C1.31658 14.2444 0.683417 14.2444 0.292893 13.8538C-0.0976311 13.4633 -0.0976311 12.8301 0.292893 12.4396L5.58579 7.14673L0.292893 1.85384C-0.0976311 1.46331 -0.0976311 0.830146 0.292893 0.439622Z" fill="#505F79" />
          </svg>
        </div>
        {toggleOtherSkillsMenu && <OtherSkills />}
      </div>
    </div>
  )
}