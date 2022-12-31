import React, { useEffect, useReducer } from "react";

interface SliderProps {
  length: number;
  onChange: (value: number) => void;
  initial: number;
  min: number;
  max: number;
}

function Slider({ length, onChange, initial, min, max }: SliderProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(parseInt(e.target.value));
    setBackgroundSize(e.target, parseInt(e.target.value));
  };

  const setBackgroundSize = (e: HTMLElement, value: number = initial) => {
    e.style.backgroundSize = ((value - min) * 100) / (max - min) + "% 100%";
  };

  return (
    <div className="length-selector">
      <div className="char-length">
        <p>Character Length</p>
        <p className="font-xl">{length}</p>
      </div>
      <input
        type="range"
        name="length"
        id="length"
        min={min}
        max={max}
        value={length}
        step="1"
        onChange={handleChange}
      />
    </div>
  );
}

export default Slider;
