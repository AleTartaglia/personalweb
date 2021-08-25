import React from "react";
import { SKillItemsStyled } from "../styles/index";
const SkillItems = ({ title }) => {
  return (
    <SKillItemsStyled>
      <h6>{title}</h6>
    </SKillItemsStyled>
  );
};

export default SkillItems;
