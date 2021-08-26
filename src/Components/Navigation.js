import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import avatar from "../img/avatar.jpg";
import { NavigationStyled } from "../styles/index.js";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Switch from "@material-ui/core/Switch";

const Navigation = () => {
  const [theme, setTheme] = useState("dark-theme");

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const themeToggler = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  const sidebarToggle = () => {
    const sidebarTag = document.getElementById("sidebarTag");
    const hasClass = sidebarTag.classList.contains("nav-toggle");
    if (hasClass) {
      sidebarTag.classList.toggle("nav-toggle");
    }
  };

  return (
    <NavigationStyled>
      <div className="avatar">
        <img src={avatar} alt="" />
      </div>
      <ul className="nav-items">
        <li className="nav-item">
          <NavLink
            to="/"
            activeClassName="active-class"
            exact
            onClick={sidebarToggle}
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/about"
            activeClassName="active-class"
            exact
            onClick={sidebarToggle}
          >
            Sobre Mí
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/resume"
            activeClassName="active-class"
            exact
            onClick={sidebarToggle}
          >
            Experiencia
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/portfolio"
            activeClassName="active-class"
            exact
            onClick={sidebarToggle}
          >
            Portfolio
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/contact"
            activeClassName="active-class"
            exact
            onClick={sidebarToggle}
          >
            Contacto
          </NavLink>
        </li>
        <li className="nav-item">
          <div className="theme">
            <div className="light-dark-mode">
              <div className="left-content">
                <Brightness4Icon />
              </div>
              <div className="right-content">
                <Switch
                  value=""
                  inputProps={{ "aria-label": "" }}
                  size="medium"
                  onClick={themeToggler}
                />
              </div>
            </div>
          </div>
        </li>
      </ul>
      <footer className="footer">
        <p> © 2021 Alejandro Tartaglia</p>
      </footer>
    </NavigationStyled>
  );
};

export default Navigation;