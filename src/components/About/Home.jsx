import "./presentation.css";
import Welcome from "./welcome";
import Photo from "./Photo";
import AboutMe from "../AboutMe/AboutMe";
import Skills from "../Skills/Skills";
import Projects from "..//projects/Proyectos";
import { LinkRedes } from "../../data/social";

function Home() {
  return (
    <main>
      <div className="contenido__principal">
        <aside className="redes__sociales">
          {LinkRedes.map((social) => (
            <div className="list__iconos" key={social.id}>
              <a href={social.link}>
                <img className="icono" src={social.img} alt={social.alt} />
              </a>
            </div>
          ))}
        </aside>
        <Welcome />
        <Photo />
      </div>
      <AboutMe />
      <Skills />
      <Projects/>
    </main>
  );
}

export default Home;
