// Import React
import { Routes, Route } from "react-router-dom";

// Import Components
import Nav from "./Components/Nav/Nav";

// Import Pages
import Landing from "./Pages/Landing/Landing";
import Jeune from "./Pages/Jeune/Jeune";

// Import CSS
import "./css/reset.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />}></Route>
      <Route path="/jeune" element={<Jeune />}></Route>
    </Routes>
  );
}

export default App;
