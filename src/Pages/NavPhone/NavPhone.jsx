// Import React
import { Link } from "react-router-dom";

// Import CSS
import "./styles.scss";

const Nav = () => {
   return (
      <nav className='nav__phone'>
         <Link className='nav__link--phone ' to={"/"}>
            Présentation
         </Link>
         <Link className='nav__link--phone' to={"/candidats"}>
            Jeune
         </Link>
      </nav>
   );
};

export default Nav;
