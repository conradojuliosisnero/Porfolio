import "./icons.css";
import { Cards } from "./cards";

function Icons() {
	return (
		<div className="Skill__icons">
			{Cards.map((card) => (
				<div className="icon" key={card.id}>
					<img className="img__icon" src={card.img} alt={card.tittle} />
				</div>
			))}

		</div>
	);
}

export default Icons;
