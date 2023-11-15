// Import React
import { Link } from "react-router-dom";

// Import MUI
import MenuIcon from "@mui/icons-material/Menu";

// Import CSS
import "./styles.scss";

// Import Components

const Nav = () => {
   return (
      <div className='nav__container'>
         <nav className='nav'>
            <h1 className='nav__logo'>Défie Jeune - Nice</h1>

            <div className='nav__burger'>
               <Link className='nav__link--burger' to={"/nav-phone"}>
                  <MenuIcon />
               </Link>
            </div>

            <div className='nav__list'>
               <Link className='nav__link' to={"/"}>
                  Présentation
               </Link>
               <Link className='nav__link' to={"/candidats"}>
                  Les jeunes
               </Link>
            </div>
         </nav>
      </div>
   );
};

export default Nav;
