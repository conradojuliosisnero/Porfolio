import "./skills.css";
import Icons from "./Icons";
import Tools from "./Tools";


function Skills() {
  return (
    <section className="seccion__skills" id="skills">
        <div className="skill__titulo-contend scroll__titulo">
          <span className="leyend">Skills</span>
          <Icons />
          <span className="leyend">Tools</span>
          <Tools />
        </div>
    </section>
  );
}

export default Skills;
