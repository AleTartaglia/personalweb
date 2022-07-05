import React from "react";
import { SkillsStyled, InnerLayout } from "../styles/index";
import Title from "../Components/Title";
import SubTitle from "../Components/SubTitle";
import SkillItems from "./SkillItems";
function Skills() {
  return (
    <SkillsStyled>
      <Title title={"Habilidades"} span={"Habilidades"} />

      <InnerLayout>
        <SubTitle title={"Desarrollo"} />
        <div className="skills">
          <SkillItems title={"HTML5"} />
          <SkillItems title={"JavaScript"} />
          <SkillItems title={"React Js"} />
          <SkillItems title={"Hooks"} />
          <SkillItems title={"React-Redux"} />
          <SkillItems title={"Node Js (Express)"} />
          <SkillItems title={"Restful API"} />
        </div>
      </InnerLayout>
      <InnerLayout>
        <SubTitle title={"diseño"} />
        <div className="skills">
          <SkillItems title={"CCS3"} />
          <SkillItems title={"Styled Components"} />
          <SkillItems title={"SASS"} />
          <SkillItems title={"Figma"} />
          <SkillItems title={"Flexbox"} />
          <SkillItems title={"React-Boostrap"} />
        </div>
      </InnerLayout>
      <InnerLayout>
        <SubTitle title={"Otras Habilidades"} />
        <div className="skills">
          <SkillItems title={"GIT"} />
          <SkillItems title={"GitHub"} />
          <SkillItems title={"SCRUM"} />
          <SkillItems title={"TRELLO"} />
          <SkillItems title={"JIRA"} />
        </div>
      </InnerLayout>
      <InnerLayout>
        <SubTitle title={"Idiomas"} />
        <div className="skills lastSkill">
          <SkillItems title={"ESPAÑOL: nativo"} />
          <SkillItems title={"INGLES: B1"} />
        </div>
      </InnerLayout>
    </SkillsStyled>
  );
}

export default Skills;
