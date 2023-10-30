// Import React
import React from "react";
import { Link } from "react-router-dom";

// Import MUI
import MenuIcon from "@mui/icons-material/Menu";

// Import CSS
import "./styles.scss";

const Nav = () => {
  return (
    <nav className="nav">
      <h1 className="nav__logo">Défie Jeune - Nice</h1>

      <div className="nav__burger">
        <MenuIcon />
      </div>

      <div className="nav__list">
        <Link className="nav__link" to={"/"}>
          Présentation
        </Link>
        <Link className="nav__link" to={"/jeune"}>
          Les jeunes
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
