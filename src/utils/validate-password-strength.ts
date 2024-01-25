type PasswordStrength = {
  level: number;
  color: string;
};

function validatePasswordStrength(password: string): PasswordStrength {
  let level = 0;
  let color = 'red';

  // Check password length
  if (password.length >= 8) level++;
  if (password.length >= 12) level++;

  // Check if password contains numbers
  if (/\d/.test(password)) level++;

  // Check if password contains lowercase letters
  if (/[a-z]/.test(password)) level++;

  // Check if password contains uppercase letters
  if (/[A-Z]/.test(password)) level++;

  // Check if password contains special characters
  if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password)) level++;

  // Assign color based on strength level
  if (level >= 5) color = 'green';
  else if (level >= 4) color = 'blue';
  else if (level >= 3) color = 'yellow';
  else if (level >= 2) color = 'orange';
  
  return { level, color };
}

export { validatePasswordStrength };
