import { projectsCards } from "./projects";
import './projects.css'

function Projects() {

    const TextProjects = `								I have developed several projects listed below. Currently, these
    projects are static, but I am working on adding functionality to
    them using JavaScript.`

	return (
		<section className="seccion__proyectos" id="proyects">
			<div className="contend__titulo">
			</div>

			<section className="about__proyect">
				<div className="about__contenido__proyect">
					<div className="about__imagen__proyect scroll__img">
						<img className="imagen" src="../../img/proyect.png" />
						<span>proyects</span>
					</div>
					<div className="about__texto__proyect">
						<div>
							<p className="texto">{TextProjects}</p>
						</div>
					</div>
				</div>
			</section>

			<div class="contend__cards-proyectos">
				{projectsCards.map((card) => (
					<div className="card" id="app_movies" key={card.id}>
						<div className="contend__img">
							<img src={card.img} alt={card.name} />
						</div>
						<div className="contenido">
							<h3 className="titulo_card">
								<a href={card.url}>{card.name}</a>
							</h3>
							<span className="leyenda__card">{card.leyend}</span>
							<div className="iconos__card">
								<span>{card.span}</span>
							<div className="icon">
								<img src={card.icons.html} />
								<img src={card.icons.css} />
								<img src={card.icons.sass} />
								<img src={card.icons.js} />
								<img src={card.icons.php} />
								<img src={card.icons.sql} />
							</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

export default Projects;
