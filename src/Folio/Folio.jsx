import Nav from '../Nav/Nav';
import Presentation from '../About/Presentation';
import AboutMe from '../AboutMe/AboutMe';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects.jsx';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';

function Folio() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<Presentation />} />
        <Route path='/Aboutme' element={<AboutMe />} />
        <Route path='/Skills' element={<Skills />} />
        <Route path='/Projects' element={<Projects />} />
      </Routes>
    </Router>
  );
}



export default Folio
