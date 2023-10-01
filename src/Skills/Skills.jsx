import "./skills.css";
import Icons from "./Icons";

function Skills() {
	const textSkills = `I have experience in HTML and CSS, and I am currently learning
    JavaScript and React to expand my frontend development skills. I
    also possess knowledge in SQL, enabling me to work with
    databases. Furthermore, I have experience in using WordPress for
    website creation and tools like Git for version control. I am
    familiar with design frameworks like Bootstrap and Tailwind, and
    I have skills in Adobe XD for interface design. Lastly, I also
    have knowledge in computer hardware and software maintenance,
    which allows me to troubleshoot technical issues.`;

	const urlTool = '../../img/tools.png'

	return (
		<section className="seccion__skills" id="skills">
			<div className="skill__titulo-contend scroll__titulo">
				<Icons></Icons>
			</div>

			<section className="about__skills">
				<div className="about__contenido__skills">
					<div className="about__imagen__skills scroll__img">
						<img className="imagen" src={urlTool} />
						<span>Skills</span>
					</div>
					<div className="about__texto__skills">
						<div>
							<p className="texto">{textSkills}</p>
						</div>
					</div>
				</div>
			</section>

		</section>
	);
}

export default Skills;
