import "./icons.css";
import { Cards } from "../../data/cards";

function Icons() {
  return (
    <div className="Skill__icons">
      {Cards.map((card) => (
        <div className="iconos" key={card.id}>
          <img className="img__iconos" src={card.img} alt={card.tittle} />
          <span className="leyend_icons">{card.tittle}</span>
        </div>
      ))}
    </div>
  );
}

export default Icons;
