import React from "react";
import GitHub from "@material-ui/icons/GitHub";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { MenuItemStyled } from "../styles/index";

function Menu({ portFolioItems }) {
  return (
    <MenuItemStyled>
      {portFolioItems.map((item) => {
        return (
          <div className="grid-item" key={item.id}>
            <div className="portfolio-content">
              <div className="portfolio-image">
                <img src={item.image} alt="" />
                <ul>
                  <li>
                    <a href={item.link1}>
                      <GitHub />
                    </a>
                  </li>
                  {item.link2 && (
                    <li>
                      <a href={item.link2}>
                        <VisibilityIcon />
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            </div>
            <h6>{item.title}</h6>
            <p>{item.text}</p>
          </div>
        );
      })}
    </MenuItemStyled>
  );
}

export default Menu;
