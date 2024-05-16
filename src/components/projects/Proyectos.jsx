import { useState, useEffect } from "react";
import "./projects.css";
import getProjects from "../../services/MockApi/projects";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getDataProjects = async () => {
      try {
        const data = await getProjects(setError, setProjects, setLoading);
      } catch (error) {
        console.error(error);
      }
    };
    getDataProjects();
  }, []);

  return (
    <section className="seccion__proyectos" id="proyectos">
      <div className="leyend__section">
        <span className="leyenda__projects">Features Projects</span>
      </div>
      {loading && <p>Cargando...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <div className="contend__cards-proyectos">
          {projects?.map(({ id, name, img, url, icons }) => (
            <div className="wrapper__card" key={id}>
              <div className="wrapper__img">
                {/* img projeect  */}
                <div className="contend__card--img">
                  <img src={img} alt={name} />
                </div>
                {/* description  */}
                <div className="card__description">
                  <p className="description__project">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <div className="wrapper__name">
                {/* PROJECT NAME  */}
                <div className="card__project--name">
                  <a className="name__project" href={url}>
                    {name}
                  </a>
                </div>
                {/* stack icons  */}
                <div className="card__project__stack">
                  <div className="stack__icon">
                    {icons.html && <img src={icons.html} alt="HTML" />}
                    {icons.css && <img src={icons.css} alt="CSS" />}
                    {icons.sass && <img src={icons.sass} alt="SASS" />}
                    {icons.js && <img src={icons.js} alt="JavaScript" />}
                    {icons.react && <img src={icons.react} alt="React" />}
                    {icons.Api && <img src={icons.Api} alt="Api" />}
                    {icons.python && <img src={icons.python} alt="Python" />}
                    {icons.Nextjs && <img src={icons.Nextjs} alt="Next.js" />}
                    {icons.php && <img src={icons.php} alt="PHP" />}
                    {icons.sql && <img src={icons.sql} alt="SQL" />}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
