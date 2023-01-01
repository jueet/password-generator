const lowCase = "abcdefghijklmnopqrstuvxyz";
const upCase = "ABCDEFGHIJKLMNOPQRSTUVXYZ";
const Numbers = "0123456789";
const SpecialChar = "£$&()*+[]@#^-_!?";

interface IOptions {
  withLower: boolean;
  withUpper?: boolean;
  withNums?: boolean;
  withSpecial?: boolean;
}

function generatePassword(
  length: Number = 8,
  options: IOptions
): [string, number] {
  if (Object.entries(options).every(([, value]) => !value)) return ["Empty", 0];

  const CharGroup = createDict(options);
  const CharGroupLenght = CharGroup.length;
  let password = "";
  let index = 0;
  for (let i = 0; i < length; i++) {
    index = Math.floor(Math.random() * CharGroupLenght);
    password += CharGroup[index];
  }
  return [password, CharGroupLenght];
}

function createDict(options: IOptions): String {
  let dict = "";
  if (options.withLower) dict += lowCase;
  if (options.withUpper) dict += upCase;
  if (options.withNums) dict += Numbers;
  if (options.withSpecial) dict += SpecialChar;
  return dict;
}

export { generatePassword };
