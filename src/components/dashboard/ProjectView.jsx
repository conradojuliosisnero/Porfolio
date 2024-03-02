import { useState, useEffect } from "react";

export default function ProjectView() {
  // Estado de los datos del fetch de proyectos
  const [dataprojects, setDataprojects] = useState(null);

  useEffect(() => {
    getDataProjects();
  }, []);

  // Función para obtener los datos de los proyectos desde la base de datos
  const getDataProjects = async () => {
    try {
      const response = await fetch("http://localhost:3001/projects");
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
    <div className="">
      <span className="">Proyectos en la base de datos</span>
      {/* Mapeo de los datos de los proyectos */}
      {dataprojects?.map(({ id, name_project }) => (
        <div className="" key={id}>
          <span className="">{id}</span>
          <span className="">{name_project}</span>
          <div>
            <button className="" onClick={handlerUpdate}>
              Editar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
