import React from "react";
import { ImageSectionStyled } from "../styles/index.js";
import PrimaryButton from "./PrimaryButton";
import resume from "../img/resume.jpg";
const ImageSection = () => {
  return (
    <ImageSectionStyled>
      <div className="left-content">
        <img src={resume} alt="resume" />
      </div>
      <div className="right-content">
        <h4>
          Yo soy <span>Alejandro Tartaglia</span>
        </h4>
        <p className="paragraph">
          Impulsado por la curiosidad y las ganas de insertarme en el mundo IT,
          realicé un Coding Bootcamp orientado en tecnologías como JavaScript y
          ReactJs, entre otras.
          <br />
          <br />
          Siempre busco estar motivado por aprender, crecer y alcanzar nuevas
          metas, enfocándome en desarrollar e incrementar mis habilidades
          técnicas y personales para lograr un mejor resultado.
          <br />
          <br />
          Soy nativo en lenguaje español pero también intermedio en Inglés y he
          comenzado con lecciones en italiano.
          <br />
          <br />
          Poseo ciudanía y pasaporte Europeo.
        </p>
        <div className="about-info">
          <div className="info-title">
            <p>Nombre:</p>
            <p>Edad:</p>
            <p>Nacionalidad: </p>
            <p>Idiomas: </p>
            <p>Ubicación:</p>
            <p>Rol:</p>
          </div>
          <div className="info">
            <p> Alejandro Tartaglia</p>
            <p> 28</p>
            <p> Argentina - Italia </p>
            <p> Español (nativo), Inglés (B1)</p>
            <p> Barcelona, Cataluña, España</p>
            <p> FrontEnd Developer</p>
          </div>
        </div>
        <PrimaryButton title={"Download Cv"} pdf="true" />
      </div>
    </ImageSectionStyled>
  );
};

export default ImageSection;
