import { useState, useEffect } from "react";
import styles from "./projectView.module.css";

export default function ProjectView() {
  // Estado de los datos del fetch de proyectos
  const [dataprojects, setDataprojects] = useState(null);

  useEffect(() => {
    getDataProjects();
  }, []);

  // Función para obtener los datos de los proyectos desde la base de datos
  const getDataProjects = async () => {
    try {
      const response = await fetch("http://localhost:3000/projects");
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
  const handlerUpdate = async () => {
    try {
      fetch("http://localhost:3001/projects", { method: "PUT" });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.projectBox}>
      <span className="">Proyectos</span>
      {/* Mapeo de los datos de los proyectos */}
      <div className={styles.projectContend}>
        {dataprojects?.map(({ id, name_project }) => (
          <div className={styles.cardProject} key={id}>
            <div className={styles.status}></div>
            <span className="">{name_project}</span>
            <div className={styles.buttonBoxEdit}>
              <button className={styles.buttonEdit} onClick={handlerUpdate}>
                Editar
              </button>
            </div>
            <div className={styles.buttonBoxDelete}>
              <button className={styles.buttonDelete}>
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
