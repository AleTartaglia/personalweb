import React from "react";
import { ContactItemStyled } from "../styles/index.js";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
const ContactItem = ({ title, icon, cont1, sc }) => {
  return (
    <ContactItemStyled>
      <div className="left-content">{icon}</div>
      <div className="right-content ">
        <h6>{title}</h6>
        {sc ? (
          <div className="icons-ContactItem">
            <a
              href="https://www.linkedin.com/in/alejandrotartaglia/"
              className="i-linkedIn"
            >
              <LinkedInIcon />
            </a>
            <a href="https://github.com/AleTartaglia" className="i-github">
              <GithubIcon />
            </a>
          </div>
        ) : (
          <p>{cont1}</p>
        )}
      </div>
    </ContactItemStyled>
  );
};

export default ContactItem;
