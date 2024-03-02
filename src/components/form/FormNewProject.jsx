import { useState } from "react";
import Select from "react-select";
import styles from "./form.module.css";

export default function FormNewProject() {
  // Estados de select y inputs
  const [Tecnologys, setTecnologys] = useState({
    name_project: "",
    image_url: "",
    repo_url: "",
  });
  const [SelectInfo, setSelectInfo] = useState(null);

  // Opciones Front de react select
  const tecOptionsFront = [
    { value: "Html", label: "Html" },
    { value: "Css", label: "Css" },
    { value: "JavaScript", label: "JavaScript" },
    { value: "Sass", label: "Sass" },
    { value: "React", label: "React" },
    { value: "Tailwind", label: "Tailwind" },
    { value: "Booststrap", label: "Booststrap" },
    { value: "Next.js", label: "Next.js" },
  ];

  // Opciones Backend react select
  const tecOptionsBack = [
    { value: "Python", label: "Python" },
    { value: "SQL", label: "SQL" },
    { value: "JAVA", label: "JAVA" },
    { value: "PHP", label: "Sass" },
    { value: "JSON-SERVER", label: "JSON-SERVER" },
    { value: "Express", label: "Express" },
    { value: "TypeScript", label: "TypeScript" },
  ];

  // inputs
  const inputs = [
    {
      id: 1,
      name: "name_project",
      label: "Nombre del Proyecto",
      placeholder: "Nombre del Proyecto",
    },
    {
      id: 2,
      name: "repo_url",
      label: "Url del repositorio",
      placeholder: "Url del repositorio",
    },
    {
      id: 3,
      name: "image_url",
      label: "Url de Imagen",
      placeholder: "Url de Imagen",
    },
  ];

  // Manejador de selects
  const HandlerSelectInfo = (selectOption) => {
    setSelectInfo(selectOption);
    console.log(selectOption);
  };

  // Estado de inputs
  const HandlerTecnologys = (event) => {
    const { name, value } = event.target;
    setTecnologys({ ...Tecnologys, [name]: value });
    console.log(Tecnologys);
  };

  // Envío de datos al db.json
  const HandlerSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...Tecnologys, ...SelectInfo }),
      });
      if (!response.ok) {
        throw new Error("Fallo al agregar la data");
      } else {
        const data = await response.json();
        console.log(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.form_box}>
      <form className={styles.formContend}>
        {/* input  */}
        <div className={styles.form_contend_input}>
          {inputs.map(({ id, name, label, placeholder }) => (
            <div className={styles.inputContainer} key={id}>
              <input
                onChange={HandlerTecnologys}
                placeholder={placeholder}
                name={name}
                className={styles.inputField}
                type="text"
                autoComplete="off"
              />
              <label htmlFor="input-field" className={styles.inputLabel}>
                {label}
              </label>
              <span className={styles.inputHighlight}></span>
            </div>
          ))}
        </div>
        {/* select  */}
        <div className={styles.selectBox}>
          <label className={styles.labelSelect}>
            Tecnologias Frontend Usadas
          </label>
          <Select
            onChange={HandlerSelectInfo}
            name="Tecnologias_Frontend_Usadas"
            defaultValue={[tecOptionsFront[0]]}
            isMulti
            options={tecOptionsFront}
            className="basic-multi-select"
            classNamePrefix="select"
          />
        </div>
        {/* select  */}
        <div className={styles.selectBox}>
          <label className={styles.labelSelect}>
            Tecnologias Backend Usadas
          </label>
          <Select
            id="Tecnologias_Backend_Usadas"
            onChange={HandlerSelectInfo}
            name="Tecnologias_Backend_Usadas"
            defaultValue={[tecOptionsBack[4]]}
            isMulti
            options={tecOptionsBack}
            className="basic-multi-select"
            classNamePrefix="select"
          />
        </div>

        {/* button  */}
        <div className={styles.boxButton}>
          <button
            onClick={HandlerSubmit}
            className={styles.button}
            type="submit"
          >
            Agregar Proyecto
          </button>
        </div>
      </form>
    </div>
  );
}
