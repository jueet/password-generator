import { useEffect, useState } from "react";
import "./App.css";
import Checkbox from "./components/Checkbox";
import Slider from "./components/Slider";
import { generatePassword } from "./utils/pass-generator";

function App() {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLenght] = useState(8);
  const [upper, setUpper] = useState(true);
  const [lower, setLower] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [special, setSpecial] = useState(false);

  useEffect(() => {
    setPassword(() =>
      generatePassword(passwordLength, {
        withLower: lower,
        withUpper: upper,
        withNums: numbers,
        withSpecial: special,
      })
    );
  }, []);

  return (
    <div className="App">
      <h1>Password Generator</h1>
      <div className="card">{password}</div>
      <div className="card">
        <Slider length={passwordLength} onChange={setPasswordLenght} />
      </div>
      <div className="list">
        <Checkbox
          id="uppercase"
          text="Include Uppercase Letters"
          isChecked={upper}
          onChange={setUpper}
        />
        <Checkbox
          id="lowercase"
          text="Include Lowercase Letters"
          isChecked={lower}
          onChange={setLower}
        />
        <Checkbox
          id="numbers"
          text="Include Numbers"
          isChecked={numbers}
          onChange={setNumbers}
        />
        <Checkbox
          id="lowercase"
          text="Include Symbols"
          isChecked={special}
          onChange={setSpecial}
        />
      </div>
      <div className="card">
        <button
          onClick={() =>
            setPassword(() =>
              generatePassword(passwordLength, {
                withLower: lower,
                withUpper: upper,
                withNums: numbers,
                withSpecial: special,
              })
            )
          }
        >
          Generate Password
        </button>
      </div>
    </div>
  );
}

export default App;
