import React from "react";
import { AboutStyled, MainLayout } from "../styles/index.js";
import Title from "../Components/Title.js";
import ImageSection from "../Components/ImageSection";

const AboutPage = () => {
  return (
    <MainLayout>
      <AboutStyled>
        <Title title={"Sobre Mí"} span={"Sobre Mí"} />
        <ImageSection />
      </AboutStyled>
    </MainLayout>
  );
};

export default AboutPage;
