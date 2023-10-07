import { Link } from "react-router-dom";
import Swich from "./Swich";
import "./nav.css";

function Nav() {

	const Menu = '../../img/menu.svg'

	//Nav-menu
	const optionsMenu = [
		{ id: 1, name: "Home", link: "/" },
		{ id: 2, name: "About", link: "/Aboutme" },
		{ id: 3, name: "Skills", link: "/Skills" },
		{ id: 4, name: "Proyects", link: "/Projects" },
		// { id: 5, name: "Contact", link: "/Contact" }
	];

	return (
		<nav className="navegador" id="home">
			<div className="Responsive__menu" >
			<img className="menu__responsive" src={Menu} alt="Svg Menu" />
			</div>
			<ul className="menu">
				{optionsMenu.map((option) => (
					<li className="lista" key={option.id}>
						<Link className="enlaces" to={option.link}>{option.name}</Link>
					</li>
				))}
			</ul>
			<Swich></Swich>
		</nav>
	);
}

export default Nav;
