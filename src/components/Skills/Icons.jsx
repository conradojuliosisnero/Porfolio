import "./icons.css";
import { Cards } from "./cards";

function Icons() {
	return (
		<div className="Skill__icons">
			{Cards.map((card) => (
				<div className="iconos" key={card.id}>
					<img className="img__iconos" src={card.img} alt={card.tittle} />
				</div>
			))}

		</div>
	);
}

export default Icons;
