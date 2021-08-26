import React, { useState } from "react";
import Sidebar from "./Components/Sidebar";
import MainContent from "./Components/MainContent";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";
function App() {
  const [navToggle, setNavToggle] = useState(false);
  return (
    <div className="app">
      <Sidebar navToggle={navToggle} setNavToggle={setNavToggle} />
      <div className="ham-burger-menu">
        <IconButton onClick={() => setNavToggle(!navToggle)}>
          <MenuIcon />
        </IconButton>
      </div>
      <MainContent />
    </div>
  );
}

export default App;
