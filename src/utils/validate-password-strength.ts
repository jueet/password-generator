type PasswordStrength = {
  level: number;
  color: string;
};

function validatePasswordStrength(password: string): PasswordStrength {
  const lengthLevel = password.length >= 12 ? 2 : password.length >= 8 ? 1 : 0;
  const containsNumbers = /\d/.test(password) ? 1 : 0;
  const containsLowercase = /[a-z]/.test(password) ? 1 : 0;
  const containsUppercase = /[A-Z]/.test(password) ? 1 : 0;
  const containsSpecialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password) ? 1 : 0;

  const level = lengthLevel + containsNumbers + containsLowercase + containsUppercase + containsSpecialChars;

  let color: string;
  switch (level) {
    case 6:
      color = "green";
      break;
    case 5:
      color = "blue";
      break;
    case 4:
      color = "yellow";
      break;
    case 3:
      color = "orange";
      break;
    default:
      color = "red";
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
    case 6:
      return "Very Strong";
    default:
      return "Very Weak";
  }
}

export { validatePasswordStrength, levelToText };
