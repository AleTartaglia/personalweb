import React from "react";
import { HomePageStyled } from "../styles/index.js";
import Particle from "../Components/Particle.js";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";

const HomePage = () => {
  return (
    <HomePageStyled>
      <div className="particle-con">
        <Particle />
      </div>
      <div className="typography">
        <h1>
          Hola, Yo soy <span>Alejandro Tartaglia</span>
        </h1>
        <p>
          Bienvenid@ a mi página web. Soy un Desarrollador Front-End Jr. en
          constante aprendizaje, avocado a incrementar y desarrollar mis
          habilidades técnicas y personales para lograr un mejor resultado.
        </p>
        <div className="icons">
          <a
            href="https://www.linkedin.com/in/alejandrotartaglia/"
            className="icon i-linkedIn"
          >
            <LinkedInIcon />
          </a>
          <a href="https://github.com/AleTartaglia" className="icon i-github">
            <GithubIcon />
          </a>
        </div>
      </div>
    </HomePageStyled>
  );
};

export default HomePage;
