interface CheckboxProps {
  isChecked: boolean;
  onChange: (value: boolean) => void;
  text: string;
  id?: string;
}

function Checkbox({ isChecked, onChange, text, id }: CheckboxProps) {
  return (
    <>
      <label htmlFor={id}>
        <input
          type="checkbox"
          name={id}
          id={id}
          checked={isChecked}
          onChange={(e) => onChange(!isChecked)}
        />
        {text}
      </label>
    </>
  );
}

export default Checkbox;
