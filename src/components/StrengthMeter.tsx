import styles from "./StrengthMeter.module.css";

interface Props {
  text: string;
}

const strongPassword = new RegExp(
  "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})"
);
const mediumPassword = new RegExp(
  "((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))  "
);

const StrengthChecker = (PasswordParameter: string) => {
  if (strongPassword.test(PasswordParameter)) {
    return LevelIndicator.STRONG;
  } else if (mediumPassword.test(PasswordParameter)) {
    return LevelIndicator.MEDIUM;
  } else {
    return LevelIndicator.WEAK;
  }
};

const LevelIndicator = {
  STRONG: {
    text: "strong",
    level: 4,
  },
  MEDIUM: {
    text: "medium",
    level: 2,
  },
  WEAK: {
    text: "weak",
    level: 1,
  },
};

function StrengthMeter(props: Props) {
  const strengthBadge = StrengthChecker(props.text);
  const units = [];
  let unit;

  for (let i = 0; i < 4; i++) {
    unit =
      i < strengthBadge.level ? (
        <div className={styles.unit + " " + styles.full} key={i}></div>
      ) : (
        <div className={styles.unit} key={i}></div>
      );
    units.push(unit);
  }

  return (
    <div className={styles.container}>
      <p className="uppercase">strength</p>
      <div className={styles.meter}>
        <span className={styles["meter-text"] + " " + "uppercase"}>
          {strengthBadge.text}
        </span>
        {units}
      </div>
    </div>
  );
}

export default StrengthMeter;
