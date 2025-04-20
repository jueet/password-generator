interface Props {
  password: string;
}

function StyledPassword({ password }: Props) {
  const getCharStyle = (char: string) => {
    if (/[0-9]/.test(char)) {
      return { color: 'var(--neon-lime)' };
    }
    if (/[!@#$%^&£*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(char)) {
      return { color: 'var(--neon-cyan' };
    }
    return {color: 'var(--neon-purple)'}; // Default color for other chars
  };

  return (
    <div>
      {password.split('').map((char, index) => (
        <span key={index} style={getCharStyle(char)}>
          {char}
        </span>
      ))}
    </div>
  );
}

export default StyledPassword;