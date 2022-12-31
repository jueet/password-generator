import styles from "./StrengthMeter.module.css";

interface Props {
  password: string;
  poolSize: number;
}

const StrengthChecker = ({ password, poolSize }: Props) => {
  const strength = password.length * Math.log2(poolSize);

  if (strength < 50) {
    return StrngthIndicator.WEAK;
  } else if (strength >= 50 && strength < 75) {
    return StrngthIndicator.MEDIUM;
  } else {
    return StrngthIndicator.STRONG;
  }
};

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
    color: "red",
    level: 1,
  },
};

function StrengthMeter(props: Props) {
  const { text, color, level } = StrengthChecker(props);
  const bar = [];
  let unit;

  for (let i = 0; i < 4; i++) {
    unit =
      i < level ? (
        <div className={styles.bar + " " + styles[color]} key={i}></div>
      ) : (
        <div className={styles.bar} key={i}></div>
      );
    bar.push(unit);
  }

  return (
    <div className={styles.container}>
      <p className="uppercase">strength</p>
      <div className={styles.meter}>
        <span className={styles["meter-text"] + " " + "uppercase"}>{text}</span>
        {bar}
      </div>
    </div>
  );
}

export default StrengthMeter;
