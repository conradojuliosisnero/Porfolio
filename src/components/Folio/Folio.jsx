import Nav from "../Nav/Nav";
import Presentation from "../About/Presentation";
import AboutMe from "../AboutMe/AboutMe";
import Skills from "../Skills/Skills";
import Nofound from "../NoFound/Nofound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Proyectos from "../projects/Proyectos";
// import FormNewProject from "../form/FormNewProject";

function Folio() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Presentation />} />
        <Route path="/Aboutme" element={<AboutMe />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Projects" element={<Proyectos />} />
        {/* <Route path="/Form" element={<FormNewProject />} /> */}
        <Route path="*" element={<Nofound />} />
      </Routes>
    </Router>
  );
}

export default Folio;
