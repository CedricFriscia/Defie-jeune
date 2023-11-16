// Import React
import { Routes, Route } from "react-router-dom";

// Import Components
import Nav from "./Components/Nav/Nav";

// Import Pages
import Landing from "./Pages/Landing/Landing";
import Jeune from "./Pages/Jeune/Jeune";
import FormCandidat from "./Pages/FormCandidat/FormCandidat";

// Import CSS
import "./css/reset.css";

function App() {
   return (
      <div className='App'>
         <Nav />
         <Routes>
            <Route path='/' element={<Landing />}></Route>
            <Route path='/candidats' element={<Jeune />}></Route>
            <Route path='/candidat/create' element={<FormCandidat />}></Route>
         </Routes>
      </div>
   );
}

export default App;
