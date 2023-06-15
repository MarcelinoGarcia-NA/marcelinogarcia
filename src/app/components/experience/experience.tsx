import Image from "next/image"
import { SectionTitle } from "../sectionTitle/sectionTitle"

import "./style.scss"
import { Skill } from "../skill/skill"

export function Experience(){
    return(
        <div className="experience">
          <SectionTitle text="Experiência"/>
          <p>Atualmente professor substituto no IFMS.</p>
          <p>Desenvolvedor e COO na Startup Onvider durante 2 anos.</p>
          <p></p>
          <div className="experience-time">
            <Skill image="/react.png" measure={2} years="3 anos"/>
            <Skill image="/ts.png" measure={1} years="1 ano"/>
            <Skill image="/js.png" measure={3} years="4 anos"/>
            <Skill image="/java.png" measure={3} years="4 anos"/>
          </div>
        </div>
    )
}