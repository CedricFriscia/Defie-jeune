// Import React
import { Routes, Route } from "react-router-dom";

// Import Components
import Nav from "./Components/Nav/Nav";

// Import Pages
import Landing from "./Pages/Landing/Landing";
import Jeune from "./Pages/Jeune/Jeune";
import FormCandidat from "./Pages/FormCandidat/FormCandidat";
import NavPhone from "./Pages/NavPhone/NavPhone";

// Import CSS
import "./css/reset.css";

function App() {
   return (
      <Routes>
         <Route path='/' element={<Landing />}></Route>
         <Route path='/candidats' element={<Jeune />}></Route>
         <Route path='/candidat/create' element={<FormCandidat />}></Route>
         <Route path='/nav-phone' element={<NavPhone />}></Route>
      </Routes>
   );
}

export default App;
