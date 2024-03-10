import { useState} from "react";

export default function UpdateProject() {
  // estados del formulario de actulizacion
  const [dataUpdateForm, setdataUpdateForm] = useState({});

  // funcion del manejode actualizacion de datos
  const HandlerUpdateForm = (event) => {
    const { name, value } = event.target;
    setdataUpdateForm({ ...dataUpdateForm, [name]: value });
    console.log(dataUpdateForm);
  };

  return <div><button onClick={HandlerUpdateForm}></button></div>;
}
