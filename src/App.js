import { Routes, Route } from "react-router-dom";
import ContactMe from "./components/ContactMe";
import AboutMe from "./pages/AboutMe";
import Home from "./pages/Home";
import Uis from "./pages/Uis";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/uis" element={<Uis />} />
      </Routes>
    </div>
  );
}

export default App;
