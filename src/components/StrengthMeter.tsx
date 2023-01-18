import styles from "./StrengthMeter.module.css";

interface Props {
  password: string;
  poolSize: number;
}

const StrngthIndicator = {
  STRONG: {
    text: "strong",
    color: "green",
    level: 4,
  },
  MEDIUM: {
    text: "medium",
    color: "yellow",
    level: 3,
  },
  WEAK: {
    text: "weak",
    color: "orange",
    level: 2,
  },
  TOWEAK: {
    text: "to weak",
    color: "red",
    level: 1,
  },
};

const StrengthChecker = ({ password, poolSize }: Props) => {
  const strength = password.length * Math.log2(poolSize);
  if (strength < 35) {
    return StrngthIndicator.TOWEAK;
  } else if (strength < 50) {
    return StrngthIndicator.WEAK;
  } else if (strength >= 50 && strength < 75) {
    return StrngthIndicator.MEDIUM;
  } else {
    return StrngthIndicator.STRONG;
  }
};

function StrengthMeter(props: Props) {
  const { text, color, level } = StrengthChecker(props);
  return (
    <div className={styles.container}>
      <p className="uppercase">strength</p>
      <div className={styles.meter}>
        <span className={styles["meter-text"] + " " + "uppercase"}>{text}</span>
        <div
          className={styles.bar + " " + (level > 0 ? styles[color] : "")}
        ></div>
        <div
          className={styles.bar + " " + (level > 1 ? styles[color] : "")}
        ></div>
        <div
          className={styles.bar + " " + (level > 2 ? styles[color] : "")}
        ></div>
        <div
          className={styles.bar + " " + (level > 3 ? styles[color] : "")}
        ></div>
      </div>
    </div>
  );
}

export default StrengthMeter;
