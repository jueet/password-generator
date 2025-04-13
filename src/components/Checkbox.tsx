import styles from "@styles/Checkbox.module.css";

interface CheckboxProps {
  isChecked: boolean;
  onChange: (value: boolean) => void;
  text: string;
  id?: string;
}

function Checkbox({ isChecked, onChange, text, id }: CheckboxProps) {
  return (
    <>
      <label htmlFor={id} className={styles.container}>
        <input
          type="checkbox"
          name={id}
          id={id}
          checked={isChecked}
          onChange={() => onChange(!isChecked)}
        />
        <span className={styles.checkmark}></span>
        {text}
      </label>
    </>
  );
}

export default Checkbox;
