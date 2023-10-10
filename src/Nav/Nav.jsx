import { Link } from "react-router-dom";
// import Swich from "./Swich";
import DarkModeSwitch from './Swich'
import "./nav.css";
import { useState } from "react";

function Nav() {
	const Menu = "../../img/menu.svg";

	//Nav-menu
	const optionsMenu = [
		{ id: 1, name: "Home", link: "/" },
		{ id: 2, name: "About", link: "/Aboutme" },
		{ id: 3, name: "Skills", link: "/Skills" },
		{ id: 4, name: "Proyects", link: "/Projects" },
		// { id: 5, name: "Contact", link: "/Contact" }
	];

	const [menu, setMenu] = useState(false);

	const handelMenu = () => {
		setMenu(!menu);
	};

	return (
		<nav className="navegador" id="home">
			<div className="Responsive__menu">
				<img
					className={`menu__responsive ${menu ? "active" : ""}`}
					src={Menu}
					alt="Svg Menu"
					onClick={handelMenu}
				/>
			</div>
			<ul className={`menu ${menu ? "menu__active" : ""}`}>
				<img
					src="../../img/close.svg"
					alt="Close svg"
					className={`close__responsive ${menu ? "active__close" : ""}`}
					onClick={handelMenu}
				/>
				{optionsMenu.map((option) => (
					<li className="lista" key={option.id}>
						<Link className="enlaces" to={option.link}>
							{option.name}
						</Link>
					</li>
				))}
			</ul>
			
			<DarkModeSwitch></DarkModeSwitch>
		</nav>
	);
}

export default Nav;
