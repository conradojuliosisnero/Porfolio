import styles from "./swich.module.css";
import { useState } from "react";

function DarkModeSwitch() {
  //estado de modo oscuro 
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <label className={styles.ToggleSwitch}>
      <input
        type="checkbox"
        checked={isDarkMode}
        onChange={handleModeToggle}
        className={styles.Input}
      />
      <span className={styles.Slider}></span>
    </label>
  );
}

export default DarkModeSwitch;
