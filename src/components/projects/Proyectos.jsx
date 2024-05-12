import { useState, useEffect } from "react";
import "./projects.css";

export default function Projects() {
  const [projects, setProjects] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch(
        "https://65e20329a8583365b317cabe.mockapi.io/projects/Projects"
      );
      if (response.ok) {
        const data = await response.json();
        setProjects(data);
      } else {
        setError("Error al obtener la data");
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="seccion__proyectos" id="proyectos">
      <div className="contend__titulo"></div>

      <section className="about__proyecto">
        <div className="about__contenido__proyecto">
          <div className="about__imagen__proyecto scroll__img">
            <span className="leyenda">Proyectos</span>
          </div>
          <div className="about__texto__proyecto"></div>
        </div>
      </section>

      {loading && <p>Cargando...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <div className="contend__cards-proyectos">
          {projects.map(({ id, name, img, url, leyenda, span, icons }) => (
            <div className="card" id={`proyecto-${id}`} key={id}>
              <div className="contend__img">
                <img src={img} alt={name} />
              </div>
              <div className="contenido">
                <h3 className="titulo_card">
                  <a href={url}>{name}</a>
                </h3>
                <span className="leyenda__card">{leyenda}</span>
                <div className="iconos__card">
                  <span>{span}</span>
                  <div className="icon">
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
