import React from "react";
import { ButtonsStyled, ButtonStyled } from "../styles/index";
const Button = ({ filter, button }) => {
  return (
    <ButtonsStyled>
      {button.map((but, i) => {
        return (
          <ButtonStyled key={i} onClick={() => filter(but)}>
            {but}
          </ButtonStyled>
        );
      })}
    </ButtonsStyled>
  );
};

export default Button;
