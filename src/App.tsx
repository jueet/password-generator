import { useEffect, useState } from "react";
import "./App.css";
import Checkbox from "./components/Checkbox";
import CopyFile from "./components/CopyFile";
import Slider from "./components/Slider";
import StrengthMeter from "./components/StrengthMeter";
import copyToClipboard from "./utils/copy-clipboard";
import { generatePassword } from "./utils/pass-generator";

function App() {
  const [title, setTitle] = useState("Password Generator");
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLenght] = useState(8);
  const [dictSize, setDictSize] = useState(0);
  const [upper, setUpper] = useState(true);
  const [lower, setLower] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [special, setSpecial] = useState(false);

  const handleGeneratePassword = () => {
    let [pass, dictSize] = generatePassword(passwordLength, {
      withLower: lower,
      withUpper: upper,
      withNums: numbers,
      withSpecial: special,
    });
    setPassword(() => pass);
    setDictSize(() => dictSize);
  };

  const handleCopyToClipboard = () => {
    let tmp = "";
    copyToClipboard(password);
    setTitle((prev) => {
      tmp = prev;
      return "Password Copied!";
    });
    setTimeout(() => setTitle(() => tmp), 1000);
  };

  useEffect(() => {
    handleGeneratePassword();
  }, [passwordLength, lower, upper, numbers, special]);

  return (
    <div className="App">
      <h1>{title}</h1>
      <div className="card pass">
        <div
          className={password === "Empty" ? "pass-text muted" : "pass-text"}
          id="password"
        >
          {password}
        </div>
        <div>
          <a onClick={handleCopyToClipboard} className="copy-btn">
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
        <div>
          <StrengthMeter password={password} />
        </div>
        <button className="btn" onClick={() => handleGeneratePassword()}>
          Generate
        </button>
      </div>
    </div>
  );
}

export default App;
