import { useState, useEffect } from "react";
import styles from "./projectView.module.css";

export default function ProjectView() {
  // Estado de los datos del fetch de proyectos
  const [dataprojects, setDataprojects] = useState([]);

  useEffect(() => {
    getDataProjects();
  }, []);

  // Función para obtener los datos de los proyectos desde la base de datos
  const getDataProjects = async () => {
    try {
      const response = await fetch("http://localhost:3000/projectsCards");
      if (response.ok) {
        const data = await response.json();
        setDataprojects(data);
      } else {
        throw new Error("Fallo al obtener la data de projects");
      }
    } catch (error) {
      console.error(error);
    }
  };

  //funcion para editar los proyectos
  // const handlerUpdate = async () => {
  //   try {
  //     fetch("http://localhost:3001/projectsCards", { method: "PUT" });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div className={styles.projectBox}>
      <span className="">Proyectos</span>
      {/* Mapeo de los datos de los proyectos */}
      <div className={styles.projectContend}>
        {dataprojects?.map(({ id, name, url }) => (
          <div className={styles.cardProject} key={id}>
            <div className={styles.status}></div>
            <a className={styles.projectName} href={url}>
              {name}
            </a>
            <div className={styles.buttonBoxEdit}>
              <button className={styles.buttonEdit}>Editar</button>
            </div>
            <div className={styles.buttonBoxDelete}>
              <button className={styles.buttonDelete}>Eliminar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
