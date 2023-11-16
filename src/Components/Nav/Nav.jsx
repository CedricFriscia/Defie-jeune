import { Link } from "react-router-dom";

// Icons import
import { IconContext } from "react-icons";
import { AiOutlineTeam } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaHome } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

import "./styles.scss";
import { useState } from "react";

const Nav = () => {
   const [iconsBurger, setIconsBurger] = useState(true);
   const [navList, setNavList] = useState("navbar__list");

   const handleClick = () => {
      if (iconsBurger === true) {
         setIconsBurger(false);
         setNavList("navbar__list active");
      } else {
         setIconsBurger(true);
         setNavList("navbar__list");
      }
   };

   const handleExit = () => {
      if (navList === "navbar__list") {
         setNavList("navbar__list active");
      } else {
         setNavList("navbar__list");
         setIconsBurger(true);
      }
   };

   return (
      <nav className='navbar'>
         <h1 className='navbar__logo'>Defie jeune-nice</h1>
         <IconContext.Provider value={{ color: "#fff" }}>
            <div className='navbar__icons' onClick={handleClick}>
               {iconsBurger ? <RxHamburgerMenu /> : <AiOutlineClose />}
            </div>
         </IconContext.Provider>
         <div className={navList}>
            <IconContext.Provider value={{ size: "1.3em" }}>
               <div className='navbar__home'>
                  <FaHome />
                  <Link className='navbar__link' to={"/"} onClick={handleExit}>
                     Accueil
                  </Link>
               </div>
               <div className='navbar__candidat'>
                  <AiOutlineTeam />
                  <Link
                     className='navbar__link'
                     to={"/candidats"}
                     onClick={handleExit}
                  >
                     Candidats
                  </Link>
               </div>
            </IconContext.Provider>
         </div>
      </nav>
   );
};

export default Nav;
