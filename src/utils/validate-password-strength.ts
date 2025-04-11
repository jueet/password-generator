type PasswordStrength = {
  level: number;
  color: string;
};

function validatePasswordStrength(password: string): PasswordStrength {
  const lengthLevel = password.length >= 16 ? 3 : password.length >= 12 ? 2 : password.length >= 8 ? 1 : 0;
  const containsNumbers = /\d/.test(password) ? 1 : 0;
  const containsLowercase = /[a-z]/.test(password) ? 1 : 0;
  const containsUppercase = /[A-Z]/.test(password) ? 1 : 0;
  const containsSpecialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password) ? 1 : 0;
  const noRepeatedChars = /(.)\1{2,}/.test(password) ? 0 : 1;

  const level = lengthLevel + containsNumbers + containsLowercase + containsUppercase + containsSpecialChars + noRepeatedChars;

  let color: string;
  switch (true) {
    case level >= 7:
      color = "darkgreen";
      break;
    case level === 6:
      color = "green";
      break;
    case level === 5:
      color = "blue";
      break;
    case level === 4:
      color = "lightblue";
      break;
    case level === 3:
      color = "yellow";
      break;
    case level === 2:
      color = "orange";
      break;
    case level === 1:
      color = "red";
      break;
    default:
      color = "darkred";
  }

  return { level, color };
}

function levelToText(strength: number) {
  switch (strength) {
    case 0:
    case 1:
      return "Very Weak";
    case 2:
      return "Weak";
    case 3:
      return "Medium";
    case 4:
      return "Strong";
    case 5:
      return "Very Strong";
    case 6:
      return "Excellent";
    case 7:
      return "Outstanding";
    case 8:
    default:
      return "Perfect";
  }
}

export { validatePasswordStrength, levelToText };
