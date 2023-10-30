// Import React
import React from "react";

// Import MUI
import MenuIcon from "@mui/icons-material/Menu";

// Import CSS
import "./styles.scss";

const Nav = () => {
  return (
    <nav className="nav">
      <h1 className="nav__logo">Défie Jeune</h1>

      <div className="nav__burger">
        <MenuIcon />
      </div>

      <div className="nav__list">
        <ul>
          <li>Présentation</li>
          <li>Animation</li>
          <li>Lieu</li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
