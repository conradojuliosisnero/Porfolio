import { CardTools } from "./card.tools";

function Tools() {
	return (
		<div className="Skill__icons">
			{CardTools.map((tool) => (
				<div className="iconos" key={tool.id}>
					<img className="img__iconos" src={tool.img} alt={tool.tittle} />
				</div>
			))}

		</div>
	);
}

export default Tools;
