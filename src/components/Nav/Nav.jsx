import { Link } from "react-router-dom";
import "./nav.css";
import closeMenuResponsive from "../../../public/assets/close.svg";
import openMenuResponsive from "../../../public/assets/menu.svg";
import { useState, useEffect } from "react";
import DarkModeSwitch from "./Swich";
import { optionsMenu } from "../../data/menu";

function Nav() {
  // estados del menu
  const [menu, setMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  //Nav-menu

  // funcion de darkMode

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
      document.body.style.backgroundColor = "#141414";
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
          src={openMenuResponsive}
          alt="Svg Menu"
          onClick={handelMenu}
        />
      </div>
      <a className="icon__nav" href="https://github.com/conradojuliosisnero">
        Conrado Julio
      </a>
      <ul className={`menu ${menu ? "menu__active" : ""}`}>
        <img
          src={closeMenuResponsive}
          alt="Close svg"
          className={`close__responsive ${menu ? "active__close" : ""}`}
          onClick={handelMenu}
        />
        {optionsMenu.map((option) => (
          <li className="lista" key={option.id}>
            <a className="enlaces" href={`#${option.name}`}>
              {option.name}
            </a>
          </li>
        ))}
      </ul>
      {/* <DarkModeSwitch darkMode={darkMode} onChange={handlerDarkMode} /> */}
    </nav>
  );
}

export default Nav;
