import styles from "./swich.module.css";

function DarkModeSwitch({ darkmode, onChange }) {

  return (
    <label className={styles.ToggleSwitch}>
      <input
        type="checkbox"
        checked={darkmode}
        onChange={onChange}
        className={styles.Input}
      />
      <span className={styles.Slider}></span>
    </label>
  );
}

export default DarkModeSwitch;
