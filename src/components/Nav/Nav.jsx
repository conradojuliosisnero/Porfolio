import { Link } from "react-router-dom";
import "./nav.css";
import { useState, useEffect } from "react";
import DarkModeSwitch from "./Swich";

function Nav() {
  const Menu = "../../img/menu.svg";
  // estados del menu
  const [menu, setMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  //Nav-menu
  const optionsMenu = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "About", link: "/Aboutme" },
    { id: 3, name: "Skills", link: "/Skills" },
    { id: 4, name: "Proyects", link: "/Projects" },
    // { id: 5, name: "Formulario", link: "/Form" },
    // { id: 5, name: "Contact", link: "/Contact" }
  ];

  // duncion de darkMode

  const handlerDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // funcion menu
  const handelMenu = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("darkMode");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      document.body.classList.remove("darkMode");
    }
  }, [darkMode]);

  return (
    <nav className={`navegador ${darkMode ? "active-dark" : ""}`} id="home">
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
      <DarkModeSwitch darkMode={darkMode} onChange={handlerDarkMode} />
    </nav>
  );
}

export default Nav;
