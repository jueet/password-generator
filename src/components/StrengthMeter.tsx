import {
  levelToText,
  validatePasswordStrength,
} from "../utils/validate-password-strength";
import styles from "./StrengthMeter.module.css";

interface Props {
  password: string;
}

function StrengthMeter({ password }: Props) {
  const Strength = validatePasswordStrength(password);
  return (
    <div className={styles.container}>
      <p className="uppercase">strength</p>
      <div className={styles.meter}>
        <span className={styles["meter-text"] + " " + "uppercase"}>
          {levelToText(Strength.level)}
        </span>
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className={
              styles.bar +
              " " +
              (Strength.level > index ? styles[Strength.color] : "")
            }
          ></div>
        ))}
      </div>
    </div>
  );
}

export default StrengthMeter;
