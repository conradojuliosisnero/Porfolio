import Nav from "../Nav/Nav";
import Home from "../About/Home";
import Nofound from "../NoFound/Nofound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Folio() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Nofound />} />
      </Routes>
    </Router>
  );
}

export default Folio;
