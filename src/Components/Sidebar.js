import React from "react";
import { SidebarStyled } from "../styles/index.js";
import Navigation from "./Navigation";

const Sidebar = ({ navToggle, setNavToggle }) => {
  return (
    <SidebarStyled
      id="sidebarTag"
      className={`${navToggle ? "nav-toggle" : ""}`}
    >
      <Navigation navToggle={navToggle} setNavToggle={setNavToggle} />
    </SidebarStyled>
  );
};
export default Sidebar;
