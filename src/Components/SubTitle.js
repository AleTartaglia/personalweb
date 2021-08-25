import React from "react";
import { SubTitleStyled } from "../styles/index.js";
const SubTitle = ({ title }) => {
  return (
    <SubTitleStyled>
      <h3>{title}</h3>
    </SubTitleStyled>
  );
};

export default SubTitle;
