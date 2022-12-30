interface SliderProps {
  length: number;
  onChange: (value: number) => void;
}

function Slider({ length, onChange }: SliderProps) {
  return (
    <div>
      <div>
        <p>Character Length {length}</p>
      </div>
      <input
        type="range"
        name="passLength"
        id="passLength"
        min="4"
        max="32"
        value={length}
        step="1"
        onChange={(e) => onChange(parseInt(e.target.value))}
      />
    </div>
  );
}

export default Slider;
