import "./aboutme.css";
import { TextAbout, statistics } from "../../data/about";

function AboutMe() {
  return (
    <section className="about" id="About">
      <div className="about__titulo scroll__titulo">
        <span className="titulo">About Me</span>
      </div>
      <div className="about__contenido">
        <div className="about__texto">
          <div>
            <p className="texto">{TextAbout}</p>
          </div>
          <div className="estadisticas scroll__stast">
            {statistics.map((statistic) => (
              <div className={statistic.class} key={statistic.id}>
                <p className="numero">{statistic.number}</p>
                <span>{statistic.contend}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
