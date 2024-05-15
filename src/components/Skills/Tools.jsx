import { CardTools } from "../../data/card.tools";

function Tools() {
  return (
    <div className="Skill__icons">
      {CardTools.map((tool) => (
        <div className="iconos" key={tool.id}>
          <img className="img__iconos" src={tool.img} alt={tool.tittle} />
          <span className="leyend_icons">{tool.tittle}</span>
        </div>
      ))}
    </div>
  );
}

export default Tools;
