import React from "react";
import './presentation.css'

function Photo() {

    // url de la foto 
	const photoUrl = `../../img/boy-iso-color.png`;

	return (
		<div className="contenedor__foto">
			<img className="foto" src={photoUrl} />
		</div>
	);
}

export default Photo;
