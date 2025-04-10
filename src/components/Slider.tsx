import { ChangeEvent, useEffect } from "react";

interface SliderProps {
  length: number;
  onChange: (value: number) => void;
  initial: number;
  min: number;
  max: number;
}

function Slider({ length, onChange, initial, min, max }: SliderProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(parseInt(e.target.value));
    setBackgroundSize(e.target, parseInt(e.target.value));
  };

  const setBackgroundSize = (e: HTMLElement, value: number = initial) => {
    e.style.backgroundSize = ((value - min) * 100) / (max - min) + "% 100%";
  };

  // Run setBackgroundSize when the component is mounted
  useEffect(() => {
    const sliderElement = document.getElementById("length") as HTMLInputElement;
    if (sliderElement) {
      setBackgroundSize(sliderElement, length);
    }
  }, []);

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
