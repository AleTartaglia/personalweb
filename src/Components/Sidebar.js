import React from "react";
import { SidebarStyled } from "../styles/index.js";
import Navigation from "./Navigation";

const Sidebar = ({ navToggle }) => {
  return (
    <SidebarStyled
      id="sidebarTag"
      className={`${navToggle ? "nav-toggle" : ""}`}
    >
      <Navigation />
    </SidebarStyled>
  );
};
export default Sidebar;
