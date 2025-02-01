import styles from "../assets/css/ButtonsContainer.module.css";
const ButtonsContainer = ({ onButtonClick }) => {
  const buttonNames = [
    "1",
    "2",
    "3",
    "C",
    "4",
    "5",
    "6",
    "+",
    "7",
    "8",
    "9",
    "-",
    "*",
    "/",
    ".",
    "=",
  ];
  const getButtonColor = (char) => {
    if (char === "=") return "bg-success text-white";
    if (["+", "-", "*", "/"].includes(char)) return "bg-dark text-white";
    if (char === "C") return "bg-danger text-white";
    if (char === ".") return "bg-warning text-white";
    return "btn-light";
  };
  return (
    <>
      <div className={styles.buttonsContainer}>
        {buttonNames.map((buttonName) => (
          <button
            key={buttonName}
            className={`btn ${styles.button} ${getButtonColor(buttonName)}`}
            onClick={() => onButtonClick(buttonName)}
          >
            {buttonName}
          </button>
        ))}
      </div>
    </>
  );
};
export default ButtonsContainer;
