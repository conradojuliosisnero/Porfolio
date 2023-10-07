import { CardTools } from "./card.tools";

function Tools() {
	return (
		<div className="Skill__icons">
			{CardTools.map((tool) => (
				<div className="icon" key={tool.id}>
					<img className="img__icon" src={tool.img} alt={tool.tittle} />
				</div>
			))}

		</div>
	);
}

export default Tools;
