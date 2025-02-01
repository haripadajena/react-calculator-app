import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import styles from "./assets/css/App.module.css";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText == "C") {
      setCalVal("");
    } else if (buttonText == "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };
  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100 container">
        <div
          className={`w-100 p-4 border rounded-lg shadow-lg bg-white text-center ${styles.calculator}`}
        >
          <Display displayValue={calVal}></Display>
          <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
          <hr />
          <h6 className="mb-3">Made by Haripada Jena</h6>
        </div>
      </div>
    </>
  );
}

export default App;
