import React from "react";
import { SmallTitleStyled } from "../styles/index";
const SmallTitle = ({ icon, title }) => {
  return (
    <SmallTitleStyled>
      <p>{icon}</p>
      <h3>{title}</h3>
    </SmallTitleStyled>
  );
};

export default SmallTitle;
