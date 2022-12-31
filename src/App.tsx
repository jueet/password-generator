import { useEffect, useState } from "react";
import "./App.css";
import Checkbox from "./components/Checkbox";
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
            <svg
              fill="currentColor"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>copy-file</title>
              <g id="Layer_2" data-name="Layer 2">
                <g id="invisible_box" data-name="invisible box">
                  <rect width="48" height="48" fill="none" />
                </g>
                <g id="icons_Q2" data-name="icons Q2">
                  <g>
                    <path d="M18,30H14a2,2,0,0,1,0-4h4a2,2,0,0,1,0,4Z" />
                    <path d="M26,22H14a2,2,0,0,1,0-4H26a2,2,0,0,1,0,4Z" />
                    <path d="M26,14H14a2,2,0,0,1,0-4H26a2,2,0,0,1,0,4Z" />
                    <path d="M42,8H36V4a2,2,0,0,0-2-2H6A2,2,0,0,0,4,4V36a2,2,0,0,0,2,2h4v6a2,2,0,0,0,2,2H42a2,2,0,0,0,2-2V10A2,2,0,0,0,42,8ZM8,6H32V34H8ZM40,42H14V38H34a2,2,0,0,0,2-2V12h4Z" />
                  </g>
                </g>
              </g>
            </svg>
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
