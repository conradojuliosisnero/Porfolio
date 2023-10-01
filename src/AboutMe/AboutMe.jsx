import "./aboutme.css";
import BtnCv from "./BtnCv";

function AboutMe() {
	const TextAbout = `I am a 19-year-old Colombian frontend developer. Currently, I am
    actively working on projects and constantly seeking opportunities
    to enhance my skills. With one year of experience in the field, I
    approach my work with a proactive and enthusiastic attitude,
    always eager to learn and grow. My skill set revolves around HTML,
    CSS, and JavaScript, and I have familiarity with popular
    frameworks such as React. I'm excited to keep broadening my
    knowledge and making meaningful contributions to the realm of
    frontend development.`;

	const statistics = [
		{
			id: 1,
			contend: "Year Experience",
			class: "estadisticas__experiencia",
			number: "1+",
		},
		{
			id: 2,
			contend: "Completed Proyects",
			class: "estadisticas__proyectos",
			number: "3+",
		},
		{
			id: 3,
			contend: "Companies Worked",
			class: "estadisticas__proyectos",
			number: "1",
		},
	];

	return (
		<section className="about" id="about">
			<div className="about__titulo scroll__titulo">
				<span className="titulo">About Me</span>
			</div>
			<div className="about__contenido">
				<div className="about__imagen scroll__img">
					<img className="imagen" src="../../img/file-text-iso-color.png" />
					<span>Conrado Julio</span>
				</div>
				<div className="about__texto">
					<div>
						<p className="texto">{TextAbout}</p>
					</div>
					<div className="estadisticas scroll__stast">
						{statistics.map((statistic) => (
							<div className={statistic.class} key={statistic.id}>
								<p className="numero">{statistic.number}</p>
								<span>{statistic.contend}</span>
							</div>
						))}
					</div>
					{/* boton de descargar cv  */}
					<BtnCv />
				</div>
			</div>
		</section>
	);
}

export default AboutMe;
