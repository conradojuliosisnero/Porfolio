import { useState, useEffect } from "react";
import Select from "react-select";
import styles from "./form.module.css";

export default function FormNewProject() {
  // Estados de select y inputs
  const [Tecnologys, setTecnologys] = useState({
    name: "",
    leyend: "Proyect",
    url: "",
    img: "",
  });
  const [SelectInfoFrontend, setSelectInfoFrontend] = useState([]);
  const [SelectInfoBackend, setSelectInfoBackend] = useState([]);

  // opciones traidas del sever
  const [formDataInputs, setFormDataInputs] = useState({});

  console.log(formDataInputs[0]);

  //efecto espues de montar la data
  useEffect(() => {
    getDataForm();
  }, []);

  // data de inputs y selects
  const getDataForm = async () => {
    try {
      const response = await fetch("http://localhost:3000/FormData");
      if (response.status === 200) {
        const data = await response.json();
        setFormDataInputs(data);
      } else {
        console.log("algo salio mal al obtener los datos");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Manejador de selects front
  const HandlerSelectInfoFront = (selectOption) => {
    setSelectInfoFrontend(selectOption);
    if (Array.isArray(selectOption)) {
      const captureValues = {
        tec_front: selectOption.map((item) => item.value),
      };
      console.log(captureValues);
    } else {
      console.error("SelectInfoFrontend no es un array:", selectOption);
    }
  };

  // Manejador de selects back
  const HandlerSelectInfoBack = (selectOption) => {
    setSelectInfoBackend(selectOption);
    const captureValues = {
      tec_back: SelectInfoBackend.map((item) => item.value),
    };
    console.log(captureValues);
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
      const response = await fetch("http://localhost:3000/projectsCards", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...Tecnologys,
          ...SelectInfoFrontend,
          ...SelectInfoBackend,
        }),
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
          {/* {formDataInputs[2].inputs[0].name?.map(
            ({ id, name, label, placeholder }) => (
              <div className={styles.inputContainer} key={id}>
                <input
                  onChange={HandlerTecnologys}
                  placeholder={placeholder}
                  name={name}
                  className={styles.inputField}
                  type="text"
                />
                <label htmlFor="input-field" className={styles.inputLabel}>
                  {label}
                </label>
                <span className={styles.inputHighlight}></span>
              </div>
            )
          )} */}
        </div>
        {/* select  */}
        <div className={styles.selectBox}>
          <label className={styles.labelSelect}>
            Tecnologias Frontend Usadas
          </label>
          <Select
            onChange={HandlerSelectInfoFront}
            name="Tecnologias_Frontend_Usadas"
            defaultValue={[formDataInputs[0]]}
            isMulti
            options={formDataInputs}
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
            onChange={HandlerSelectInfoBack}
            name="Tecnologias_Backend_Usadas"
            defaultValue={[formDataInputs[4]]}
            isMulti
            options={formDataInputs}
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
