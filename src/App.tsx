import { useEffect, useState } from "react";
import "./App.css";
import Checkbox from "./components/Checkbox";
import CopyFile from "./components/CopyFile";
import Slider from "./components/Slider";
import copyToClipboard from "./utils/copy-clipboard";
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
      <div className="card pass">
        <div className="pass-text" id="password">
          {password}
        </div>
        <div>
          <a onClick={copyToClipboard} className="copy-btn">
            <CopyFile />
          </a>
        </div>
      </div>
      <div className="card">
        <Slider
          length={passwordLength}
          onChange={setPasswordLenght}
          initial={passwordLength}
          min={4}
          max={16}
        />

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
            id="special"
            text="Include Symbols"
            isChecked={special}
            onChange={setSpecial}
          />
        </div>
        <button
          className="btn"
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
          Generate
        </button>
      </div>
    </div>
  );
}

export default App;
