import { useState, useEffect } from "react";
import "./projects.css";

export default function Proyectos() {
  const [GetProject, setGetProject] = useState([]);

  useEffect(() => {
    GetProjects();
  }, []);

  const GetProjects = async () => {
    try {
      const response = await fetch("http://localhost:3000/projectsCards");
      if (response.status === 200) {
        const data = await response.json();
        setGetProject(data);
      } else {
        console.log("error al obtener la data");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="seccion__proyectos" id="proyects">
      <div className="contend__titulo"></div>

      <section className="about__proyect">
        <div className="about__contenido__proyect">
          <div className="about__imagen__proyect scroll__img">
            <span className="leyend">Projects</span>
          </div>
          <div className="about__texto__proyect">
            {/* {GetProject.map((text) => (
              <div className="texto" key={text.index}>{text.TextProjects}</div>
            ))} */}
          </div>
        </div>
      </section>

      <div className="contend__cards-proyectos">
        {GetProject?.map(
          ({
            id,
            name,
            img,
            url,
            leyend,
            span,
            html,
            css,
            js,
            sass,
            php,
            sql,
          }) => (
            <div className="card" id="app_movies" key={id}>
              <div className="contend__img">
                <img src={img} alt={name} />
              </div>
              <div className="contenido">
                <h3 className="titulo_card">
                  <a href={url}>{name}</a>
                </h3>
                <span className="leyenda__card">{leyend}</span>
                <div className="iconos__card">
                  <span>{span}</span>
                  <div className="icon">
                    <img src={html} />
                    <img src={css} />
                    <img src={sass} />
                    <img src={js} />
                    <img src={php} />
                    <img src={sql} />
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}
