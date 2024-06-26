import { useState, useEffect } from "react";
import "./projects.css";
import getProjects from "../../services/MockApi/projects";
import Icon from "./Icons";
import Status from "./status/Status";

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
    <section className="seccion__proyectos" id="Proyects">
      <div className="leyend__section">
        <span className="leyenda__projects">Features Projects</span>
      </div>
      {loading && <p>Cargando...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <div className="contend__cards-proyectos">
          {projects?.map(({ id, name, img, url, icons, description,status }) => (
            <div className="wrapper__card" key={id}>
              <div className="wrapper__img">
                {/* img projeect  */}
                <div className="contend__card--img">
                  <img src={img} alt={name} />
                </div>
                {/* description  */}
                <div className="card__description">
                  <p className="description__project">{description}</p>
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
                <Icon icons={icons} />
                <Status status={status} />
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
