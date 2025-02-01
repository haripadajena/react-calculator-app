import styles from "../assets/css/Display.module.css";
const Display = ({ displayValue }) => {
  return (
    <>
      <input
        type="text"
        name=""
        className={`form-control ${styles.display}`}
        value={displayValue}
        readOnly
      />
    </>
  );
};
export default Display;
