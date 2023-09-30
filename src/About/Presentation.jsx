import React from "react";
import "./presentation.css";
import Welcome from "./welcome";
import Photo from "./Photo";

function Presentation() {
	const LinkRedes = [
		{
			id: 1,
			link: "https://www.linkedin.com/in/julio-sisnero-358b09242/",
			img: "../../img/linkedin.svg",
			alt: "linkedin",
		},
		{
			id: 2,
			link: "https://www.instagram.com/conradojulio17/",
			img: "../../img/instagram.svg",
			alt: "instagram",
		},
		{
			id: 3,
			link: "https://github.com/conradojuliosisnero",
			img: "../../img/git.svg",
			alt: "git",
		},
	];

	return (
		<div className="contenido__principal">
			<aside className="redes__sociales">
				{LinkRedes.map((social) => (
					<div className="list__iconos" key={social.id}>
						<a href={social.link}>
							<img className="iconos" src={social.img} alt={social.alt} />
						</a>
					</div>
				))}
			</aside>
            <Welcome></Welcome>
			<Photo/>
		</div>
	);
}

export default Presentation;
