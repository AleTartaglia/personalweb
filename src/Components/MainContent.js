import React from "react";
import { MainContentStyled } from "../styles/index.js";
import { Route, Switch as Switching } from "react-router";
import HomePage from "../Pages/HomePage";
import AboutPage from "../Pages/AboutPage";
import ResumePage from "../Pages/ResumePage";
import PortfoliosPage from "../Pages/PortfoliosPage";
import ContactPage from "../Pages/ContactPage";

const MainContent = () => {
  return (
    <MainContentStyled>
      <div className="lines">
        <div className="line-1"></div>
        <div className="line-2"></div>
        <div className="line-3"></div>
        <div className="line-4"></div>
      </div>

      <Switching>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/personalweb">
          <HomePage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/resume">
          <ResumePage />
        </Route>
        <Route path="/portfolio">
          <PortfoliosPage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
      </Switching>
    </MainContentStyled>
  );
};

export default MainContent;
