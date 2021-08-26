import React from "react";
import { PrimaryButtonStyled } from "../styles/index.js";
const PrimaryButton = ({ title, mailto, subjectValue, textValue }) => {
  if (mailto) {
    return (
      <PrimaryButtonStyled>
        <a
          target="_blank"
          rel="noreferrer"
          href={`mailto:alej.tartaglia@gmail.com?subject=${subjectValue}&body=${textValue}`}
        >
          {title}
        </a>
      </PrimaryButtonStyled>
    );
  }

  return <PrimaryButtonStyled>{title}</PrimaryButtonStyled>;
};

export default PrimaryButton;
