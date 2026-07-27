import { useState, useEffect, useRef, useCallback } from 'react'
import './App.css'

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [isNumber, setIsNumber] = useState(false);
  const [isCharacter, setIsCharacter] = useState(false);
  const [copied, setCopied] = useState(false);
  const pass = useRef(null);
  const copyTimeout = useRef(null);

  const passwordFunction = useCallback(() => {
    let passString = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (isNumber) {
      passString += "0123456789";
    }
    if (isCharacter) {
      passString += "!@#$%^&*()_+-=[]{}|;:',.<>?/~`";
    }
    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * passString.length);
      generatedPassword += passString[index];
    }
    setPassword(generatedPassword);
  }, [length, isNumber, isCharacter]);

  useEffect(() => {
    passwordFunction();
  }, [passwordFunction]);

  const copyToClipboard = () => {
    if (!password) return;
    navigator.clipboard.writeText(password);
    setCopied(true);
    if (pass.current) {
      pass.current.select();
    }
    if (copyTimeout.current) {
      clearTimeout(copyTimeout.current);
    }
    copyTimeout.current = setTimeout(() => {
      setCopied(false);
      if (pass.current) {
        pass.current.setSelectionRange(0, 0);
      }
    }, 1500);
  };

  const getPasswordStrength = () => {
    if (!password) return { label: "", color: "", width: "0%" };
    
    let score = 0;
    if (password.length >= 10) score += 1;
    if (password.length >= 15) score += 1;
    if (password.length >= 20) score += 1;
    if (isNumber) score += 1;
    if (isCharacter) score += 1;

    if (score <= 1) {
      return { label: "Weak ", color: "#e63946", width: "33%" };
    } else if (score <= 3) {
      return { label: "Medium ", color: "#fca311", width: "66%" };
    } else {
      return { label: "Strong ", color: "#2a9d8f", width: "100%" };
    }
  };

  const strength = getPasswordStrength();

  return (
    <>
      <div className="background">
        <div className="info">Password Generator</div>
        <div className="panel">

          <div className="passwordBox">
            <input
              type="text"
              ref={pass}
              value={password}
              className="passwordInput"
              placeholder="Generated Password"
              readOnly
            />
            <button className="regenerateButton" onClick={passwordFunction} title="Regenerate Password">
              ↻
            </button>
            <button className="button" onClick={copyToClipboard}>
              {copied ? "copied" : "copy"}
            </button>
          </div>

          {password && (
            <div className="strengthContainer">
              <div className="strengthInfo">
                <span>Strength:</span>
                <span className="strengthLabel" style={{ color: strength.color }}>{strength.label}</span>
              </div>
              <div className="strengthBarBg">
                <div className="strengthBar" style={{ width: strength.width, backgroundColor: strength.color }}></div>
              </div>
            </div>
          )}

          <div className="feature">

            <div className="length">
              <label>Password Length</label>
              <label>{length}</label>
            </div>

            <input
              type="range"
              id="rangeOfLength"
              min="8"
              max="30"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
            />

            <div className="options">

              <div className="option">
                <input
                  type="checkbox"
                  id="numberCheckBox"
                  checked={isNumber}
                  onChange={(e) => setIsNumber(e.target.checked)}
                />
                <label htmlFor="numberCheckBox">
                  Include Numbers
                </label>
              </div>

              <div className="option">
                <input
                  type="checkbox"
                  id="characterCheckBox"
                  checked={isCharacter}
                  onChange={(e) => setIsCharacter(e.target.checked)}
                />
                <label htmlFor="characterCheckBox">
                  Include Special Characters
                </label>
              </div>

            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default App
