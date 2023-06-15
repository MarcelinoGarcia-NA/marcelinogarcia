import { SectionTitle } from "../sectionTitle/sectionTitle"
import "./style.scss"

export function Info(){
    return(
        <div className="infos">
        <SectionTitle text="Idiomas"/>
        <div className="languages-info">
          <span>🇺🇸 EN - compreensão</span>
          <span>🇧🇷 PT-BR - idioma nativo</span>
        </div>
        <SectionTitle text="Escolarização"/>
        <div className="educational-info">
          <span>🎓 Tecnológo em Análise e Desenvolvimento de Sistemas </span>
        </div>
      </div>
    )
}