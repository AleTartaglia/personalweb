import React from "react";
import { ResumeStyled, InnerLayout } from "../styles/index";
import Title from "../Components/Title";
import SmallTitle from "../Components/SmallTitle";
import ResumeItem from "../Components/ResumeItem";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import SchoolIcon from "@material-ui/icons/School";
const Resume = () => {
  const briefcase = <BusinessCenterIcon />;
  const school = <SchoolIcon />;
  return (
    <ResumeStyled>
      <Title title={"Experiencia"} span={"Experiencia"} />
      <InnerLayout>
        <div className="small-title">
          <SmallTitle icon={briefcase} title={"Experiencia profesional"} />
        </div>
        <div className="resume-content">
          <ResumeItem
            year={"2021 - present"}
            title={"Jobint"}
            subTitle={"Bumeran Team"}
            text={
              "Soy integrante del equipo de Frontend, orientado al desarrollo y mantenimiento de los usuarios de tipo Empresa en los portales de Zonajobs y Bumeran en Argentina, Chile, Perú, México, Ecuador, Panamá y Venezuela. Utilizamos diferentes tecnologías como React Js, Redux, Less, entre otras. También implementamos SCRUM como metodología ágil y sesiones de Pair Programming entre compañeros de trabajo"
            }
          />
          <ResumeItem
            year={"2014 - 2020"}
            title={"Ministerio Público Fiscal"}
            subTitle={"Abogado en la UFIARM"}
            text={
              "Formé parte de equipos de investigación y realicé trabajos individuales que consistían en el ingreso,seguimiento, desarrollo, toma de decisiones y finalización de investigaciones que me permitieron desarrollar habilidades de comunicación como así también aplicar mis aptitudes para la solución de un conflicto planteado."
            }
          />
          <ResumeItem
            year={"2013 - 2014"}
            title={"Estudio Jurídico"}
            subTitle={"Fargosi & Asociados"}
            text={
              "Integré un equipo de abogados avocados a la resolución de conflictos legales. Tuve laposibilidad de ampliar mis conocimientos técnicos sobre varias áreas del Derecho, como así también desarrollar mis capacidades de comunicación y trato con clientes y colegas. "
            }
          />
        </div>
        <div className="small-title u-small-title-margin">
          <SmallTitle icon={school} title={"Educación"} />
        </div>
        <div className="resume-content ">
          <ResumeItem
            year={"09/2020 - 12/2020"}
            title={"Full Stack Developer"}
            subTitle={"Plataforma 5"}
            text={
              "Programa de capacitación intensivo con más de 800 hs de práctica enfocado en: React.Js, Hooks, React-Redux, Node.Js(Express), Git, GitHub, Scrum, PostgreSQL, Sequelize,MongoDB, entre otras, que me permitió adquirir y ampliar mis conocimientos en JavaScript y algunas de sus principales librerías y frameworks, como de la programación en general. "
            }
          />
          <ResumeItem
            year={"05/2019 - 09/2019"}
            title={"Programación y Diseño Web"}
            subTitle={"Educación IT"}
            text={
              "Realicé distintos cursos orientados a adquirir conocimientos avanzados en JavaScript y Diseño Web. "
            }
          />
          <ResumeItem
            year={"2011 - 2018"}
            title={"Abogacía"}
            subTitle={"Universidad de Buenos Aires"}
            text={
              "Cursé y finalicé la carrera de Abogacía obteniendo el título de Abogado. "
            }
          />
        </div>
      </InnerLayout>
    </ResumeStyled>
  );
};

export default Resume;
