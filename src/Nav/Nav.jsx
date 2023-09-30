import Swich from "./Swich";
import "./nav.css";

function Nav() {
	//Nav-menu
	const optionsMenu = [
		{ id: 1, name: "Home", link: "#" },
		{ id: 2, name: "About", link: "#About" },
		{ id: 3, name: "Skills", link: "#Skills" },
		{ id: 4, name: "Proyects", link: "#Proyects" },
		{ id: 5, name: "Contac", link: "#Contac" },
	];

	return (
		<nav className="navegador" id="home">
			<div className="navagador__titulo">
				<span className="titulo">Julio</span>
			</div>
			<ul className="menu">
				{optionsMenu.map((option) => (
					<li className="lista" key={option.id}>
						<a className="enlaces" href={option.link}>
							{option.name}
						</a>
					</li>
				))}
			</ul>
			<Swich></Swich>
		</nav>
	);
}

export default Nav;
