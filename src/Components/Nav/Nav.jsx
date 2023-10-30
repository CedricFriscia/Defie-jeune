import React from "react";

// Import MUI
import MenuIcon from "@mui/icons-material/Menu";

// Import CSS
import "./styles.scss";

const Nav = () => {
  return (
    <div className="nav">
      <h1 className="nav__logo">Défie Jeune</h1>

      <div className="nav__burger">
        <MenuIcon />
      </div>
    </div>
  );
};

export default Nav;
