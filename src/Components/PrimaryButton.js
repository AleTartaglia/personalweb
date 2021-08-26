import React from "react";
import { PrimaryButtonStyled } from "../styles/index.js";
const PrimaryButton = ({ title, mailto }) => {
  if (mailto) {
    return (
      <PrimaryButtonStyled>
        <a
          target="_blank"
          rel="noreferrer"
          href="mailto:alej.tartaglia@gmail.com"
        >
          {title}
        </a>
      </PrimaryButtonStyled>
    );
  }
  /* else if (pdf) {
    return (
      <PrimaryButtonStyled>
        <a
          download
          target="_blank"
          rel="noreferrer"
          href="../data/cv/AlejandrotartagliaCV.pdf"
        >
          {title}
        </a>
      </PrimaryButtonStyled>
    ); */

  return <PrimaryButtonStyled>{title}</PrimaryButtonStyled>;
};

export default PrimaryButton;
